<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

</script>

<template>
    <div class="relative h-[75vh]">
        <!-- <img :src="slide.imageUrl" class="w-full h-full object-cover" /> -->
        <video autoplay muted loop class="drop-shadow-md w-full h-[75vh] object-cover" src="/img/vid.mp4"
            style="color: transparent">
            Your browser does not support the video tag.
        </video>
        <!-- <div class="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div> -->
        <div
            class="absolute top-1/2 mx-10 md:mx-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 sm:px-3 text-white">
            <div class="container">
                <div
                    class="md:ml-20 flex flex-col items-center bg-cover px-4 py-4 text-center md:py-5 lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-10 mx-auto max-w-xs items-start justify-center text-center md:max-w-2xl lg:mx-0 lg:max-w-5xl lg:justify-start lg:text-left">
                        <div class="w-full">
                            <!-- <div
                                class="flex items-center space-x-2 text-brand-primary pb-2 justify-center lg:justify-center">
                                <label
                                    class="text-center hidden sm:flex font-extrabold tracking-widest font-sans text-xs lg:text-sm text-brand-primary leading-tight lg:leading-tight uppercase">
                                    {{ InsuranceBannerContent.subtitle }}
                                </label>
                            </div> -->
                            <h1 v-html="InsuranceBannerContent.title"
                                class="text-center font-sans tracking-normal mt-10 lg:mt-0 text-3xl lg:text-5xl text-gray-900 font-semibold leading-tight lg:leading-tight">
                            </h1>
                        </div>
                        <div>
                            <p
                                class="text-center font-semibold font-sans tracking-normal text-base text-white leading-tight lg:leading-tight">
                                {{ InsuranceBannerContent.content }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>