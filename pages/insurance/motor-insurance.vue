<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Motor Insurance!',
    title: 'Hit the Road with Confidence',
    image: 'https://img.freepik.com/free-photo/car-dashboard-lit-red-with-steering-wheel-night_181624-3294.jpg?t=st=1737358651~exp=1737362251~hmac=13c6dc720494c983301288b644d0b51f00297f3323aca7cb1d39b38eebcbf6b7&w=900',
    content: 'Discover our life insurance & make sure your loved ones are safe and sound, no matter what happens. Let’s talk about securing your loved ones’ future. Explore our life insurance options and ensure their financial well-being, no matter what life brings.',
})

const InsuranceCardsContent = ref({
    title: 'Which cover is right <span class="text-brand-primary">for you?</span>',
    users: [
        {
            name: 'Comprehensive Motor Insurance',
            icon: 'fas fa-car',
            link: '/insurance/motor-plans/comprehensive-motor-insurance',
            description: 'Provides robust protection for your vehicle, ensuring that you are covered in various scenarios that could lead to significant financial loss such as third-party liability and damage to the vehicle arising out of fire, theft, or accidents.',
        },
        {
            name: 'Third Party Insurance',
            icon: 'fas fa-user-friends',
            link: '/insurance/motor-plans/third-party-insurance',
            description: 'Provides coverage for damages or injuries that you cause to another person or their property while operating a vehicle.',
        },
    ],

})


const faqs = ref([
    {
        name: 'Can I transfer my motor insurance to a new vehicle?',
        content: 'Yes, you can transfer your motor insurance to a new vehicle. You will need to inform your insurance provider about the change and provide details of the new vehicle. The premium may be adjusted based on the new vehicle\'s specifications.',
    },
    {
        name: 'What benefits do I get with a comprehensive plan?',
        content: 'A comprehensive car insurance plan offers extensive protection, including coverage for accidents, theft, vandalism, natural disasters, animal collisions, falling objects, fire damage, and more. Additional benefits may include roadside assistance, rental car reimbursement, and coverage for custom parts. To learn more about the benefits of a comprehensive plan and how it can meet your specific needs, call us today.',
    },
    {
        name: 'What factors affect the cost of motor insurance premiums?',
        content: '<ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Vehicle Type and Model: More expensive or high-performance vehicles may have higher premiums.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Driver\'s Age and Experience: Younger and less experienced drivers may face higher premiums.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Driving Record: A clean driving record can result in lower premiums, while a history of accidents or violations may increase costs.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Usage: Vehicles used for business or long commutes may have higher premiums than those used for personal or occasional use.</li></ul>',
    },
    {
        name: 'What is a deductible?',
        content: 'A deductible is the amount you must pay out of pocket before your insurance coverage kicks in. Choosing a higher deductible can lower your premium, but it means you will pay more in the event of a claim.',
    },
    {
        name: 'How do I file a claim?',
        content: '<p>To file a motor insurance claim, follow these steps:</p><ol class="ml-5 list-decimal"><li>Report the Incident: Notify your provider as soon as possible after the incident occurs.</li><li>Provide Documentation: Submit necessary documents, such as a police report, photos of the damage, and any other relevant information.</li><li>Assessment: The insurance company will assess the damage and determine the coverage amount.</li><li>Repair or Compensation: Depending on the policy, the insurance company will either arrange for repairs or provide a compensation payout.</li></ol><p>Our claims process is hassle free. The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/contact-acentria-group" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'What should I do if my vehicle is stolen?',
        content: '<ol class="ml-5 list-decimal"><li>Report the Theft: Immediately report the theft to the police and obtain a police report.</li><li>Notify Your Insurer: Inform your insurance provider about the theft and provide the police report and any other required documents.</li><li>Claims Process: The insurance company will investigate the claim and, if approved, provide compensation based on your policy\'s terms.</li></ol>',
    },
    {
        name: 'Is valuation of my car important to insurance?',
        content: 'Proper valuation is essential for ensuring fair premiums, adequate coverage, efficient claims processing, and overall financial security in car insurance.',
    },
    {
        name: 'What are the exclusions in motor insurance?',
        content: '<p>Some of the exclusions in Motor Insurance include:</p><ul class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Wear and tear: Normal wear and tear, depreciation, and mechanical or electrical breakdowns.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Insured engaging in illegal activities, e.g., drunk driving, unlicensed driver.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Unauthorized Use: Using the vehicle for purposes not specified in the policy, such as commercial use if it is insured for personal use.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Acts of God such as earthquake & flood damage unless their special extensions.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> War, including nuclear, biological, or chemical attacks. Passive war and terrorism coverage can be extended.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Intentionally caused by the policyholder or anyone acting on behalf.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Damages incurred during racing, speed testing, or any competitive events.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Consequential Loss: Indirect losses resulting from an accident, such as loss of earnings or the cost of renting a replacement vehicle, are generally not covered unless specifically included in the policy.</li></ul><p>It is important to read the policy document carefully to understand the exclusions that apply. In case of any concerns, feel free to engage our team of experts for advice.</p>',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
]);


const benefits = ref([
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'With years of experience and a strong reputation, we are a trusted name in the insurance industry.',
    },
    {
        name: 'Customized Plans',
        icon: 'fas fa-cogs',
        description: 'Tailor your coverage to fit your unique needs and financial goals.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'We prioritize our customers\' well-being, offering personalized service and prompt claims processing.',
    },
    {
        name: 'Easy and Hassle-Free',
        icon: 'fas fa-check-circle',
        description: 'Purchasing motor insurance should be quick and easy. Our online platform allows you to compare plans, get quotes, and purchase coverage in just a few clicks. Plus, our mobile app makes it convenient to access your policy information and file claims on the go.',
    },
]);



const whatsCovered = ref([
    {
        name: 'Accidental Damage',
        icon: 'fas fa-car-crash',
    },
    {
        name: 'Theft and Vandalism',
        icon: 'fas fa-user-secret',
    },
    {
        name: 'Natural Disasters',
        icon: 'fas fa-cloud-showers-heavy',
    },
    {
        name: 'Third-Party Liability',
        icon: 'fas fa-people-arrows',
    },
    {
        name: 'Fire Damage',
        icon: 'fas fa-fire',
    },
    {
        name: 'Glass Damage',
        icon: 'fas fa-wind',
        description: 'Windows and windshield',
    },
    {
        name: 'Personal Belongings',
        icon: 'fas fa-box-open',
    },
    {
        name: 'Medical Expenses',
        icon: 'fas fa-briefcase-medical',
    },
    {
        name: 'Roadside Assistance',
        icon: 'fas fa-truck-pickup',
    },
    {
        name: 'Rental / Courtesy Car Coverage',
        icon: 'fas fa-car',
    },
]);

const whyTheInsurance = ref({
    title: 'Why <span class="text-brand-primary">Motor Insurance</span>',
    description: 'Driving comes with its share of risks, and it\'s essential to have reliable motor insurance to protect you, your vehicle, and others on the road. Our comprehensive motor insurance provides the coverage you need to drive with confidence, knowing that you\'re protected against a wide range of incidents.',
});

const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started</span>',
    description: 'Protect your vehicle and drive with confidence with our comprehensive motor insurance. Get a quote today and take the first step towards peace of mind and financial security.',
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
                <NuxtLink to="/contact-acentria-group"
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
