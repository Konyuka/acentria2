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

const openIndex = ref(null);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <div class="bg-white px-4 pb-5 md:px-8 lg:px-16 font-sans">
        <div class="container max-w-7xl mx-auto ">

            <!-- FAQ section -->
            <div class="mx-auto my-4 max-w-5xl">
                <div class="divide-y divide-gray-200">

                    <dl class="mt-6 space-y-4 divide-y divide-gray-200">

                        <Disclosure as="div" v-for="(faq, index) in faqs" :key="faq.name" class="bg-gray-100"
                            v-slot="{ open }">
                            <dt :class="[open ? 'bg-brand-primary' : 'bg-gray-500']" class="py-2 px-6">
                                <DisclosureButton @click="toggle(index)"
                                    class="flex w-full items-start justify-between text-left text-gray-900">
                                    <span :class="[open ? 'text-white' : 'text-white']"
                                        class="text-lg font-semibold leading-7">{{ faq.name }}</span>
                                    <span class="ml-4 flex h-7 items-center">
                                        <PlusSmallIcon v-if="openIndex !== index" class="text-white h-6 w-6"
                                            aria-hidden="true" />
                                        <MinusSmallIcon v-else class="text-white h-6 w-6" aria-hidden="true" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" class="mt-2 px-6" v-show="openIndex === index">
                                <p class="text-base leading-normal text-gray-600" v-html="faq.content"></p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>