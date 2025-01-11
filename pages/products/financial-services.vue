<script setup>
const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Protection',
    title: 'Securing Your Financial Future',
    image: 'https://img.freepik.com/free-photo/top-view-arrangement-finances-elements_23-2148793742.jpg?t=st=1736587289~exp=1736590889~hmac=6f096c735ab89309d58eb2200c2ff7bef16442503f6a20dd719b6ea6f7952499&w=1060',
});

const whatsCovered = ref([
    {
        name: 'Professional Liability Insurance',
        icon: 'fas fa-balance-scale',
        coverage: 'Protects against claims of negligence, errors, or omissions in professional services provided by financial institutions.',
        benefits: 'Covers legal defense costs and damages, safeguarding your reputation and financial stability.',
    },
    {
        name: 'Directors and Officers Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Provides protection for the personal assets of directors and officers in the event of claims made against them for wrongful acts.',
        benefits: 'Ensures that your leadership team can make decisions confidently, knowing they are protected.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-shield-virus',
        coverage: 'Protects against losses resulting from cyberattacks, data breaches, and other cyber incidents.',
        benefits: 'Covers costs related to data recovery, legal fees, notification expenses, and potential fines.',
    },
    {
        name: 'Fidelity Bond (Crime Insurance)',
        icon: 'fas fa-lock',
        coverage: 'Protects against losses due to employee dishonesty, fraud, or theft.',
        benefits: 'Maintains trust and integrity within your organization by ensuring financial protection against internal risks.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost income and additional expenses incurred due to disruptions in your operations.',
        benefits: 'Helps maintain financial stability and continuity of operations during unexpected interruptions.',
    },
    {
        name: 'Property Insurance',
        icon: 'fas fa-home',
        coverage: 'Covers physical assets such as buildings, equipment, and office contents against damage or loss due to fire, theft, and other unforeseen events.',
        benefits: 'Protects your physical assets, ensuring that your business can recover quickly from property-related incidents.',
    },
]);

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your financial institution.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your operations.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of financial industry insurance and find the best solutions for your needs.',
    },
]);
</script>

<template>
    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />
        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Financial <span class="text-brand-primary">Industry</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                The financial industry operates in a complex and dynamic environment, facing unique risks and
                challenges. Our comprehensive insurance solutions are designed to protect financial institutions from
                potential threats, ensuring stability and confidence in your operations.
            </p>
        </div>
        <div class="container">
            <h1 class="text-2xl text-black !font-semibold mb-6">Types of <span class="text-brand-primary">Financial
                    Insurance</span></h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :href="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
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
                Protect your financial institution with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn more about our policies
                and how we can help you secure your future in the financial industry.
            </p>
        </div>
        <ContactForm />
    </div>
</template>
