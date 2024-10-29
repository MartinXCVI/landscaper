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
  </HeroHeader>
  
  <h1>Hello from About</h1>
</template>