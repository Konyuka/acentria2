<template>
    <div class="!overflow-x-hidden !font-sans bg-white">
        <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide" class="h-[85vh]">
                <NuxtImg format="webp"  :src="slide.imageUrl" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black opacity-20"></div>
                <div
                    class="mt-14 absolute top-1/2 mx-10 md:mx-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 text-white">
                    <h2 class="text-5xl font-semibold mb-4 tracking-widest text-brand-primary" v-html="slide.title">
                    </h2>
                    <p class="text-base sm:text-lg md:text-2xl lg:text-2xl mb-8 mt-2">{{ slide.description }}</p>
                    <NuxtLink :to="slide.url"
                        class="button-animation z-[51] relative bg-black !hover:bg-black text-white font-medium py-3 px-6 sm:px-8 md:px-10 text-xl sm:text-sm rounded-sm mt-20">
                        Learn More <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                    </NuxtLink>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
                <Navigation class="mt-10 mx-[2vw] md:mx-[20vw] text-white" />
            </template>
        </Carousel>


    </div>

</template>

<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
    slides: Array,
})

</script>

<style scoped></style>
