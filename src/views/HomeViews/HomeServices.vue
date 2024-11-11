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
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
      <ServiceCard
        icon="fa-solid fa-bucket"
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
      <ServiceCard
        icon="fa-solid fa-tree"
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
      <ServiceCard
        icon="fa-solid fa-water"
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
      <ServiceCard
        icon="fa-solid fa-seedling"
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
      <ServiceCard
        icon="fa-solid fa-snowplow"
        title="Service Title"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum odit, repellendus sit velit error harum eveniet cum? Iste illum veritatis."
      />
    </section>
    
    <section class="subcontainer-left">
      <section class="inner-subcontainer-left" data-aos="fade-left" data-aos-duration="1500">
      </section>
    </section>

  </section>
</template>
