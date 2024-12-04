<script setup>
const props = defineProps({
    heroMinData: Object,
})

</script>

<template>
    <div>
        <div class="bg-brand-white flex flex-row  px-4 py-3 md:pt-8 md:pb-4 lg:pt-10 lg:pb-6 md:px-16">
            <div
                class="justify-between flex lg:flex-row flex-col-reverse h-full gap-6 container mx-auto pb-4 lg:pb-16 border-brand-gray-2 border-b-2 border-solid">
                <div class=" items-start flex flex-col justify-center gap-6 w-full lg:max-w-[40%]">
                    <div class="items-start flex max-w-full flex-col gap-3 lg:gap-6">

                        <div>
                            <h2 id=""
                                class="font-sans text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title !pb-0">
                                {{ heroMinData.title }}
                            </h2>
                        </div>
                        <p
                            class="font-sans text-base leading-normal font-regular text-light-content line-clamp-5 max-h-36 max-w-full">

                            {{ heroMinData.content }}
                        </p>
                    </div>
                </div>
                <div class="relative min-h-[20rem] basis-1/2 md:min-h-[30rem]">
                    <NuxtImg alt="Business people discussing Singapore AI regulations" fetchpriority="high" decoding="async"
                        data-nimg="fill" class="!rounded-lg h-full w-full object-contain"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        sizes="100vw" :src="heroMinData.image">
                </div>

            </div>
        </div>


    </div>
</template>

<style scoped></style>