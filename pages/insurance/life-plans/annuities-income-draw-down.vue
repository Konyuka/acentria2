<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Secure Your Financial Future with Our Annuity and Income Drawdown Products',
    subTitle: 'Annuities & Income Draw Down',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Guaranteed Income for Life',
        icon: 'fas fa-infinity',
        description: 'Annuities provide a steady stream of income for life, ensuring you have a reliable source of funds throughout your retirement. You can choose from various payout options to match your financial needs and goals.',
    },
    {
        name: 'Flexible Payment Options',
        icon: 'fas fa-calendar-alt',
        description: 'Select from a range of payment options, including immediate annuities that start paying out right away or deferred annuities that begin at a later date. This flexibility allows you to plan according to your unique retirement timeline.',
    },
    {
        name: 'Tax-Deferred Growth',
        icon: 'fas fa-piggy-bank',
        description: 'Your annuity investments grow tax-deferred until you start receiving payments. This means your money can compound over time without being reduced by taxes, helping you build a more substantial retirement fund.',
    },
    {
        name: 'Protection Against Longevity Risk',
        icon: 'fas fa-shield-alt',
        description: 'Annuities protect you against the risk of outliving your savings. With guaranteed lifetime income, you can rest assured that you won\'t run out of funds, no matter how long you live.',
    },
    {
        name: 'Customizable Riders',
        icon: 'fas fa-cogs',
        description: 'Enhance your annuity with optional riders, such as inflation protection, long-term care benefits, or death benefits for your beneficiaries. Customize your coverage to suit your specific needs and ensure comprehensive protection.',
    },
    {
        name: 'Flexible Income Withdrawals',
        icon: 'fas fa-exchange-alt',
        description: 'Income drawdown allows you to withdraw money from your pension pot as needed, providing you with control over your retirement income. You can adjust the amount and frequency of withdrawals to match your lifestyle and financial requirements.',
    },
    {
        name: 'Investment Growth Potential',
        icon: 'fas fa-chart-line',
        description: 'Unlike annuities, income drawdown keeps your pension funds invested, offering the potential for growth. This can help you maintain and even increase your retirement savings over time.',
    },
    {
        name: 'Access to Lump Sums',
        icon: 'fas fa-money-bill-wave',
        description: 'With income drawdown, you have the option to take lump sum withdrawals for significant expenses or emergencies. This flexibility ensures that you can access your funds when you need them most.',
    },
    {
        name: 'Tax-Efficient Withdrawals',
        icon: 'fas fa-balance-scale',
        description: 'Benefit from tax-efficient withdrawals by managing your income drawdown strategy. You can minimize your tax liability by controlling the timing and amount of withdrawals.',
    },
    {
        name: 'Legacy Planning',
        icon: 'fas fa-gavel',
        description: 'Income drawdown allows you to leave a legacy for your loved ones. Any remaining funds in your pension pot can be passed on to your beneficiaries, providing financial security for future generations.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Annuities and Income Drawdown</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Planning for retirement is crucial to ensure a stable and comfortable future. Our annuity and income drawdown products provide reliable income solutions that help you manage your finances effectively during your retirement years. Here's how they benefit you:
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Key <span class="text-brand-primary"> Benefits</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            At Acentria Group, we are guided by a set of core principles that shape everything we do. These principles ensure we build strong relationships, foster innovation, and achieve success together.
                        </p>
                    </div>
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
                            Secure your financial future with our annuity and income drawdown products. Get a quote today and take the first step towards a stable and comfortable retirement.
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