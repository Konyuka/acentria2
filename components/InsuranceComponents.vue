<script setup>

const props = defineProps({
    whyTheInsurance: Object,
    whatsCovered: Array,
    getStarted: Object,
})

</script>

<template>

    <div class="bg-white">

        <div class="container py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6" v-html="whyTheInsurance.title"></h1>
            <p class="mt-6 text-xs leading-normal" v-html="whyTheInsurance.description"></p>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">What's <span class="text-brand-primary"> Covered</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :href="feature.url" v-for="feature in whatsCovered"
                    class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class="mt-1 text-gray-600 text-sm leading-normal font-semibold">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6" v-html="getStarted.title"></h1>
            <p class="mt-6 text-xs leading-normal" v-html="getStarted.description"></p>

            <div class="my-5 flex gap-5">
                <NuxtLink to="/"
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                    Engage an Expert
                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                        </g>
                    </svg>
                </NuxtLink>
                <Nuxtlink to="/"
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                    Compare Quotes
                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                        </g>
                    </svg>
                </Nuxtlink>
            </div>
        </div>


    </div>

</template>

<style scoped></style>