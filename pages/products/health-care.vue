<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Healthcare',
    title: 'Protecting Your Healthcare Operations',
    image: 'https://img.freepik.com/free-photo/hospital-medic-expert-writing-down-sick-senior-patient-illness-symptoms-while-prescribing-antibiotic-medicine-clinic-specialist-analyzing-patient-condition-offering-treatment-disease_482257-42602.jpg?t=st=1736587733~exp=1736591333~hmac=ed7e79c5d2ec50a26459a988475d0f70a988327668d133952de2f586ac14d2ac&w=900',
});

const whatsCovered = ref([
    {
        name: 'Medical Malpractice Insurance',
        icon: 'fas fa-stethoscope',
        coverage: 'Protects healthcare professionals against claims of negligence or malpractice.',
        benefits: 'Covers legal defense costs, settlements, and judgments, safeguarding your reputation and financial stability.',
    },
    {
        name: 'General Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against third-party claims for bodily injury, property damage, and advertising injury.',
        benefits: 'Helps cover legal fees, medical expenses, and damages, safeguarding your business assets.',
    },
    {
        name: 'Property Insurance',
        icon: 'fas fa-home',
        coverage: 'Covers physical assets such as buildings, medical equipment, and office contents against damage or loss due to fire, theft, and other unforeseen events.',
        benefits: 'Ensures that your business can recover quickly from property-related incidents, minimizing downtime and financial loss.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-shield-virus',
        coverage: 'Protects against losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines, helping you manage the financial impact of cyber threats.',
    },
    {
        name: 'Workers\' Compensation Insurance',
        icon: 'fas fa-user-injured',
        coverage: 'Provides benefits to employees who suffer work-related injuries or illnesses.',
        benefits: 'Covers medical expenses, rehabilitation costs, and a portion of lost wages, ensuring your employees are taken care of.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your operations.',
        benefits: 'Helps maintain financial stability and continuity of operations during unexpected interruptions.',
    },
    {
        name: 'Professional Liability Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Also known as Errors & Omissions (E&O) insurance, it protects against claims of negligence, errors, or omissions in professional services.',
        benefits: 'Covers legal defense costs and damages, protecting your reputation and financial stability.',
    },
    {
        name: 'Environmental Liability Insurance',
        icon: 'fas fa-leaf',
        coverage: 'Provides protection against claims arising from pollution incidents caused by your operations.',
        benefits: 'Covers cleanup costs, legal fees, and damages, ensuring compliance with environmental regulations.',
    },
]);

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your healthcare operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of healthcare insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Healthcare <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The healthcare industry is essential to the well-being of communities, but it also faces unique risks
                and challenges. From patient care to data security, our comprehensive insurance solutions are designed
                to protect your healthcare operations, ensuring financial stability and peace of mind.
            </p>
        </div>
        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Healthcare
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
                Protect your healthcare operations with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the healthcare industry.
            </p>
        </div>
        <ContactForm />
    </div>
</template>
