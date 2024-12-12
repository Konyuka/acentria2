<script setup>
const props = defineProps({
  content: Object,
});

</script>

<template>
    <div class="relative h-[95vh]">
        <div class="relative">
            <video preload="metadata" loading="lazy" autoplay muted loop
                class="drop-shadow-md w-full h-screen object-cover fixed top-0 left-0 z-[-1]" :src="content.vid">
            </video>
            <div class="absolute inset-0 bg-black opacity-20 h-[95vh]"></div>
        </div>

        <!-- <div>
            <div class="absolute my-auto h-full left-0 container content-center align-middle justify-center">
                <div
                    class="flex flex-col items-center bg-cover px-4 py-6 text-center lg:px-10 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div class="max-w-2xl">
                        <h1 v-html="content.title"
                            class="font-sans tracking-normal text-[42px]  text-white font-semibold leading-tight lg:leading-tight">
                        </h1>
                    </div>
                </div>
            </div>
        </div> -->

        <div
            class="absolute top-1/2 pl-10 mx-10 md:mx-0 md:left-1/3 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 sm:px-3 text-white min-w-[60vw]">
            <div class="container">
                <div
                    class="flex flex-col items-center bg-cover px-0 py-6 text-center lg:px-0 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[100%] lg:justify-start lg:text-left">
                        <div class="w-full">
                            <h1 v-html="content.title"
                                class="font-sans tracking-normal text-[42px]  text-white font-semibold leading-tight lg:leading-tight">
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