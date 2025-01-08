<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Secure Your Child\'s Future with Our Education Protection Plan',
    subTitle: 'Education Protection Plan',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Guaranteed Educational Support',
        icon: 'fas fa-graduation-cap',
        description: 'In the event of your untimely passing or permanent disability, our education protection plan guarantees that your child\'s education expenses are covered. This includes tuition fees, books, uniforms, and other related costs.',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-shield-alt',
        description: 'Ensure that your child\'s education is secured, no matter what happens. Our plan provides a lump sum payout that can be used to cover all educational expenses, relieving your family of financial stress.',
    },
    {
        name: 'Flexible Coverage Options',
        icon: 'fas fa-cogs',
        description: 'Tailor the coverage to meet your specific needs and preferences. Choose from a range of coverage amounts and terms to ensure that your child\'s education is fully protected.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Focus on enjoying life with your family, knowing that their education is taken care of.',
    },
    {
        name: 'Simple and Straightforward',
        icon: 'fas fa-check-circle',
        description: 'Our application process is easy and hassle-free. Compare Quotes, compare plans, and enroll online within minutes. Our team is available to assist you every step of the way.',
    },
    {
        name: 'Tax Advantages',
        icon: 'fas fa-balance-scale',
        description: 'In many cases, the benefits paid out are tax-free, ensuring that your child receives the full financial support they need without additional tax burdens.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Education Protection</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Investing in your child's education is one of the most significant commitments you can make as a parent. Our education protection plan ensures that your child's educational journey continues uninterrupted, even in the face of unforeseen circumstances. Provide them with the financial support they need to achieve their dreams.
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
                            Secure your child's educational future with our comprehensive education protection plan. Compare Quotes today and take the first step towards ensuring your child's success and peace of mind.
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