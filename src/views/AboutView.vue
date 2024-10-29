<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <HeroHeader class="about-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">About Us</h1>
  </HeroHeader>
  
  <h1>Hello from About</h1>
</template>