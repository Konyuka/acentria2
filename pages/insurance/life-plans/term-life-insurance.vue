<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Benefits of Our Term Life Insurance Product',
    subTitle: 'Term Life Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Affordable Premiums',
        icon: 'fas fa-money-bill-wave',
        description: 'Term life insurance typically offers lower premiums compared to other types of life insurance. This makes it an attractive option for individuals seeking significant coverage at a reasonable cost.',
    },
    {
        name: 'Flexible Terms',
        icon: 'fas fa-calendar-alt',
        description: 'Choose from a range of term lengths to suit your specific needs. Whether you need coverage for 10, 20, or 30 years, our flexible terms ensure you have protection during the years that matter most.',
    },
    {
        name: 'High Coverage Amounts',
        icon: 'fas fa-shield-alt',
        description: 'Our term life insurance provides substantial coverage amounts, ensuring that your beneficiaries have the financial support they need to cover expenses such as mortgage payments, education costs, and daily living expenses.',
    },
    {
        name: 'Simplicity',
        icon: 'fas fa-check-circle',
        description: 'Term life insurance is straightforward and easy to understand. With no complex investment components, you can focus on securing the coverage you need without any added confusion.',
    },
    {
        name: 'Convertibility',
        icon: 'fas fa-exchange-alt',
        description: 'Many of our term life insurance policies offer the option to convert to a permanent life insurance policy without undergoing additional medical exams. This allows you to extend your coverage as your needs evolve over time.',
    },
    {
        name: 'Tax-Free Benefits',
        icon: 'fas fa-balance-scale',
        description: 'In most cases, the death benefit paid to your beneficiaries is tax-free, providing them with the full financial support they need without additional tax burdens.',
    },
    {
        name: 'Renewable Policies',
        icon: 'fas fa-sync-alt',
        description: 'Some of our term life insurance policies include renewable options, allowing you to renew your coverage at the end of the term without undergoing a medical exam. This ensures continued protection when you need it.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'With our term life insurance, you can rest assured that your family\'s financial future is secure.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Term Life Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Term life insurance is a cost-effective way to provide financial protection for your loved ones during critical periods of your life. Whether you are starting a family, purchasing a home, or planning for your children's education, our term life insurance offers essential coverage when you need it most.
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
                            Protect your loved ones with our affordable and comprehensive term life insurance. Compare Quotes today and take the first step towards securing your family's future.
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
