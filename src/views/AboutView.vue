<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import AboutIntro from './AboutViews/AboutIntro.vue';
  import Footer from '@/components/Footer.vue';
</script>

<template>
  <HeroHeader class="about-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">About Us</h1>
  </HeroHeader>
  <AboutIntro />
  <Footer />
</template>