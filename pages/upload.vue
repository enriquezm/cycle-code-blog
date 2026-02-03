<template>
  <div class="upload-tool">
    <h1>Article Image Upload</h1>
    
    <form @submit.prevent="uploadImages" class="upload-form">
      <div class="form-group">
        <label for="articleName">Article Folder Name:</label>
        <input 
          v-model="articleName" 
          type="text" 
          id="articleName" 
          placeholder="e.g., january-2026"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="images">Select Images:</label>
        <input 
          @change="handleFileSelect"
          type="file" 
          id="images" 
          multiple 
          accept="image/*"
          required
        />
      </div>
      
      <button type="submit" :disabled="uploading">
        {{ uploading ? 'Uploading...' : 'Upload Images' }}
      </button>
    </form>
    
    <div v-if="message" class="message" :class="messageType">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
const articleName = ref('')
const selectedFiles = ref([])
const uploading = ref(false)
const message = ref('')
const messageType = ref('')

const handleFileSelect = (event) => {
  selectedFiles.value = Array.from(event.target.files)
}

const uploadImages = async () => {
  if (!articleName.value || selectedFiles.value.length === 0) return
  
  uploading.value = true
  message.value = ''
  
  try {
    const formData = new FormData()
    formData.append('articleName', articleName.value)
    
    selectedFiles.value.forEach((file) => {
      formData.append('images', file)
    })
    
    const response = await $fetch('/api/upload-images', {
      method: 'POST',
      body: formData
    })
    
    message.value = `Successfully uploaded ${selectedFiles.value.length} images to ${articleName.value}`
    messageType.value = 'success'
    
    // Reset form
    articleName.value = ''
    selectedFiles.value = []
    document.getElementById('images').value = ''
    
  } catch (error) {
    message.value = 'Upload failed: ' + error.message
    messageType.value = 'error'
  } finally {
    uploading.value = false
  }
}
</script>

<style scoped>
.upload-tool {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border: 1px solid #ddd;
}

.upload-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 4px;
}

.success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>