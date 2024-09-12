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
        <div >

          <Hero />

          <!-- <Clients /> -->

          <Stats />

          <Features />

          <div class="font-sans mb-5 text-white xl:py-1" style="background-color: #fff">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
              <div class="relative p-4 lg:basis-1/2">
                <img alt="Image of Forrester recognizes Diligent as a Leader in GRC software" loading="lazy" width="500"
                  height="350" decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                  class="rounded-lg"
                  src="https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <div class="flex flex-col justify-center lg:basis-1/2">
                <label class="text-base leading-normal font-regular text-light-highlight font-semibold">
                  We belive in innovation and simplicity
                </label>
                <h2
                  class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                  Leader in Industry Standards
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                  <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                    Uncover the fantastic opportunity to team up with Acentria Group, where collaboration is not just a
                    buzzword but a way of life. In the world of Acentria Group, success isn't just a destination, it's a
                    shared experience. With our innovative approach, award-winning culture, and unwavering focus on
                    community, we stand as the epitome of what an ideal partnership should be. Welcome to a realm where
                    simplicity meets professionalism, and your aspirations find a home.

                    Experience the genuine difference that Acentria Group offers in a journey tailored for success,
                    where your potential unfolds in every collaborative moment.
                  </p>
                </div>

                <!-- <a href="resources/research/diligent-sets-the-standard-for-modern-grc.html"
                  class="button-animation cursor-pointer font-semibold text-brand-primary hover:text-brand-primary-dark text-base relative flex items-center w-fit self-center md:self-start">
                  Download Profile
                  <i class="ml-2 fas fa-download"></i>
                </a> -->

              </div>
            </div>
          </div>

          <Cards />

          <Why />

          <Message />

          <News />

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
