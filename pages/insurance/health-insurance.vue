<script setup>
import { ref } from "vue";


const InsuranceBannerContent = ref({
    subtitle: "Health Insurance",
    title: `Your health is, <span class="font-sans tracking-normal text-white leading-tight lg:leading-tight"> Your greatest wealth </span>`,
    image:
        "https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
        "With comprehensive coverage and personalized care, we’re here to protect you & your family’s health without breaking bank.Embrace a healthier future with Acentria by your side.Get covered today.",
});

const InsuranceCardsContent = ref({
    title: `Who is this  <span class="text-brand-primary">medical insurance for?</span> `,
    users: [
        {
            name: "Myself",
            icon: "fas fa-user",
            description:
                "Stay healthy without the stress. Get medical insurance that's got your back",
        },
        {
            name: "My family",
            icon: "fas fa-users",
            description:
                "Safeguard your family's health & wellbeing because their smiles mean everything.",
        },
        {
            name: "My Parents",
            icon: "fas fa-users",
            description:
                "Give your parents the gift of protection and care. Safeguard their future together.",
        },
    ],
});

const faqs = ref([
    {
        name: "What does health insurance cover?",
        content:
            "Health insurance plans generally cover a wide range of medical expenses including doctor visits, hospital stays, prescription medications, preventive care, emergency evacuation and more. Coverage can vary based on the specific plan you choose, so its essential to review the details of each plan carefully.Contact us to get a full list of what we cover in this package.",
    },
    {
        name: "What benefits do I get with a comprehensive plan?",
        content:
            "These plans typically include coverage for hospitalization, doctors visits, prescription drugs, preventive care, emergency services, diagnostic tests, mental health services, maternity, and newborn care, and more. Our comprehensive plan also provides optional dental and optical coverage, wellness programs, and access to network providers.",
    },
    {
        name: "Which healthcare facilities is the cover accepted?",
        content:
            "This cover is accepted at a range of healthcare facilities, including major private hospitals, community hospitals, clinics, physicians and specialists, diagnostic and imaging centers, emergency evacuation providers and pharmacies. We ensure you receive maximum benefits and minimize out-of-pocket expenses.",
    },
    {
        name: "How do I claim & How fast is the claim process ?",
        content:
            "We advise on the necessary documentation and assistance needed. Claims reimbursement takes 7-10 working days. To claim, email your request to claims@acentriagroup.com.",
    },
    {
        name: "Which is the best plan for me?",
        content:
            "Our plans are comprehensively designed to give your family extensive coverage, both local and international. We guide you through the health plan, which is likely to be most cost effective based on your needs and also maximizing coverage while staying on a budget. We give you the ability to choose your doctor, and preferred medical facility, giving you control over your healthcare.",
    },
    {
        name: "How can I get started?",
        content:
            "<b>1.Compare and Choose:</b> Compare insurance quotes, select a plan that suits your needs, and make the purchase. <br> <b>2.Register and Get Insured:</b> Register for your chosen plan, and you'll be insured. <br><br> Our agent will reach out and follow up with you to ensure you have been insured and provide you with all the necessary information, including an insurance card, access to the self- help portal, your insurance certificate, and any other requirements you may need.",
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
</script>

<template>
    <div class="bg-white">

        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

        <Audience :InsuranceCardsContent="InsuranceCardsContent" />

        <div class="container">
            <h1 class="heading-class">Frequently <span class="text-brand-primary">Asked Questions</span></h1>
            <p class="text-[25px] text-light-content">We have all the answers to your questions.</p>
        </div>

        <Accordion :faqs="faqs" />

        <!-- <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" /> -->

        <ContactForm />

    </div>
</template>

<style scoped>


</style>
