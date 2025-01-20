<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Protection',
    title: 'Protecting Your Energy and Mining Investments',
    image: 'https://img.freepik.com/free-photo/wide-angle-shot-machine-landscape-made-sand-stones_181624-15669.jpg?t=st=1736587369~exp=1736590969~hmac=ec9a4f88838e8656342d1b5f41bcd262c648b27c861233236d83b18244a20468&w=996',
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
        coverage: 'Covers physical assets such as buildings, equipment, and machinery against damage or loss due to fire, theft, and other unforeseen events.',
        benefits: 'Protects your physical assets, ensuring that your business can recover quickly from property-related incidents.',
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
        name: 'Environmental Liability Insurance',
        icon: 'fas fa-leaf',
        coverage: 'Protects against claims arising from pollution incidents caused by your operations.',
        benefits: 'Covers cleanup costs, legal fees, and damages, ensuring compliance with environmental regulations.',
    },
    {
        name: 'Equipment Insurance',
        icon: 'fas fa-tools',
        coverage: 'Protects equipment and machinery from damage or theft.',
        benefits: 'Ensures that your tools and equipment are covered, minimizing downtime and financial loss.',
    },
    {
        name: 'Professional Liability Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Also known as Errors & Omissions (E&O) insurance, it protects against claims of negligence, errors, or omissions in professional services.',
        benefits: 'Covers legal defense costs and damages, protecting your reputation and financial stability.',
    },
    {
        name: 'Surety Bonds',
        icon: 'fas fa-file-contract',
        coverage: 'Guarantees the performance and completion of contractual obligations.',
        benefits: 'Provides financial assurance to project owners, enhancing your credibility and competitiveness.',
    },
]);

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your energy and mining operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Guidance',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of energy and mining insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Energy & Mining <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The energy and mining industries are critical to global infrastructure and economic development, but
                they also face unique and complex risks. Our comprehensive insurance solutions are designed to protect
                your operations, ensuring financial stability and peace of mind.
            </p>
        </div>
        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Energy &
                    Mining Insurance</span></h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
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
                Protect your energy and mining investments with our reliable and comprehensive insurance solutions.
                <span class="text-brand-primary italic underline">Contact us today</span> to learn more about our
                policies and how we can help you secure your future in the energy and mining industries.
            </p>
        </div>
        <ContactForm />
    </div>
</template>
