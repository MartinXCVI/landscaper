<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <HeroHeader class="services-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">Check Our Services</h1>
  </HeroHeader>
  
  <Footer />
</template>