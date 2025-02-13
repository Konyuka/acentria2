<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Travel Insurance',
    title: 'Explore the World with Confidence',
    image: '/img/in-travel.jpg',
    content: 'At Acentria, we promise to stand with you, walk with you, and rise with you—so you can travel freely, knowing you’re protected. Whether you\'re exploring Kenya’s landscapes or flying across the globe, unexpected events can disrupt your plans.That’s why our comprehensive travel insurance provides medical, trip cancellation, and luggage protection, ensuring peace of mind every step of the way.When protection is done smart, it’s done with care.',
})

const InsuranceCardsContent = ref({
    title:'What kind of travel  <span class="text-brand-primary"> insurance do you need?</span> ',
    users: [
        {
            name:'Local Travel Insurance',
            icon:'fas fa-user',
            description: 'Planning a trip within Kenya? Stay protected from unexpected medical expenses, trip delays, and lost belongings.',
            link: '/',
        },
        {
            name:'International Travel Insurance',
            icon: 'fas fa-users',
            description: 'Heading abroad? Our global travel insurance ensures seamless protection wherever you go.',
            link: '/',
        },
    ],

})




const faqs = ref([
    {
        name: 'What does comprehensive coverage include?',
        content: '<p>The travel insurance policy offers the following coverage depending on the selected policy:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Medical Emergencies:</strong> Access to medical care globally, including hospital stays, doctor visits, and emergency evacuations.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Trip Cancellations:</strong> Reimbursement for non-refundable expenses if your trip is canceled or interrupted due to unforeseen circumstances.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Lost Luggage:</strong> Compensation for lost, stolen, or damaged luggage and personal belongings.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Baggage Loss or Delay:</strong> Protection for your belongings in case of loss, theft, or delay, ensuring you have what you need when you need it.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Travel Delays:</strong> Coverage for additional expenses incurred due to travel delays, such as accommodation and meals.</li></ul>',
    },
    {
        name: 'Can I customize my travel insurance policy based on my trip’s specifics?',
        content: '<p>Yes, you can often customize your travel insurance policy to match your travel plans, including adding coverage for specific activities, trip components, or number of trips (e.g., single trip and annual multi-trip). <a href="#" class="font-bold text-brand-primary">Contact us</a> to customize your policy.</p>',
    },
    {
        name: 'How is the cost of travel insurance determined?',
        content: '<p>The cost of travel insurance depends on factors such as your destination, trip duration, coverage limits, and your age. Access our online portal for a quote or engage with our experts for assistance.</p>',
    },
    {
        name: 'Is this policy used to cover my general health care in the absence of an emergency?',
        content: '<p>No, the policy is only applicable in the event of a sudden or unexpected sickness or accident arising when the insured is outside of their home country. The cover does not extend to preexisting conditions. <a href="#" class="font-bold text-brand-primary">Contact us</a> to customize an international medical plan for you.</p>',
    },
    {
        name: 'What is the key takeout for an easy claims process?',
        content: '<p>The claims process will vary depending on the nature of the event leading to the claim. It is important to understand your policy coverage and required claims documentation before traveling, as some documents must be obtained from authorities or institutions in the country of travel.</p>',
    },
    {
        name: 'What are the common exclusions in travel insurance?',
        content: '<p>Some common exclusions in travel insurance include:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Pre-Existing Medical Conditions:</strong> Medical expenses related to pre-existing conditions unless specifically covered.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>High-Risk Activities:</strong> Activities like skydiving, bungee jumping, or extreme sports unless additional coverage is purchased.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Routine Medical Care:</strong> Routine check-ups, dental care, and non-emergency treatments.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Mental Health Conditions:</strong> Claims arising from mental or emotional disorders.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Travel to High-Risk Countries:</strong> Travel to countries with advisories or high-risk areas.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Pregnancy and Childbirth:</strong> Expenses related to pregnancy unless specific coverage is purchased.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Loss Due to Negligence:</strong> Loss or damage due to negligence, such as leaving belongings unattended.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>War and Terrorism:</strong> Damage or loss caused by war, civil unrest, or acts of terrorism.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Intoxication:</strong> Incidents under the influence of alcohol or drugs.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Weather-Related Cancellations:</strong> Cancellations or delays due to weather unless specified in the policy.</li></ul>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need. You can:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Do It Yourself:</strong> Compare plans, get quotes, and enroll online within minutes.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> <strong>Engage Our Experts:</strong> Review your quotes online and get tailored advice from our agents.</li></ul><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
]);


const benefits = ref([
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-globe',
        description: 'From solo travelers to families and business professionals, we offer tailored travel insurance plans.',
    },
    {
        name: 'Fast & Easy',
        icon: 'fas fa-check-circle',
        description: 'Get instant quotes, compare plans, and purchase insurance online or via our mobile app.',
    },
    {
        name: '24/7 Global Assistance',
        icon: 'fas fa-phone-alt',
        description: 'Our support team is available round-the-clock for any travel-related emergencies.',
    },
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With years of expertise, we’re a leading name in travel insurance in Kenya.',
    },
    {
        name: 'Flexible & Affordable Plans',
        icon: 'fas fa-exchange-alt',
        description: 'Choose a plan that matches your budget and travel needs.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize fast claims processing and personalized service.',
    },
]);


