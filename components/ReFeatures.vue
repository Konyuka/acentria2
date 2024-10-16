<script setup>

const props = defineProps({
    content: Object
})

</script>

<template>

    <div>
        <div class="bg-white py-5 mb-10">
            <div class="font-sans mx-auto max-w-7xl px-6 lg:px-2">
                <div class="mx-auto max-w-5xl lg:text-center">
                    <p class="font-sans mt-2 text-3xl font-semibold tracking-tight text-brand-primary">
                        Key Platform Features
                    </p>
                    <p class="mt-6 text-md text-secondary">
                        {{ content.description }}
                    </p>
                </div>
                <div class="mx-auto mt-8 max-w-7xl">
                    <dl class="grid max-w-7xl grid-cols-1 gap-2  lg:max-w-none lg:grid-cols-2">

                        <div v-for="cont in content.items" class="relative pl-16 bg-brand-dim p-5 rounded-lg shadow-2xl">
                            <dt class="text-md font-semibold leading-7 text-white">
                                <div
                                    class="mb-2 left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                    <i :class="cont.icon" class="fas text-brand-primary text-xl"></i>
                                </div>
                                {{ cont.title }}
                            </dt>
                            <dd class="mt-2 text-xs text-white">
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