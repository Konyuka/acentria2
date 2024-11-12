<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Biashara Insurance',
    title: 'SME Business Insurance',
    image: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'Acentria is here to make insurance work for small businesses like yours, keeping things simple and supportive. We get that running a small business is a mix of challenges and aspirations, which is why we’re excited to offer flexible insurance solutions designed just for you. With Acentria, you’re not just getting insurance; you’re getting a helping hand that’s there to support your business journey. We know you’re busy, so we’ve made getting the coverage you need straightforward.'
})


const faqs = ref([
    {
        name: 'What does SME business cover typically include?',
        content: 'SME business cover includes coverage options such as general liability insurance, property insurance, workers\' compensation, commercial auto insurance, cyber liability insurance, and business interruption insurance, among others.'
    },
    {
        name: 'Can this cover be customized to match specific needs?',
        content:'Yes, SME business cover is often customizable. Businesses can tailor their coverage by selecting the types and amounts of insurance that best address their unique risks and requirements.'
    },
    {
        name: 'How are premiums determined?',
        content: 'Premiums for SME business cover are determined based on factors like the industry, the size of the business, the location, the type and amount of coverage needed, and the business\'s claims history.'
    },
    {
        name: 'Can this cover help protect against legal claims and lawsuits from customers or employees?',
        content:'Yes, SME business cover often includes general liability insurance, which provides coverage for legal claims and lawsuits stemming from bodily injury, property damage, or other liabilities associated with the business.'
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


        <Accordion :faqs="faqs" />

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>



</template>
