<script setup>

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Farming!',
    title: 'Protect your livestock and crop',
    image: 'https://img.freepik.com/free-photo/green-tea-bud-leaves-green-tea-plantations-morning_335224-955.jpg?t=st=1736588022~exp=1736591622~hmac=7e27f21a7a7c2aeb91fd57b58fe29f5c843e4fec13e7f0b1dee3cd181c1a2c45&w=900',
})

const whatsCovered = ref([
    {
        name: 'Crop Insurance',
        icon: 'fas fa-seedling',
        coverage: 'Protects against losses due to natural disasters, such as hail, drought, and floods, as well as damage from pests and diseases.',
        benefits: 'Ensures financial stability even in the face of adverse conditions, helping you recover and continue operations.',
    },
    {
        name: 'Livestock Insurance',
        icon: 'fas fa-paw',
        coverage: 'Provides protection for your animals against diseases, accidents, and natural disasters.',
        benefits: 'Helps cover the cost of veterinary care, replacement of livestock, and loss of income due to reduced production.',
    },
    {
        name: 'Farm Property Insurance',
        icon: 'fas fa-home',
        coverage: 'Covers buildings, equipment, and machinery used in your agricultural operations.',
        benefits: 'Protects your physical assets from damage or loss due to fire, theft, and other unforeseen events.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your farming operations.',
        benefits: 'Ensures your business can continue to operate smoothly, even during unexpected interruptions.',
    },
]);
const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your agricultural business.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your operations.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of agricultural insurance and find the best solutions for your needs.',
    },
]);


</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Agriculture <span class="text-brand-primary"> Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Agriculture is a vital industry that faces unique risks and challenges. From unpredictable weather
                patterns to market fluctuations, farmers and agricultural producers need comprehensive insurance
                solutions to safeguard their investments. Our agriculture insurance policies are designed to provide
                peace of mind and financial security, allowing you to focus on what you do best—growing and producing.
            </p>
        </div>

        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary"> Agricultural
                    Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
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
                Protect your agricultural investments with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the agriculture
                industry.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
