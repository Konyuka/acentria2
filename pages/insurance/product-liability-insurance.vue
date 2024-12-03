<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Product Liability Insurance',
    title: 'Protect your products and your business.',
    image: 'https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we’ve got your back when it comes to Product Liability Insurance. We step in to protect your business when a product you make or sell causes harm or damage. It’s the peace of mind that ensures your business stays afloat even if something goes wrong with your products. With Acentria, you’re not just getting insurance; you’re getting a partner dedicated to your product’s success and your business’s future.'
})

const faqs = ref([
    {
        name: 'What is product liability insurance, and why is it important for businesses?',
        content: 'Product liability insurance is a type of coverage that protects businesses from financial losses associated with claims of injury or property damage caused by their products. It\'s important because it provides financial security and helps safeguard a business\'s reputation in the event of product-related incidents.'
    },
    {
        name: 'What types of claims does product liability insurance typically cover?',
        content:'Product liability insurance typically covers claims arising from injuries, illnesses, or property damage caused by defective or unsafe products. It can also cover legal expenses associated with defending against these claims.'
    },
    {
        name: 'Does product liability insurance cover product recalls or the costs associated with them?',
        content:'Yes, product liability insurance can cover the costs of product recalls, including expenses related to notifying customers, removing products from the market, and disposing of or repairing defective items.'
    },
    {
        name: 'Can product liability insurance be customized to fit a company\'s specific industry and products?',
        content:'Yes, product liability insurance can often be customized to align with the specific industry and products of the insured business. Customization may involve tailoring coverage limits, adding endorsements, and addressing industry-specific risks.'
    },
    {
        name: 'How do I make a claim & How fast is the claim process?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
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

</script>

<template>

    <div class="bg-white">
        <InsuranceHero :InsuranceBannerContent="InsuranceBannerContent" />

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
