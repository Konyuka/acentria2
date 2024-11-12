<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Cyber Liability Insurance',
    title: 'Safeguard your business against digital threats.',
    image: 'https://images.pexels.com/photos/38275/anonymous-studio-figure-photography-facial-mask-38275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'With Acentria, you’re not just getting insurance; you’re getting a partner committed to your digital security. Don’t leave your business vulnerable to cyber threats.let’s fortify your business’s digital defenses with the best cyber insurance coverage available. Your digital future deserves nothing less than the best protection'
})


const faqs = ref([
    {
        name: 'What types of cyber risks does cyber liability cover typically protect against?',
        content:'Cyber liability cover typically protects against risks such as data breaches, ransomware attacks, hacking, unauthorized access, network interruptions, and legal liabilities arising from cyber incidents.'
    },
    {
        name: 'Is cyber liability insurance only for large businesses, or is it suitable for (SMEs) as well?',
        content:'Cyber liability insurance is suitable for businesses of all sizes, including SMEs. In fact, smaller businesses can be more vulnerable to cyber threats, making coverage even more crucial.'
    },
    {
        name: 'Which business should consider this cover?',
        content:'While cyber threats can affect any industry, businesses that handle sensitive customer data, financial information, or proprietary data are often more at risk and may benefit from cyber liability coverage.'
    },
    {
        name: 'How do I claim & How fast is the claim process ?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How are premiums determined?',
        content:'Premiums for cyber liability insurance are based on factors such as the size of the business, industry, security measures in place, the amount of coverage needed, and previous cyber incident history.'
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
