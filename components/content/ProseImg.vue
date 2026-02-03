<template>
  <NuxtImg 
    :src="src" 
    :alt="alt" 
    :class="$attrs.class"
    loading="lazy"
    format="webp"
    quality="80"
    sizes="sm:100vw md:50vw lg:800px"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  }
})
</script>
