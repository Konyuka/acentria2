<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

</script>

<template>

    <div>
        <Navigation />

        <slot />

        <Footer />
        <SpeedInsights />
    </div>

</template>

<style></style>