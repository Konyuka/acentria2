<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Home Insurance',
    title: 'Protecting Your Home, Inside and Out',
    image: 'https://images.pexels.com/photos/731812/pexels-photo-731812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Feel at ease in your own home with our Home Insurance package. This plan protects your house and the stuff inside from things like fires and other bad situations. It even helps if things get stolen after a break-in or if something bad happens to things you usually take outside. And if someone who works at your home gets hurt while working, or if there’s a problem caused by you or your family, this plan has your back.',
})

const faqs = ref([
    {
        name: 'What is home insurance?',
        content:'Home insurance or Domestic package is a type of insurance that protects your residential house and its contents from unexpected events like fires, theft, or accidental damage. It can be extended to cover domestic workers from accidental death or injury and liabilities to third parties.'
    },
    {
        name: 'How often should I review and update my home insurance policy?',
        content: 'It\'s a good idea to review your policy annually or whenever you make significant changes to your home or acquire valuable new possessions.This ensures your coverage remains adequate.Our agents can also contact you & share reminder notifications to your email / phone if you want to review and update your policy.'
    },
    {
        name: 'Do I need home insurance if I rent my home?',
        content: 'Yes, even if you\'re renting, it\'s a good idea to have renters insurance. It protects your personal belongings in case of theft or damage and can provide liability coverage if someone is injured while visiting.'
    },
    {
        name: 'How fast is the claim process?',
        content: 'It varies depending on various factors, such the complexity of the claim, necessary documentation, and a successful verification process. Upon receipt of full documentation, the claim can take 7-14 working days. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How is the value of my home and belongings determined for insurance purposes?',
        content: 'The value of your home is typically determined by its replacement cost, which is how much it would cost to rebuild it if it were destroyed. The value of your belongings is based on their current market value or replacement cost, depending on your policy.'
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

        <Accordion :faqs="faqs" />

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>



</template>
