<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Life!',
    title: 'Protect your family\'s tomorrow, today',
    image: '/img/in-life.jpg',
    content: 'Discover our life insurance & make sure your loved ones are safe and sound, no matter what happens. Let’s talk about securing your loved ones’ future. Explore our life insurance options and ensure their financial well-being, no matter what life brings.',
})

const InsuranceCardsContent = ref({
    title: 'Which plan is right <span class="text-brand-primary">for you & your family?</span>',
    users: [
        {
            name: 'Individual Life Assurance',
            icon: 'fas fa-user-shield',
            link: '/insurance/life-plans/individual-life-assurance',
            description: 'Create a legacy of protection and support for those you care about the most with our Individual Life Plans.',
        },
        {
            name: 'Term Life Insurance',
            icon: 'fas fa-hourglass-half',
            link: '/insurance/life-plans/term-life-insurance',
            description: 'Affordable coverage for a specific period, providing financial protection when you need it most.',
        },
        {
            name: 'Whole Life Insurance',
            icon: 'fas fa-life-ring',
            link: '/insurance/life-plans/whole-life-insurance',
            description: 'Lifetime coverage with a savings component, offering both protection and an opportunity to build cash value.',
        },
        {
            name: 'Critical Illness',
            icon: 'fas fa-heartbeat',
            link: '/insurance/life-plans/critical-illness',
            description: 'Offering financial assistance if you face a severe illness such as cancer, heart attack, stroke, organ transplant, kidney failure, and major organ surgeries or a significant accident, this plan stands by you, even if you don\'t pass away. It\'s an extra layer of protection that demonstrates our commitment to your well-being.',
        },
        {
            name: 'Acentria Last Expense',
            icon: 'fas fa-church',
            link: '/insurance/life-plans/acentria-last-expense',
            description: 'The ultimate solution for providing financial reprieve to the insured loved ones for funeral related expenses.',
        },
        {
            name: 'Personal Accident',
            icon: 'fas fa-car-crash',
            link: '/insurance/life-plans/personal-accident',
            description: 'It’s the safety net you and your family can rely on during difficult moments in case of death and disability arising out of an accident. Your well-being is our priority, and this plan is our way of ensuring you\'re insured.',
        },
        {
            name: 'Education Protection Plan',
            icon: 'fas fa-graduation-cap',
            link: '/insurance/life-plans/education-protection-plan',
            description: 'This plan guarantees funds for your children education if something unexpected happens to you. Give your child the gift of a bright future with our Education Protection.',
        },
        {
            name: 'Annuities & Income Draw Down',
            icon: 'fas fa-piggy-bank',
            link: '/insurance/life-plans/annuities-income-draw-down',
            description: 'In a world of financial uncertainty, planning for a secure and comfortable retirement is of paramount importance. Annuities and Income Draw Down are two powerful tools to help you achieve your retirement goals, each with its unique advantages.',
        },

    ],
})


const faqs = ref([
    {
        name: 'What is the best plan for me?',
        content: 'We guide you through the life plan that is likely to be most cost effective and offer optimal coverage based on your needs. The life solution cover different stages of life: illness, retirement, and demise due to accidents or illness.',
    },
    {
        name: 'Is it Important to have a life insurance?',
        content: 'Yes, life is unpredictable, and it\'s essential to ensure that your loved ones are protected financially in case of an unexpected event. Life insurance provides peace of mind, knowing that your family will have financial support to cover expenses such as mortgage payments, education, and daily living costs.',
    },
    {
        name: 'How do I claim & how fast is the claims process?',
        content: 'Our claims process is hassle free.<br><br>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary <a href="#" class="text-brand-primary italic font-bold">claims documents</a> in the event of a claim.<br><br> <NuxtLink href="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'What are the exclusions in Life Insurance?',
        content: 'Some of the exclusions in Life Insurance include:<ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Risks resulting from active participation in war, riots or terrorism.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Risk resulting from insured engaging in illegal activities.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Risk resulting from insured engaging in high-risk activities like skydiving, bungee jumping or other extreme sports unless explicitly included.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Self-inflicted injuries or deaths such as suicide.</li></ul>It is important to read the policy document carefully to understand the exclusions that apply. In case of any concerns, feel free to engage our team of experts for advice.',
    },
    {
        name: 'How can I get started?',
        content: 'Our streamlined enrollment process makes it simple to get the coverage you need.<br><br>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.<br><br>Our customer service team is available to assist you with any questions or concerns.',
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
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With a long history of reliability and trust, we are a leading name in the life insurance industry.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize our customers\' well-being, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing life insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and file claims on the go.',
    },
    {
        name: 'Customized Plans',
        icon: 'fas fa-cogs',
        description: 'Tailor your coverage to fit your unique needs and financial goals.',
    },
    
])


const whatsCovered = ref([
    {
        name: 'Financial Protection and affordable retirement plans',
        icon: 'fas fa-piggy-bank'
    },
    {
        name: 'Critical Illness',
        icon: 'fas fa-heartbeat'
    },
    {
        name: 'Death as a result of accidents, illnesses or natural causes',
        icon: 'fas fa-cross'
    },
    {
        name: 'Permanent Total Disability as a result of accidents or illnesses',
        icon: 'fas fa-wheelchair'
    },
    {
        name: 'Permanent Partial Disability as a result of accidents or illnesses',
        icon: 'fas fa-user-injured'
    },
    {
        name: 'Funeral Expenses',
        icon: 'fas fa-church'
    }
]);

const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Life Insurance</span>',
    description: 'Life is unpredictable, and it\'s essential to ensure that your loved ones are protected financially in case of an unexpected event.Life insurance provides peace of mind, knowing that your family will have financial support to cover expenses such as mortgage payments, education, and daily living costs.',
})

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started</span>',
    description: 'Take the first step towards securing your family\'s future with our comprehensive life insurance plans. Compare Quotes today and provide your loved ones with the financial protection they deserve.',
})

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


        <!-- <div class="container py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">How Can I <span class="text-brand-primary">Get
                    Started</span></h1>
            <p class="mt-6 text-xs leading-normal">
                Our streamlined enrollment process makes it simple to get the coverage you need.
                You can compare plans, get quotes, and enroll online within minutes - <span
                    class="text-brand-primary italic font-semibold">Do It Yourself</span>
                or review your
                quotes online, then get tailored advice from our agents - <span
                    class="text-brand-primary italic font-semibold">Engage our expert </span>.
                Our customer service team is available to assist you with any questions or concerns.

            </p>
        </div> -->


        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why <span class="text-brand-primary">Choose Us</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="text-lg pb-1 font-semibold leading-normal text-gray-600">

                        </h5>
                        <p class="leading-normal font-regular text-light-content text-xs">
                            {{ benefit.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" /> -->
        <ContactForm />
    </div>



</template>
