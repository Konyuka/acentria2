<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Home!',
    title: 'Protect your home and belongings with our comprehensive home insurance.',
    image: '/img/safehouse.jpg',
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
        content: '<p>Our claims process is hassle free.</p><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink href="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
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


const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Home Insurance</span>',
    description: 'Your home is one of your most valuable assets, and it\'s essential to protect it against unexpected events. Our home insurance provides comprehensive coverage to safeguard your property and belongings, ensuring peace of mind and financial security.',
})

const whatsCovered = ref([
    {
        name: 'Property against risk such as fire, theft, vandalism and natural disasters',
        icon: 'fas fa-home',
    },
    {
        name: 'Personal belongings such as furniture, electronics, clothing and other valuables',
        icon: 'fas fa-tv',
    },
    {
        name: 'Liability coverage; incase a person is injured in your property',
        icon: 'fas fa-user-shield',
    },
    {
        name: 'Additional living expenses',
        icon: 'fas fa-hotel',
    },
    {
        name: 'Domestic workers personal accident',
        icon: 'fas fa-user-nurse',
    },
])

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started!</span>',
    description: 'Protect your home and belongings with our comprehensive home insurance. Get a quote today and take the first step towards peace of mind and financial security.',
})

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

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

        <div class="container mx-auto px-4 py-2 mt-5">
            <h1 class="text-2xl font-semibold mb-4">Frequently <span class="text-brand-primary">Asked Questions</span>
            </h1>
            <p class="text-sm leading-normal text-gray-700">We have all the answers to your questions.</p>
        </div>

        <Accordion :faqs="faqs" />

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>



</template>
