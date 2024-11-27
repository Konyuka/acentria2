<script setup>
const props = defineProps({
    content: Object
})

const currentRoute = useRoute().fullPath

const showButton = computed(() => {
    if (currentRoute === '/insurance-products' || currentRoute === '/insurance/aviation-cover') {
        return false
    }else{
        return true
    }
})

</script>

<template>
    <div class="bg-white">
        <div class="container mx-auto flex px-4  py-10 lg:gap-16" :class="orientation">
            <div class="flex flex-col justify-center lg:basis-1/2">
                <div class="pb-4">
                    <h2 v-html="content.heading" class="heading-class text-black"></h2>
                    <h3 v-html="content.subheading" class="font-semibold text-[21px]"></h3>
                </div>
                <div class="text-light-content pb-5 md:pb-6 py-auto">
                    <p v-html="content.content"
                        class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"></p>
                    <NuxtLink v-if="showButton" :href="content.link"
                        class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                    </NuxtLink>
                </div>
            </div>
            <div class="relative py-4 lg:basis-1/2">
                <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                    style="color: transparent; object-fit: contain"
                    class="w-full h-[320px] shadow-2xl rounded-lg !object-cover" :src="content.image"
                    data-v-inspector="components/Why.vue:34:17" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>