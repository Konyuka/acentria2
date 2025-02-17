<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Business!',
    title: 'Protect Your Business.',
    image: '/img/in-business.jpg',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your business operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of business insurance and find the best solutions for your needs.',
    },
    {
        name: 'Easy Claims Process',
        icon: 'fas fa-check-circle',
        description: 'Our claims process is hassle free. It is important to familiarize yourself with your policy coverage and necessary claims documents when purchasing cover. Our team of experts are readily available to guide you through the process. <a href="/launch-claim" class="text-brand-primary underline">Launch a claim</a>.',
    },
]);



const benefits2 = ref([
    {
        name: 'Corporate Covers',
        icon: 'fas fa-users',
        description: 'Purchased by an employer for employees only, or with their families (spouses and children). This cover is flexible and can be customized to the employer’s needs. The plan can be fully insured or partly funded (Hybrid).',
    },
    {
        name: 'Micro Covers (SME)',
        icon: 'fas fa-briefcase',
        description: 'Designed for small and micro enterprises with populations of 3-10 employees. These plans waive waiting periods and co-pays, offering a tailored solution for businesses seeking off-the-shelf products.',
    },
    {
        name: 'International Medical Cover',
        icon: 'fas fa-plane',
        description: 'Ideal for individuals planning to spend more than a year abroad or frequent travelers. This cover provides access to private healthcare in your country of residence and internationally.',
    },
]);

const benefits = ref([
    {
        name: 'Integrated Risk Management',
        icon: 'fas fa-layer-group',
        description: 'Offers a holistic approach to risk management, making it easier for businesses to manage their insurance needs under one policy.',
    },
    {
        name: 'Budget-Friendly Premiums',
        icon: 'fas fa-money-bill-wave-sign',
        description: 'We provide affordable premiums, ensuring businesses of all sizes can access quality insurance solutions without financial strain.',
    },
]);

const whatsCovered = ref([
    {
        name: 'Commercial General Liability (CGL)',
        icon: 'fas fa-balance-scale',
        description: 'Covers legal liabilities for bodily injury or property damage to third parties, as well as product liability to protect against claims related to products that cause harm or injury.',
    },
    {
        name: 'Property Damage',
        icon: 'fas fa-building',
        description: 'Covers damage to business property due to events like fire, theft, or natural disasters.',
    },
    {
        name: 'Business Interruption',
        icon: 'fas fa-business-time',
        description: 'Provides financial support if business operations are halted due to a covered event.',
    },
    {
        name: 'Employer’s Liability',
        icon: 'fas fa-user-tie',
        description: 'Protects against claims from employees who suffer work-related injuries or illnesses.',
    },
    {
        name: 'Personal Accident & Workers’ Compensation Cover',
        icon: 'fas fa-user-injured',
        description: 'Offers benefits for accidents resulting in injury or death of employees.',
    },
    {
        name: 'Money and Goods in Transit',
        icon: 'fas fa-truck',
        description: 'Covers loss or damage to money and goods while being transported.',
    },
]);

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Biashara <span class="text-brand-primary"> Cover</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                This cover is designed for Small and Medium Enterprises SMEs. It typically bundles multiple types of
                insurance coverage into a single policy offering comprehensive protection for businesses.
            </p>
        </div>

        <div class="container mb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">What's <span class="text-brand-primary"> Covered</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 text-gray-600 text-sm leading-normal font-bold">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="mt-1 text-gray-600 text-[13px] leading-normal font-semibold">
                            <p>
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>



        <div class="pb-10">
            <section class="relative py-1">
                <div class="container">
                    <h1 class="text-2xl !font-semibold text-black mb-5">
                        What are the <span class="text-brand-primary">Key benefits?</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black" v-html="principle.description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why Choose Our <span class="text-brand-primary">Insurance</span>
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

                Protect your business with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn
                more about our policies and how we can help you secure your future in the corporate world.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
