<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Travel Insurance',
    title: 'Travel with confidence',
    image: 'https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Whether near or far, travel confidently with our trusted insurance by your side. Get covered for your local or international adventures today and have peace of mind as you get to your destination.',
})

const InsuranceCardsContent = ref({
    title:'What kind of travel insurance do you need?',
    users: [
        {
            name:'Local Travel',
            icon:'fas fa-user',
            description: 'Planning a local getaway? Keep all worries at bay with our local travel insurance. Your hassle-free adventure starts here – get your coverage today.',
        },
        {
            name:'International Travel',
            icon: 'fas fa-users',
            description: 'Ready to set off on a global adventure? Our international travel insurance has got you covered every step of the way. Say hello to stress-free explorations – secure your journey now and travel the world with confidence',
        },
    ],
})


const faqs = ref([
    {
        name: 'Does this plan cover for lost or stolen travel documents, like passports and visas?',
        content:'Yes, many travel insurance policies include coverage for lost or stolen travel documents. It can help cover the costs associated with replacing these essential documents during your trip.'
    },
    {
        name: 'Can I customize my travel insurance policy based on my trip\'s specifics?',
        content:'Yes, you can often customize your travel insurance policy to match your travel plans, including adding coverage for specific activities or trip components. Contact us to customize your Policy at any time'
    },
    {
        name: 'How is the cost of travel insurance determined?',
        content:'The cost of travel insurance depends on factors such as your destination, trip duration, coverage limits, and your age. Acentria can provide you with quotes tailored to your specific trip details.'
    },
    {
        name: 'How do I claim & How fast is the claim process ?',
        content:'It varies depending on various factors, such the complexity of the claim, necessary documentation, and a successful verification process. Upon receipt of full documentation, the claim can take 7-14 working days. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'When should I purchase a travel insurance ?',
        content: 'It\'s a good idea to purchase travel insurance as soon as you make your initial trip deposits, like airline tickets or hotel reservations.Buying early ensures you have coverage for pre - existing conditions and maximum benefits.'
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

        <Audience :InsuranceCardsContent="InsuranceCardsContent" />

        <Accordion :faqs="faqs" />

        <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

        <ContactForm />
    </div>

</template>
