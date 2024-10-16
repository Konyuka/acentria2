<script setup>
const props = defineProps({
    faqs: Array,
})  

import { defineComponent, h, ref } from 'vue'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupOption,
} from '@headlessui/vue'
import { Bars3Icon, MinusSmallIcon, PlusSmallIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'
</script>

<template>
    <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-2 font-sans">
        <div class="max-w-7xl mx-auto pb-4">
            <!-- <div class="pb-5 text-center">
                <h2
                    class="font-sans tracking-normal text-3xl lg:text-4xl text-brand-primary font-semibold leading-tight lg:leading-tight my-10">
                    Frequently Asked Questions
                </h2>
            </div> -->

            <!-- FAQ section -->
            <div class="mx-auto my-2 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-6xl divide-y divide-gray-900/10">
                    <!-- <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions
                    </h2> -->
                    <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" v-for="faq in faqs" :key="faq.name" class="pt-6" v-slot="{ open }">
                            <dt>
                                <DisclosureButton
                                    class="flex w-full items-start justify-between text-left text-gray-900">
                                    <span class="text-base font-semibold leading-7">{{ faq.name }}</span>
                                    <span class="ml-6 flex h-7 items-center">
                                        <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
                                        <MinusSmallIcon v-else class="!text-brand-primary h-6 w-6" aria-hidden="true" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" class="mt-2 pr-12">
                                <p class="text-sm leading-7 text-gray-600" v-html="faq.content"></p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>

            <!-- <div class="space-y-5 grid grid-cols-1 md:grid-cols-2 gap-2">

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

            </div> -->
        </div>
    </div>
</template>

<style scoped></style>