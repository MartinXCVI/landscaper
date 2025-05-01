<template>
  <section class="slider-section over-x">
    <article class="slider-article" data-aos="fade-right" data-aos-duration="2000">
      <h2 class="subtitle capital">Elevating landscapes with artistry and intention</h2>
      <div class="line"></div>
      <p>At Green Horizon Landscaping, we design and build outdoor spaces that are both beautiful and practical. From elegant patios and custom walkways to vibrant gardens and low-maintenance lawns, we shape landscapes that match your lifestyle and vision.</p>
      <p>Our expert team combines creativity with craftsmanship to deliver lasting results. Whether you’re starting fresh or upgrading an existing space, we work closely with you to bring your ideas to life.</p>
      <p>Explore our cube slider to see real examples of our work — a visual showcase of projects that blend natural beauty with thoughtful design.</p>
    </article>
    <section class="slider-container" data-aos="fade-left" data-aos-duration="2000">
      <div v-if="!isMobile" ref="cubeRef" class="slider" :style="{ transform: cubeTransform }">
        <div class="face front" :style="faceStyle(0)"></div>
        <div class="face right" :style="faceStyle(1)"></div>
        <div class="face back" :style="faceStyle(2)"></div>
        <div class="face left" :style="faceStyle(3)"></div>
      </div>

      <div v-else class="mobile-slider">
        <img :src="images[currentIndex]" :alt="'Slide ' + (currentIndex + 1)" />
      </div>
      <!-- <br/> -->
      <div class="slider-buttons">
        <button class="slider-btn" @click="prevSlide">Prev</button>
        <button class="slider-btn" @click="nextSlide">Next</button>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const images = [
  '/images/slider-1.jpg',
  '/images/slider-2.jpg',
  '/images/slider-3.jpg',
  '/images/slider-4.jpg',
]

const currentIndex = ref(0)
const cubeRef = ref(null)
const isMobile = ref(false)

const cubeTransform = computed(() =>
  `perspective(1000px) rotateY(${-currentIndex.value * 90}deg)`
)

function faceStyle(index) {
  return {
    backgroundImage: `url('${images[index]}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

function handleResize() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style>
.slider-section {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  background: linear-gradient(145deg, #354e33aa, #efefef, #d3d3d3, #efefef, #354e33aa);
}

.slider-article {
  flex: 1 1 320px;
  gap: 0.75rem;
  .line {
    width: 100%;
    border-bottom: 3px solid #354e33;
    margin-bottom: 1rem;
  }
}

.slider-container {
  flex: 1 1 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider {
  width: 320px;
  height: 320px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  backface-visibility: hidden;
  border: 2px solid #fff;
}

/* Cube faces positioning */
.front  { transform: rotateY(0deg) translateZ(150px); }
.right  { transform: rotateY(90deg) translateZ(150px); }
.back   { transform: rotateY(180deg) translateZ(150px); }
.left   { transform: rotateY(-90deg) translateZ(150px); }

.mobile-slider img {
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #aaa;
}

.slider-buttons {
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
}

.slider-btn {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: bold;
  text-transform: uppercase;
  background: #354e33;
  color: white;
  transition: 0.3s;
}

.slider-btn:hover {
  background-color: #487c44;
  color: #e67171;
}

@media (max-width: 768px) {

  .slider-section {
    flex-direction: column;
    /* text-align: center; */
  }

  .slider-article {
    margin-bottom: 1rem;
  }
}


</style>