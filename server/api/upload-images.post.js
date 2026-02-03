import { promises as fs } from 'fs'
import { join } from 'path'
import formidable from 'formidable'

export default defineEventHandler(async (event) => {
  if (getMethod(event) !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true
    })

    const [fields, files] = await form.parse(event.node.req)
    const articleName = Array.isArray(fields.articleName) ? fields.articleName[0] : fields.articleName
    const imageFiles = Array.isArray(files.images) ? files.images : [files.images]

    if (!articleName || !imageFiles.length) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing article name or images'
      })
    }

    // Create article directory
    const uploadDir = join(process.cwd(), 'public', 'images', 'articles', articleName)
    await fs.mkdir(uploadDir, { recursive: true })

    // Move uploaded files
    const uploadedFiles = []
    for (const file of imageFiles) {
      if (file && file.filepath) {
        const fileName = file.originalFilename || `image-${Date.now()}`
        const targetPath = join(uploadDir, fileName)
        
        await fs.copyFile(file.filepath, targetPath)
        await fs.unlink(file.filepath) // Clean up temp file
        
        uploadedFiles.push(fileName)
      }
    }

    return {
      success: true,
      message: `Uploaded ${uploadedFiles.length} images to ${articleName}`,
      files: uploadedFiles
    }

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }
})