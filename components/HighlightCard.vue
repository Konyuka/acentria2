<script setup>
const props = defineProps({
    item: Object
})

const route = useRoute();
const currentRoute = computed(() => route.path);
</script>

<template>
    <NuxtLink :to="item.link" class="card button-animation !z-10 flex flex-col">
        <div class="bg p-4 flex flex-col flex-grow">
            <dt class="card-heading mb-2">
                <img :src="item.img" alt="Icon" class="w-full h-40 object-cover rounded-lg mb-2" />
                {{ item.title }}
            </dt>
            <dd class="flex flex-col flex-grow">
                <p class="flex-grow content">{{ item.description }}</p>
                <p v-if="currentRoute !== '/acentria-group-investment'"
                    class="transform transition hover:!scale-90 duration-700 text-sm font-semibold leading-6 text-brand-primary mt-2">
                    Learn more <span aria-hidden="true">→</span>
                </p>
            </dd>
        </div>
        <div class="blob"></div>
    </NuxtLink>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 250px;
    overflow: hidden;
    position: relative;
}

.bg {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-heading {
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.content {
    font-size: 0.9rem;
    line-height: 1.4;
}

img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 0.5rem;
}

.blob {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s;
    pointer-events: none;
}

.card:hover .blob {
    transform: translate(-50%, -50%) scale(5);
}
</style>