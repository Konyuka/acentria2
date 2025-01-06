<script setup>
const props = defineProps({
    content: Object
})

const currentRoute = useRoute().fullPath

const showButton = computed(() => {
    if (currentRoute === '/insurance-products' || currentRoute === '/insurance/aviation-cover' || currentRoute === '/acentria-group-reinsurance') {
        return false
    }else{
        return true
    }
})

const theButtonTitle = computed(()=>{
    if (props.content.link === '/insurance-products') {
        return 'Pick your Industry'
    }else{
        return 'Learn More'
    }
})

</script>

<template>
    <div class="bg-white">
        <div class="container mx-auto flex gap-10 px-4 py-2" :class="content.orientation">
            <div class="flex flex-col justify-center lg:basis-1/2">
                <div class="pb-4">
                    <h2 v-html="content.heading" class="heading-class text-2xl font-semibold text-black"></h2>
                    <h3 v-html="content.subheading" class="font-semibold text-xl"></h3>
                </div>
                <div class="text-black pb-5 md:pb-6 py-auto">
                    <p v-html="content.content"
                        class="text-xs leading-normal font-regular text-black !text-inherit mb-4"></p>
                    <NuxtLink v-if="showButton" :to="content.link"
                        class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        {{ theButtonTitle }}
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                    </NuxtLink>
                </div>
            </div>
            <div class="relative py-4 lg:basis-1/2 flex items-center">
                <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                    style="color: transparent; object-fit: contain"
                    class="w-full max-h-[250px] h-full shadow-2xl rounded-lg !object-cover" :src="content.image" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>