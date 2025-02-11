import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const ROOT_DIR = resolve(__dirname, '..');

export const SRC_IMAGES_DIR = resolve(ROOT_DIR, 'src', 'images');
export const PUBLIC_DIR = resolve(ROOT_DIR, 'public');
export const PUBLIC_IMAGES_DIR = resolve(PUBLIC_DIR, 'images');
