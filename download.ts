import https from 'https';
import fs from 'fs';
import path from 'path';

const downloadDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(downloadDir)) fs.mkdirSync(downloadDir, { recursive: true });

function downloadFile(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadFile(res.headers.location!, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function fetchRepoDir(repo: string, dirPath: string, ref: string, localSubDir: string) {
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${encodeURIComponent(dirPath)}?ref=${ref}`;
  return new Promise((resolve, reject) => {
    https.get(apiUrl, { headers: { 'User-Agent': 'Node.js' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const files = JSON.parse(data);
          if (!Array.isArray(files)) {
             console.log('Not an array:', files);
             return resolve([]);
          }
          const targetDir = path.join(downloadDir, localSubDir);
          if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
          
          const downloadedPaths = [];
          for (const file of files) {
            if (file.type === 'file' && file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
              const dest = path.join(targetDir, file.name);
              console.log(`Downloading ${file.download_url} to ${dest}`);
              await downloadFile(file.download_url, dest);
              downloadedPaths.push(`/images/${localSubDir}/${file.name}`);
            }
          }
          resolve(downloadedPaths);
        } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function main() {
  try {
    const tudigong = await fetchRepoDir('AYueruLi/My-web', '土地公', '00967f2472e844eebf38297bc26ae9d1fde67842', 'tudigong');
    console.log('Tudigong images:', tudigong);
    const yunhu = await fetchRepoDir('AYueruLi/My-web', '云胡', '00967f2472e844eebf38297bc26ae9d1fde67842', 'yunhu');
    console.log('Yunhu images:', yunhu);
    const design = await fetchRepoDir('AYueruLi/My-web', '设计', '00967f2472e844eebf38297bc26ae9d1fde67842', 'design');
    console.log('Design images:', design);
    const music = await fetchRepoDir('AYueruLi/My-web', '唱歌', '00967f2472e844eebf38297bc26ae9d1fde67842', 'music');
    console.log('Music images:', music);
  } catch (e) {
    console.error(e);
  }
}
main();
