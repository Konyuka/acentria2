<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div class="!overflow-x-hidden">
        <Navigation />

        <slot />

        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>