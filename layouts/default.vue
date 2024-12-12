<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class="!font-sans !overflow-x-hidden">
        <Navigation />

        <div>
            <!-- <img src="/img/random.png" alt="Success Team Hands Up"
                class="drop-shadow-md w-full object-cover fixed top-32 left-0 z-[-1] inset-0 h-full  object-right md:object-center" /> -->

            <video preload="metadata" loading="lazy" autoplay muted loop
                class="drop-shadow-md w-full h-screen object-cover fixed top-32 left-0 z-[-1]" src="/img/hd2.mp4"
                style="color: transparent">
                Your browser does not support the video tag.
            </video>

            <slot class="bg-white" />
        </div>


        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>