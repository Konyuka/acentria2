<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Finances!',
    title: 'Safeguard Your Business from Financial Losses',
    image: 'https://img.freepik.com/free-photo/close-up-business-people-working-with-business-document-discussion-meeting_1150-1469.jpg?t=st=1736579313~exp=1736582913~hmac=b20458f82d9cd708082bb798ac38f97e7eae8fad0d3dd0042ac00fd69d798449&w=900',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const benefits3 = ref([
    {
        name: 'Tailored Risk Management Solutions',
        icon: 'fas fa-cogs',
        description: 'Customized policies designed for corporate operations, ensuring specific needs are met.',
    },
    {
        name: 'Comprehensive Business Protection',
        icon: 'fas fa-shield-alt',
        description: 'Coverage for all aspects of financial risk, offering peace of mind for businesses.',
    },
    {
        name: 'Expert Advisory & Support',
        icon: 'fas fa-user-tie',
        description: 'Dedicated insurance professionals available to guide you through risk assessment and decision-making.',
    },
    {
        name: 'Seamless Digital Claims Process',
        icon: 'fas fa-check-circle',
        description: 'Hassle-free claims processing with fast settlements, allowing you to focus on running your business.',
    },
]);


const whatsCovered = ref([
    {
        name: 'Financial Loss Insurance',
        icon: 'fas fa-piggy-bank',
        coverage: 'Protects against fraud, embezzlement, and financial mismanagement.',
        benefits: 'Helps businesses recover from financial setbacks, ensuring continuity and stability.',
    },
    {
        name: 'Money Insurance',
        icon: 'fas fa-money-bill-wave',
        coverage: 'Protects cash, cheques, and financial instruments against theft and loss while on-premises or in transit.',
        benefits: 'Ensures secure business transactions without disruptions.',
    },
    {
        name: 'Fidelity Guarantee Insurance',
        icon: 'fas fa-user-lock',
        coverage: 'Protects against employee dishonesty, theft, and fraudulent activities.',
        benefits: 'Maintains organizational trust and financial security.',
    },
    {
        name: 'Cyber Liability Insurance',
        icon: 'fas fa-laptop-code',
        coverage: 'Protects businesses against cyberattacks, data breaches, and ransomware threats.',
        benefits: 'Covers data recovery costs, legal fees, and potential fines, ensuring minimal business disruption.',
    },
    {
        name: 'Business Interruption Insurance',
        icon: 'fas fa-business-time',
        coverage: 'Compensates for lost revenue and additional expenses due to unexpected operational halts.',
        benefits: 'Insures business continuity and financial security during disruptions.',
    },
    {
        name: 'Directors & Officers (D&O) Insurance',
        icon: 'fas fa-user-tie',
        coverage: 'Protects directors and executives from personal liability claims related to management decisions.',
        benefits: 'Enables leaders to make business decisions confidently, without fear of personal financial risk.',
    },
]);


const whatsCovered2 = ref([
    {
        name: 'Protect Cash Flow & Financial Assets',
        icon: 'fas fa-hand-holding-usd',
        description: 'Comprehensive coverage against theft, fraud, cyberattacks, and unexpected business disruptions, ensuring financial stability.',
    },
    {
        name: 'Shield Your Business from Legal Liabilities',
        icon: 'fas fa-balance-scale',
        description: 'Protection for directors, officers, and corporate leaders against legal claims, ensuring confident decision-making.',
    },
    {
        name: 'Ensure Business Continuity',
        icon: 'fas fa-chart-line',
        description: 'Compensation for lost income and additional expenses due to operational interruptions, keeping your business running smoothly.',
    },
    {
        name: 'Mitigate Internal & External Risks',
        icon: 'fas fa-lock',
        description: 'Secure your company against employee dishonesty, cyber threats, and fraud to prevent financial and reputational damage.',
    },
]);


</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Financial Losses <span class="text-brand-primary">& Money Covers</span>
            </h1>
            <p class="content">
                We ensure your business is protected from unforeseen financial losses. Whether it’s fraud, cyber
                threats, business interruptions, or cash losses, our comprehensive financial loss and money insurance
                solutions keep your business financially secure and operationally stable.
                With our tailored policies, expert advisory services, and proactive risk management, you can focus on
                growth while we handle the risks. When protection is done smart, it’s done with care.
            </p>
        </div>

        <div class="container pb-5">
            <h1 class="section-heading pb-5">Why Financial Loss & Money <span class="text-brand-primary"> Insurance is
                    Essential</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered2" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-4xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 card-heading">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="mt-1 content">
                            <p>
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>

        <div class="container">
            <h1 class="section-heading pb-5">Types of Financial Losses <span
                    class="text-brand-primary">
                    & Money Insurance</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                <NuxtLink :to="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 card-heading">
                            <p>
                                {{ feature.name }}
                            </p>
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
            <h1 class="section-heading pb-5">Why Choose Us for <span class="text-brand-primary"> Financial Loss
                    &
                    Money Insurance?</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits3"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="card-heading pb-1">

                        </h5>
                        <p class="content" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="content">
                Your business financial security is our priority. Let’s walk with you in securing your financial future.
                <br>
                Compare financial loss & money insurance plans and protect your business today!

            </p>
        </div>

        <ContactForm />
    </div>



</template>
