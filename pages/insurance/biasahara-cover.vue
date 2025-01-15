<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Ensure Smart Business!',
    title: 'Protect Your Business.',
    image: '/img/in-business.jpg',
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
        content: '<p>Our claims process is hassle free.</p><p>To file a claim, follow these steps:</p><ol class="ml-5"><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Report the Incident: Notify us as soon as possible.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Gather Documentation: Collect necessary documents, such as receipts, photos of the damage, and any relevant reports.</li><li><i class="fas fa-caret-right text-brand-primary mr-1"></i> Submit the Claim: Submit the completed claim form and documentation to your insurance provider.</li></ol><p>The claims process varies depending on the nature of cover. It is important to familiarize yourself with your policy coverage and necessary claims documents in the event of a claims.</p><NuxtLink href="/" class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10"> Launch a Claim <i class="fas fa-arrow-right text-primary ml-2"></i> </NuxtLink>',
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

const benefits3 = ref([
    {
        name: 'Tailored Solutions',
        icon: 'fas fa-cogs',
        description: 'Our policies are customized to meet the specific needs of your business operations.',
    },
    {
        name: 'Comprehensive Coverage',
        icon: 'fas fa-shield-alt',
        description: 'We offer a wide range of insurance options to protect every aspect of your business.',
    },
    {
        name: 'Expert Support',
        icon: 'fas fa-user-tie',
        description: 'Our team of experienced professionals is here to help you navigate the complexities of business insurance and find the best solutions for your needs.',
    },
    {
        name: 'Easy Claims Process',
        icon: 'fas fa-check-circle',
        description: 'Our claims process is hassle free. It is important to familiarize yourself with your policy coverage and necessary claims documents when purchasing cover. Our team of experts are readily available to guide you through the process. <a href="/launch-claim" class="text-brand-primary underline">Launch a claim</a>.',
    },
]);



const benefits2 = ref([
    {
        name: 'Corporate Covers',
        icon: 'fas fa-users',
        description: 'Purchased by an employer for employees only, or with their families (spouses and children). This cover is flexible and can be customized to the employer’s needs. The plan can be fully insured or partly funded (Hybrid).',
    },
    {
        name: 'Micro Covers (SME)',
        icon: 'fas fa-briefcase',
        description: 'Designed for small and micro enterprises with populations of 3-10 employees. These plans waive waiting periods and co-pays, offering a tailored solution for businesses seeking off-the-shelf products.',
    },
    {
        name: 'International Medical Cover',
        icon: 'fas fa-plane',
        description: 'Ideal for individuals planning to spend more than a year abroad or frequent travelers. This cover provides access to private healthcare in your country of residence and internationally.',
    },
]);

const benefits = ref([
    {
        name: 'Integrated Risk Management',
        icon: 'fas fa-layer-group',
        description: 'Offers a holistic approach to risk management, making it easier for businesses to manage their insurance needs under one policy.',
    },
    {
        name: 'Budget-Friendly Premiums',
        icon: 'fas fa-dollar-sign',
        description: 'We provide affordable premiums, ensuring businesses of all sizes can access quality insurance solutions without financial strain.',
    },
]);



const whyTheInsurance = ref({
    title: 'Why Choose <span class="text-brand-primary">Golfer’s Insurance</span>',
    description: 'Golfing is a wonderful sport, but it comes with its share of risks. Our golfer\'s insurance provides specialized coverage to protect you, your equipment, and your liabilities on the course. Ensure you can enjoy your game with peace of mind, knowing that you\'re covered for any unexpected events.',
})

const whatsCovered = ref([
    {
        name: 'Commercial General Liability (CGL)',
        icon: 'fas fa-balance-scale',
        description: 'Covers legal liabilities for bodily injury or property damage to third parties, as well as product liability to protect against claims related to products that cause harm or injury.',
    },
    {
        name: 'Property Damage',
        icon: 'fas fa-building',
        description: 'Covers damage to business property due to events like fire, theft, or natural disasters.',
    },
    {
        name: 'Business Interruption',
        icon: 'fas fa-business-time',
        description: 'Provides financial support if business operations are halted due to a covered event.',
    },
    {
        name: 'Employer’s Liability',
        icon: 'fas fa-user-tie',
        description: 'Protects against claims from employees who suffer work-related injuries or illnesses.',
    },
    {
        name: 'Personal Accident & Workers’ Compensation Cover',
        icon: 'fas fa-user-injured',
        description: 'Offers benefits for accidents resulting in injury or death of employees.',
    },
    {
        name: 'Money and Goods in Transit',
        icon: 'fas fa-truck',
        description: 'Covers loss or damage to money and goods while being transported.',
    },
]);


const getStarted = ref({
    title: 'Get <span class="text-brand-primary">Started!</span>',
    description: 'Protect yourself and your equipment with our comprehensive golfer\'s insurance. Get a quote today and take the first step towards peace of mind and an enjoyable golfing experience.',
})

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Biashara <span class="text-brand-primary"> Cover</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                This cover is designed for Small and Medium Enterprises SMEs. It typically bundles multiple types of
                insurance coverage into a single policy offering comprehensive protection for businesses.
            </p>
        </div>

        <div class="container mb-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">What's <span class="text-brand-primary"> Covered</span>
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <NuxtLink :href="feature.url" v-for="feature in whatsCovered" class="flex p-5 shadow-md">
                    <div class="mr-6">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <div class=" mt-1 text-gray-600 text-sm leading-normal font-bold">
                            <p>
                                {{ feature.name }}
                            </p>
                        </div>
                        <div class="mt-1 text-gray-600 text-[13px] leading-normal font-semibold">
                            <p>
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>



        <div class="pb-10">
            <section class="relative py-1">
                <div class="container">
                    <h1 class="text-2xl !font-semibold text-black mb-5">
                        What are the <span class="text-brand-primary">Key benefits?</span>
                    </h1>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black" v-html="principle.description"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="container py-5">
            <h1 class="text-2xl font-semibold pb-10">Why Choose Our <span class="text-brand-primary">Insurance</span>
            </h1>
            <div
                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                <div v-for="benefit in benefits3"
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

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Get <span class="text-brand-primary">Started Today</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">

                Protect your business with our reliable and comprehensive insurance solutions. <span
                    class="text-brand-primary italic underline">Contact us today</span> to learn
                more about our policies and how we can help you secure your future in the corporate world.
            </p>
        </div>

        <ContactForm />
    </div>



</template>
