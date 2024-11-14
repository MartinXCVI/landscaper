<script setup>

  const props = defineProps({
    background: String,
    title: String,
    location: String,
    info: String
  })

  const { background, title, location, info } = props

</script>

<template>
  <section class="project-wrapper wrapper" :class="background">
    <section class="project-section" data-aos="fade-up" data-aos-duration="1000">
      <div class="project-title-div">
        <h2 class="caps subtitle">{{ title }}</h2>
        <p class="project-location">{{ location }}</p>
      </div>
      <div class="project-info-div">
        <p class="project-info">{{ info }}</p>
        <a href="/contact" class="button btn-white capital">get a quote</a>
      </div>
    </section>
  </section>
</template>