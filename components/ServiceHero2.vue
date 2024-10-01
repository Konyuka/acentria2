<script setup>
const props = defineProps({
  content: Object,
});

</script>

<template>
    <div class="relative h-[75vh]">
        <!-- <img :src="slide.imageUrl" class="w-full h-full object-cover" /> -->
        <video autoplay muted loop class="drop-shadow-md w-full h-[75vh] object-cover" :src="content.vid"
            style="color: transparent">
            Your browser does not support the video tag.
        </video>
        <!-- <div class="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent"></div> -->
        <div
            class="absolute top-1/2 pl-10 mx-10 md:mx-0 md:left-1/3 transform md:-translate-x-1/2 -translate-y-1/2 text-center px-0 sm:px-3 text-white">
            <div class="container">
                <div
                    class="flex flex-col items-center bg-cover px-4 py-6 text-center lg:px-10 lg:text-left bg-right lg:flex-row lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto max-w-xs items-start justify-center text-center md:max-w-lg lg:mx-0 lg:max-w-[90%] lg:justify-start lg:text-left">
                        <div>
                            <label
                                class="font-sans tracking-normal text-xs lg:text-sm text-brand-primary font-bold leading-tight lg:leading-tight uppercase">
                                {{ content.pageTitle }}
                            </label>
                        </div>
                        <div class="w-full">
                            <h1
                                class="font-sans tracking-normal text-4xl  text-black font-semibold leading-tight lg:leading-tight">
                                {{ content.title }}
                            </h1>
                        </div>
                        <div>
                            <p
                                class="font-semibold font-sans tracking-normal text-base text-brand-dim leading-tight lg:leading-tight pb-2">
                                {{ content.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>