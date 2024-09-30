<script setup>
const props = defineProps({
    faqs: Array,
})  

</script>

<template>
    <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-2">
        <div class="max-w-7xl mx-auto pb-4">
            <!-- <div class="pb-5 text-center">
                <h2
                    class="font-sans tracking-normal text-3xl lg:text-4xl text-brand-primary font-semibold leading-tight lg:leading-tight my-10">
                    Frequently Asked Questions
                </h2>
            </div> -->
            <div class="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-2">

                <article v-for="faq in faqs" class="relative isolate !mt-2">
                    <div class="w-full">

                        <div class="group relative font-sans">
                            <h3 id=""
                                class="text-xl md:pb-5 font-semibold md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-light-title !pb-0 !text-xl">
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