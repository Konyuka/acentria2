<script setup>
const props = defineProps({
    item: Object
})
</script>

<template>
    <NuxtLink :to="item.link" class="card button-animation">
        <div class="bg p-2">

            <dt class="card-heading">
                <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                    <i :class="item.icon" class="text-white" aria-hidden="true"></i>
                </div>
                {{ item.title }}
            </dt>
            <dd class="mt-1 flex flex-auto flex-col">
                <p class="flex-auto content">{{ item.description }}</p>
                <p
                    class="transform transition hover:!scale-90 duration-700 text-sm font-semibold leading-6 text-brand-primary">Learn more <span aria-hidden="true">→</span>
                </p>
            </dd>
        </div>
        <div class="blob"></div>
    </NuxtLink>

</template>

<style scoped>
.card {
    position: relative;
    width: 200px;
    height: 180px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    ;
}

.bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 190px;
    height: 240px;
    z-index: 2;
    background: rgba(255, 255, 255, .95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
}

.blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
}

@keyframes blob-bounce {
    0% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
        transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
        transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
        transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
        transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
}
</style>