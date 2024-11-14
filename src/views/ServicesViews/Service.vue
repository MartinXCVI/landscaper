<script setup>

  const props = defineProps({
    reversedRow: String,
    background: String,
    img: String,
    alt: String,
    icon: String,
    title: String,
    text1: String,
    text2: String
  })

  const { img, alt, reversedRow, icon, title, text1, text2 } = props

</script>

<template>
  <section class="service-wrapper wrapper" :class="reversedRow" data-aos="zoom-in-out" data-aos-duration="2000">
    <figure class="service-fig" :class="background">
      <img class="image" :src=img :alt=alt>
    </figure>
    <article class="service-info">
      <i class="service-icon" :class="icon"></i>
      <h2 class="capital subtitle">{{ title }}</h2>
      <p class="service-text">{{ text1 }}</p>
      <p class="service-text">{{ text2 }}</p>
      <a href="/contact" class="button btn-first capital">free consultation</a>
    </article>
  </section>
</template>