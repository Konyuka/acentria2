<script setup>

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Shipping!',
    title: 'Protect Your Marine Operations',
    image: '/img/in-marine.jpg',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your marine operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of marine insurance and find the best solutions for your needs.',
    },
    {
        name: 'Easy Claims Process',
        icon: 'fas fa-check-circle',
        description: 'Our claims process is hassle free. It is important to familiarize yourself with your policy coverage and necessary claims documents when purchasing cover. Our team of experts are readily available to guide you through the process. <a href="/launch-claim" class="text-brand-primary underline">Launch a claim</a>.',
    },
]);

const whatsCovered = ref([
    {
        name: 'Marine Cargo Insurance',
        icon: 'fas fa-ship',
        coverage: 'Protects goods in transit against loss or damage from various risks, including theft, fire, and natural disasters.',
        benefits: 'Ensures that your cargo is covered throughout the entire supply chain, minimizing financial loss and disruption.',
    },
    {
        name: 'Marine Hull Insurance',
        icon: 'fas fa-anchor',
        coverage: 'Covers physical damage to the vessel, including machinery and equipment, whether on the water or in dry dock.',
        benefits: 'Provides financial protection for your vessels, ensuring quick recovery and minimal downtime in case of damage.',
    },
    {
        name: 'Marine Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and pollution caused by your marine operations.',
        benefits: 'Covers legal fees, medical expenses, and damages, safeguarding your business assets and reputation.',
    },
    {
        name: 'Protection and Indemnity (P&I) Insurance',
        icon: 'fas fa-shield-alt',
        coverage: 'Provides comprehensive liability coverage for shipowners, including crew injuries, collision liabilities, and environmental damage.',
        benefits: 'Ensures that your liabilities are covered, maintaining financial stability and compliance with international regulations.',
    },
    {
        name: 'Freight Forwarders Liability Insurance',
        icon: 'fas fa-box',
        coverage: 'Protects freight forwarders against claims for loss or damage to goods in their care, custody, or control.',
        benefits: 'Enhances trust and reliability by ensuring that your clients\' goods are protected during transit.',
    },
    {
        name: 'Port and Terminal Operators Insurance',
        icon: 'fas fa-warehouse',
        coverage: 'Covers liabilities and property damage specific to port and terminal operations, including cargo handling and storage.',
        benefits: 'Provides comprehensive protection for your port and terminal operations, ensuring smooth and uninterrupted services.',
    },
    {
        name: 'Ship Repairers Liability Insurance',
        icon: 'fas fa-wrench',
        coverage: 'Protects ship repairers against claims for damage to vessels in their care, custody, or control.',
        benefits: 'Ensures that your ship repair operations are covered, maintaining trust and reliability with your clients.',
    },
    {
        name: 'War and Terrorism Insurance',
        icon: 'fas fa-bomb',
        coverage: 'Protects against losses due to acts of war, terrorism, and other politically motivated events.',
        benefits: 'Provides peace of mind in an increasingly uncertain global environment.',
    },
]);



</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Marine <span class="text-brand-primary"> Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The marine industry is vital to global trade and commerce, but it also faces unique risks and
                challenges. Our comprehensive marine insurance solutions are designed to protect your corporate shipping
                operations, ensuring financial stability and peace of mind.
            </p>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary"> Marine
                    Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :href="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 text-black text-md leading-normal font-bold">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="flex flex-col gap-5 text-brand-primary font-semibold">
                            <p class="mt-5">
                                Coverage: <span class="text-black !font-normal">{{ feature.coverage }}</span>
                            </p>
                            <p>
                                Benefits: <span class="text-black !font-normal">{{ feature.benefits }}</span>
                            </p>
                        </div>

                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why Choose <span class="text-brand-primary">Our Insurance</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600">

                        </h5>
                        <p class="leading-normal font-regular text-light-content text-xs" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">

                Protect your marine operations with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span>
                to learn more about our policies and how we can help you secure your future in the marine industry.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
