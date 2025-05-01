<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import ServicesContainer from './ServicesViews/ServicesContainer.vue';
  import Service from './ServicesViews/Service.vue';
  import Footer from '@/components/Footer.vue';
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
      id="garden-design-section"
      background="first-bg"
      img="/images/service-1.jpg"
      alt="alt"
      icon="fa-solid fa-object-group"
      title="garden design"
      text1="We create custom garden layouts that combine aesthetics, functionality, and seasonal harmony. Whether you're after symmetry, wild elegance, or minimalist charm, we bring your ideal outdoor space to life."
      text2="Our design process balances natural textures, flow, and plant selection to suit your climate and lifestyle. We turn underused areas into curated spaces that flourish year-round."
    />
    <Service
      id="irrigation-services-section"
      reversedRow="reversed-row"
      img="/images/service-2.jpg"
      alt="alt"
      icon="fa-solid fa-water"
      title="irrigation services"
      text1="Our efficient irrigation systems are tailored to your garden’s specific needs, helping plants thrive while conserving water. We offer smart solutions for consistent, low-maintenance watering."
      text2="From automated drip lines to underground sprinkler systems, we install and maintain setups that ensure your lawn and garden remain healthy without extra hassle."
    />
    <Service
      id="trees-planting-section"
      background="third-bg"
      img="/images/service-3.jpg"
      alt="alt"
      icon="fa-solid fa-tree"
      title="trees planting"
      text1="We plant and relocate trees with care and precision, ensuring strong roots and long-term growth. Whether for shade, privacy, or beauty, we choose species that enhance your landscape."
      text2="Our team considers soil health, space, and climate compatibility to help trees thrive in their environment and provide lasting value to your property."
    />
    <Service
      id="garden-maintenance-section"
      reversedRow="reversed-row"
      img="/images/service-4.jpg"
      alt="alt"
      icon="fa-solid fa-trowel"
      title="garden maintenance"
      text1="Keep your outdoor spaces fresh and vibrant with our ongoing garden maintenance services. We handle pruning, weeding, fertilizing, and seasonal touch-ups year-round."
      text2="Our reliable team ensures your plants stay healthy and your garden looks its best, so you can relax and enjoy a well-kept landscape without lifting a finger."
    />
    <Service
      id="interior-design-section"
      background="fifth-bg"
      img="/images/service-5.jpg"
      alt="alt"
      icon="fa-solid fa-puzzle-piece"
      title="interior design"
      text1="Bringing nature indoors, we offer botanical interior styling with living plants, natural textures, and earthy tones. Perfect for homes, offices, and modern indoor environments."
      text2="We design with sustainability and wellness in mind, creating calming, green interiors that enhance air quality, mood, and visual appeal through thoughtful placement."
    />
    <Service
      id="turf-handling-section"
      reversedRow="reversed-row"
      img="/images/service-6.jpg"
      alt="alt"
      icon="fa-solid fa-ruler-horizontal"
      title="turf handling"
      text1="From synthetic to natural turf, we manage every aspect of turf installation and care. We provide smooth, lush, and durable surfaces that stay beautiful with minimal upkeep."
      text2="Our service includes removal, leveling, soil prep, and professional laying, ensuring your lawn is picture-perfect and tailored for play, pets, or peaceful lounging."
    />
    <Service
      id="fences-build-section"
      background="seventh-bg"
      img="/images/service-7.jpg"
      alt="alt"
      icon="fa-solid fa-xmarks-lines"
      title="fences build"
      text1="We build sturdy, stylish fences that define and protect your outdoor space. From classic wood to modern metal or composite materials, we craft with durability and design."
      text2="Our fencing solutions balance privacy and aesthetics, adding structure and value to your property while blending seamlessly with your landscaping vision."
    />
  </ServicesContainer>
  <Footer />
</template>