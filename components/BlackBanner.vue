<script setup>
const props = defineProps({
    content: String
})
</script>

<template>
    <section id="" class="relative py-8 bg-black text-center">
        <div class="container px-4">
            <h2 v-html="props.content" class="font-sans section-heading text-white">
            </h2>
        </div>
    </section>
</template>

<style scoped></style>