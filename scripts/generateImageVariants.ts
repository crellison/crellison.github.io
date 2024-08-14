import sharp from '$sharp';
import { resolve as resolvePath } from '$path';
import { DOCS_IMAGES_DIR, SRC_IMAGES_DIR } from '../src/paths.ts';

// based roughly on a geometric progression of 5/4 for more standard image size jumps
const SIZES = [500, 625, 775, 950, 1200, 1500, 1900, 2400];
const imageIterator = Deno.readDirSync(SRC_IMAGES_DIR);

for (const builtImage of Deno.readDirSync(DOCS_IMAGES_DIR)) {
  Deno.removeSync(resolvePath(DOCS_IMAGES_DIR, builtImage.name));
}

for (const image of imageIterator) {
  if (!image.isFile) {
    throw new Error(
      `Expected only files in ${SRC_IMAGES_DIR}, but found: ${image.name}`
    );
  }

  const imageBaseName = image.name.replace(/\.[a-z]+$/, '');

  const original = await sharp(resolvePath(SRC_IMAGES_DIR, image.name));

  await Promise.all(
    SIZES.map((imgWidth) =>
      original
        .clone()
        .resize(imgWidth)
        .jpeg({ progressive: true, mozjpeg: true })
        .toFile(
          resolvePath(DOCS_IMAGES_DIR, `${imageBaseName}-${imgWidth}w.jpeg`)
        )
    )
  );
}