const benefits2 = ref([
    {
        name: 'Stay Protected',
        icon: 'fas fa-globe',
        description: 'Coverage for medical emergencies, lost baggage, and trip disruptions, ensuring a worry-free travel experience.',
    },
    {
        name: 'Financial Security',
        icon: 'fas fa-money-bill-wave',
        description: 'Avoid costly medical bills and unexpected travel expenses with our comprehensive travel insurance.',
    },
    {
        name: '24/7 Travel Assistance',
        icon: 'fas fa-phone-alt',
        description: 'Receive immediate help when you need it, wherever you are, through our dedicated support team.',
    },
    {
        name: 'Local & International Coverage',
        icon: 'fas fa-plane-departure',
        description: 'Whether you’re traveling within Kenya or abroad, our plans provide reliable coverage tailored to your needs.',
    },
]);





const whatsCovered = ref([
    {
        name: 'Medical Emergencies',
        icon: 'fas fa-briefcase-medical',
        description: 'Covers hospital bills, emergency treatments, and medical evacuations during your trip.',
    },
    {
        name: 'Trip Cancellations & Interruptions',
        icon: 'fas fa-calendar-times',
        description: 'Get reimbursed for cancellations due to illness, weather disruptions, or other covered reasons.',
    },
    {
        name: 'Lost or Delayed Luggage',
        icon: 'fas fa-suitcase-rolling',
        description: 'Compensation for lost, stolen, or delayed baggage, ensuring you’re never left stranded.',
    },
    {
        name: 'Travel Delays',
        icon: 'fas fa-clock',
        description: 'Covers expenses for accommodation, meals, and other costs when flights or transport are delayed.',
    },
    {
        name: 'Personal Liability',
        icon: 'fas fa-user-shield',
        description: 'Provides protection in case you’re legally responsible for injury or property damage during your trip.',
    },
]);


const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Travel Insurance</span>',
    description: 'At Acentria, we promise to stand with you, walk with you, and rise with you—so you can travel freely, knowing you’re protected. Whether you\'re exploring Kenya’s landscapes or flying across the globe, unexpected events can disrupt your plans. That’s why our comprehensive travel insurance provides medical, trip cancellation, and luggage protection, ensuring peace of mind every step of the way. When protection is done smart, it’s done with care.',
});

const getStarted = ref({
    title: 'Get Started<span class="text-brand-primary"> Today!</span>',
    description: 'Protect your travels with Acentria Travel Insurance. Get a quote today and embark on your journey worry-free!',
});



</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <Audience :InsuranceCardsContent="InsuranceCardsContent" />

        <div class="container py-5">
            <h2 class="section-heading pb-5">
                Why Travel Insurance <span class="text-brand-primary"> is Essential</span>
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

        <div class="container py-10">
            <h1 class="section-heading pb-5">Easy & Hassle-Free <span class="text-brand-primary">Claim
                    Process</span></h1>
            <p class="content">
            <p>We believe in <strong>fast, straightforward claims processing</strong>—so you can focus on your trip, not
                paperwork.</p>
            <p> <strong>Before traveling</strong>, familiarize yourself with your coverage details and required claim
                documents.</p>

            </p>
            <div class="mt-5">
                <NuxtLink to="/contact-acentria-group"
                    class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                    Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i>
                </NuxtLink>
            </div>
        </div>

        <div class="container mx-auto py-5">
            <h1 class="section-heading pb-5">Frequently <span class="text-brand-primary">Asked Questions</span>
            </h1>
            <p class="content pb-5">We have all the answers to your questions.</p>
            <Accordion :faqs="faqs" />
        </div>


        <div class="container py-5">
            <h1 class="section-heading pb-5">Why Choose Acentria <span class="text-brand-primary"> Travel Insurance?</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits"
                    class="flex flex-row gap-2 border-2 border-gray-100 py-2 px-4 rounded-md shadow-md">
                    <i :class="benefit.icon" class="text-3xl text-brand-primary mr-4"></i>
                    <div>
                        <h5 v-html="benefit.name" class="card-heading pb-1 ">

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
