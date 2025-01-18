<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class="!font-sans !overflow-x-hidden">
        <Navigation />

        <div>
           
           
            <slot class="bg-white" />
        </div>


        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>