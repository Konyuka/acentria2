<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Drive with Confidence with Our Comprehensive Motor Insurance',
    subTitle: 'Comprehensive Motor Insurance',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

const benefits = ref([
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Comprehensive coverage ensures that you are protected against a wide range of risks, providing peace of mind while driving.',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-money-bill-wave',
        description: 'Helps to mitigate the financial impact of unexpected events, such as accidents, theft, or natural disasters.',
    },
    {
        name: 'Customizable',
        icon: 'fas fa-cogs',
        description: 'You can often tailor your comprehensive motor insurance policy to include additional coverage options and add-ons based on your specific needs.',
    },
])

const considerations = ref([
    {
        name: 'Cost',
        icon: 'fas fa-dollar-sign',
        description: 'Comprehensive motor insurance tends to be more expensive than basic third-party liability insurance due to the broader range of coverage it offers.',
    },
    {
        name: 'Deductibles',
        icon: 'fas fa-exchange-alt',
        description: 'Be aware of any deductibles that apply to the coverage. A deductible is the amount you must pay out of pocket before the insurance coverage kicks in.',
    },
]);

const coverages = ref([
    {
        name: 'Accidental Damage',
        icon: 'fas fa-car-crash',
        description: 'Covers the cost of repairs or replacement if your vehicle is damaged in an accident, regardless of who is at fault.',
    },
    
    {
        name: 'Third-Party Liability',
        icon: 'fas fa-people-arrows',
        description: 'Includes coverage for any legal liability if you cause damage to someone else\'s property or injure another person while driving.',
    },
    {
        name: 'Natural Disasters',
        icon: 'fas fa-cloud-showers-heavy',
        description: 'Protects against damage caused by natural events such as floods, storms, earthquakes, and fires.',
    },
    
    {
        name: 'Theft and Vandalism',
        icon: 'fas fa-user-secret',
        description: 'Provides coverage if your vehicle is stolen or damaged due to vandalism.',
    },
    {
        name: 'Glass Damage',
        icon: 'fas fa-wind',
        description: 'Often includes coverage for damage to your vehicle\'s windows and windshield.',
    },
    {
        name: 'Personal Belongings',
        icon: 'fas fa-box-open',
        description: 'Some policies may cover personal belongings inside the vehicle that are damaged or stolen.',
    },
    {
        name: 'Medical Expenses',
        icon: 'fas fa-briefcase-medical',
        description: 'May cover medical expenses for the driver and passengers resulting from an accident.',
    },
    {
        name: 'Roadside Assistance',
        icon: 'fas fa-truck-pickup',
        description: 'Access to our 24/7 roadside assistance services for help with breakdowns, flat tires, towing, and more, ensuring you\'re never left stranded.',
    },
    {
        name: 'Rental Car Coverage',
        icon: 'fas fa-car',
        description: 'Provides coverage for rental car expenses if your car is being repaired after an accident, keeping you on the move without interruption.',
    },
    {
        name: 'Fire Damage',
        icon: 'fas fa-fire',
        description: 'Covers damage to your vehicle resulting from fire.',
    },
    
    
]);


</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Comprehensive Motor Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Accidents and unexpected events can happen at any time. Our comprehensive motor insurance provides
                extensive coverage beyond the basic third-party liability to ensure that you, your vehicle, and others
                on the road are protected against a wide range of incidents. Drive with confidence, knowing that you
                have the best protection available.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">

                <div class="container mx-auto">
                    <h2 class="text-2xl !font-semibold text-black mb-10">
                        Key <span class="text-brand-primary"> Benefits</span>
                    </h2>

                    <div
                        class="mb-10 font-sans grid grid-cols-3 gap-5 text-base leading-normal text-gray-600">
                        <div v-for="benefit in coverages" class="flex flex-row gap-2">
                            <i :class="benefit.icon" class="text-xl text-brand-primary mr-4"></i>
                            <div>
                                <h5 v-html="benefit.name"
                                    class="text-sm pb-3 md:pb-4 font-semibold leading-normal text-light-title">

                                </h5>
                                <p class="leading-normal font-regular text-light-content text-xs">
                                    {{ benefit.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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

                <div class="container my-10">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Key <span class="text-brand-primary"> Considerations</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in considerations"
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