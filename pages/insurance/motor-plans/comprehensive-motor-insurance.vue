<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Drive with Confidence with Our Comprehensive Motor Insurance',
    subTitle: 'Comprehensive Motor Insurance',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

const benefits = ref([
    {
        name: 'Covers Your Car, Not Just Others',
        icon: 'fas fa-car-alt',
        description: 'Protection against accidents, theft, and damage to ensure your vehicle stays safe.',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-money-bill-wave',
        description: 'Avoid unexpected repair or replacement costs, keeping your finances secure.',
    },
    {
        name: '24/7 Roadside Assistance',
        icon: 'fas fa-truck-pickup',
        description: 'Get help whenever and wherever you need it, ensuring you’re never stranded.',
    },
    {
        name: 'Customizable Plans',
        icon: 'fas fa-cogs',
        description: 'Choose add-ons to enhance your coverage and tailor it to your specific needs.',
    },
]);


const considerations = ref([
    {
        name: 'Cost of Comprehensive Insurance',
        icon: 'fas fa-money-bill-wave',
        description: 'Premiums vary based on your vehicle type, usage, and location. It’s important to assess what fits your budget.',
    },
    {
        name: 'Compare Car Insurance Quotes',
        icon: 'fas fa-search',
        description: 'Get multiple quotes to ensure you’re getting the best deal for your budget and coverage needs.',
    },
    {
        name: 'Deductibles & Excess',
        icon: 'fas fa-exchange-alt',
        description: 'Understand how much you’ll need to pay out of pocket before your coverage kicks in to avoid surprises during claims.',
    },
    {
        name: 'Policy Customization',
        icon: 'fas fa-cogs',
        description: 'Add extra coverage options, such as windscreen protection, personal accident cover, or coverage for business use.',
    },
]);


const coverages = ref([
    {
        name: 'Accidental Damage',
        icon: 'fas fa-car-crash',
        description: 'Covers repair or replacement costs for your car, even if you are at fault.',
    },
    {
        name: 'Third-Party Liability',
        icon: 'fas fa-people-arrows',
        description: 'Covers damage to other vehicles, property, or injuries to others if you cause an accident.',
    },
    {
        name: 'Natural Disaster Protection',
        icon: 'fas fa-cloud-showers-heavy',
        description: 'Provides coverage for damage caused by floods, storms, earthquakes, and fires.',
    },
    {
        name: 'Theft and Vandalism',
        icon: 'fas fa-user-secret',
        description: 'Covers compensation for stolen or intentionally damaged vehicles.',
    },
    {
        name: 'Glass & Windscreen Cover',
        icon: 'fas fa-wind',
        description: 'Covers cracks, chips, and breakages in your car’s windows and windshield.',
    },
    {
        name: 'Personal Belongings Cover',
        icon: 'fas fa-box-open',
        description: 'Compensation for stolen or damaged valuables inside your car.',
    },
    {
        name: 'Medical Expenses',
        icon: 'fas fa-briefcase-medical',
        description: 'Covers hospital bills for you and passengers in case of an accident.',
    },
    {
        name: '24/7 Emergency Roadside Assistance',
        icon: 'fas fa-truck-pickup',
        description: 'Provides help with flat tires, battery jump-starts, towing, and other emergencies anytime, anywhere.',
    },
    {
        name: 'Car Rental Coverage',
        icon: 'fas fa-car',
        description: 'Get a replacement vehicle while yours is being repaired, ensuring convenience.',
    },
    {
        name: 'Fire Damage Cover',
        icon: 'fas fa-fire',
        description: 'Protects against loss or damage to your car due to fire or explosions.',
    },
]);



</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Comprehensive Motor Insurance <br> <span class="text-brand-primary">Drive Confidently with Full
                    Protection</span>
            </h1>
            <p class="mt-5 content">
            <p>At <strong>Acentria</strong>, we promise to stand with you, walk with you, and rise with you by designing
                insurance solutions that fit your journey. Whether you’re commuting daily, taking weekend road trips, or
                running a business fleet, our <strong>Comprehensive Car Insurance</strong> ensures you’re covered
                against accidents, theft, fire, and unexpected events.</p>
            <br>
            <p>With us, you can <strong>drive worry-free</strong>, knowing that your vehicle, passengers, and financial
                security are in safe hands. When protection is done smart, it’s done with care.</p>

            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">

                <div class="container mx-auto">
                    <h2 class="section-heading pb-5">
                        What’s Covered Under <br><span class="text-brand-primary"> Comprehensive Car Insurance?</span>
                    </h2>

                    <div class="mb-10 font-sans grid grid-cols-3 gap-5 text-base leading-normal text-gray-600">
                        <div v-for="benefit in coverages" class="flex flex-row gap-2">
                            <i :class="benefit.icon" class="text-xl text-brand-primary mr-4"></i>
                            <div>
                                <h5 v-html="benefit.name" class="card-heading pb-3">
                                </h5>
                                <p class="content">
                                    {{ benefit.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <h2 class="section-heading pb-5">
                        Why Choose <br>
                        <span class="text-brand-primary"> Comprehensive Car Insurance?</span>
                    </h2>

                    <p class="content pb-5">
                        Unlike <strong>third-party insurance</strong>, which only covers damage to others,
                        <strong>comprehensive motor insurance</strong> offers full coverage for your vehicle,
                        ensuring you’re protected no matter what happens.
                    </p>


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
                    <h2 class="section-heading pb-5">
                        What to Consider Before <br> <span class="text-brand-primary"> Choosing a Car Insurance
                            Policy</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in considerations"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="card-heading">{{
                                    principle.name }}</h4>
                                <p class="content">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-10 mt-5">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Get a Car <span class="text-brand-primary"> Insurance Quote Today!</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                        <p>Your journey deserves the best motor insurance coverage, giving you the freedom to drive
                            safely and confidently.</p>
                        <p> <strong>Compare car insurance plans and get a free quote today!</strong></p>

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
