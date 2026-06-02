const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = 'D:/Lambordi/GITHUB/AMAL/csr-research-website/foto baru';
const targetDir = 'D:/Lambordi/GITHUB/AMAL/csr-research-website/public/images';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const sanitize = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-.]+|[-.]+$/g, '');
};

async function convert() {
  for (const file of files) {
    const srcPath = path.join(sourceDir, file);
    const stat = fs.statSync(srcPath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      console.log(`Skip ${file} - unsupported format`);
      continue;
    }

    const baseName = path.basename(file, path.extname(file));
    const safeName = sanitize(baseName);
    const newName = `${safeName}.webp`;
    const destPath = path.join(targetDir, newName);

    if (fs.existsSync(destPath)) {
      console.log(`Skip ${file} - ${newName} already exists`);
      continue;
    }

    try {
      await sharp(srcPath)
        .webp({ quality: 80 })
        .toFile(destPath);
      const srcSize = (stat.size / 1024).toFixed(0);
      const dstSize = (fs.statSync(destPath).size / 1024).toFixed(0);
      console.log(`OK: ${file} -> ${newName} (${srcSize}KB -> ${dstSize}KB)`);
    } catch (err) {
      console.error(`FAIL: ${file}: ${err.message}`);
    }
  }
  console.log('\nDone!');
}

convert();
