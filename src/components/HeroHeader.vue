<script setup>
import Navbar from './Navbar.vue';
import Ham from './Ham.vue';
import Header from './Header.vue';
import Hide from './Hide.vue';
</script>

<template>
  <section class="hero-header">
    <Header>
      <Ham @click="isNavVisible = !isNavVisible" />
      <Navbar :class="{'show-navbar':isNavVisible}">
        <Hide @click="isNavVisible = !isNavVisible" />
      </Navbar>
    </Header>
    <slot></slot>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isNavVisible: false, // Starts with the nav list hidden
      }
    }
  }
</script>