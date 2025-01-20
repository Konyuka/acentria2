<script setup>
const props = defineProps({
    content: Object
})

</script>

<template>
    <div class="relative isolate overflow-hidden bg-white py-32 mt-8">

        <NuxtImg :src="content.image" :alt="content.subtitle"
            class="absolute inset-0 -z-10 h-full w-full !object-cover object-right md:object-center" />

        <!-- <div class="absolute inset-0 bg-black opacity-30"></div> -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20 opacity-100 z-0"></div>

        <div class="container relative z-50 font-sans">
            <div class="grid grid-cols-10 -gap-10">
                <div class="text-white col-span-1">
                    <div class="w-20 h-1 bg-white mt-3">

                    </div>
                </div>
                <div class="col-span-9 ml-20 lg:mx-0 text-center">
                    <h2 v-html="content.subtitle" class="text-left bannerDescription text-white font-sans pb-5">
                    </h2>
                    <h2 v-html="content.title" class="text-left bannerHeading text-white font-sans">
                    </h2>

                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>