<template>
  <div>
    <div class="hero">
      <h1 class="hero__title">CYCLE CODE. CYCLE CODE. <span class="hero__title--color">CYCLE CODE.</span> CYCLE CODE. CYCLE CODE. CYCLE CODE.</h1>
    </div>
    <div class="content">
      <ArticleList />
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.hero {
  padding: 8rem 2rem;
  border-bottom: 3px solid #333;
}

.hero__title {
  font-size: 8rem;
  margin: 0;
  max-width: 1400px;
  word-break: break-all;
}

.hero__title--color {
  color: rgb(98, 0, 255);
}

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
</style>