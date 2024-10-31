<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import HomeIntro from '@/views/HomeViews/HomeIntro.vue';
</script>

<template>
  <HeroHeader class="home-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">Company Name</h1>
    <h2 class="header-subtitle">Effective Design</h2>
    <a href="#home-landing" class="header-btn button">Get started</a>
  </HeroHeader>
  <HomeIntro />
  
</template>