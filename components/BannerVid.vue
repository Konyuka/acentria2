<script setup>

const props = defineProps({
    bannerTitle: String,
})

</script>

<template>
    <div class="w-full bg-cover bg-center bg-no-repeat bg-black/70 mb-0 -mt-3 sticky top-[148px] z-20"
        style="background-image:url('/img/bg.png');">
        <div class="container">
            <div
                class="flex items-center bg-cover px-4 py-1 text-center md:py-7 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                <div
                    class="flex flex-col gap-6 mx-auto items-center justify-left text-center md:max-w-md lg:max-w-5xl">
                    <div class="ml-20 w-full grid grid-cols-12">
                        <div class="col-span-6">
                            <h1 v-html="bannerTitle" class="text-xl text-white font-bold my-2 "></h1>
                        </div>
                        <div class="col-span-6">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>