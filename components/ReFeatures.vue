<script setup>

const props = defineProps({
    content: Object
})

</script>

<template>

    <div>
        <div class="bg-white py-3">
            <div class="container font-sans mx-auto px-6 lg:px-8">
                <div class="mx-auto max-w-5xl text-left">
                    <p class="font-sans mt-2 text-3xl font-semibold tracking-tight text-black">
                        Key Platform <span class="text-brand-primary">Features</span>
                    </p>
                    <p class="mt-6 text-sm leading-normal text-gray-700">
                        {{ content.description }}
                    </p>
                </div>
                <div class="mx-auto mt-8 max-w-7xl">
                    <dl class="grid max-w-7xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
                        <div v-for="cont in content.items" :key="cont.title"
                            class="relative pl-16 bg-brand-dim p-6 rounded-lg shadow-2xl">
                            <dt class="text-lg font-semibold leading-7 text-white">
                                <div
                                    class="mb-2 left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    <i :class="cont.icon" class="fas text-brand-primary subheading-class"></i>
                                </div>
                                {{ cont.title }}
                            </dt>
                            <dd class="mt-2 text-sm leading-normal text-white">
                                {{ cont.content }}
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    </div>

</template>

<style></style>