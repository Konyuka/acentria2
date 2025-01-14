<script setup>
const bannerContent = ref({
    subtitle: 'Risk',
    title: 'Explore Risk Areas',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=600'
})

const riskAreas = ref([
    {
        name: 'Construction and Real Estate <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-hard-hat',
        link: '/products/construction-real-estate',
        description: 'Tailored reinsurance solutions to safeguard projects and assets against unforeseen risks.',
    },
    {
        name: 'Financial Institutions <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-chart-line',
        link: '/products/financial-institutions',
        description: 'Comprehensive risk transfer strategies to protect financial stability and support growth.',
    },
    {
        name: 'Professional and Business Services <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-briefcase',
        link: '/products/professional-business-services',
        description: 'Customized coverage to mitigate liability and operational risks.',
    },
    {
        name: 'Aviation <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-plane',
        link: '/products/aviation',
        description: 'Specialized solutions addressing aviation-specific risks, from fleets to operations.',
    },
    {
        name: 'Transport and Logistics <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-shipping-fast',
        link: '/products/transport-logistics',
        description: 'Innovative risk management for supply chains, freight, and transport networks.',
    },
    {
        name: 'Insurance and Reinsurance <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-sync-alt',
        link: '/products/insurance-reinsurance',
        description: 'Strategic reinsurance programs to optimize capital and manage volatility.',
    },
    {
        name: 'Technology and Communications <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-laptop-code',
        link: '/products/technology-communications',
        description: 'Cutting-edge coverage to address emerging risks in a dynamic sector.',
    },
    {
        name: 'Accident and Health <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-user-injured',
        link: '/products/accident-health',
        description: 'Solutions designed to protect individuals and businesses against personal risks.',
    },
    {
        name: 'Energy and Utilities <span class="text-brand-primary">Industry</span>',
        icon: 'fas fa-industry',
        link: '/products/energy-utilities',
        description: 'Comprehensive coverage for energy production, utilities, and infrastructure challenges.',
    },
]);



</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />


        <div class="container py-5 bg-white">
           
            <div 
                class="font-sans grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-base leading-7 text-gray-600 py-10">
                <NuxtLink :href="product.link" v-for="product in riskAreas" 
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