<script setup>
const props = defineProps({
    InsuranceCardsContent: Object,
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
                    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-0">
                        <div v-for="user in InsuranceCardsContent.users" :key="user.name"
                            class="shadow-2xl group button-animation border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit rounded-xl bg-white p-5 w-full h-full">
                            <div class="font-sans flex h-fit flex-col">

                                <div class="flex justify-between">
                                    <h4 id="" class="font-sans subheading-class font-semibold">
                                        <i :class="user.icon" class="text-brand-primary mr-1"></i> {{ user.name }}
                                    </h4>
                                    <i class="fas fa-arrow-right text-brand-primary text-md pb-2" translate="no"></i>
                                </div>
                                <p class="font-sans text-sm text-gray-700 leading-tight">
                                    {{ user.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped></style>