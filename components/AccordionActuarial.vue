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
    <div class="accordion">
        <div v-for="faq in faqs" :key="faq.name" class="faq-item">
            <h3 class="text-xl font-semibold">{{ faq.name }}</h3>
            <p class="text-sm leading-relaxed">{{ faq.content }}</p>
        </div>
    </div>
</template>

<style scoped>
.accordion {
    padding: 1rem;
}
.faq-item {
    margin-bottom: 1rem;
}
</style>