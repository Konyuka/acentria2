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
        name: 'What is international medical insurance?',
        content: '<p>International medical insurance provides comprehensive health coverage for individuals and families who are living, working, or traveling abroad. It covers a wide range of medical services, including emergency care, hospitalization, outpatient treatments, and preventive care.</p>',
    },
    {
        name: 'Who needs international medical insurance?',
        content: '<p>International medical insurance is ideal for expatriates, international students, business travelers, and anyone spending an extended period abroad. It ensures access to quality healthcare services regardless of location.</p>',
    },
    {
        name: 'What does international medical insurance cover?',
        content: '<p>Coverage typically includes:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Emergency medical care</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Hospitalization and surgeries</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Outpatient treatments and consultations</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Prescription medications</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Preventive care and vaccinations</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Dental and vision care (optional add-ons)</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Medical evacuation and repatriation</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Maternity care (optional add-ons)</li></ul>',
    },
    {
        name: 'What is the difference between travel insurance and international medical insurance?',
        content: '<p>Travel insurance is designed for short-term trips and typically covers trip cancellations, lost luggage, and emergency medical care. International medical insurance, on the other hand, provides long-term health coverage for individuals living or working abroad, covering a broader range of medical services and treatments.</p>',
    },
    {
        name: 'How do I choose the right international medical insurance plan?',
        content: '<p>Consider the following factors:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Coverage Needs: Assess your medical needs and the services you require.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Network of Providers: Ensure the plan includes access to healthcare providers in your destination country.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Policy Limits: Review coverage limits for medical expenses and treatments.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Cost: Compare premiums, deductibles, and out-of-pocket costs.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Additional Benefits: Look for added benefits such as medical evacuation, dental and vision care, and preventive services.</li></ul>',
    },
    {
        name: 'How do I file a claim?',
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5 list-decimal"><li>Contact Insurer: Notify your insurance provider as soon as possible.</li><li>Gather Documentation: Collect all necessary documents, such as medical bills, receipts, and claim forms.</li><li>Submit Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink href="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'Is maternity care covered?',
        content: '<p>Maternity care is often available as an optional add-on to international medical insurance plans. Coverage may include prenatal care, delivery, and postnatal care. Be sure to check the specific terms and conditions of your policy.</p>',
    },
    {
        name: 'What is medical evacuation and repatriation?',
        content: '<p>Medical evacuation involves transporting you to the nearest medical facility equipped to handle your condition. Repatriation refers to returning you to your home country for continued medical treatment if necessary. These services are typically covered under international medical insurance plans.</p>',
    },
    {
        name: 'Can I include my family in the plan?',
        content: '<p>Yes, our international medical insurance plans offer family coverage, allowing you to include your spouse and dependents under a single policy.</p>',
    },
    {
        name: 'How can I access healthcare services abroad?',
        content: '<p>Our international medical insurance plans provide access to a network of healthcare providers worldwide. You can use our online portal or contact our customer service for assistance in finding and accessing healthcare services in your destination country.</p>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
]);


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
        description: 'With years of experience and a strong reputation, we are a trusted name in the international medical insurance industry.',
    },
    {
        name: 'Customer Focus',
        icon: 'fas fa-users',
        description: 'We prioritize our customers\' well-being, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Affordable Plans',
        icon: 'fas fa-money-bill-wave',
        description: 'We offer a range of plans to fit different budgets and healthcare needs.',
    },
    {
        name: 'Network of Providers',
        icon: 'fas fa-network-wired',
        description: 'Access to an extensive network of healthcare providers, ensuring you receive the best care possible.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize our customers\' well-being, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing health insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and file reimbursement claims on the go.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-headset',
        description: 'Our dedicated support team is available around the clock to assist you with any health-related issues.',
    },
]);



const whyTheInsurance = ref({
    title: 'Why Choose <span class="text-brand-primary">International Medical Insurance</span>',
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
            <p class="text-sm leading-normal text-gray-700 font-semibold">We have all the answers to your questions.</p>
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
