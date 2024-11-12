<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: '',
    title: 'Secure your business\'s future.',
    image: 'https://images.pexels.com/photos/39584/censorship-limitations-freedom-of-expression-restricted-39584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we understand that business success goes hand-in-hand with managing risk effectively. That’s why our General Liability Insurance is designed to be your first line of defense. With our tailored coverage, you can shield your business from unexpected accidents, lawsuits, and mishaps, allowing you to focus on what matters most – growing your enterprise. Let us be your partner in securing your business’s future with peace of mind.'
})


const faqs = ref([
    {
        name: 'What is general liability insurance, and why is it important for businesses?',
        content: 'General liability insurance, often referred to as commercial general liability (CGL) insurance, is a policy that provides protection against third-party claims for bodily injury, property damage, or personal injury. It\'s crucial for businesses because it helps cover the costs associated with legal claims and lawsuits, protecting the financial stability of the business.'
    },
    {
        name: 'Does this policy cover advertising-related claims, like copyright infringement or false advertising?',
        content:'Yes, general liability insurance often includes coverage for advertising injury, which can protect against claims related to copyright infringement, false advertising, or other advertising-related issues.'
    },
    {
        name: 'How are premiums determined?',
        content: 'Premiums for general liability insurance are typically based on factors such as the type of business, the size of the business, its location, the coverage limits, and the business\'s claims history.'
    },
    {
        name: 'How do I make a claim & How fast is the claim process ?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process'
    },
    {
        name: 'How does general liability insurance affect a company\'s ability to bid on contracts or projects?',
        content: 'General liability insurance can enhance a company\'s credibility and make it eligible for contracts or projects that require liability coverage.Many clients and contractors require businesses to have this insurance before entering into agreements.'
    },
    {
        name: 'How can I get started?',
        content: '<b>1.Compare and Choose:</b> Compare insurance quotes, select a plan that suits your needs, and make the purchase. <br> <b>2.Register and Get Insured:</b> Register for your chosen plan, and you\'ll be insured. <br><br> Our agent will reach out and follow up with you to ensure you have been insured and provide you with all the necessary information, including an insurance card, access to the self- help portal, your insurance certificate, and any other requirements you may need.',
    },

])

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

const heroMinData = ref({
    title: 'Secure your business\'s future.',
    content:`When it comes to safeguarding your business from unexpected challenges, General Liability Insurance is your frontline defense, and at Acentria, we’re here to provide you with the best protection.Running a business is a journey filled with ups and downs, and while you strive to provide excellent products and services, there are inherent risks that come with it. These risks could manifest in various ways – a customer slipping and getting injured on your premises, a claim of property damage caused by your employees, or even a legal dispute related to your advertising practices. <br><br> At Acentria, we take our role as your insurance partner seriously. We recognize that not all businesses are the same; they have unique needs, risks, and goals. That’s why we go the extra mile to provide you with the best protection.`,
    image: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />


        <Accordion :faqs="faqs" />

        <HeroMin :heroMinData="heroMinData" />


        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>



</template>
