<script setup>
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

                <div class="py-5 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <button v-for="product in awards" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1">
                            <NuxtImg :src="product.img" :alt="product.img"
                                class="h-full w-full object-contain object-center group-hover:opacity-75" />
                        </div>
                        <div class="flex flex-col items-center justify-between pt-3">
                            <h4 class="content !font-bold pb-2 text-left !text-brand-primary" v-html="product.name"></h4>
                            <p class="small-text text-left" v-html="product.name"></p>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>