<script setup>
const props = defineProps({
    whys: Array
})

</script>

<template>
    <div>
        <section id="" class="relative py-2 bg-white text-left">
            <div class="container px-4">
                <h2 class="text-2xl font-semibold text-gray-900 py-5">
                    Why work with <span class="text-brand-primary">Acentria</span>
                </h2>
            </div>
        </section>
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
            <div v-for="item in whys" :key="item.name"
                class="button-animation border-2 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[200px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                <div class="font-sans flex h-fit flex-col">
                    <div>
                        <h4 id="" class="subheading-class pb-4 leading-normal text-black">
                            {{ item.name }}
                        </h4>
                    </div>
                    <p class="leading-normal text-black text-xs">
                        {{ item.content }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>