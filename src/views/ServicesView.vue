<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import ServicesContainer from './ServicesViews/ServicesContainer.vue';
  import Service from './ServicesViews/Service.vue';
  import Footer from '@/components/Footer.vue';

  let lorem20 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor optio sint officiis, possimus et. Autem fugit aperiam magni ea?"
  let lorem25 = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore possimus nemo voluptas quaerat dolor id ullam, porro repellat pariatur, amet inventore molestiae, veritatis quos perspiciatis!"
</script>

<template>
  <HeroHeader class="services-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">Check Our Services</h1>
  </HeroHeader>
  <ServicesContainer>
    <Service
      background="first-bg"
      img="/images/service-1.jpg"
      alt="alt"
      icon="fa-solid fa-object-group"
      title="garden design"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      reversedRow="reversed-row"
      img="/images/service-2.jpg"
      alt="alt"
      icon="fa-solid fa-water"
      title="irrigation services"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      background="third-bg"
      img="/images/service-3.jpg"
      alt="alt"
      icon="fa-solid fa-tree"
      title="trees planting"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      reversedRow="reversed-row"
      img="/images/service-4.jpg"
      alt="alt"
      icon="fa-solid fa-trowel"
      title="garden maintenance"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      background="fifth-bg"
      img="/images/service-5.jpg"
      alt="alt"
      icon="fa-solid fa-puzzle-piece"
      title="interior design"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      reversedRow="reversed-row"
      img="/images/service-6.jpg"
      alt="alt"
      icon="fa-solid fa-ruler-horizontal"
      title="turf handling"
      :text1="lorem20"
      :text2="lorem25"
    />
    <Service
      background="seventh-bg"
      img="/images/service-7.jpg"
      alt="alt"
      icon="fa-solid fa-xmarks-lines"
      title="fences build"
      :text1="lorem20"
      :text2="lorem25"
    />
  </ServicesContainer>
  <Footer />
</template>