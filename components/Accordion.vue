<script setup>
const props = defineProps({
    faqs: Array,
})

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MinusSmallIcon, PlusSmallIcon, } from '@heroicons/vue/24/outline'

const openIndex = ref(null);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <div class="bg-white pb-5 font-sans">
        <div class="container ">

            <div class="divide-y divide-gray-200">

                <dl class="divide-y divide-gray-200">

                    <Disclosure as="div" v-for="(faq, index) in faqs" :key="faq.name" v-slot="{ open }">
                        <dt :class="[open ? 'bg-brand-primary' : 'bg-black']" class="py-3 px-5">
                            <DisclosureButton @click="toggle(index)"
                                class="flex w-full items-start justify-between text-left">
                                <span :class="[open ? 'text-white' : 'text-white']" class="card-heading">{{ faq.name
                                    }}</span>
                                <span class="flex h-7 items-center">
                                    <PlusSmallIcon v-if="openIndex !== index" class="text-white h-6 w-6"
                                        aria-hidden="true" />
                                    <MinusSmallIcon v-else class="text-white h-6 w-6" aria-hidden="true" />
                                </span>
                            </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" class="py-2 px-10" v-show="openIndex === index">
                            <p class="!content text-gray-600" v-html="faq.content"></p>
                        </DisclosurePanel>
                    </Disclosure>
                </dl>
            </div>

        </div>
    </div>
</template>

<style scoped></style>