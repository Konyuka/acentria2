<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Safeguard Your Health with Our Critical Illness Insurance',
    subTitle: 'Critical Illness Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Affordable Cost',
        icon: 'fas fa-dollar-sign',
        description: 'Pay premiums as low as Kes 1,000.',
    },
    {
        name: 'Lump Sum Payout',
        icon: 'fas fa-money-bill-wave',
        description: 'Receive a lump sum payment upon diagnosis of a covered critical illness. This payout can be used to cover medical expenses, rehabilitation costs, or any other financial needs during your recovery.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-heartbeat',
        description: 'Our policy covers a wide range of critical illnesses, including cancer, heart attack, stroke, and more. With comprehensive coverage, you can have peace of mind knowing you\'re protected against major health risks.',
    },
    {
        name: 'Financial Flexibility',
        icon: 'fas fa-exchange-alt',
        description: 'Use the lump sum payment as you see fit. Whether it\'s for medical treatments, home modifications, or replacing lost income, you have the financial flexibility to manage your situation in the best way possible.',
    },
    {
        name: 'Support for Recovery',
        icon: 'fas fa-hands-helping',
        description: 'Focus on getting better without worrying about financial strain. Our critical illness insurance provides the support you need to access the best care and treatment options available.',
    },
    {
        name: 'Easy Application Process',
        icon: 'fas fa-check-circle',
        description: 'Applying for our critical illness insurance is simple and straightforward. You can Compare Quotes, compare plans, and apply online in just a few minutes.',
    },
    {
        name: 'Tax-Free Benefits',
        icon: 'fas fa-balance-scale',
        description: 'In most cases, the lump sum payment is tax-free, providing you with the full financial support you need without additional tax burdens.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Critical Illness Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                A critical illness diagnosis can be emotionally and financially overwhelming. Our critical illness
                insurance provides a safety net to help you manage the financial impact of severe health conditions,
                allowing you to focus on your recovery without added stress.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Key <span class="text-brand-primary"> Benefits</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-10 mt-5">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Get a <span class="text-brand-primary"> Quote Today</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            Protect yourself and your loved ones with our comprehensive critical illness insurance.
                            Compare Quotes today and take the first step towards financial security and peace of mind.
                        </p>
                    </div>

                    <div class="pt-5">
                        <ContactFormInsurance />
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped></style>