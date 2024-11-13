<script setup>
  import HeroHeader from '@/components/HeroHeader.vue';
  import Header from '@/components/Header.vue';
  import Navbar from '@/components/Navbar.vue';
  import Footer from '@/components/Footer.vue';
  import ProjectsContainer from './ProjectsViews/ProjectsContainer.vue';
  import Project from './ProjectsViews/Project.vue';

  let info = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, similique nemo, accusantium quae quis suscipit quidem soluta aliquid numquam enim eaque rerum fuga, officiis itaque modi dolores nihil eveniet. Corporis."
</script>

<template>
  <HeroHeader class="projects-bg">
    <Header>
      <Navbar />
    </Header>
    <h1 class="header-title">See Our Projects</h1>
  </HeroHeader>
  <ProjectsContainer>
    <!-- First Project-->
    <Project
      background="first-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Second Project-->
    <Project
      background="second-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Third Project-->
    <Project
      background="third-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Fourth Project-->
    <Project
      background="fourth-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Fifth Project-->
    <Project
      background="fifth-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Sixth Project-->
    <Project
      background="sixth-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
    <!-- Seventh Project-->
    <Project
      background="seventh-project"
      title="Project Title"
      location="Town/City Name"
      :info="info"
    />
  </ProjectsContainer>
  <Footer />
</template>
