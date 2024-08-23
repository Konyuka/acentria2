<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Reinsurance Consulting',
    image: 'https://images.pexels.com/photos/3122812/pexels-photo-3122812.jpeg?auto=compress&cs=tinysrgb&w=600',
})
const ReinsuranceFeatureContent2 = ref({
    title: 'Strategic insights to fortify your risk management',
    image: 'https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Our reinsurance consulting services offer strategic guidance and expertise to optimize your risk management and fortify your financial resilience. Our team works with clients to design reinsurance structures that fit their risk management framework. This involves designing structures that target optimal volatility transfer, while ensuring cover is placed with reinsurers who have high credit standing. The team links reinsurance decisions financial performance, by looking at impact on Capital, Investment returns and operational efficiency. Through partnerships, the team delivers excellent analysis of exposure to natural catastrophes and guides on how the treaties can be set to achieve adequate protection.'
})

const faqs = ref([
    {
        name: 'Data Driven Insights',
        content: 'Our approach to catastrophic modeling is founded on data-driven insights. Acentria harnesses advanced analytics, historical data, and cutting-edge technology to develop comprehensive models that simulate the impact of catastrophic events and assess the adequacy of our client\'s CAT covers.'
    },
    {
        name: 'Sustainability and Preparedness',
        content: 'Catastrophic modeling not only aids in immediate response but also contributes to long-term sustainability and preparedness, ensuring that our clients are well-protected against the unexpected.'
    },
    {
        name: 'Risk Assessment and Mitigation',
        content: 'Catastrophic modeling is instrumental in assessing risk and developing effective mitigation strategies. By simulating various scenarios, we can better prepare for extreme events and minimize their impact.'
    },
    {
        name: 'Continuous Monitoring and Updates',
        content: 'We believe in continuous improvement. Acentria is committed to refining our models and risk assessment processes to stay ahead of emerging threats and deliver the most accurate and reliable insights'
    },

])


</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent2" />
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
