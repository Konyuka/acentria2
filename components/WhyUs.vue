<script setup>
const props = defineProps({
    whys: Array,
    intro: String,
    leftTitle: String,
})

</script>

<template>
    <div>

        <div class="relative w-full bg-cover bg-center bg-no-repeat bg-black" style="background-image: none">
            <div class="container">
                <div
                    class="flex items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                        class="flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">
                        <div class="w-full">
                            <p
                                class="text-left font-sans tracking-normal text-4xl lg:text-xl text-white font-semibold leading-tight lg:leading-tight">
                                {{ intro }}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto">
            <div class="py-20">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <div>
                            <h2 
                                v-html="leftTitle"
                                class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                            </h2>
                        </div>

                        <div
                            class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">

                            <div v-for="why in whys" class="flex flex-row gap-2">
                                <i class="material-symbols-outlined text-brand-primary text-4xl undefined"
                                    translate="no">{{ why.icon  }}</i>
                                <div>
                                    <h5 id=""
                                        class="font-sans text-sm pb-3 md:pb-4 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title !text-base font-semibold md:!pb-3 md:!text-xl">
                                        {{ why.title }}
                                    </h5>
                                    <p class="text-base leading-normal font-sans text-light-content text-base">
                                        {{ why.content }}
                                    </p>
                                    <p class="text-base leading-normal font-regular text-light-content text-base">
                                    </p>
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