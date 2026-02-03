<template>
  <div>
    <header>
      <nav class="nav">
        <NuxtLink to="/">CYCLE CODE.</NuxtLink>
      </nav>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <p>Doesn't get easier. You just get faster.</p>
    </footer>
  </div>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
}

.nav a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
}

.nav a:hover {
  animation: glitch 0.3s ease-in-out;
}

.main {
  padding: 0;
}

.footer {
  text-align: center;
  padding: 2rem;
  border-top: 1px solid #eee;
  color: #666;
  font-size: 0.9rem;
}

.footer p {
  margin: 0;
}
</style>