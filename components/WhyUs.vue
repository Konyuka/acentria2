<script setup>
const props = defineProps({
    whys: Array,
    intro: String,
    leftTitle: String,
})

</script>

<template>
    <div>
        <div class="bg-white">
            <div class="container mx-auto pb-16">
                <div class="container mx-auto max-w-6xl">
                    <h2 v-html="leftTitle" class="text-2xl font-semibold text-black sm:pb-4 pt-0"></h2>
                    <div
                        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div class="mr-5">
                            <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                                style="color: transparent; object-fit: contain"
                                class="w-full h-[300px] shadow-2xl rounded-lg !object-cover"
                                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div
                            class="col-span-2 grid grid-cols-1 gap-x-8 text-base leading-7 text-gray-600 sm:grid-cols-2">
                            <div v-for="why in whys" :key="why.title" class="flex flex-row">
                                <i class="fas fa-caret-right text-brand-primary text-xl" translate="no"></i>
                                <div class="ml-3">
                                    <h5 class="text-[16px] font-semibold pb-1">{{ why.title }}</h5>
                                    <p class="text-xs leading-normal">{{ why.content }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>