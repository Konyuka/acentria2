<script setup>


onMounted(() => {

  // if (process.client) {
  //   import('locomotive-scroll').then((LocomotiveScroll) => {
  //     const scroll = new LocomotiveScroll.default({
  //       el: document.querySelector('[data-scroll-container]'),
  //       smooth: true,
  //     });
  //   });
  // }

});
</script>

<template>
  <div id="__next">

    <main>
      <div>

        <Carousel />

        <Hero />

        <!-- <Clients /> -->

        <Stats />

        <Features class="hidden sm:block" />

        

        <Cards />

        <Why />

        <!-- <Structure /> -->

        <!-- <Message /> -->

        <!-- <Testimonials /> -->

        

        <Cta />

      </div>
    </main>

  </div>
</template>

<style scoped>
._29Gjr {
  height: 100%;
  width: inherit;
  position: -ms-device-fixed
}

._1tW_F {
  position: absolute;
  width: 40%;
  height: 100%;
  overflow: hidden
}

</style>
