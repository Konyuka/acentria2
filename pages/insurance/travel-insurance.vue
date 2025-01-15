<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Travel!',
    title: 'Travel with confidence',
    image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Discover our life insurance & make sure your loved ones are safe and sound, no matter what happens. Let’s talk about securing your loved ones’ future. Explore our life insurance options and ensure their financial well-being, no matter what life brings.',
})

const InsuranceCardsContent = ref({
    title:'What kind of travel insurance do you need?',
    users: [
        {
            name:'Local Travel',
            icon:'fas fa-user',
            description: 'Planning a local getaway? Keep all worries at bay with our local travel insurance. Your hassle-free adventure starts here – get your coverage today.',
        },
        {
            name:'International Travel',
            icon: 'fas fa-users',
            description: 'Ready to set off on a global adventure? Our international travel insurance has got you covered every step of the way. Say hello to stress-free explorations – secure your journey now and travel the world with confidence',
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
        description: 'We offer a range of plans tailored to meet your needs, whether you\'re a solo traveler, a family on vacation, or a business professional.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing travel insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and file claims on the go.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-phone-alt',
        description: 'Our dedicated support team is available around the clock to assist you with any travel-related issues.',
    },
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With years of experience and a strong reputation, we are a trusted name in the travel insurance industry.',
    },
    {
        name: 'Flexible Plans',
        icon: 'fas fa-exchange-alt',
        description: 'Choose from a variety of plans that fit your travel style and budget.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize customer satisfaction, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy Claims Process',
        icon: 'fas fa-file-alt',
        description: 'Our streamlined claims process makes it simple and hassle-free to get the payout you deserve.',
    },
]);




const whatsCovered = ref([
    {
        name: 'Medical Emergencies',
        icon: 'fas fa-briefcase-medical',
    },
    {
        name: 'Trip Cancellations',
        icon: 'fas fa-calendar-times',
    },
    {
        name: 'Delay or Lost Luggage',
        icon: 'fas fa-suitcase-rolling',
    },
    {
        name: 'Travel Delays',
        icon: 'fas fa-clock',
    },
    {
        name: 'Personal Liability',
        icon: 'fas fa-user-shield',
    },
]);

const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Travel Insurance</span>',
    description: 'Traveling is an exciting adventure, but unexpected events can turn your trip upside down. With Acentria Travel Insurance, you can explore the world with peace of mind, knowing you\'re protected against unforeseen circumstances.',
});

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started</span>',
    description: 'Don\'t let unexpected events ruin your travel plans. Protect your adventure with our reliable travel insurance. Get a quote today and embark on your journey with confidence.',
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
