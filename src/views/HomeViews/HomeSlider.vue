
<template>
  <section class="slider-container">
    <div class="slider">
      <div class="front"></div>
      <div class="back"></div>
      <div class="left"></div>
      <div class="right"></div>
    </div>
    <br/>
    <div class="slider-buttons">
      <button class="slider-btn" @click="leftSide()">Left</button>
      <button class="slider-btn" @click="rightSide()">Right</button>
    </div>
  </section>
</template>

<script>

  export default {
    data() {
      return {
        Change: 0,
      }
    },
    methods: {
      leftSide() {
        this.Change += 90;
        document.querySelector('.slider')
        .style.transform = `perspective(3000px) rotateX(270deg) rotate(${this.Change}deg) translateZ(-200px)`
      },
      rightSide() {
        this.Change -= 90;
        document.querySelector('.slider')
        .style.transform = `perspective(3000px) rotateX(270deg) rotate(${this.Change}deg) translateZ(-200px)`
      }
    }
  }

</script>

<style>

.slider-container {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.slider {
  width: 400px;
  height: 400px;
  transform: perspective(3000px) rotateX(180deg) rotate(0deg);
  transform-style: preserve-3d;
  transition: 750ms;
  margin-bottom: 1rem;
  position: relative;
  &::after {
    content: '';
    inset: 0;
    position: absolute;
    z-index: 0;
    background-image: url('/images/slider-3.jpg');
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(180deg);
  }
}

.front, .back, .left, .right {
  width: 100%;
  height: 400px;
  position: absolute;
  box-shadow: 0 0 5px #ccc, inset 0 0 10px #ddd;
  transform: translateY(50px);
}

.front {
  transform: rotateX(90deg) translate3d(0px, 200px, 200px);
  &::after {
    width: 100%;
    content: '';
    inset: 0;
    z-index: 0;
    position: absolute;
    background: url('/images/slider-1.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.back {
  transform: rotateX(90deg) translate3d(0, 200px, -200px);
  &::after {
    width: 100%;
    content: '';
    inset: 0;
    z-index: 0;
    position: absolute;
    background: url('/images/slider-2.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.left {
  transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 200px, -200px);
  &::after {
    width: 100%;
    content: '';
    inset: 0;
    z-index: 0;
    position: absolute;
    background: url('/images/slider-3.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.right {
  transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 200px, 200px);
  &::after {
    width: 100%;
    content: '';
    inset: 0;
    z-index: 0;
    position: absolute;
    background: url('/images/slider-4.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.slider-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.slider-btn {
  min-width: 5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 3rem;
  text-transform: uppercase;
  text-shadow: 0 0 0.25rem darkgray;
  box-shadow: 0 0 0.25rem darkgray;
  font-size: 1.25rem;
  background-color: rgb(101, 214, 101);
  color: white;
  transition: 100ms;
}

@media all and (max-width: 375px) {

  .slider {
    width: 200px;
    height: 200px;
  }

  .front, .back, .left, .right {
    height: 200px;
  }

  .front {
    transform: rotateX(90deg) translate3d(0px, 100px, 100px);
  }

  .back {
    transform: rotateX(90deg) translate3d(0, 100px, -100px);
  }

  .left {
    transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 100px, -100px);
  }

  .right {
    transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 100px, 100px);
  }

}

@media all and (min-width: 376px) and (max-width: 767px) {

  .slider {
    width: 300px;
    height: 300px;
    margin-bottom: 1.5rem;
  }

  .front, .back, .left, .right {
    height: 300px;
  }

  .front {
    transform: rotateX(90deg) translate3d(0px, 150px, 150px);
  }

  .back {
    transform: rotateX(90deg) translate3d(0, 150px, -150px);
  }

  .left {
    transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 150px, -150px);
  }

  .right {
    transform: rotateX(90deg) rotateY(90deg) translate3d(0px, 150px, 150px);
  }

}

@media all and (min-width: 768px) {

  .slider {
    margin-bottom: 3rem;
  }
}

</style>