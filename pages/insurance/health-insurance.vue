<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Health!',
    title: 'Comprehensive Health Insurance Plans for Every Stage of Life',
    image: '/img/nurse.jpg',
    content: 'Discover our life insurance & make sure your loved ones are safe and sound, no matter what happens. Let’s talk about securing your loved ones’ future. Explore our life insurance options and ensure their financial well-being, no matter what life brings.',
})

const InsuranceCardsContent = ref({
    title: 'Which cover is right <span class="text-brand-primary">for you?</span>',
    users: [
        {
            name: 'Family/Individual Health Covers',
            icon: 'fas fa-users',
            link: '/insurance/health-plans/family-individual-health-covers',
            description: 'The cover is purchased by an individual to cover themselves and their dependents (spouse and children). In most cases, this is an off-the-shelf product with various options.',
        },
        {
            name: 'Junior Medical Covers',
            icon: 'fas fa-child',
            link: '/insurance/health-plans/junior-medical-covers',
            description: 'This is a cover designed for children 2 years and above without having the parent as a main member.',
        },
        {
            name: 'Senior’s Medical Covers',
            icon: 'fas fa-user-clock',
            link: '/insurance/health-plans/seniors-medical-covers',
            description: 'With most covers having an upper age limit of 65 years, this product is designed to ensure that those above 65 years are covered for the rest of their life.',
        },
        {
            name: 'Corporate Covers',
            icon: 'fas fa-building',
            link: '/insurance/health-plans/corporate-covers',
            description: 'This is a health plan purchased by an employer for the employees only, or with their families (spouses and children). This cover is flexible and can be customized to the employer’s needs. The plan can be fully insured or partly funded (Hybrid).',
        },
        {
            name: 'Micro Covers (SME)',
            icon: 'fas fa-briefcase',
            link: '/insurance/health-plans/micro-covers-sme',
            description: 'This is a cover for small and micro enterprise companies and those corporates looking for an off-the-shelf product specifically designed to suit their coverage needs. The cover is designed for companies with populations of between 3-10 employees. The plans have been negotiated to waive waiting periods and co-pays.',
        },
        {
            name: 'International Medical Cover',
            icon: 'fas fa-globe',
            link: '/insurance/health-plans/international-medical-cover',
            description: 'This cover is designed to assist access to private healthcare in your country of residence and abroad. It is ideal for people who plan to spend more than a year abroad or are frequent travelers.',
        },
    ],
});


const faqs = ref([
    {
        name: 'What benefits do I get with a comprehensive health plan?',
        content: 'These plans typically include coverage for hospitalization, doctors’ visits, prescription drugs, preventive care, emergency services, diagnostic tests, mental health services, maternity, and newborn care, and more. Our comprehensive plan also provides optional dental and optical coverage, wellness programs, and access to network providers.',
    },
    {
        name: 'Special terms in Health Insurance you need to know:',
        content: '<ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Premium: The premium is the amount a consumer pays for a health insurance plan, usually made bi-weekly, monthly, quarterly, or yearly.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Pre-authorizations: A decision by your health insurer or plan that a service, treatment, or drug is medically necessary.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Covered Benefits: Services or items included in the health insurance plan, defined in the plan\'s documents.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Exclusions: Services not covered by the plan, such as cosmetic surgeries or experimental treatments.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Co-payment: A fixed amount paid out-of-pocket for services. Not all plans have co-payment.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Coordination of Benefits (COB): Determines which plan pays first when multiple plans cover the same person.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Waiting Period: The time you must wait before you can file a claim.</li></ul>',
    },
    {
        name: 'Which health facilities is the cover accepted?',
        content: 'Our health insurance covers are accepted at major private hospitals, community hospitals, clinics, physicians and specialists, diagnostic and imaging centers, emergency evacuation providers, and pharmacies. The panel of providers is available on the self-help portal or from our customer care team.',
    },
    {
        name: 'How do I claim & how fast is the claims process?',
        content: '<p>Our claims process is hassle-free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5 list-decimal"><li>Review Your Policy: Understand the coverage and procedures for filing a claim.</li><li>Gather Documentation: Collect necessary documents, such as medical bills, receipts, and claim forms.</li><li>Submit the Claim: Submit the completed claim form and documentation to your insurance provider as instructed.</li></ol><p>It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claim.</p><NuxtLink href="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'How do I access Cover?',
        content: '<ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Use Network Providers: Access services through the included healthcare provider network for maximum benefits.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Present your medical card or member number to access cover.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Pay out-of-pocket if accessing services outside the network and file a claim later.</li></ul>',
    },
    {
        name: 'What is the best plan for me?',
        content: '<p>Consider the following factors when choosing a health insurance plan:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Coverage Needs: Assess the medical services and treatments you require.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Costs: Compare premiums, deductibles, co-payments, and coinsurance.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Network: Ensure your preferred doctors and hospitals are in-network.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Benefits: Look for additional benefits like prescription drug coverage, wellness programs, and preventive care.</li></ul><p>We guide you through the health plan that is likely to be most cost-effective and maximizes coverage while staying within your budget.</p>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
]);


const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products, ensure prudent risk management, reduce your loss ratios, and hence save you on cost',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile products and scope',
        icon: 'support_agent',
    },
    {
        title: 'Easy claim process',
        content: 'Our claims process is hassle-free, and we are proud of our service',
        icon: 'assignment_turned_in',
    },
    {
        title: 'Prompt Quotations',
        content: 'Let us help you with the best timely quotations for your needs',
        icon: 'query_builder',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'thumb_up',
    },
    {
        title: 'Peace of Mind',
        content: 'Your peace of mind is our priority. Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
    },
])

