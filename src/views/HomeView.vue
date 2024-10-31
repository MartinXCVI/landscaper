<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import HomeIntro from '@/views/HomeViews/HomeIntro.vue';
</script>

<template>
  <HeroHeader class="home-bg">
    <h1 class="header-title">Company Name</h1>
    <h2 class="header-subtitle">Effective Design</h2>
    <a href="#home-landing" class="header-btn button">Get started</a>
  </HeroHeader>
  <HomeIntro />
  
</template>