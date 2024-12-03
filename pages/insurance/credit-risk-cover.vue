<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Credit Risk Insurance',
    title: 'Secure your business\'s financial future.',
    image: 'https://images.pexels.com/photos/7821685/pexels-photo-7821685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we understand that business is about trust, and Credit Risk Insurance helps protect that trust. Think of it as your financial safety net – it steps in to secure your accounts receivable and ensure you get paid even if your customers can’t. With Acentria, you’re not just getting insurance; you’re getting a partner dedicated to your financial stability and your business’s future.'
})

const faqs = ref([
    {
        name: 'What is credit risk insurance, and what does it cover?',
        content:'Credit risk insurance, also known as trade credit insurance, is a type of insurance that protects businesses against financial losses resulting from non-payment by customers or clients. It covers the risk of insolvency, protracted default, or political events that can impact trade receivables.'
    },
    {
        name: 'What types of losses does this insurance cover?',
        content:'Credit risk insurance covers losses arising from non-payment due to insolvency of a customer, protracted default (late payment), and, in some cases, political events such as currency inconvertibility or export restrictions.'
    },
    {
        name: 'How are premiums for this cover determined?',
        content: 'Premiums for credit risk insurance are typically based on factors such as the creditworthiness of the insured\'s customers, the industry, the amount of coverage, and the deductible chosen.Acentria can provide businesses with quotes based on these factors.'
    },
    {
        name: 'How do I file a claim & How fast is the process ?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'Who can benefit from credit risk insurance?',
        content:'Credit risk insurance is beneficial for businesses of all sizes, including manufacturers, exporters, suppliers, and service providers, as it helps them manage and minimize the risks associated with trade credit.'
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
