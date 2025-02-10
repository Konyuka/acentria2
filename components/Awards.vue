<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const awards = ref([
    {
        name: '<span class="text-black">2021 | </span> Sanlam Awards',
        title: '1st Runners Up Most Improved Broker GLA',
        img: '/img/sanlam.png',
    },
    {
        name: '<span class="text-black">2023 | </span>  Think Business Awards',
        title:'2nd Runners Up Most Customer Centric',
        img: '/img/think.png',
    },
    {
        name: '<span class="text-black">2024 | </span>  Capex Life Assurance',
        title: 'Award for Valued Broker',
        img: '/img/capex.png',
    },
    {
        name: '<span class="text-black">2024 | </span>  Kenya-Re Award',
        title: '2nd Runners Up on Timely Premium Remitance',
        img: '/img/kenyare2.png',
    },
    {
        name: '<span class="text-black">2024 | </span>  Think Business Awards',
        title: '2nd Runners Up Best Broker in Technology Application',
        img: '/img/think2.png',
    },
    {
        name: '<span class="text-black">2024 | </span>  Think Business Awards',
        title:'2nd Runners Up Most Customer Centric Broker',
        img: '/img/think3.png',
    },
])

// const itemsToShow = computed(() => {
//     return window.innerWidth < 1000 ? 1 : 3;
// });
const itemsToShow = ref(3);
onMounted(() => {
    const updateItemsToShow = () => {
        itemsToShow.value = window.innerWidth < 1000 ? 1 : 3;
    };
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
});
onBeforeUnmount(() => {
    const updateItemsToShow = () => {
        itemsToShow.value = window.innerWidth < 1000 ? 1 : 3;
    };
    window.removeEventListener('resize', updateItemsToShow);
});

</script>

<template>
    <div>
        <section class="bg-white">
            <div class="font-sans container py-5">
                <h1 class="pb-5 section-heading text-brand-primary">
                    <span class="font-sans text-black">
                        Awards
                    </span>
                    & Recognitions
                </h1>

                <Carousel :items-to-show="itemsToShow" :wrap-around="true" :transition="500" :autoplay="2000" class="">
                    <Slide v-for="product in awards" :key="product.id">
                        <div class="carousel__item px-2 py-5">
                            <button class="group w-full">
                                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
                                    <NuxtImg format="webp"  :src="product.img" :alt="product.name"
                                        class="h-full w-full object-contain object-center group-hover:opacity-75" />
                                </div>
                                <div class="flex flex-col items-center justify-between pt-3">
                                    <h4 class="content !font-bold pb-2 text-left !text-brand-primary"
                                        v-html="product.name"></h4>
                                    <p class="small-text text-left" v-html="product.name"></p>
                                </div>
                            </button>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation />
                        <!-- <Pagination /> -->
                    </template>
                </Carousel>

                <!-- <div class="py-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <button v-for="product in awards" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1">
                            <NuxtImg format="webp"  :src="product.img" :alt="product.img"
                                class="h-full w-full object-contain object-center group-hover:opacity-75" />
                        </div>
                        <div class="flex flex-col items-center justify-between pt-3">
                            <h4 class="content !font-bold pb-2 text-left !text-brand-primary" v-html="product.name">
                            </h4>
                            <p class="small-text text-left" v-html="product.name"></p>
                        </div>
                    </button>
                </div> -->

            </div>
        </section>
    </div>
</template>

<style scoped>
.carousel__item {
    min-height: 100px;
    width: 100%;
}

.carousel__slide {
    padding: 10px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .carousel {
        --carousel-item-width: 80%;
    }
}
</style>