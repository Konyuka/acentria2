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
    <div class="bg-white py-6 md:px-16 md:pb-4 md:pt-0 lg:pb-2 font-sans">
        <div class="container mx-auto pb-4">
            <div class="mx-auto my-2 left-0">
                <div class="mx-auto divide-y divide-gray-900/10">
                    <dl class="mt-10 space-y-4 divide-y divide-gray-900/10">
                        <Disclosure as="div" v-for="faq in faqs" :key="faq.name" class="pt-0 bg-gray-100 p-0" v-slot="{ open }">
                            <dt :class="[open ? 'bg-brand-primary' :'bg-black/50']" class="py-2 px-10">
                                <DisclosureButton class="flex w-full items-start justify-between text-left text-gray-900">
                                    <span :class="[open ? 'text-white' : 'text-white']" class="text-base font-semibold leading-7">{{ faq.name }}</span>
                                    <span class="ml-6 flex h-7 items-center">
                                        <PlusSmallIcon v-if="!open" class="text-white h-6 w-6" aria-hidden="true" />
                                        <MinusSmallIcon v-else class="text-white h-6 w-6" aria-hidden="true" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" class="mt-2 pr-12 px-10">
                                <p class="text-sm leading-relaxed text-gray-600" v-html="faq.content"></p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>