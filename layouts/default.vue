<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class=" scroll-smooth">
        <Navigation />

        <slot />

        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>