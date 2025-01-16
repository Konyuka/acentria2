<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Catastrophic Modeling For Risk Mitigation',
    subTitle: 'Advanced Data Analytics',
    image: 'https://images.pexels.com/photos/3122812/pexels-photo-3122812.jpeg?auto=compress&cs=tinysrgb&w=600',
})


const ReinsuranceFeatureContent2 = ref({
    title: 'Reinsurance Catastrophic Modelling',
    image: 'https://images.pexels.com/photos/709542/pexels-photo-709542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Harness the power of precision with our advanced Catastrophic Modeling services. By utilizing cutting-edge technology and sophisticated data analysis, we provide accurate predictions of potential catastrophic events and their financial impact. This allows you to proactively manage risks, safeguard your assets, and make informed decisions that ensure long-term resilience. Embrace the future of risk management and fortify your business against the unexpected. Key benefits of catastrophic modeling include providing precise predictions of potential catastrophic events and their financial impact, enabling proactive measures to mitigate risks and safeguard assets, supporting strategic planning and decision-making with reliable data and insights, and strengthening the ability to withstand and recover from catastrophic events.'
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

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent2" />

        <Accordion :faqs="faqs" />

        <!-- <div class="py-5 container">
            <h2 class="text-2xl !font-semibold text-black mb-4">
                Enagage <span class="text-brand-primary"> An Expert?</span>
            </h2>
            <div class="my-5">
                <p class="text-sm leading-normal">
                    Ready to leverage the power of catastrophic modeling to safeguard your business? <NuxtLink
                        to="/contact-acentria-group" class="font-semibold italic underline">Contact us today </NuxtLink>
                    to
                    learn how we can help you predict, manage, and mitigate the impact of catastrophic events.
                </p>
            </div>
        </div> -->

        <ContactForm />
    </div>



</template>
