<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: '',
    title: 'Cultivate your dreams with confidence',
    image: 'https://images.pexels.com/photos/1276235/pexels-photo-1276235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'At Acentria, we’re not just insuring crops and livestock; we’re insuring your dreams, your hard work, and your future. Don’t let unforeseen challenges erode your passion for agriculture. Choose Acentria, and cultivate success with confidence.'
})

const faqs = ref([
    {
        name: 'What is Crops and Livestock Insurance, and who should consider it?',
        content:'Crops and Livestock Insurance is a type of agricultural insurance designed to protect farmers and ranchers from financial losses caused by unpredictable events, such as adverse weather, diseases, or other perils that can impact crops and livestock. Anyone involved in agriculture, including farmers, ranchers, and agricultural businesses, should consider this insurance.'
    },
    {
        name: 'What does Crops and Livestock Insurance typically cover?',
        content:'Crops and Livestock Insurance can cover various aspects of agriculture, including: Crop Insurance: Protection for crop losses due to perils like drought, flooding, hail, pests, and more. Livestock Insurance: Coverage for losses of livestock due to diseases, accidents, or other covered events. Farm Equipment Insurance: Protection for machinery and equipment used in farming operations. Farm Structures Insurance: Coverage for farm buildings, barns, and other structures. Farm Liability Insurance: Protection against liability claims related to farming operations.'
    },
    {
        name: 'Can Crops and Livestock Insurance be customized to suit individual farming needs?',
        content:'Yes, Crops and Livestock Insurance policies are often customizable to meet the specific needs of farmers and ranchers. Coverage amounts, types of perils covered, and policy terms can be adjusted based on individual farming operations.'
    },
    {
        name: 'How are premiums calculated?',
        content: 'Premiums are typically based on factors such as the type of coverage, the value of insured crops or livestock, the location of the farm, and the farmer\'s historical loss experience.'
    },
    {
        name: 'How fast is the claim process ?',
        content:'We advise on the necessary documentation and assistance needed. Claims reimbursement takes 7-10 working days. To claim, email your request to claims@acentriagroup.com, Or call us direct'
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
