import sharp from 'sharp';
import { resolve as resolvePath } from 'node:path';
import { readdirSync, rmSync, lstatSync } from 'node:fs';
import { PUBLIC_IMAGES_DIR, SRC_IMAGES_DIR } from './paths.ts';

async function generateImageVariants() {
  // based roughly on a geometric progression of 5/4 for more standard image size jumps
  const SIZES = [500, 625, 775, 950, 1200, 1500, 1900, 2400];
  const imageIterator = readdirSync(SRC_IMAGES_DIR);

  for (const builtImage of readdirSync(PUBLIC_IMAGES_DIR)) {
    rmSync(resolvePath(PUBLIC_IMAGES_DIR, builtImage));
  }

  for (const image of imageIterator) {
    if (!lstatSync(resolvePath(SRC_IMAGES_DIR, image)).isFile()) {
      throw new Error(
        `Expected only files in ${SRC_IMAGES_DIR}, but found: ${image}`
      );
    }

    const imageBaseName = image.replace(/\.[a-z]+$/, '');

    const original = await sharp(resolvePath(SRC_IMAGES_DIR, image));

    await Promise.all(
      SIZES.map((imgWidth) =>
        original
          .clone()
          .resize(imgWidth)
          // .jpeg({ progressive: true, mozjpeg: true })
          .toFile(
            resolvePath(PUBLIC_IMAGES_DIR, `${imageBaseName}-${imgWidth}w.jpeg`)
          )
      )
    );
  }
}

generateImageVariants();
