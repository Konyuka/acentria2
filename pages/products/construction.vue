<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Construction',
    title: 'Safeguarding your construction projects',
    image: 'https://img.freepik.com/free-photo/construction-silhouette_1150-8336.jpg?t=st=1736587096~exp=1736590696~hmac=b332395a1a72bd67bc8abe7fa009fce7e8e1862ea1d53d71e1452def3d151f08&w=900',
});

const whatsCovered = ref([
    {
        name: 'General Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and advertising injury.',
        benefits: 'Helps cover legal fees, medical expenses, and damages, safeguarding your business assets.',
    },
    {
        name: 'Workers\' Compensation Insurance',
        icon: 'fas fa-user-injured',
        coverage: 'Provides benefits to employees who suffer work-related injuries or illnesses.',
        benefits: 'Covers medical expenses, rehabilitation costs, and a portion of lost wages, ensuring your employees are taken care of.',
    },
    {
        name: 'Builder\'s Risk Insurance',
        icon: 'fas fa-hard-hat',
        coverage: 'Protects buildings and structures under construction from damage due to fire, theft, vandalism, and certain natural disasters.',
        benefits: 'Ensures that your investment is protected throughout the construction process.',
    },
    {
        name: 'Motor Commercial Insurance',
        icon: 'fas fa-truck',
        coverage: 'Covers vehicles used for business purposes, including trucks, vans, and other commercial vehicles.',
        benefits: 'Provides protection against accidents, theft, and damage, keeping your fleet operational.',
    },
    {
        name: 'Equipment Insurance',
        icon: 'fas fa-tools',
        coverage: 'Protects construction equipment and machinery from damage or theft.',
        benefits: 'Ensures that your tools and equipment are covered, minimizing downtime and financial loss.',
    },
    {
        name: 'Professional Liability Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Also known as Errors & Omissions (E&O) insurance, it protects against claims of negligence, errors, or omissions in professional services.',
        benefits: 'Covers legal defense costs and damages, protecting your reputation and financial stability.',
    },
    {
        name: 'Pollution Liability Insurance',
        icon: 'fas fa-leaf',
        coverage: 'Provides protection against claims arising from pollution incidents caused by your construction activities.',
        benefits: 'Covers cleanup costs, legal fees, and damages, ensuring compliance with environmental regulations.',
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
        name: 'Customized Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are tailored to meet the specific needs of your construction projects.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your operations.',
    },
    {
        name: 'Expert Guidance',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of construction insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Construction <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The construction industry is inherently risky, with potential hazards ranging from on-site accidents to
                equipment failures and unforeseen delays. Our comprehensive construction insurance policies are designed
                to protect your business from these risks, ensuring financial stability and peace of mind.
            </p>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Construction
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
                Protect your construction projects with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the construction industry.
            </p>
        </div>

        <ContactForm />
    </div>
</template>
