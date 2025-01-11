<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Manufacturing',
    title: 'Protecting Your Manufacturing Business',
    image: 'https://img.freepik.com/free-photo/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory_609648-769.jpg?t=st=1736587567~exp=1736591167~hmac=5ebd0b4c286aa6abadbb424b493a07cd9f22626164cb4ce4cfc8cd7a2d1d1aa2&w=900',
});

const whatsCovered = ref([
    {
        name: 'General Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and advertising injury.',
        benefits: 'Helps cover legal fees, medical expenses, and damages, safeguarding your business assets.',
    },
    {
        name: 'Property Insurance',
        icon: 'fas fa-home',
        coverage: 'Covers physical assets such as buildings, equipment, and inventory against damage or loss due to fire, theft, and other unforeseen events.',
        benefits: 'Ensures that your business can recover quickly from property-related incidents, minimizing downtime and financial loss.',
    },
    {
        name: 'Workers\' Compensation Insurance',
        icon: 'fas fa-user-injured',
        coverage: 'Provides benefits to employees who suffer work-related injuries or illnesses.',
        benefits: 'Covers medical expenses, rehabilitation costs, and a portion of lost wages, ensuring your employees are taken care of.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your operations.',
        benefits: 'Helps maintain financial stability and continuity of operations during unexpected interruptions.',
    },
    {
        name: 'Product Liability Insurance',
        icon: 'fas fa-cube',
        coverage: 'Protects against claims of injury or damage caused by products manufactured by your business.',
        benefits: 'Covers legal defense costs and damages, protecting your reputation and financial stability.',
    },
    {
        name: 'Machine Breakdown Insurance',
        icon: 'fas fa-cogs',
        coverage: 'Covers the cost of repairing or replacing equipment that breaks down due to mechanical or electrical failure.',
        benefits: 'Minimizes downtime and financial loss by ensuring that your equipment is quickly repaired or replaced.',
    },
    {
        name: 'Motor Commercial Insurance',
        icon: 'fas fa-truck',
        coverage: 'Covers vehicles used for business purposes, including trucks, vans, and other commercial vehicles.',
        benefits: 'Provides protection against accidents, theft, and damage, keeping your fleet operational.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-shield-virus',
        coverage: 'Protects against losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines, helping you manage the financial impact of cyber threats.',
    },
]);

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your manufacturing business.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your operations.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of manufacturing insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Manufacturing <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The manufacturing industry is a cornerstone of the global economy, but it also faces unique risks and
                challenges. From equipment breakdowns to employee injuries, our comprehensive insurance solutions are
                designed to protect your business, ensuring financial stability and peace of mind.
            </p>
        </div>
        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Manufacturing
                    Insurance</span></h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :href="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class="mt-1 text-black text-md leading-normal font-bold">
                            <p>{{ feature.name }}</p>
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
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base leading-7 text-gray-600">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600"></h5>
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
                Protect your manufacturing business with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the manufacturing industry.
            </p>
        </div>
        <ContactForm />
    </div>
</template>
