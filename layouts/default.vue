<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class="!font-sans !overflow-x-hidden">
        <Navigation />
        <slot class="bg-white" />
        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>