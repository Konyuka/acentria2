<script setup>
const bannerContent = ref({
    subtitle: 'Risk',
    title: 'Explore Risk Areas',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=600'
})

const riskAreas = ref([
    {
        name: 'Agriculture <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-seedling',
        link: '/products/agriculture',
        description: 'Comprehensive coverage for farmers and agribusinesses, protecting crops, livestock, and equipment.',
    },
    {
        name: 'Construction <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hard-hat',
        link: '/products/construction',
        description: 'Safeguard your construction projects with policies tailored to manage risks and ensure smooth operations.',
    },
    {
        name: 'Financial Services <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-chart-line',
        link: '/products/financial-services',
        description: 'Protect your financial assets and mitigate risks with insurance solutions designed for financial institutions.',
    },
    {
        name: 'Energy and Mining <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-industry',
        link: '/products/energy-and-mining',
        description: 'Coverage for energy and mining industries to address operational risks and ensure business continuity.',
    },
    {
        name: 'Manufacturing <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-cogs',
        link: '/products/manufacturing',
        description: 'Comprehensive policies to protect manufacturing processes, equipment, and supply chains.',
    },
    {
        name: 'Hotel and Tourism <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hotel',
        link: '/products/hotel-and-tourism',
        description: 'Tailored insurance for hotels and tourism businesses to protect guests, property, and operations.',
    },
    {
        name: 'Health Care <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hospital',
        link: '/products/health-care',
        description: 'Specialized coverage for health care providers to ensure financial security and operational stability.',
    },
    {
        name: 'Education <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-school',
        link: '/products/education',
        description: 'Insurance solutions designed for schools, colleges, and educational institutions to manage risks effectively.',
    },
    {
        name: 'Aviation <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-plane',
        link: '/products/aviation',
        description: 'Protect your aviation business with coverage for aircraft, operations, and third-party liabilities.',
    },
]);


</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />


        <div class="container py-5 bg-white">
           
            <div 
                class="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-base leading-7 text-gray-600 py-10">
                <NuxtLink :to="product.link" v-for="product in riskAreas" 
                    class="button-animation relative flex flex-row gap-2 border-2 border-gray-200 p-5 rounded-lg">
                    <i :class="product.icon" class="text-4xl text-brand-primary mr-2"></i>
                    <div class="relative">
                        <div class="flex justify-between w-full">
                            <h5 v-html="product.name" class="text-md pb-1 font-semibold leading-normal text-black"></h5>
                        </div>
                        <p class="leading-normal font-regular text-light-content text-[14px]">
                            {{ product.description }}
                        </p>
                        <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<style scoped></style>