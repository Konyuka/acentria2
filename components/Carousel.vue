<template>
    <div class="!overflow-x-hidden font-sans">
        <Carousel :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in slides" :key="slide" class="h-[50vh]">
                <img :src="slide.imageUrl" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-700 to-transparent"></div>
                <div
                    class="absolute top-1/2 mx-10 md:mx-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 sm:px-3 text-white">
                    <h2 class="text-3xl sm:text-3xl md:text-3xl font-bold mb-4 tracking-widest text-brand-primary" v-html="slide.title"></h2>
                    <p class="text-base sm:text-lg md:text-xl lg:text-xl mb-8 mt-8">{{ slide.description }}</p>
                    <NuxtLink :to="slide.url"
                        class="button-animation z-[51] relative bg-brand-primary !hover:bg-black text-white font-medium py-3 px-6 sm:px-8 md:px-10 text-xl sm:text-sm rounded-sm mt-10">
                        Learn More <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                    </NuxtLink>
                </div>
            </Slide>

            <template #addons>
                <Pagination />
                <Navigation class="mx-[2vw] md:mx-[20vw] text-white" />
            </template>
        </Carousel>
    </div>

</template>

<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const slides = ref([
    {
        imageUrl: 'https://acentriagroup.com/wp-content/uploads/2023/11/shutterstock_2263311033-1.jpg',
        title: 'Insurance',
        description: 'Mitigating Risks, Maximizing Opportunities',
        url: '/acentria-group-insurance',
    },
    {
        imageUrl: 'https://acentriagroup.com/wp-content/uploads/2023/11/shutterstock_1697703976-1.jpg',
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-reinsurance',
    },

    {
        imageUrl: 'https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-adventure-night-road-trip-in-the-forest-aerial-view-of-a-car-headlights-on-deep-jungle-road-on-1932802550-transformed.jpeg',
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/acentria-group-actuarial',
    },
    {
        imageUrl: 'https://acentriagroup.com/wp-content/uploads/2023/11/shutterstock_1482718226-WAVE-PAID.jpg',
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://acentriagroup.com/wp-content/uploads/2023/11/shutterstock_1697703976-1.jpg',
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
    },
])



</script>

<style scoped>
</style>

