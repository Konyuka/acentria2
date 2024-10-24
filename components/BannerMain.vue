<script setup>
const props = defineProps({
    content: Object
})

</script>

<template>
    <div class="relative isolate overflow-hidden bg-white py-32 mt-40">

        <img :src="content.image"
            alt="Success Team Hands Up"
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

        <div class="absolute inset-0 bg-black opacity-70"></div>

        <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
            <div class="grid grid-cols-10 -gap-10">
                <div class="text-white col-span-1">
                    <div class="w-20 h-1 bg-white mt-3">

                    </div>
                </div>
                <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                    <h2 class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                        {{ content.subtitle }}
                    </h2>
                    <h2 class="text-left text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                        {{ content.title }}
                    </h2>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>