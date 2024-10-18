<script setup>

  defineProps({
    bgclass: String
  })

</script>

<template>
  <section class="hero-header" :class="{bgclass}">
    <slot></slot>
  </section>
</template>