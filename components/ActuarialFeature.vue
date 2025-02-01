<script setup>

const props = defineProps({
    content: Object
})

</script>

<template>

    <div>
        <div class="overflow-hidden bg-white py-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="font-sans mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <h2 class="text-base font-semibold leading-7 text-brand-primary">Acentria Actuarial Services</h2>
                            <p class="mt-2 section-heading text-gray-900">
                                {{ content.title }}
                            </p>
                            <p class="mt-6 text-xs leading-normal text-gray-600">
                                {{ content.content }}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center lg:justify-end">
                        <NuxtImg :src="content.image" alt="Product screenshot"
                            class="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:h-1/4">
                    </div>
                </div>
            </div>
        </div>


    </div>


</template>

<style></style>