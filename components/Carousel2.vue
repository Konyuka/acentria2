<template>
    <div class="!overflow-x-hidden !font-sans bg-white">

        <div class="relative isolate overflow-hidden py-36 mt-20">

            <NuxtImg format="webp" :src="content.image" :alt="content.title"
                class="absolute inset-0 -z-10 h-full w-full !object-cover" />

            <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent opacity-100 z-0">
            </div>

            <div class="container relative z-50 mx-auto max-w-6xl font-sans">
                <div class="sm:grid grid-cols-10 -gap-10 -mt-5">
                    <div class="text-white col-span-1 hidden sm:block">
                        <div class="w-20 h-1 bg-white mt-7">
                        </div>
                    </div>
                    <div class="sm:col-span-9 sm:ml-20 lg:mx-0 text-center">
                        <h2 v-html="content.title" class="text-left bannerHeading text-white">
                        </h2>
                        <h2 v-html="content.subtitle" class="text-left bannerDescription text-white">
                        </h2>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script setup>
const props = defineProps({
    content: Object
})

</script>

<style scoped></style>
