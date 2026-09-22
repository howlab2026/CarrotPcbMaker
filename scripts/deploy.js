import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'client', 'dist');

console.log('🚀 Starting Carrot PCB Maker deployment to GitHub Pages...');

// 1. Build client
console.log('📦 Building client bundle...');
execSync('npm --prefix client run build', { cwd: rootDir, stdio: 'inherit' });

// Ensure 404.html and .nojekyll exist
fs.copyFileSync(path.join(distDir, 'index.html'), path.join(distDir, '404.html'));
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');

// 2. Deploy dist to gh-pages branch
console.log('📤 Pushing dist to gh-pages branch...');
const commands = [
  'git init',
  'git config user.name "howlab2026"',
  'git config user.email "howlab2026@users.noreply.github.com"',
  'git checkout -b gh-pages',
  'git add -A',
  'git commit -m "deploy: update GitHub Pages release"',
  'git remote add origin https://github.com/howlab2026/CarrotPcbMaker.git',
  'git push -u -f origin gh-pages'
];

try {
  for (const cmd of commands) {
    execSync(cmd, { cwd: distDir, stdio: 'inherit' });
  }
  console.log('✅ Deployment successful! Live URL: https://howlab2026.github.io/CarrotPcbMaker/');
} catch (err) {
  console.error('❌ Deployment error:', err.message);
  process.exit(1);
} finally {
  // Clean up nested .git folder in dist
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }
}
