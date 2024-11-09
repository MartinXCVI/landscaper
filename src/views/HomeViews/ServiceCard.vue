<script setup>
  const props = defineProps(
    {
      icon: String,
      title: String,
      text: String
    }
  )
</script>

<template>
  <div class="home-service-card">
    <i class="icon" :class="icon"></i>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<style>
  
  .home-service-card {
    width: 27%;
    min-width: 27%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    border: 2px solid #354e33;
    border-left: 6px solid #354e33;
    background-color: #fdfdfd;
    border-radius: 1rem;
    padding: 1.5rem;
    &::after {
      width: 100%;
      height: 100%;
      content: '';
      position: absolute;
      top: 5%;
      left: -5%;
      z-index: -5;
      border: 2px solid #354e33;
      border-left: 5px solid #354e33;
      border-radius: 1rem;
    }
    .icon {
      color: #354e33;
      position: absolute;
      top: 7%;
      right: 7%;
      font-size: 2rem;
    }
  }

  @media all and (min-width: 576px) and (max-width: 767px) {

    .home-service-card {
      &::after {
        left: -6%;
      }
    }
  }

  @media all and (max-width: 767px) {

    .home-service-card {
      width: 100%;
    }
  }

  @media all and (min-width: 576px) and (max-width: 991px) {

    .home-service-card {
      width: 47%;
      margin-bottom: 1rem;
    }
  }

</style>