<template>
  <div class="test-page">
    <h1>Responsive Tokens Test</h1>
    <p class="info">Resize your browser window to see the responsive tokens in action.</p>
    <p class="info">Mobile: 0-767px, Tablet: 768-1023px, Desktop: 1024px+</p>
    
    <div class="test-section">
      <h2>Typography Hierarchy Test</h2>
      <div class="hero-test">Hero Title (var(--font-size-hero))</div>
      <div class="h1-test">H1 Heading (var(--font-size-h1))</div>
      <div class="h2-test">H2 Heading (var(--font-size-h2))</div>
      <div class="h3-test">H3 Heading (var(--font-size-h3))</div>
      <div class="body-test">Body Text (var(--font-size-body))</div>
      <div class="small-test">Small Text (var(--font-size-small))</div>
    </div>
    
    <div class="test-section">
      <h2>Spacing Tokens Test</h2>
      <div class="spacing-demo">
        <div class="spacing-box" :style="{ padding: 'var(--spacing-xs)' }">xs</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-sm)' }">sm</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-md)' }">md</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-lg)' }">lg</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-xl)' }">xl</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-2xl)' }">2xl</div>
        <div class="spacing-box" :style="{ padding: 'var(--spacing-3xl)' }">3xl</div>
      </div>
    </div>
    
    <div class="test-section">
      <h2>Computed Values</h2>
      <p><strong>Viewport:</strong> {{ viewportWidth }}px ({{ breakpoint }})</p>
      <ul>
        <li v-for="token in tokens" :key="token.name">
          <code>{{ token.name }}</code>: {{ token.value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const viewportWidth = ref(0);
const breakpoint = ref('mobile');
const tokens = ref([]);

const tokenNames = [
  '--font-size-hero',
  '--font-size-h1',
  '--font-size-h2',
  '--font-size-h3',
  '--font-size-body',
  '--font-size-small',
  '--spacing-xs',
  '--spacing-sm',
  '--spacing-md',
  '--spacing-lg',
  '--spacing-xl',
  '--spacing-2xl',
  '--spacing-3xl'
];

function updateValues() {
  if (process.client) {
    viewportWidth.value = window.innerWidth;
    
    if (window.innerWidth >= 1024) {
      breakpoint.value = 'desktop';
    } else if (window.innerWidth >= 768) {
      breakpoint.value = 'tablet';
    } else {
      breakpoint.value = 'mobile';
    }
    
    const computedStyle = getComputedStyle(document.documentElement);
    tokens.value = tokenNames.map(name => ({
      name,
      value: computedStyle.getPropertyValue(name).trim() || 'not defined'
    }));
  }
}

onMounted(() => {
  updateValues();
  window.addEventListener('resize', updateValues);
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', updateValues);
  }
});
</script>

<style scoped>
.test-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info {
  background: #f0f0f0;
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.test-section {
  margin-bottom: 3rem;
  padding: 2rem;
  border: 2px solid #333;
}

.hero-test {
  font-size: var(--font-size-hero);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

.h1-test {
  font-size: var(--font-size-h1);
  margin: 0 0 1rem 0;
}

.h2-test {
  font-size: var(--font-size-h2);
  margin: 0 0 1rem 0;
}

.h3-test {
  font-size: var(--font-size-h3);
  margin: 0 0 1rem 0;
}

.body-test {
  font-size: var(--font-size-body);
  margin: 0 0 1rem 0;
}

.small-test {
  font-size: var(--font-size-small);
  margin: 0;
}

code {
  background: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.spacing-demo {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spacing-box {
  background: #e0e0e0;
  border: 2px solid #999;
  display: inline-block;
  font-weight: bold;
}
</style>
