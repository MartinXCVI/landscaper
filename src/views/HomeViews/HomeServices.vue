<script setup>
import ServiceCard from './ServiceCard.vue';
</script>

<template>
  <section class="home-services-section wrapper">
    <h2 class="title capital">our most demanded services</h2>

    <section class="subcontainer-right">
      <section class="inner-subcontainer-right" data-aos="fade-right" data-aos-duration="1500">
      </section>
    </section>

    <section class="home-services" data-aos="fade-up" data-aos-duration="1500">
      <ServiceCard
        icon="fa-solid fa-leaf"
        title="Garden Maintenance"
        text="Keep your greenery healthy and flourishing all year round. We prune, trim, and care for your garden like it's our own."
      />
      <ServiceCard
        icon="fa-solid fa-bucket"
        title="Stone & Hardscape Work"
        text="Durable patios, paths, and borders laid with precision and style. Our stonework blends structure and elegance."
      />
      <ServiceCard
        icon="fa-solid fa-tree"
        title="Tree Care & Planting"
        text="From young saplings to towering trees, we plant and preserve them with expertise and long-term health in mind."
      />
      <ServiceCard
        icon="fa-solid fa-water"
        title="Irrigation & Drainage"
        text="Smart water solutions keep your landscape thriving. We install efficient systems that protect and nourish."
      />
      <ServiceCard
        icon="fa-solid fa-seedling"
        title="Landscape Design"
        text="We turn ideas into plans, and plans into stunning landscapes. Each design is tailored, practical & beautiful."
      />
      <ServiceCard
        icon="fa-solid fa-snowplow"
        title="Site Prep. & Grading"
        text="Proper groundwork is essential. We clear, level, and prepare your space for flawless landscaping results."
      />
    </section>
    
    <section class="subcontainer-left">
      <section class="inner-subcontainer-left" data-aos="fade-left" data-aos-duration="1500">
      </section>
    </section>

  </section>
</template>
