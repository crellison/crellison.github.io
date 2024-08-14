import { dirname, fromFileUrl, resolve } from '$path';

export const SRC_DIR = dirname(fromFileUrl(import.meta.url));

export const SRC_IMAGES_DIR = resolve(SRC_DIR, 'images');
export const DOCS_DIR = resolve(SRC_DIR, '..', 'docs');
export const DOCS_IMAGES_DIR = resolve(DOCS_DIR, 'images');
