<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class="!font-sans !overflow-x-hidden">
        <Navigation />

        <div>
            <!-- <video preload="metadata" loading="lazy" autoplay muted loop
                class="drop-shadow-md w-full h-screen object-cover fixed top-32 left-0 z-[-1]" src="/img/hd2.mp4"
                style="color: transparent">
                Your browser does not support the video tag.
            </video> -->

            <img loading="lazy" src="/img/mainbg.jpg" alt="Background Image"
                class="drop-shadow-md w-full h-screen object-cover fixed top-0 left-0 -z-50"
                style="color: transparent; transform: scaleX(-1);">
                 <!-- <div class="absolute inset-0 bg-black opacity-60"></div> -->
            <slot class="bg-white" />
        </div>


        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>