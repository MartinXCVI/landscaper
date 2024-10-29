<script setup>

  defineProps({
    bgclass: String
  })

</script>

<template>
  <section class="hero-header">
    <slot></slot>
  </section>
</template>