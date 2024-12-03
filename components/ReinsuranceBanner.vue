<script setup>

const props = defineProps({
    content: Object
})

const currenRoute = useRoute().name

const subtitle = computed(() => {
    const str = currenRoute;
    const firstPart = str.split('-')[1];
    return firstPart
} ) 

const currentRoute = computed(() => {
    const route = useRoute();
    return route.path;
})

const showFirstLabel = computed(() => {
    if (currentRoute ==='insurance-consulting') {
        return false
    } else {
        return true
    }
})

</script>

<template>
    <div class="banner">
        <h1 class="text-2xl font-semibold">{{ content.title }}</h1>
        <h2 class="text-xl font-semibold">{{ content.subTitle }}</h2>
        <img :src="content.image" alt="Banner Image" class="w-full h-auto" />
    </div>
</template>

<style scoped>
@media (max-width: 768px) {
    .text-lg {
        font-size: 1.125rem;
    }
    .text-xl {
        font-size: 1.25rem;
    }
    .text-2xl {
        font-size: 1.5rem;
    }
}

.banner {
    padding: 2rem;
    text-align: center;
}
</style>