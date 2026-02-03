<template>
  <section class="cards">
    <div v-for="article in articles" :key="article._path" class="card">
      <img :src="article.image || '/images/shift-bike.png'" :alt="article.title" class="card-image" />
      <NuxtLink :to="article._path" class="card-link">{{ article.title }}</NuxtLink>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useAsyncData('articles', () => 
  queryContent('/articles').sort({ date: 1 }).find()
)
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 0 2rem;
}

.card {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border-bottom: 3px solid #333;
  background: white;
}

.card-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.card-link {
  font-size: 72px;
  font-weight: bold;
  color: black;
  text-decoration: none;
}

.card-link:hover {
  animation: glitch 0.3s ease-in-out;
}

@keyframes glitch {
  0% { color: black; }
  25% { color: #8a2be2; transform: translateX(2px); }
  50% { color: #00ff00; transform: translateX(-2px); }
  75% { color: #8a2be2; transform: translateX(1px); }
  100% { color: black; transform: translateX(0); }
}
</style>