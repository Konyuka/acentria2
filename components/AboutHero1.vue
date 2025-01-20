<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

</script>

<template>
    <div class="relative h-screen ">

        <!-- hd2.mp4  redvid.mp4-->

        <client-only>
            <video autoplay muted loop class="drop-shadow-md w-full h-screen object-cover fixed top-0 left-0 -z-20"
                src="/img/hd2.mp4" style="color: transparent">
                Your browser does not support the video tag.
            </video>
        </client-only>


        <!-- Background Image -->
        <!-- <img loading="lazy" src="/img/xxl.jpg" alt="Background Image"
            class="drop-shadow-md w-screen h-screen object-fill fixed top-0 left-0 z-[-1]" style="color: transparent; " /> -->

        <!-- Gradient Overlay -->
        <!-- <div class="absolute inset-0 bg-black opacity-50 z-0"></div> -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 opacity-100 z-0"></div>


        <div class="container">
            <div class="flex h-screen items-center justify-center flex-col text-left text-white z-10 relative">
                <div class="w-full pb-5">
                    <h1 v-html="InsuranceBannerContent.title" class="section-heading !text-white !text-[45px]">
                    </h1>
                </div>
                <div class="text-left w-full">
                    <p v-html="InsuranceBannerContent.content"
                        class="card-heading font-sans text-white pb-2 leading-loose">
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>