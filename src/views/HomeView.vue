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
    <h1 class="header-title" data-aos="fade-down" data-aos-duration="1500">Green Horizon Landscaping</h1>
    <h2 class="header-subtitle" data-aos="zoom-in-out" data-aos-duration="1500">Effective Design For Your Comfort</h2>
    <div class="button-wrapper" data-aos="fade-up" data-aos-duration="1500">
      <a 
      href="#home-landing" 
      class="button btn-first" 
      >
        Get started
      </a>
      <a
        href="/contact"
        class="button btn-white"
      >
        Contact
      </a>
    </div>
  </HeroHeader>
  <HomeIntro />
  <HomeSlider />
  <HomeServices />
  <HomeContact />
  <Footer />
</template>