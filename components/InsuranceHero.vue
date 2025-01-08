<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

const currentRoute = useRoute().fullPath
const showButton = computed(() => {
    if (currentRoute === '/claims/car-claims') {
        return false
    } else {
        return true
    }
})
</script>

<template>
    <div>
        <div class="relative isolate overflow-hidden bg-white py-20 mt-20">
            <NuxtImg :src="InsuranceBannerContent.image" alt="Success Team Hands Up"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                <div class="grid grid-cols-10 gap-10">
                    <div class="text-white col-span-1">
                        <div class="w-20 h-1 bg-white mt-3"></div>
                    </div>
                    <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                        <h2
                            class="text-left text-xl font-semibold tracking-tight text-white sm:text-6xl font-sans mb-4">
                            {{ InsuranceBannerContent.subtitle }}
                        </h2>
                        <h2 v-html="InsuranceBannerContent.title"
                            class="text-left text-4xl font-semibold tracking-tight text-white font-sans"></h2>
                    </div>
                </div>
            </div>
        </div>

        <!-- <div class="container max-w-6xl">
            <div class="mt-5 mx-auto text-left">
                <div>
                    <p class="font-sans tracking-normal text-sm text-black leading-tight lg:leading-tight">
                        {{ InsuranceBannerContent.content }}
                    </p>
                </div>
            </div>
            <div class="flex mt-5 gap-5">
                <a href="#"
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
                </a>
                <a v-if="showButton" href="#"
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                    Get a Quote
                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                        </g>
                    </svg>
                </a>
            </div>
        </div> -->
        
    </div>
</template>

<style scoped></style>