<script setup>
const props = defineProps({
    whys: Array,
    intro: String,
    leftTitle: String,
})

</script>

<template>
    <div>

        <!-- <div class="relative w-full bg-cover bg-center bg-no-repeat bg-black/60 font-sans"
            style="background-image:url('/img/bg.png');">
            <div class="container">
                <div
                    class="flex items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">
                        <div class="w-full">
                            <p
                                class="text-left font-sans tracking-normal text-md text-white font-semibold leading-tight lg:leading-tight">
                                {{ intro }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div> -->

        <div class="bg-white">
            <div class="container mx-auto pb-16">
                <div class="">
                    <div class="container mx-auto max-w-6xl">
                        <h2 v-html="leftTitle" class="heading-class text-black sm:pb-4 pt-0">
                        </h2>
                        <div
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div class="mr-5">


                                <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain"
                                    class="w-full h-[320px] shadow-2xl rounded-lg !object-cover"
                                    src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                                    data-v-inspector="components/Why.vue:34:17" />
                            </div>

                            <div
                                class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-5 text-base leading-7 text-gray-600 sm:grid-cols-2">

                                <div v-for="why in whys" class="flex flex-row gap-2">
                                    <i class="material-symbols-outlined text-brand-primary text-4xl undefined"
                                        translate="no">{{ why.icon }}</i>
                                    <div>
                                        <h5 id="" class="subheading-class pb-3 md:!pb-3">
                                            {{ why.title }}
                                        </h5>
                                        <p class="text-xs leading-normal">
                                            {{ why.content }}
                                        </p>
                                    </div>
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