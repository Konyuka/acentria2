<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Ensure Peace of Mind with Our Last Expense Insurance',
    subTitle: 'Last Expense Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Waived Waiting Periods',
        icon: 'fas fa-clock',
        description: 'Waived Waiting Periods for accidental causes',
    },
    {
        name: 'Diverse Coverage Plans',
        icon: 'fas fa-users',
        description: 'Diverse Coverage Plans: for Parents & Parents In Law, Spouse, Children and Extended Family',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-shield-alt',
        description: 'Ensure that your family has the financial support needed to cover final expenses, including funeral services, burial or cremation costs, and outstanding medical bills. Our last expense insurance provides peace of mind knowing that your loved ones are protected from these financial burdens.',
    },
    {
        name: 'Affordable Premiums',
        icon: 'fas fa-money-bill-wave-sign',
        description: 'Our last expense insurance offers affordable premiums as a Low as KES 1,500 making it accessible for individuals seeking to plan ahead without straining their budget.',
    },
    {
        name: 'Guaranteed Payout',
        icon: 'fas fa-money-bill-wave',
        description: 'Upon your passing, the policy pays out a guaranteed lump sum to your beneficiaries, providing them with immediate financial support during a challenging time.',
    },
    {
        name: 'Simplified Application',
        icon: 'fas fa-check-circle',
        description: 'Our application process is straightforward and hassle-free. In many cases, there are no medical exams required, and you can get coverage quickly and easily.',
    },
    {
        name: 'Flexibility',
        icon: 'fas fa-exchange-alt',
        description: 'The payout can be used for any final expenses, including funeral arrangements, memorial services, outstanding debts, and other costs. Your beneficiaries have the flexibility to use the funds as needed.',
    },
    {
        name: 'Tax-Free Benefits',
        icon: 'fas fa-balance-scale',
        description: 'In most cases, the death benefit is paid out to your beneficiaries tax-free, ensuring they receive the full financial support they need without additional tax burdens.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Last Expense Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Planning for final expenses can alleviate the financial burden on your loved ones during a difficult time. Our last expense insurance provides a simple and affordable way to cover costs such as funeral services, burial or cremation, and other end-of-life expenses, ensuring your family can focus on celebrating your life and legacy.
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
                            Plan ahead and provide your family with the financial security they deserve. Compare Quotes today for our last expense insurance and take the first step towards peace of mind and financial protection.
                        </p>
                    </div>
                    
                    <div class="my-5 flex gap-5">
                <NuxtLink to="/"
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                    Engage an Expert
                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                        </g>
                    </svg>
                </NuxtLink>
                <Nuxtlink to="/"
                    class="inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-md">
                    Compare Quotes
                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                        <g fill-rule="evenodd">
                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                            <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4">
                            </path>
                        </g>
                    </svg>
                </Nuxtlink>
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