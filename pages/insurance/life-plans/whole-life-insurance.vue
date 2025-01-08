<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Explore the Benefits of Our Whole Life Insurance Product',
    subTitle: 'Whole Life Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Lifelong Coverage',
        icon: 'fas fa-infinity',
        description: 'Whole life insurance offers permanent protection, ensuring that your beneficiaries receive a death benefit regardless of when you pass away. This lifelong coverage provides peace of mind and financial stability for your loved ones.',
    },
    {
        name: 'Cash Value Accumulation',
        icon: 'fas fa-piggy-bank',
        description: 'Our whole life insurance policies build cash value over time, which grows tax-deferred. You can access this cash value through policy loans or withdrawals, providing a valuable financial resource for emergencies, education, retirement, or other needs.',
    },
    {
        name: 'Guaranteed Premiums',
        icon: 'fas fa-lock',
        description: 'With our whole life insurance, your premiums are guaranteed to remain level throughout the life of the policy. This means no unexpected increases, making it easier to budget and plan for the future.',
    },
    {
        name: 'Dividend Opportunities',
        icon: 'fas fa-coins',
        description: 'Many of our whole life insurance policies offer the potential to earn dividends. While not guaranteed, these dividends can be used to increase your policy\'s cash value, reduce premiums, or purchase additional coverage.',
    },
    {
        name: 'Estate Planning',
        icon: 'fas fa-gavel',
        description: 'Whole life insurance can play a crucial role in estate planning. It provides a death benefit that can help cover estate taxes, ensuring that your legacy is preserved for your heirs.',
    },
    {
        name: 'Tax Advantages',
        icon: 'fas fa-balance-scale',
        description: 'The death benefit paid to your beneficiaries is generally tax-free, providing them with the full financial support they need without additional tax burdens. Additionally, the cash value growth within the policy is tax-deferred.',
    },
    {
        name: 'Policy Riders',
        icon: 'fas fa-cogs',
        description: 'Customize your whole life insurance policy with a variety of riders, such as critical illness coverage, waiver of premium, and accidental death benefit. These riders enhance your coverage, providing additional protection to meet your specific needs.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Whole Life Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Whole life insurance provides lifelong coverage and financial security for your loved ones. It combines the benefits of a death benefit with a savings component, ensuring that you have comprehensive protection and a valuable financial resource over time.
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
                            Secure your financial future and provide lifelong protection for your loved ones with our whole life insurance product. Compare Quotes today and take the first step towards peace of mind and financial security.
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