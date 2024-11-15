<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import ContactInfo from './ContactViews/ContactInfo.vue';
  import ContactForm from './ContactViews/ContactForm.vue';
</script>

<template>
  <HeroHeader class="contact-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">Contact Us</h1>
  </HeroHeader>
  <section class="contact-wrapper wrapper over-x">
    <ContactInfo />
    <ContactForm />
  </section>
  <Footer />
</template>