<script setup>
const props = defineProps({
    content: Object
})

// const currentRoute = useRoute().fullPath

const route = useRoute();
const currentRoute = route.path;

const showButton = computed(() => {
    if (props.content.link === '/' || props.content.link === '/operating-results' || currentRoute === '/insurance-products' || currentRoute === '/insurance/aviation-cover' || currentRoute === '/acentria-group-reinsurance' || props.content.subheading === 'A reliable partner you can trust in <br>  Insurance & Risk Management') {
        return false
    } else {
        return true
    }
})

const showButton2 = computed(() => {
    if (props.content.link === '/operating-results' || props.content.link === '/catastrophes' || props.content.link === '/reinsurance-products') {
        return true
    }
})

const theButtonTitle = computed(() => {
    if (props.content.link === '/insurance-products' || props.content.link === '/reinsurance-products') {
        return 'Pick your Industry'
    } else if (props.content.link === '/acentria-benefits'){
        return 'Learn how you benefit by joining us'
    } 
    else {
        return 'Learn More'
    }
})

</script>

<template>
    <div class="bg-white">
        <div class="container mx-auto flex gap-10 py-5" :class="content.orientation">
            <div class="grid grid-cols-12 gap-10">
                <template v-if="content.orientation === 'image-left'">
                    <div class="col-span-5 relative flex items-center">
                        <NuxtImg :alt="content.heading" loading="lazy" decoding="async"
                            class="w-full h-auto shadow-2xl rounded-lg !object-cover" :src="content.image" />
                    </div>
                    <div class="col-span-7 flex flex-col justify-center">
                        <div class="pb-3">
                            <h1 v-html="content.heading" class="section-heading"></h1>
                            <h4 v-html="content.subheading" class="card-heading"></h4>
                        </div>
                        <div>
                            <p v-html="content.content" class="content !font-sans pb-5"></p>
                            <NuxtLink v-if="showButton" :to="content.link">
                                <AppButton :title="theButtonTitle" />
                            </NuxtLink>
                            <NuxtLink v-if="showButton2" :to="content.link">
                                <AppButton :title="theButtonTitle" />
                            </NuxtLink>
                        </div>
                    </div>
                </template>

                <template v-else>
                    <div class="col-span-7 flex flex-col justify-center">
                        <div class="pb-3">
                            <h1 v-html="content.heading" class="section-heading"></h1>
                            <h4 v-html="content.subheading" class="card-heading"></h4>
                        </div>
                        <div>
                            <p v-html="content.content" class="content !font-sans pb-5"></p>
                            <NuxtLink v-if="showButton" :to="content.link">
                                <AppButton :title="theButtonTitle" />
                            </NuxtLink>
                            <NuxtLink v-if="showButton2" :to="content.link">
                                <AppButton :title="theButtonTitle" />
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-span-5 relative flex items-center">
                        <NuxtImg :alt="content.heading" loading="lazy" decoding="async"
                            class="w-full h-auto shadow-2xl rounded-lg !object-cover" :src="content.image" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>


<style scoped></style>