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

    <div class="relative isolate overflow-hidden bg-white py-20 mt-20 mb-5">

        <img :src="content.image" alt="Success Team Hands Up"
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="relative z-50 mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-12 gap-10">
                <div class="col-span-1">
                    <div class="w-20 h-1 bg-white mt-3">

                    </div>
                </div>
                <div class="col-span-11 text-center lg:text-left">
                    <h2 v-show="showFirstLabel" class="text-lg lg:text-xl font-semibold text-white mb-4">
                        {{ content.subTitle }}
                    </h2>
                    <h1 class="text-xl lg:text-2xl font-semibold text-white">
                        {{ content.title }}
                    </h1>
                </div>
            </div>
        </div>

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
</style>