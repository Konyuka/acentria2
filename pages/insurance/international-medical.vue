<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Health!',
    title: 'Comprehensive Health Insurance Plans for Every Stage of Life',
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

const benefits = ref([
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With years of experience and a strong reputation, we are a trusted name in the insurance industry.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize our customers\' well-being, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing home insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and file claims on the go.',
    },
    {
        name: 'Customized Plans',
        icon: 'fas fa-cogs',
        description: 'Tailor your coverage to fit your unique needs and financial goals.',
    },
    
])


const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">International Medical Insurance</span>',
    description: 'Traveling or living abroad can be an exciting adventure, but it\'s essential to have the right medical coverage to protect yourself and your loved ones. Our international medical insurance provides extensive coverage, ensuring that you have access to quality healthcare wherever you are in the world.',
});

const whatsCovered = ref([
    {
        name: 'Global Coverage',
        icon: 'fas fa-globe',
        description: 'Our plans offer worldwide coverage, so you can travel or live abroad with peace of mind, knowing that you\'re protected no matter where you go.',
    },
    {
        name: 'Comprehensive Medical Care',
        icon: 'fas fa-hospital',
        description: 'Access to a wide range of medical services, including hospitalization, specialist consultations, surgeries, and emergency care.',
    },
    {
        name: 'Preventive Care',
        icon: 'fas fa-syringe',
        description: 'Coverage for routine check-ups, vaccinations, and preventive screenings to help you stay healthy while abroad.',
    },
    {
        name: 'Dental and Vision Care',
        icon: 'fas fa-tooth',
        description: 'Includes coverage for dental and vision care, ensuring that your overall health is well taken care of.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-phone-alt',
        description: 'Access to our 24/7 assistance services for medical advice, emergency support, and help with finding local healthcare providers.',
    },
    {
        name: 'Telemedicine',
        icon: 'fas fa-video',
        description: 'Convenient access to telemedicine services, allowing you to consult with healthcare professionals remotely.',
    },
    {
        name: 'Personalized Plans',
        icon: 'fas fa-sliders-h',
        description: 'Tailor your coverage to meet your specific needs, whether you\'re traveling for a short period or living abroad long-term.',
    },
    {
        name: 'Family Coverage',
        icon: 'fas fa-users',
        description: 'Options to include coverage for your family members, ensuring that everyone is protected while you\'re away from home.',
    },
    {
        name: 'Flexible Payment Options',
        icon: 'fas fa-wallet',
        description: 'Choose from a range of payment options to suit your budget and preferences.',
    },
]);

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started!</span>',
    description: 'Protect yourself and your loved ones with our comprehensive international medical insurance. Get a quote today and take the first step towards peace of mind and financial security, no matter where your travels take you.',
});


</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <div class="container py-5">
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
            <Accordion :faqs="faqs" />
        </div>

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

        <ContactForm />
    </div>



</template>
