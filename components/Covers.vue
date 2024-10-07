<template>
    <div class="bg-white font-sans">

        <main>
            <!-- Pricing section -->
            <div class="mx-auto mt-16 max-w-7xl px-2">
                <div class="mx-auto max-w-5xl text-center">
                    <h1 class="text-base font-semibold leading-7 text-brand-primary">Most Popular</h1>
                    <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Car Insurance Cover Options
                    </p>
                </div>
                <p class="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-gray-600">Choose an affordable plan
                    that’s packed with the best features.
                </p>
                <div class="mt-16 flex justify-center">
                    <fieldset aria-label="Payment frequency">
                        <RadioGroup v-model="frequency"
                            class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
                            <RadioGroupOption as="template" v-for="option in pricing.frequencies" :key="option.value"
                                :value="option" v-slot="{ checked }">
                                <div
                                    :class="[checked ? 'bg-brand-primary text-white' : 'text-gray-500', 'cursor-pointer rounded-full px-2.5 py-1']">
                                    {{ option.label }}</div>
                            </RadioGroupOption>
                        </RadioGroup>
                    </fieldset>
                </div>
                <div
                    class="isolate mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 xl:mx-0 xl:max-w-none xl:grid-cols-3">
                    <div v-for="tier in pricing.tiers" :key="tier.id"
                        :class="[tier.mostPopular ? 'ring-2 ring-brand-primary' : 'ring-1 ring-gray-200', 'rounded-3xl p-8']">
                        <h2 :id="tier.id"
                            :class="[tier.mostPopular ? 'text-brand-primary' : 'text-gray-900', 'text-lg font-semibold leading-8']">
                            {{ tier.name }}</h2>
                        <p class="mt-4 text-sm leading-6 text-gray-600">{{ tier.description }}</p>
                        <p class="mt-6 flex items-baseline gap-x-1">
                            <span class="text-4xl font-bold tracking-tight text-gray-900">{{ tier.price[frequency.value]
                                }}</span>
                            <span class="text-sm font-semibold leading-6 text-gray-600">{{ frequency.priceSuffix
                                }}</span>
                        </p>
                        <a :href="tier.href" :aria-describedby="tier.id"
                            :class="[tier.mostPopular ? 'bg-brand-primary text-white shadow-sm hover:bg-black' : 'text-brand-primary ring-1 ring-inset ring-gray-200 hover:ring-black', 'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary']">
                            Get a Quote <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                        <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <CheckIcon class="h-6 w-5 flex-none text-brand-primary" aria-hidden="true" />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </main>

    </div>
</template>

<script setup>
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


const pricing = {
    frequencies: [
        { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
        { value: 'annually', label: 'Annually', priceSuffix: '/year' },
    ],
    tiers: [
        {
            name: 'Comprehensive Car Insurance',
            id: 'tier-hobby',
            href: '#',
            price: { monthly: 'From KES12000', annually: 'From KES24000' },
            description: 'Our Comprehensive Car Insurance policy covers loss or damage to your own car and the damage it causes to other people\'s cars and property.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
            mostPopular: false,
        },
        {
            name: 'Third Party Property, Fire and Theft Cover Insurance',
            id: 'tier-freelancer',
            href: '#',
            price: { monthly: 'From KES15000', annually: 'From KES500000' },
            description: 'Our Third Party Property, Fire and Theft Insurance covers your legal liability for the accidental damage your car causes to other people\'s property.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            mostPopular: true,
        },
        {
            name: 'Third Party Property Only Car Insurance',
            id: 'tier-startup',
            href: '#',
            price: { monthly: 'From KES8500', annually: 'From KES70000' },
            description: 'Our Third Party Property Only Insurance covers your legal liability for accidental damage your car causes to other people\'s property, including their vehicles.',
            features: [
                '25 products',
                'Up to 10,000 subscribers',
                'Advanced analytics',
                '24-hour support response time',
                'Marketing automations',
            ],
            mostPopular: false,
        },
    ],
}


const mobileMenuOpen = ref(false)
const frequency = ref(pricing.frequencies[0])
</script>