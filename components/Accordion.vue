<script setup>
const props = defineProps({
    faqs: Array,
})  

</script>

<template>
    <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
        <div class="max-w-5xl mx-auto pb-4 lg:pb-16">
            <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20 grid grid-cols-2 gap-2">

                <article v-for="faq in faqs" class="relative isolate !mt-8 lg:!mt-10">
                    <div class="w-full">

                        <div class="group relative font-sans">
                            <h3 id=""
                                class="text-xl pb-4 md:pb-5 font-semibold md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-light-title !pb-0 !text-xl">
                                <p>
                                    <i class="fas fa-caret-right mr-2 text-brand-primary"></i> {{ faq.name }}
                                </p>
                            </h3>
                            <p v-html="faq.content" class="mt-5 text-sm leading-6 text-gray-600">
                            </p>
                        </div>

                    </div>
                </article>

            </div>
        </div>
    </div>
</template>

<style scoped></style>