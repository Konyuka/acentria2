<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Golfer’s Insurance in Kenya',
    title: 'Play with Confidence, Covered with Care',
    image: 'https://images.pexels.com/photos/2828723/pexels-photo-2828723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const faqs = ref([
    {
        name: 'What is golfer\'s insurance?',
        content: 'Golfer\'s insurance is a specialized insurance policy that provides coverage for golfers, protecting them against various risks such as loss or damage to golf equipment, personal liability, accidental injuries, and more while on the golf course.',
    },
    {
        name: 'Why do I need golfer\'s insurance?',
        content: 'Golfer\'s insurance provides financial protection and peace of mind, ensuring that you are covered for unexpected events such as equipment theft, accidental injuries, or liability for damage to others while playing golf.',
    },
    {
        name: 'How much does golfer\'s insurance cost?',
        content: 'The cost of golfer\'s insurance varies depending on factors such as the coverage limits, the value of your equipment, and any additional coverage options you choose. It\'s best to get a quote to determine the exact cost based on your specific needs.',
    },
    {
        name: 'Is golfer\'s insurance only for professional golfers?',
        content: 'No, golfer\'s insurance is available for both amateur and professional golfers. It is designed to provide coverage for anyone who enjoys playing golf, regardless of skill level.',
    },
    {
        name: 'How do I file a claim with golfer\'s insurance?',
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Report the Incident: Notify us as soon as possible.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Gather Documentation: Collect necessary documents, such as receipts, photos of the damage, and any relevant reports.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Submit the Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink to="/contact-acentria-group" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
    },
    {
        name: 'Does golfer\'s insurance cover injuries sustained off the golf course?',
        content: 'Golfer\'s insurance typically covers injuries sustained while playing golf or participating in golf-related activities. Injuries sustained off the golf course may not be covered, depending on the policy terms.',
    },
    {
        name: 'Can I customize my golfer\'s insurance policy?',
        content: 'Yes, many golfer\'s insurance policies offer customizable options, allowing you to add coverage for specific needs such as higher equipment values, additional personal liability, or enhanced accident coverage.',
    },
    {
        name: 'What is hole-in-one coverage?',
        content: 'Hole-in-one coverage is a unique benefit of golfer\'s insurance that covers the costs associated with traditional hole-in-one celebrations. This may include expenses for drinks, meals, or other celebratory events that are customary in the golfing community.',
    },
    {
        name: 'How can I get started?',
        content: '<p>Our streamlined enrollment process makes it simple to get the coverage you need.</p><p>You can compare plans, get quotes, and enroll online within minutes - <a href="#" class="font-bold italic text-brand-primary">Do it Yourself</a> or Review your quotes online, then get tailored advice from our agents - <a href="#" class="font-bold italic text-brand-primary">Engage our expert</a>.</p><p>Our customer service team is available to assist you with any questions or concerns.</p>',
    },
])

const benefits = ref([
    {
        name: 'Trusted Provider',
        icon: 'fas fa-shield-alt',
        description: 'A leading name in sports insurance in Kenya, with a reputation you can trust.',
    },
    {
        name: 'Customer Satisfaction',
        icon: 'fas fa-smile',
        description: 'Fast claims processing and dedicated customer support for a seamless experience.',
    },
    {
        name: 'Easy & Digital',
        icon: 'fas fa-mobile-alt',
        description: 'Compare plans, get quotes, and purchase coverage online or via our user-friendly mobile app.',
    },
    {
        name: 'Customizable Coverage',
        icon: 'fas fa-sliders-h',
        description: 'Tailor your policy to match your playing needs and equipment value for personalized protection.',
    },
]);



const whyTheInsurance = ref({
    title: 'Why Choose <span class="text-brand-primary">Golfer’s Insurance</span>',
    description: '<p>We ensure that every swing, every game, and every moment on the course is backed by <strong>specialized golfer’s insurance</strong>. Whether you\'re a seasoned professional or a weekend golfer, unexpected events can happen—from equipment damage to personal injuries.</p> <p>Our <strong>comprehensive golfer’s insurance</strong> gives you peace of mind on and off the course, ensuring that when you play, you do so with confidence and freedom. Because when protection is done smart, it’s done with care.</p>',
})

const whatsCovered = ref([
    {
        name: 'Golf Equipment Protection',
        icon: 'fas fa-golf-club',
        description: 'Covers loss, theft, or accidental damage to your golf clubs, bags, and gear, ensuring you\'re always prepared for your next game.',
    },
    {
        name: 'Personal Liability Cover',
        icon: 'fas fa-user-shield',
        description: 'Provides protection if you accidentally cause injury to someone or damage property while on the golf course.',
    },
    {
        name: 'Accident & Medical Coverage',
        icon: 'fas fa-ambulance',
        description: 'Pays for medical treatment if you sustain injuries while playing golf, offering peace of mind on the course.',
    },
    {
        name: 'Hole-in-One Celebration Cover',
        icon: 'fas fa-trophy',
        description: 'Celebrate your hole-in-one moment stress-free with coverage for traditional celebration costs.',
    },
    {
        name: 'Golf Buggy & Trolley Cover',
        icon: 'fas fa-car',
        description: 'Ensures repair or replacement of your buggy or trolley if it is stolen or damaged.',
    },
    {
        name: 'Personal Possessions Protection',
        icon: 'fas fa-briefcase',
        description: 'Coverage for valuables like watches, phones, or wallets while you\'re on the golf course.',
    },
    {
        name: 'Worldwide Coverage',
        icon: 'fas fa-globe',
        description: 'Whether playing at your local club or abroad, your policy remains active for comprehensive protection.',
    },
]);


const getStarted = ref({
    title: 'Get Started <span class="text-brand-primary"> Today!</span>',
    description: 'Protect yourself, your gear, and your game with Golfer’s Insurance. Compare plans and get a quote today!',
})

const benefits2 = ref([
    {
        name: 'Protect Your Golf Equipment',
        icon: 'fas fa-golf-club',
        description: 'Coverage for stolen, lost, or damaged golf clubs, bags, and accessories, ensuring you\'re always ready to play.',
    },
    {
        name: 'Personal Liability Cover',
        icon: 'fas fa-user-shield',
        description: 'Stay financially secure if you accidentally injure someone or damage property on the golf course.',
    },
    {
        name: 'Accident Coverage',
        icon: 'fas fa-ambulance',
        description: 'Get compensation for medical expenses in case of injuries sustained while playing golf.',
    },
    {
        name: 'Hole-in-One Cover',
        icon: 'fas fa-trophy',
        description: 'Celebrate your achievement without worrying about the cost with our Hole-in-One coverage.',
    },
    {
        name: 'Worldwide Coverage',
        icon: 'fas fa-globe',
        description: 'Whether you\'re playing in Kenya or internationally, stay protected with comprehensive worldwide coverage.',
    },
]);


</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <InsuranceComponents :whatsCovered="whatsCovered" :whyTheInsurance="whyTheInsurance" :getStarted="getStarted" />

        <div class="container py-5">
            <h2 class="section-heading pb-5">
                Why Golfer’s Insurance <br> <span class="text-brand-primary"> is Essential</span>
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
            <h1 class="section-heading pb-5">Easy & Hassle-Free <span class="text-brand-primary"> Claim Process</span></h1>
            <p class="content">
                Filing a claim shouldn’t slow down your game. Our fast and efficient claims process ensures you get back
                on the course without unnecessary delays. 💡 Understand your policy coverage and required claim
                documents before purchasing.
            </p>
            <div class="mt-5">
                <NuxtLink to="/"
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