const benefits = ref([
    {
        name: 'Affordable Plans',
        icon: 'fas fa-dollar-sign',
        description: '<p>We offer a range of plans to fit different budgets and healthcare needs.</p>',
    },
    {
        name: 'Network of Providers',
        icon: 'fas fa-network-wired',
        description: '<p>Access to an extensive network of healthcare providers, ensuring you receive the best care possible.</p>',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-headset',
        description: '<p>Our dedicated support team is available around the clock to assist you with any health-related issues.</p>',
    },
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: '<p>With years of experience and a strong reputation, we are a trusted name in the health insurance industry.</p>',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: '<p>We prioritize our customers\' well-being, offering personalized service and prompt claims processing.</p>',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: `<p>Purchasing health insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks.</p>
        <p>Plus, our mobile app makes it convenient to access your policy information and file reimbursement claims on the go.</p>`,
    },
    
]);

const benefits2 = ref([
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-heartbeat',
        items: [
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> Family/Individual Health Covers',
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> Junior Medical Covers',
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> Senior’s Medical Covers',
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> Corporate Covers',
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> Micro Covers (SME)',
            '<i class="fas fa-caret-right text-brand-primary mr-1"></i> International Medical Cover',
        ]
    },
])



const whatsCovered = ref([
    {
        name: 'Hospitalization Benefits',
        icon: 'fas fa-hospital',
        description: 'Coverage for inpatient hospital stays, surgeries, and treatments.',
    },
    {
        name: 'Outpatient Care',
        icon: 'fas fa-user-md',
        description: 'Access to outpatient services, including doctor visits, specialist consultations, and diagnostic tests.',
    },
    {
        name: 'Preventive Care',
        icon: 'fas fa-syringe',
        description: 'Coverage for vaccinations, screenings, and wellness programs to keep you healthy.',
    },
    {
        name: 'Prescription Drugs',
        icon: 'fas fa-pills',
        description: 'Benefits for prescribed medications, both generic and brand-name.',
    },
    {
        name: 'Maternity and Newborn Care',
        icon: 'fas fa-baby',
        description: 'Comprehensive coverage for maternity care, childbirth, and newborn health services.',
    },
    {
        name: 'Chronic Disease Management',
        icon: 'fas fa-heartbeat',
        description: 'Support and coverage for managing chronic conditions such as diabetes, hypertension, and asthma.',
    },
    {
        name: 'Mental Health Services',
        icon: 'fas fa-brain',
        description: 'Access to mental health professionals and coverage for therapy and counseling services.',
    },
]);

const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Health Insurance</span>',
    description: 'Your health is your most valuable asset. With rising medical costs, having health insurance ensures that you and your loved ones are protected against unexpected medical expenses. Our health insurance plans offer the coverage you need to stay healthy and financially secure.',
});

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started</span>',
    description: 'Invest in your health and well-being with our reliable health insurance plans. Get a quote today and take the first step towards a healthier future.',
});



</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <Audience :InsuranceCardsContent="InsuranceCardsContent" />

        <div class="container py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">Easy <span class="text-brand-primary">Claim
                    Process</span></h1>
            <p class="mt-6 text-xs leading-normal">
                Our claims process is hassle free.
                <br>
                It is important to familiarize yourself with your policy coverage and necessary <span
                    class="text-brand-primary italic font-semibold">claims
                    documents</span> when
                purchasing cover. <br> Our team of experts are readily available to guide you through the process.
            </p>
            <div class="mt-5">
                <NuxtLink href="/"
                    class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                    Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>
        </div>

        <div class="container mx-auto py-5">
            <h1 class="text-2xl font-semibold mb-4">Frequently <span class="text-brand-primary">Asked Questions</span>
            </h1>
            <p class="text-xs leading-normal text-gray-700 font-semibold">We have all the answers to your questions.</p>
            <Accordion :faqs="faqs" />
        </div>


        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why <span class="text-brand-primary">Choose Us</span>
            </h1>

            <div class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 mb-2 text-base text-gray-600">
                <div v-for="benefit in benefits2"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600">

                        </h5>
                        <p class="leading-normal font-regular text-light-content text-xs">We offer a range of plans
                            tailored to meet your needs. Our health plans include:</p>
                        <div class="grid grid-cols-3 gap-5 p-5">
                            <div v-for="item in benefit.items" v-html="item">
                            </div>
                        </div>    
                        <p class="leading-normal font-regular text-light-content text-xs" v-html="benefit.description">
                        </p>
                        <p class="leading-normal font-regular text-light-content text-xs">Each plan is designed to
                            provide comprehensive coverage tailored to your specific needs.</p>
                    </div>
                </div>
            </div>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">

                <div v-for="benefit in benefits"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600">

                        </h5>
                        <p class="leading-normal font-regular text-light-content text-xs" v-html="benefit.description">
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" /> -->
        <ContactForm />
    </div>



</template>
