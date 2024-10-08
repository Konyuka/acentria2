<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

</script>

<template>
    <div class="relative h-[68vh]">
        <!-- <img :src="slide.imageUrl" class="w-full h-full object-cover" /> -->
        <video autoplay muted loop class="drop-shadow-md w-full h-[68vh] object-cover" src="/img/hd2.mp4"
            style="color: transparent">
            Your browser does not support the video tag.
        </video>
        <!-- <div class="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div> -->
        

        <div
            class="absolute top-1/2 pl-10 mx-10 md:mx-0 md:left-1/3 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 sm:px-3 text-white min-w-[60vw]">
            <div class="container">
                <div
                    class="flex flex-col items-center bg-cover px-0 py-6 text-center lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[100%] lg:justify-start lg:text-left">
                        <!-- <div>
                            <label
                                class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-bold leading-tight lg:leading-tight uppercase">
                                {{ content.pageTitle }}
                            </label>
                        </div> -->
                        <div class="w-[90vw]">
                            <h1 v-html="InsuranceBannerContent.title"
                                class="font-sans tracking-normal text-4xl  text-white font-semibold leading-tight lg:leading-tight">
                            </h1>
                        </div>
                        <div>
                            <p class="font-semibold font-sans tracking-wide text-base text-white leading-7 pb-2">
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