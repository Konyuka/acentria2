<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Flying',
    title: 'Protecting Your Aviation Operations',
    image: 'https://img.freepik.com/free-photo/african-american-pilot-flying-aircraft-jet-doing-teamwork-with-captain-using-dashboard-command-navigation-team-airliners-pushing-control-panel-buttons-lever-takeoff-fly_482257-46706.jpg?t=st=1736587942~exp=1736591542~hmac=5534bb3f05087759f9a824194e184a65f949586d18e8f1346297f574eea85368&w=900',
});

const whatsCovered = ref([
    {
        name: 'Aircraft Hull Insurance',
        icon: 'fas fa-plane',
        coverage: 'Protects against physical damage to the aircraft, whether on the ground or in flight.',
        benefits: 'Covers repair or replacement costs, ensuring your aircraft can return to service quickly.',
    },
    {
        name: 'Aviation Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and passenger liability.',
        benefits: 'Helps cover legal fees, medical expenses, and damages, safeguarding your business assets and reputation.',
    },
    {
        name: 'Passenger Liability Insurance',
        icon: 'fas fa-users',
        coverage: 'Provides protection against claims made by passengers for injuries sustained during a flight.',
        benefits: 'Ensures passengers are compensated for injuries, enhancing trust and safety.',
    },
    {
        name: 'Ground Risk Insurance',
        icon: 'fas fa-warehouse',
        coverage: 'Covers damage to aircraft while on the ground, including during maintenance or storage.',
        benefits: 'Protects your investment from risks that occur outside of flight operations.',
    },
    {
        name: 'Hangar Keeper\'s Liability Insurance',
        icon: 'fas fa-toolbox',
        coverage: 'Protects against damage to aircraft while in the care, custody, or control of a hangar operator.',
        benefits: 'Ensures that aircraft owners are compensated for damages, maintaining trust and reliability.',
    },
    {
        name: 'Pilot Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Provides coverage for pilots against loss of license due to medical reasons or accidents.',
        benefits: 'Ensures financial stability for pilots, allowing them to focus on their responsibilities.',
    },
    {
        name: 'War and Terrorism Insurance',
        icon: 'fas fa-bomb',
        coverage: 'Protects against losses due to acts of war, terrorism, and other politically motivated events.',
        benefits: 'Provides peace of mind in an increasingly uncertain global environment.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-shield-virus',
        coverage: 'Protects against losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines.',
    },
]);

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your aviation operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of aviation insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Aviation <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The aviation industry faces unique and complex risks, from aircraft damage to liability issues. Our
                comprehensive insurance solutions are designed to protect your aviation operations, ensuring financial
                stability and peace of mind.
            </p>
        </div>
        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Aviation
                    Insurance</span></h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class="mt-1 text-black text-md leading-normal font-bold">
                            <p>{{ feature.name }}</p>
                        </div>
                        <div class="flex flex-col gap-5 text-brand-primary font-semibold">
                            <p class="mt-5">
                                Coverage: <span class="text-black !font-normal">{{ feature.coverage }}</span>
                            </p>
                            <p>
                                Benefits: <span class="text-black !font-normal">{{ feature.benefits }}</span>
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why Choose <span class="text-brand-primary">Our Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base leading-7 text-gray-600">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600"></h5>
                        <p class="leading-normal font-regular text-light-content text-xs" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Protect your aviation operations with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the aviation industry.
            </p>
        </div>
        <ContactForm />
    </div>
</template>
