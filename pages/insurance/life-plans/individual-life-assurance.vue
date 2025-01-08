<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Discover the Benefits of Our Individual Life Assurance Product',
    subTitle: 'Individual Life Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
   
    {
        name: 'Flexibility',
        icon: 'fas fa-exchange-alt',
        description: 'Our individual life assurance plans are designed to be flexible, allowing you to adjust coverage amounts and terms to match your changing needs and circumstances. Whether you\'re starting a family, buying a home, or planning for retirement, our plans can evolve with you.',
    },
    {
        name: 'Savings Component',
        icon: 'fas fa-piggy-bank',
        description: 'Some of our life assurance plans include a savings component that allows you to build cash value over time. This can be a valuable financial resource that you can access for various needs, such as funding your children\'s education or supplementing your retirement income.',
    },
    {
        name: 'Tax Advantages',
        icon: 'fas fa-balance-scale',
        description: 'Benefit from potential tax advantages with our life assurance plans. In many cases, the payout to beneficiaries is tax-free, and certain plans may offer tax-deferred growth on the cash value component.',
    },
    {
        name: 'Customizable Options',
        icon: 'fas fa-cogs',
        description: 'Tailor your life assurance policy with a variety of riders and additional benefits, such as critical illness coverage, accidental death benefit, and waiver of premium. Customize your coverage to meet your specific needs and provide comprehensive protection.',
    },
    {
        name: 'Reliable Support',
        icon: 'fas fa-headset',
        description: 'Our dedicated team of professionals is here to assist you every step of the way. From selecting the right plan to filing claims, we are committed to providing exceptional customer service and support.',
    },
     {
        name: 'Financial Security',
        icon: 'fas fa-shield-alt',
        description: 'Ensure that your loved ones are financially protected in the event of your passing.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Focus on living your life to the fullest, knowing that you have a safety net in place.',
    },
])
 
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why Individual <span class="text-brand-primary">Life Assurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Life is filled with unexpected twists and turns, making it essential to secure your financial future and that of your loved ones. Our individual life assurance product offers comprehensive coverage and numerous benefits tailored to meet your unique needs. Here's why our life assurance stands out:
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
                                Get a  <span class="text-brand-primary"> Quote Today</span>
                            </h2>
                            <div class="my-5">
                                <p class="text-sm leading-normal">
                                    Secure your family's financial future with our individual life assurance product. Compare Quotes today and take the first step towards peace of mind and financial security.
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