<script setup>
const props = defineProps({
    InsuranceBannerContent: Object,
})

const currentRoute = useRoute().fullPath
const showButton = computed(() => {
    if (currentRoute === '/claims/car-claims') {
        return false
    } else {
        return true
    }
})
</script>

<template>
    <div>
        <div class="relative isolate overflow-hidden bg-white py-20 mt-20">
            <NuxtImg :src="InsuranceBannerContent.image" alt="Success Team Hands Up"
                class="absolute inset-0 -z-10 h-full w-full object-cover" />

            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                <div class="grid grid-cols-10 gap-10">
                    <div class="text-white col-span-1">
                        <div class="w-20 h-1 bg-white mt-3"></div>
                    </div>
                    <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                        <h2
                            class="text-left text-xl font-semibold tracking-tight text-white sm:text-6xl font-sans mb-4">
                            {{ InsuranceBannerContent.subtitle }}
                        </h2>
                        <h2 v-html="InsuranceBannerContent.title"
                            class="text-left text-4xl font-semibold tracking-tight text-white font-sans"></h2>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>

</style>