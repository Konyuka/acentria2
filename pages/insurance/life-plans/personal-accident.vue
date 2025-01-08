<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Stay Protected with Our Personal Accident Insurance',
    subTitle: 'Personal Accident Insurance',
    image: '/img/nurse.jpg',
})

const benefits = ref([
    {
        name: 'Financial Security',
        icon: 'fas fa-shield-alt',
        description: 'Receive a lump sum payment in case of accidental death, permanent disability, or severe injury. This financial support can help cover medical expenses, rehabilitation costs, and other unforeseen expenses.',
    },
    {
        name: 'Coverage for Medical Expenses',
        icon: 'fas fa-hospital',
        description: 'Our policy covers medical expenses related to accidents, including hospital stays, surgeries, and treatments. Get the care you need without worrying about the financial burden.',
    },
    {
        name: 'Income Replacement',
        icon: 'fas fa-money-bill-wave',
        description: 'If an accident leaves you unable to work, our personal accident insurance provides income replacement benefits to help cover your living expenses during your recovery period.',
    },
    {
        name: 'Accidental Death Benefit',
        icon: 'fas fa-cross',
        description: 'In the unfortunate event of accidental death, your beneficiaries receive a lump sum payment to help them manage financial responsibilities and maintain their standard of living.',
    },
    {
        name: 'Permanent Disability Benefits',
        icon: 'fas fa-wheelchair',
        description: 'Our policy offers benefits for permanent total or partial disability caused by an accident, helping you adapt to life changes and cover ongoing expenses.',
    },
    {
        name: 'Rehabilitation and Recovery',
        icon: 'fas fa-heartbeat',
        description: 'Access to rehabilitation services and support to aid in your recovery process. We are committed to helping you get back on your feet as soon as possible.',
    },
    {
        name: 'Customizable Coverage',
        icon: 'fas fa-cogs',
        description: 'Tailor your personal accident insurance policy with various add-ons and riders to meet your specific needs, such as coverage for fractures, burns, or specific injuries.',
    },
    {
        name: '24/7 Worldwide Coverage',
        icon: 'fas fa-globe',
        description: 'Our personal accident insurance provides round-the-clock coverage, whether you\'re at home or traveling abroad. Feel secure knowing you have protection wherever you go.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Personal Accident Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Accidents can happen at any time, and their impact can be both physically and financially overwhelming. Our personal accident insurance provides financial support and peace of mind, ensuring that you and your loved ones are protected in the event of an unforeseen accident.
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
                            Protect yourself and your loved ones with our comprehensive personal accident insurance. Compare Quotes today and take the first step towards financial security and peace of mind.
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