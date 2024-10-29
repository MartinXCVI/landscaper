<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <HeroHeader class="home-bg">
    <Header>
      <Navbar />
      <h1 class="header-title">Company Name</h1>
      <h2 class="header-subtitle">Effective Design</h2>
      <a href="#" class="header-btn button">Get started</a>
    </Header>
  </HeroHeader>
  
</template>