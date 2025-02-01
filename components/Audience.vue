<script setup>
const props = defineProps({
    InsuranceCardsContent: Object,
})

const currentRoute = computed(() => {
    const route = useRoute();
    return route.path;
})

const gridCols = computed(() => {

    if (currentRoute.value === '/insurance/motor-insurance') {
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'
    } else {
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    }
})

</script>

<template>
    <div class="bg-white">
        <section id="" class="relative py-5">
            <div class="container">
                <div class="pb-7 text-left">
                    <h1 v-html="InsuranceCardsContent.title" class="font-sans  text-2xl text-black font-semibold">
                    </h1>
                </div>
                <div>
                    <div :class="gridCols" class="container grid  gap-4 py-0">
                        <NuxtLink :to="user.link" v-for="user in InsuranceCardsContent.users" :key="user.name"
                            class="relative shadow-2xl group button-animation border-t-8 border-solid border-gray-500 shadow-card m-auto flex min-h-fit rounded-xl bg-white p-5 w-full h-full">
                            <div class=" font-sans flex h-fit flex-col">

                                <div class="flex justify-between">
                                    <h4 id="" class="font-sans subsection-heading font-semibold">
                                        <i :class="user.icon" class="text-brand-primary mr-1"></i> {{ user.name }}
                                    </h4>
                                </div>
                                <p class="!mb-3  font-sans text-sm text-gray-700 leading-tight">
                                    {{ user.description }}
                                </p>
                                <div class="text-[13px] font-bold absolute bottom-0 right-5 text-gray-600">

                                    Learn More <i class=" ml-2 fas fa-arrow-right text-brand-primary text-md pb-2"
                                        translate="no"></i>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>