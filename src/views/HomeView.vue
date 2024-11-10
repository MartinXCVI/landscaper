<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import HomeIntro from '@/views/HomeViews/HomeIntro.vue';
  import HomeSlider from '@/views/HomeViews/HomeSlider.vue';
  import HomeServices from './HomeViews/HomeServices.vue';
  import HomeContact from './HomeViews/HomeContact.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <HeroHeader class="home-bg">
    <h1 class="header-title">Company Name</h1>
    <h2 class="header-subtitle">Effective Design</h2>
    <a href="#home-landing" class="header-btn button btn-first">Get started</a>
  </HeroHeader>
  <HomeIntro />
  <HomeSlider />
  <HomeServices />
  <HomeContact />
  <Footer />
</template>