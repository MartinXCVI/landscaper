<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import Logo from '@/components/Logo.vue';
</script>

<template>
  <HeroHeader class="projects-bg">
    <Header>
      <Logo />
      <Navbar />
    </Header>
  </HeroHeader>
  
  <h1>Hello from Projects</h1>
</template>