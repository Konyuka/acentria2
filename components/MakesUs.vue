<template>
    <div class="bg-white !font-sans container">
        <div class="mx-auto max-w-7xl py-5 sm:px-2 lg:px-4">
            <div class="mx-auto max-w-7xl px-4 lg:max-w-none">
                <div class="max-w-7xl justify-between content-center">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 text-center">
                        About Us
                    </h2>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 max-w-6xl mx-auto">
                    <div v-for="incentive in incentives" :key="incentive.name" class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8  border-brand-primary">
                        <div class="sm:flex-shrink-0 flex justify-center">
                            <img class="h-16 w-16" :src="incentive.imageSrc" alt="" />
                        </div>
                        <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                            <h3 class="text-lg text-brand-primary font-semibold flex justify-center">{{ incentive.name
                                }}</h3>
                            <p class="mt-2 text-xs text-gray-500">{{ incentive.description }}</p>
                            <i class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const incentives = [
    {
        name: 'Who we are',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, Technology and Investment Advisory",
    },
    {
        name: 'What We Do',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "We offer the best solutions in Risk and Insurance, Reinsurance, Actuarial, and Investment Advisory. We consider the trust to be our most valuable resource.",
    },
    {
        name: 'Our journey',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "Our journey is about Empowering dreams, igniting imagination, and propelling prosperity to infinite possibilities for all our partners and the communities we serve.",
    },
]
</script>