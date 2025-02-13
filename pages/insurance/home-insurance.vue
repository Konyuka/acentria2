<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Home Insurance',
    title: 'Protect What Matters Most',
    image: '/img/in-home.jpg',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const faqs = ref([
    {
        name: 'What is home insurance?',
        content: 'Home insurance or Domestic package is a type of insurance that protects your residential house and its contents from unexpected events like fires, theft, or accidental damage. It can be extended to cover domestic workers from accidental death or injury and liabilities to third parties.',
    },
    {
        name: 'How often should I review and update my home insurance policy?',
        content: 'Review of policy and declaration of covered items should be done whenever you make significant changes to your home or acquire valuable new possessions. This ensures your coverage remains adequate and full payout in case of a claim. Our agents can also contact you & share reminder notifications to your email / phone if you want to review and update your policy.',
    },
    {
        name: 'How is the value of my home and belongings determined for insurance purposes?',
        content: 'The value of your home is typically determined by its replacement cost, which is how much it would cost to rebuild it if it were destroyed. The value of your belongings is based on their current market value or replacement cost, depending on your policy.',
    },
    {
        name: 'Is it important to declare my belongings during policy uptake?',
        content: 'Yes, it is important to maintain and declare a clear schedule of your belonging during purchase of insurance to avoid under insurance. Under insurance is when the value of goods and quantities being insured is lower than actual value of goods leaving the policy holder responsible for a large percentage of total loss or expense in case of a claims and may lead to financial hardship.',
    },
    {
        name: 'Do I need home Insurance if I rent my home?',
        content: 'Yes, even if you\'re renting, it\'s a good idea to have home insurance. It protects your personal belongings in case of theft or damage and can provide liability coverage if someone is injured while visiting.',
    },
    {
        name: 'How do I claim & how fast is the claims process?',
        content: '<p>Our claims process is hassle free.</p><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/contact-acentria-group" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'What are the exclusions in Home Insurance?',
        content: '<p>Some of the exclusions in Home Insurance include:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Damage resulting from wear and tear i.e. plumbing works, electrical works.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Insured engaging in illegal activities.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Acts of God such as earthquake & floods damage unless their special extensions.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Pest infestations, mold and mildew and sewer backup.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> War, including nuclear, biological, or chemical attacks.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Intentionally caused by the homeowner or residents.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Government actions, such as property confiscation or demolition.</li></ul><p>It is important to read the policy document carefully to understand the exclusions that apply. In case of any concerns, feel free to engage our team of experts for advice.</p>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
])

const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products & reduce your loss ratios',
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
        description: 'A leading name in Kenya’s insurance industry, known for reliability and excellence.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'Enjoy fast claims processing and personalized service that puts your needs first.',
    },
    {
        name: 'Digital Convenience',
        icon: 'fas fa-mobile-alt',
        description: 'Compare plans, get quotes, and manage your policies online or via our mobile app for ultimate convenience.',
    },
    {
        name: 'Tailored Coverage',
        icon: 'fas fa-cogs',
        description: 'Customize your insurance plan to match your specific needs and budget, ensuring you get the coverage that works for you.',
    },
]);



const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Home Insurance</span>',
    description: '<p>We promise to <b>stand with you, walk with you, and rise with you</b>—designing home insurance solutions that give you the freedom to live confidently. Your home is more than just a building; it\'s where memories are made, and<b>protecting it is essential</b>.</p > <br> <p>Our <b>comprehensive home insurance</b> safeguards your property, belongings, and loved ones from unexpected risks like <b>fire, theft, and natural disasters</b>—ensuring peace of mind and financial security. Because when <b>protection is done smart, it’s done with care</b>.</p>',
})

const whatsCovered = ref([
    {
        name: 'Property Protection',
        icon: 'fas fa-home',
        description: 'Covers damage or loss due to fire, theft, vandalism, and natural disasters.',
    },
    {
        name: 'Personal Belongings Cover',
        icon: 'fas fa-tv',
        description: 'Includes furniture, electronics, clothing, and other valuables.',
    },
    {
        name: 'Liability Coverage',
        icon: 'fas fa-user-shield',
        description: 'Protection if someone is injured in your home and you are held responsible.',
    },
    {
        name: 'Additional Living Expenses',
        icon: 'fas fa-hotel',
        description: 'Covers temporary accommodation costs if your home becomes uninhabitable.',
    },
    {
        name: 'Domestic Workers Personal Accident',
        icon: 'fas fa-user-nurse',
        description: 'Provides personal accident coverage for domestic workers in your home.',
    },
]);


const getStarted = ref({
    title: 'Get Started <span class="text-brand-primary">Today!</span>',
    description: 'Protect your home and valuables with our comprehensive home insurance. Compare quotes and get insured today!',
})

const benefits2 = ref([
    {
        name: 'Safeguard Your Home & Assets',
        icon: 'fas fa-home',
        description: 'Protect against fire, theft, vandalism, and natural disasters, ensuring your property and belongings are secure.',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-money-bill-wave',
        description: 'Avoid unexpected repair and replacement costs, providing you with financial stability when unforeseen events occur.',
    },
    {
        name: 'Liability Coverage',
        icon: 'fas fa-shield-alt',
        description: 'Stay protected if someone is injured on your property, covering legal responsibilities and associated costs.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Sleep easy knowing your home and belongings are covered, allowing you to live confidently and stress-free.',
    },
]);


</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <div class="container">
            <h2 class="section-heading pb-5">
                Why Home Insurance <br> <span class="text-brand-primary"> is Important</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div v-for="principle in benefits2"
                    class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                    <div class="flex flex-col">
                        <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                        <h4 class="card-heading pb-1">{{
                            principle.name }}</h4>
                        <p class="content">{{ principle.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <h1 class="section-heading pb-5">Easy & Hassle-Free <span class="text-brand-primary"> Claims Process</span>
            </h1>
            <p class="content">
                Filing a claim shouldn't be stressful. Our straightforward claims process ensures quick settlements so
                you can focus on what matters most.
            </p>
            <div class="mt-5">
                <NuxtLink to="/contact-acentria-group"
                    class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                    Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>
        </div>

        <div class="container mx-auto px-4 py-2 mt-5">
            <h1 class="section-heading pb-5">Frequently <span class="text-brand-primary">Asked Questions</span>
            </h1>
            <p class="content pb-5">We have all the answers to your questions.</p>
            <Accordion :faqs="faqs" />
        </div>

        <div class="container py-5">
            <h1 class="section-heading pb-5">Why <span class="text-brand-primary">Choose Us</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="card-heading pb-1">

                        </h5>
                        <p class="content">
                            {{ benefit.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <ContactForm />
    </div>



</template>
