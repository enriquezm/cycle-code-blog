import { d as defineEventHandler, g as getMethod, c as createError } from '../../nitro/nitro.mjs';
import { promises } from 'fs';
import { join } from 'path';
import formidable from 'formidable';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const uploadImages_post = defineEventHandler(async (event) => {
  if (getMethod(event) !== "POST") {
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed"
    });
  }
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true
    });
    const [fields, files] = await form.parse(event.node.req);
    const articleName = Array.isArray(fields.articleName) ? fields.articleName[0] : fields.articleName;
    const imageFiles = Array.isArray(files.images) ? files.images : [files.images];
    if (!articleName || !imageFiles.length) {
      throw createError({
        statusCode: 400,
        statusMessage: "Missing article name or images"
      });
    }
    const uploadDir = join(process.cwd(), "public", "images", "articles", articleName);
    await promises.mkdir(uploadDir, { recursive: true });
    const uploadedFiles = [];
    for (const file of imageFiles) {
      if (file && file.filepath) {
        const fileName = file.originalFilename || `image-${Date.now()}`;
        const targetPath = join(uploadDir, fileName);
        await promises.copyFile(file.filepath, targetPath);
        await promises.unlink(file.filepath);
        uploadedFiles.push(fileName);
      }
    }
    return {
      success: true,
      message: `Uploaded ${uploadedFiles.length} images to ${articleName}`,
      files: uploadedFiles
    };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});

export { uploadImages_post as default };
//# sourceMappingURL=upload-images.post.mjs.map
