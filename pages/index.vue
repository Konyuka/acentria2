<script setup lang="ts">
const route = useRoute()

import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const videoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src:
        '@/assets/media/intro.mp4',
      type: 'video/mp4'
    }
  ]
}
</script>

<template>
  <div id="__next">

    <main>
      <div>
        <div>

          <!-- Hero Section -->
          <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="
                  background-image: url(/cdn.sanity.io/images/33u1mixi/production/e8e19ed3e8c8d8616133ef8f2feeaab00819f123-2880x1162b238.png?fit=max&amp;auto=format);
                ">
            <div class="container">
              <div
                class="flex flex-col items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">

                <div
                  class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[50%] lg:justify-start lg:text-left">
                  <div class="w-full">
                    <h1
                      class="font-sans tracking-normal text-4xl lg:text-3xl text-brand-primary font-semibold leading-tight lg:leading-tight">
                      Welcome to Acentria Group <br>
                      <span class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight"> your
                        trusted partner in Insurance, Reinsurance, Actuarial, Investment and Tech Solutions.</span>
                    </h1>
                  </div>
                  <div>
                    <p class="font-sans tracking-normal text-base text-gray-900 leading-tight lg:leading-tight pb-2">
                      Discover why thousands of businesses
                      and professionals trust Acentria Group
                      for their Insurance, Reinsurance,
                      Actuarial, Investment, and Tech solutions.
                      At Acentria Group,
                      we combine expertise with innovation
                      to deliver tailored solutions that
                      meet your unique needs. Trust us to
                      provide clarity, security, and growth
                      for businesses and individuals.
                    </p>
                    <p class="font-sans tracking-normal text-base text-gray-900 leading-tight lg:leading-tight pb-2">
                      <strong class="font-semibold">See
                        why Kenya Reinsurance Corporation says <br>
                        <span class="text-base !text-gray-900 font-normal">“Acentria sets the standard ​in the
                          industry.”</span>
                      </strong>
                    </p>
                  </div>
                  <div class="w-full">
                    <a href="request-a-demo.html"
                      class="font-sans button-animation inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-700 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                      Learn more about us
                      <svg
                        class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                          <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                          <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                          </path>
                        </g>
                      </svg>
                    </a>
                    <a href="pricing.html"
                      class="font-sans button-animation inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-700 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                      Contact Us
                      <svg
                        class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                          <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                          <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                          </path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="flex aspect-video w-full max-w-3xl flex-col">

                  <div id="root">

                    <div class="_29Gjr rounded-xl">
                      <div class="_1tW_F rounded-xl">
                        <video :options="videoOptions" ref="videoPlayer" aria-label="Introducing the Acentria Platform"
                          preload="metadata"
                          class="video-js vjs-default-skin rounded-xl _1l-KU _3OgU3 w-[60vw] h-[50vh]" controls
                          tabindex="0" src="@/assets/media/intro.mp4"></video>

                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- Clients -->
          <div class="w-full overflow-hidden py-4 lg:py-10">
            <div class="mx-auto flex w-fit justify-center">
              <div class="animate-logoAnimation flex w-max" style="
                      animation-duration: 140s;
                      animation-direction: normal;
                    ">
                <div class="flex gap-4">
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Barclays logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image6445.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fbdee543a7500ad0542afd6cb8d91e356f4d96e53-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Mastercard logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imageb721.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Ff87aefabbf82b056dbe526602264dd0b8dbb90ff-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="General Mills logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image6a51.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fb41b923caa4b9f61386e606fa20119150a87c0f3-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Heineken logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image5f5a.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F8d236518f504428a4c12758a44543f2aaac70dc5-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Schneider Electric logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      style="color: transparent"
                      src="_next/image5b2e.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F7143c838be550233024bbc22f070f1afc7edfa78-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Parker logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imaged6cd.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F6fb3afbecf934168a14dbc5a4c2ac7dede2f4253-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Televisa logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image47f5.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fc4d73a8abffa5e0b3d197fda319920aa381b4103-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Amaysim logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image4d51.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F8c81afe2ff35f99fcbf287e75083926c51a7c060-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Aegon logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imageb1b9.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fd2e8fd11673e9aa397457ac08b803e52282a6e08-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Medtronic logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image81cc.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Ff18aa89eb85f328df35c7ab91e06ff6d023bf2f8-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Innergex logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image0dc9.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F20289921cf3cd012f5bd4e08f92f5c556446322f-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="AsiaSat logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image82f7.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F23f02ca21f0ea9c16d351738a8fb1767f3b7a245-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Crico logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image7b79.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F8246dc548d226318972fce2c121f9f138e6f30de-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Nine logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image0967.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fa78d5352d393f64bf0c2ff339e3cf8c8c62cdbcd-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Casper logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image43b9.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Ff18a7bdf4b0c7c287ce2fac4cb39ecfec8c4523a-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Oregon County logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      src="_next/image187b.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F0441d5dd3c163bad962e7c456d9cff54ec3d4ee3-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Coca Cola logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imagead30.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fd0eb93bef7dbd988441a883837c445dfc4e1e24a-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="TE Connectivity logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      src="_next/imagef4a9.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F9dd2cac086c9c252e0f35da67ed4a4ee68cc7b2d-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Diebold Nixdorf logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      style="color: transparent"
                      src="_next/image39e0.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fe8f46fca818fdf9e69dfceb55a9067665b19fd66-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Big Society Capital logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      style="color: transparent"
                      src="_next/imagea03d.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Ff6351c1de0ef4f1a1d5458f3d2354990d0141be6-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Wex logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image93bb.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F68ff3e41852a71beefca2260357172b54b659959-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Bird &amp; Bird logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      style="color: transparent"
                      src="_next/image4e6a.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F4d763bbcc97e26c38665aff3abf267532ee3040f-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="JB Hi-Fi logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imageedd8.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F8fd1c9e9b1b1dde5a759a94503fdd82208fdb712-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Bic logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image4594.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F66f8c3c5be9ab9df20ea2271b971ee4808a298c0-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Eaton logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image40e1.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fc1c0cd0e5023931f81808d4c5f7c3cd9d14d0356-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Imperfect foods logo" loading="lazy" width="100" height="100" decoding="async"
                      data-nimg="1" class="max-h-10 min-h-[40px] w-full max-w-none object-contain"
                      style="color: transparent"
                      src="_next/image3bd0.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F48924adfddb9d40b2091c0c4f3796fe29f87281e-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Babcock logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image6522.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fbd7f2be3dcaaaeb38d783324137591108f3cffcd-150x47.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="randstad logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imagef167.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2Fcb37b65670c266051af9048f30b45c0d029a1f77-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Kiwi Rail logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image6e7a.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F97c065ca91c038a41259b168e6d8432bd61d806b-200x40.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Seven Eleven logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/imagef694.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F96cbe8ae47b48e164484b0d0b275d7182b1063ba-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                  <div class="flex w-fit items-center justify-center">
                    <img alt="Dominos logo" loading="lazy" width="100" height="100" decoding="async" data-nimg="1"
                      class="max-h-10 min-h-[40px] w-full max-w-none object-contain" style="color: transparent"
                      src="_next/image35ae.svg?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F33u1mixi%2Fproduction%2F91fb1d64c9faf5c7349d9eab21005480e1a9383a-150x46.svg&amp;w=256&amp;q=75" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistics -->
          <div class="py-6 text-white xl:py-12" style="background-color: #000">
            <div class="bg-brand-dim">
              <div class="container mx-auto px-4">
                <div class="mb-12 flex flex-col items-center"></div>
                <div class="font-sans flex flex-wrap justify-center gap-x-16">
                  <div class="mb-12 flex items-center justify-center">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                      <span
                        class="undefined pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold">13k</span>
                      <p class="undefined undefined text-base md:text-xl">
                        Customers
                      </p>
                    </div>
                  </div>
                  <div class="mb-12 flex items-center justify-center">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                      <span
                        class="undefined pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold"><span
                          class="text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold">10+</span></span>
                      <p class="undefined undefined text-base md:text-xl">
                        Years
                      </p>
                    </div>
                  </div>
                  <div class="mb-12 flex items-center justify-center">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                      <span
                        class="undefined pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold">7+</span>
                      <p class="undefined undefined text-base md:text-xl">
                        Awards
                      </p>
                    </div>
                  </div>
                  <div class="mb-12 flex items-center justify-center">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                      <span
                        class="undefined pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold"><span
                          class="text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold">5+</span></span>
                      <p class="undefined undefined text-base md:text-xl">
                        Countries
                      </p>
                    </div>
                  </div>
                  <div class="mb-12 flex items-center justify-center">
                    <div class="border-brand-divider border-l pl-6 text-dark-title">
                      <span
                        class="undefined pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-xl md:text-4xl 2xl:text-4xl font-bold">24h</span>
                      <p class="undefined undefined text-base md:text-xl">
                        Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
                <a href="resources/research/diligent-sets-the-standard-for-modern-grc.html"
                  class="button-animation cursor-pointer font-semibold text-brand-primary hover:text-brand-primary-dark text-base relative flex items-center w-fit self-center md:self-start">
                  Download Profile

                  <i class="ml-2 fas fa-download"></i>
                  <!-- <svg
                    class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                    <g fill-rule="evenodd">
                      <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                      <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4"></path>
                    </g>
                  </svg> -->
                </a>
              </div>
            </div>
          </div>





          <div class="hidden md:block">
            <section class="relative py-4 lg:py-10">
              <div class="container px-4">
                <div class="font-sans container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                  <div
                    class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                    <div class="flex h-fit flex-col">
                      <i class="fas fa-tools text-brand-primary text-4xl pb-4" translate="no"></i>
                      <div>
                        <h4
                          class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                          Risk Management Solutions
                        </h4>
                      </div>
                      <p
                        class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                        Advanced tools for managing and assessing risk across insurance, reinsurance, and investment
                        portfolios.
                      </p>
                    </div>
                  </div>
                  <div
                    class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                    <div class="flex h-fit flex-col">
                      <i class="fas fa-chart-line text-brand-primary text-4xl pb-4" translate="no"></i>
                      <div>
                        <h4
                          class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                          Actuarial Analytics and Modeling
                        </h4>
                      </div>
                      <p
                        class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                        Robust actuarial modeling and analytics capabilities for accurate forecasting and financial
                        projections.
                      </p>
                    </div>
                  </div>
                  <div
                    class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                    <div class="flex h-fit flex-col">
                      <i class="fas fa-chart-pie text-brand-primary text-4xl pb-4" translate="no"></i>
                      <div>
                        <h4
                          class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                          Investment Portfolios
                        </h4>
                      </div>
                      <p
                        class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                        Tools for optimizing investment portfolios, including performance tracking, asset allocation,
                        and risk-return analysis.
                      </p>
                    </div>
                  </div>
                  <div
                    class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                    <div class="flex h-fit flex-col">
                      <i class="fas fa-laptop-code text-brand-primary text-4xl pb-4" translate="no"></i>
                      <div>
                        <h4
                          class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                          Integrated Tech Solutions
                        </h4>
                      </div>
                      <p
                        class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                        A suite of tech solutions designed to streamline operations, enhance data management, and
                        support digital transformation in the insurance and investment sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div class="font-sans py-6 text-white xl:py-12" style="background-color: #f6f8fc">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
              <div class="relative p-4 lg:basis-1/2 ">
                <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                  decoding="async" data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                  src="https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <div class="flex flex-col justify-center lg:basis-1/2">
                <label class="text-base leading-normal font-regular text-light-highlight font-bold">Build
                  organizational resilience
                </label>
                <h2
                  class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                  Empower Your Business with Innovative Insurance and Investment Solutions.
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                  <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                    Transform your operations with advanced risk management, precise actuarial analytics, and
                    cutting-edge technology to drive growth and resilience. Let us help you navigate complexities and
                    seize opportunities with confidence.
                  </p>
                </div>
              </div>
            </div>
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
              <div class="relative p-4 lg:basis-1/2">
                <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async" data-nimg="1"
                  style="color: transparent; object-fit: contain" class="rounded-lg"
                  src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <div class="flex flex-col justify-center lg:basis-1/2">
                <label class="text-base leading-normal font-regular text-light-highlight font-bold">Stay
                  ahead of the competition
                </label>
                <h2
                  class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                  Elevate Your Strategies with Precision and Innovation
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                  <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                    Harness the power of advanced analytics and technology to optimize insurance, reinsurance, and
                    investment decisions, ensuring you stay ahead in a rapidly evolving market.
                  </p>
                </div>
              </div>
            </div>
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
              <div class="relative p-4 lg:basis-1/2">
                <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                  decoding="async" data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                  src="https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              </div>
              <div class="flex flex-col justify-center lg:basis-1/2">
                <label class="text-base leading-normal font-regular text-light-highlight font-bold">Reinforce
                  investor confidence</label>
                <h2
                  class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                  Unlock Greater Efficiency and Insight with Our Expertise.
                </h2>
                <div class="text-light-content pb-5 md:pb-6">
                  <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                    Streamline your operations and enhance decision-making with our integrated solutions in risk
                    management, actuarial services, and tech advancements tailored for your industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="font-sans bg-white pb-16 pt-24 sm:pb-24 sm:pt-20 xl:pb-32">
            <div class="container bg-brand-dim pb-20 sm:pb-24 md:rounded xl:pb-0">
              <div
                class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-2 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div class="-mt-8 w-full md:max-w-[455px] xl:-mb-8 xl:w-96 xl:max-w-[255px] xl:flex-none">
                  <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                    <img alt="Barclays" loading="lazy" width="455" height="227" decoding="async" data-nimg="1"
                      class="false undefined absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                      style="color: transparent" sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                      src="https://acentriagroup.com/wp-content/uploads/2024/01/Moses-Musau-2-683x1024.jpg" />
                  </div>
                </div>
                <div class="relative w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-11">
                  <div class="flex flex-col-reverse items-center justify-between gap-2 lg:flex-row">
                    <div class="flex flex-row items-center justify-start gap-6">
                      <div class="flex flex-col items-center pl-3 md:items-start md:border-l-4">
                        <p class="text-base leading-normal font-semibold text-dark-content !pb-0 text-xl md:!pb-0">
                          Moses M.
                        </p>
                        <span class="text-dark-content text-xs font-bold">CEO / MD, <span
                            class="text-white font-bold">Acentria Group</span></span>
                      </div>
                    </div>
                    <div class="w-fit max-w-[120px] text-center md:top-[5%]">
                      <!-- <img
                        src="https://cdn.sanity.io/images/33u1mixi/production/bdee543a7500ad0542afd6cb8d91e356f4d96e53-200x40.svg"
                        alt="Barclays" class /> -->
                    </div>
                  </div>
                  <div class="relative isolate pb-9 pt-6 sm:pt-12">
                    <blockquote class="text-lg font-semibold leading-8 text-dark-content sm:leading-9">
                      <p
                        class="text-base leading-normal font-regular !font-sans undefined leading-2 mb-1 text-xl md:text-base md:font-normal">
                        "Greetings from Acentria Group, <br> I can confidently say that our comprehensive solutions have
                        saved
                        our clients significant costs while enhancing their decision-making processes. <br> Our
                        expertise in
                        in the niche empowers businesses to thrive
                        in a complex world. Join us and experience the Acentria difference."
                      </p>
                      <p
                        class="text-base leading-normal font-regular undefined leading-2 mb-1 text-xl font-thin md:text-base md:font-normal">
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section class="relative py-10">
            <div class="font-sans container px-4">
              <div class="pb-7 text-center">
                <h2 class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 leading-tight lg:leading-tight">
                  Related content
                </h2>
              </div>
              <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                <a class="relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                  href="resources/blog/preparing-for-ai-regulations.html">
                  <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                    <div
                      class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                      <div
                        class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                        <figure
                          class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                          <div class="h-0 w-full max-w-full pb-[75%]">
                            <div class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                              <picture class="flex h-[300px] w-full max-w-none"><img
                                  alt="AI is here. AI regulations are on the way. Is your board ready?" loading="lazy"
                                  decoding="async" data-nimg="fill" class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw"
                                  src="../cdn.sanity.io/images/33u1mixi/production/7ef13321754c150f46ae8370675e14d1efce6c2e-1080x72097c5.jpg?w=3840&amp;q=90&amp;fit=clip&amp;auto=format" />
                              </picture>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div
                      class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                    </div>
                  </div>
                  <div
                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                    <section class="grid items-start justify-start gap-y-3">
                      <div class="relative flex min-h-[100px] flex-col gap-y-1">
                        <label
                          class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight">Blog</label>
                        <h6
                          class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                          The Future of Insurance: How Acentria Group is Leading the Way
                        </h6>
                      </div>
                      <p
                        class="font-sans tracking-normal text-xs lg:text-sm p text-gray-700 leading-tight lg:leading-tight will-change-max-h will-change-opacity ease origin-bottom overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                        Your legal team is in
                        the perfect position to
                        help
                        prepare your
                        organization for new AI
                        regulations.
                        Here’s how — and how
                        technology can help.
                      </p>
                    </section>
                  </div>
                  <button
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base self-start">
                    Read more<svg
                      class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                      fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                        <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                        </path>
                      </g>
                    </svg></button>
                </a><a
                  class="relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                  href="resources/guides/elevating-grc-maturity.html">
                  <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                    <div
                      class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                      <div
                        class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                        <figure
                          class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                          <div class="h-0 w-full max-w-full pb-[75%]">
                            <div class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                              <picture class="flex h-[300px] w-full max-w-none"><img
                                  alt="Stronger consolidation: Elevating your GRC maturity for better risk management"
                                  loading="lazy" decoding="async" data-nimg="fill" class="object-center object-cover"
                                  style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw"
                                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                              </picture>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div
                      class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                    </div>
                  </div>
                  <div
                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                    <section class="grid items-start justify-start gap-y-3">
                      <div class="relative flex min-h-[100px] flex-col gap-y-1">
                        <label
                          class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight">Guide</label>
                        <h6
                          class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                          Navigating Reinsurance: Strategies for Success
                        </h6>
                      </div>
                      <p
                        class="font-sans tracking-normal text-xs lg:text-sm p text-gray-700 leading-tight lg:leading-tight will-change-max-h will-change-opacity ease origin-bottom overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                        Learn how you can
                        leverage technology to
                        elevate
                        your organization&#x27;s
                        governance maturity, so
                        you
                        can improve efficiency
                        while transforming risks
                        into
                        rewards.
                      </p>
                    </section>
                  </div>
                  <button
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base self-start">
                    Read more<svg
                      class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                      fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                        <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                        </path>
                      </g>
                    </svg></button>
                </a><a
                  class="relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                  href="resources/guides/grc-vendor-consolidation-checklist.html">
                  <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                    <div
                      class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                      <div
                        class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                        <figure
                          class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                          <div class="h-0 w-full max-w-full pb-[75%]">
                            <div class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                              <picture class="flex h-[300px] w-full max-w-none"><img
                                  alt="Your guide to GRC vendor consolidation" loading="lazy" decoding="async"
                                  data-nimg="fill" class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw"
                                  src="https://images.pexels.com/photos/12442888/pexels-photo-12442888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                              </picture>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div
                      class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                    </div>
                  </div>
                  <div
                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                    <section class="grid items-start justify-start gap-y-3">
                      <div class="relative flex min-h-[100px] flex-col gap-y-1">
                        <label
                          class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight">Guide</label>
                        <h6
                          class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                          Actuarial Insights: Enhancing Decision-Making with tech
                        </h6>
                      </div>
                      <p
                        class="font-sans tracking-normal text-xs lg:text-sm p text-gray-700 leading-tight lg:leading-tight will-change-max-h will-change-opacity ease origin-bottom overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                        Download the free
                        checklist to learn how
                        you can
                        transform your strategy,
                        streamline your
                        operations
                        and elevate your GRC
                        resilience by
                        consolidating
                        vendors today.
                      </p>
                    </section>
                  </div>
                  <button
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base self-start">
                    Read more<svg
                      class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                      fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                        <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                        </path>
                      </g>
                    </svg></button>
                </a><a
                  class="relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                  href="resources/blog/the-case-for-purpose-built-software.html">
                  <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                    <div
                      class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                      <div
                        class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                        <figure
                          class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                          <div class="h-0 w-full max-w-full pb-[75%]">
                            <div class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                              <picture class="flex h-[300px] w-full max-w-none"><img
                                  alt="The case for purpose-built software: Why tailored programming outperforms modified solutions"
                                  loading="lazy" decoding="async" data-nimg="fill" class="object-center object-cover"
                                  style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw"
                                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
                              </picture>
                            </div>
                          </div>
                        </figure>
                      </div>
                    </div>
                    <div
                      class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                    </div>
                  </div>
                  <div
                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                    <section class="grid items-start justify-start gap-y-3">
                      <div class="relative flex min-h-[100px] flex-col gap-y-1">
                        <label
                          class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-semibold leading-tight lg:leading-tight">Blog</label>
                        <h6
                          class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                          The case for
                          purpose-built
                          software
                        </h6>
                      </div>
                      <p
                        class="font-sans tracking-normal text-xs lg:text-sm p text-gray-700 leading-tight lg:leading-tight will-change-max-h will-change-opacity ease origin-bottom overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                        Discover how
                        purpose-built software
                        enhances
                        performance and proves
                        more cost-effective than
                        modified solutions in
                        the long run.
                      </p>
                    </section>
                  </div>
                  <button
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none text-brand-primary hover:text-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base self-start">
                    Read more<svg
                      class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                      fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                      <g fill-rule="evenodd">
                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                        <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                        </path>
                      </g>
                    </svg></button>
                </a>
              </div>
            </div>
          </section>

          <div class="font-sans bg-cover bg-center py-8 md:py-16 lg:py-20" style="
                  background-image: url(https://cdn.sanity.io/images/33u1mixi/production/b695dd70af0f5f4be3c091f4607fd14514ac5650-1440x447.svg);
                ">
            <div class="container mx-auto px-4 lg:px-0">
              <div class="rounded-sm px-6 py-8 bg-brand-dim">
                <div class="grid grid-cols-1 items-center gap-4 lg:grid-cols-2">
                  <div class="mb-8 text-center lg:mb-0 lg:text-left">
                    <div class="mb-4 !text-dark-content">
                      <h2
                        class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight undefined lg:pt10 pt-6">
                        Partner with Acentria Group for <br> Unmatched Expertise and Security
                      </h2>
                      <p class="undefined undefined">
                        Reach out to our support
                        team, and we’ll work
                        with you
                        to schedule a demo or
                        conversation.
                      </p>
                    </div>
                    <a href="request-a-demo.html"
                      class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">Talk
                      to support<svg
                        class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                          <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                          <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                          </path>
                        </g>
                      </svg></a>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2">
                    <div
                      class="flex flex-col items-center justify-start border-b border-b-brand-divider px-4 py-6 text-center md:items-start md:border-b-0 md:border-r md:border-r-brand-divider md:py-0 md:text-left">
                      <div class="flex flex-row items-center gap-2">
                        <i class="material-symbols-outlined text-brand-primary text-2xl undefined"
                          translate="no">security</i>
                        <div class="!text-dark-content">
                          <h3
                            class="text-xl pb-4 md:pb-5 font-semibold md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight undefined p-0 !pb-0">
                            Security
                          </h3>
                        </div>
                      </div>
                      <div class="flex-grow !text-dark-content">
                        <p class="text-base leading-normal font-regular undefined pb-8 pt-4 text-sm">
                          Ensuring your data
                          is protected is
                          critical to
                          Acentria. Learn how
                          we protect your
                          data.
                        </p>
                      </div>
                      <a href="trust.html"
                        class="cursor-pointer font-semibold text-brand-primary hover:text-brand-gray-1 text-base relative flex items-center">Learn
                        more<svg
                          class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                          fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                          <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                          </g>
                        </svg></a>
                    </div>
                    <div
                      class="flex flex-col items-center justify-start px-4 py-6 text-center md:items-start md:py-0 md:text-left">
                      <div class="flex flex-row items-center gap-2">
                        <i class="material-symbols-outlined text-brand-primary text-2xl undefined"
                          translate="no">account_circle</i>
                        <div class="!text-dark-content">
                          <h3
                            class="text-xl pb-4 md:pb-5 font-semibold md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight undefined p-0 !pb-0">
                            Support
                          </h3>
                        </div>
                      </div>
                      <div class="flex-grow !text-dark-content">
                        <p class="text-base leading-normal font-regular undefined pb-8 pt-4 text-sm">
                          Our customer service
                          team is here for you
                          24/7/365.
                        </p>
                      </div>
                      <a href="support.html"
                        class="cursor-pointer font-semibold text-brand-primary hover:text-brand-gray-1 text-base relative flex items-center">Learn
                        more<svg
                          class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                          fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                          <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                          </g>
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
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
