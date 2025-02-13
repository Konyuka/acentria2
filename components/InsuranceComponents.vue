<script setup>

const props = defineProps({
    whyTheInsurance: Object,
    whatsCovered: Array,
    getStarted: Object,
})

</script>

<template>

    <div class="bg-white">

        <div class="container py-10">
            <h1 class="section-heading pb-5" v-html="whyTheInsurance.title"></h1>
            <p class="content" v-html="whyTheInsurance.description"></p>
        </div>

        <div class="container">
            <h1 class="section-heading pb-5">Coverage <span class="text-brand-primary"> Highlights</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-4xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 card-heading">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="mt-1 content">
                            <p>
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container py-10">
            <h1 class="section-heading pb-5" v-html="getStarted.title"></h1>
            <p class="content" v-html="getStarted.description"></p>

            <div class="my-5 flex gap-5">
                <NuxtLink to="/contact-acentria-group" class="">
                    <AppButton title="Engage an Expert" />
                </NuxtLink>
                <Nuxtlink to="/contact-acentria-group" class="">
                    <AppButton title=" Compare Quotes" />
                </Nuxtlink>
            </div>
        </div>


    </div>

</template>

<style scoped></style>