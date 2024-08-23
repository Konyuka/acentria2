<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Catastrophic Modeling For Risk Mitigation',
    image: 'https://images.pexels.com/photos/3122812/pexels-photo-3122812.jpeg?auto=compress&cs=tinysrgb&w=600',
})
const ReinsuranceFeatureContent = ref(
    {
        description: 'With AcentRe\'s Key Platform Features, you\'re not just purchasing a tool; you\'re investing in a transformative solution that puts you at the forefront of the reinsurance industry.These features are designed to provide the insights and flexibility required to make informed, data - driven decisions, ultimately enhancing your profitability, reducing risk, and ensuring the long - term success of your insurance business.',
        items: [
            {
                title: 'Powerfull Pricing Engines For Treaty Structures',
                icon: 'fa-calculator',
                content: 'AcentRe boasts cutting-edge pricing engines capable of handling a wide spectrum of treaty structures. Say goodbye to the days of guesswork and reliance on outdated rules of thumb. With AcentRe, you can now set reinsurance and retrocession pricing with confidence, leveraging advanced data analytics and risk assessment tools.'
            },
            {
                title: 'Compare Unlimited Scenarios for Optimization',
                icon: 'fa-shield-alt',
                content: 'In the fast-paced world of insurance, adaptability is key to success. AcentRe enables you to explore an unlimited number of scenarios, helping you optimize your reinsurance strategy effortlessly. Whether you\'re fine- tuning your approach to minimize risk or maximize profitability, our platform provides the flexibility you need.'
            },
            {
                title: 'Accessible at your comfort',
                icon: 'fa-sync-alt',
                content: 'We understand the value of timely decision-making. AcentRe is accessible whenever and wherever you need it. The platform is designed to ensure that you have the data and insights at your fingertips, making it convenient for you to stay ahead of industry trends and respond to changing market conditions.'
            },
            {
                title: 'Customizable to Reflect Client Needs',
                icon: 'fa-chart-pie',
                content: 'Every client is unique, and AcentRe recognizes that. Our platform is fully customizable to reflect the specific needs of your clients. This level of tailored service allows you to offer personalized solutions, setting you apart from the competition and strengthening client relationships.'
            }

        ]
    }
)

const ReinsuranceFeatureContent2 = ref({
    title: 'Reinsurance Catastrophic Modelling',
    image: 'https://images.pexels.com/photos/709542/pexels-photo-709542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'In the realm of insurance and reinsurance, catastrophic modeling is a critical tool that enables us to understand and manage the impact of extreme events. Catastrophic modeling allows us to assess and prepare for natural disasters, pandemics, and other large-scale risks, providing invaluable insights to protect our clients and their assets. At Acentria, we recognize the vital role that catastrophic modeling plays in addressing the ever-evolving landscape of insurance and reinsurance.'
})

const faqs = ref([
    {
        name: 'Data Driven Insights',
        content: 'Our approach to catastrophic modeling is founded on data-driven insights. Acentria harnesses advanced analytics, historical data, and cutting-edge technology to develop comprehensive models that simulate the impact of catastrophic events and assess the adequacy of our client\'s CAT covers.'
    },
    {
        name: 'Sustainability and Preparedness',
        content:'Catastrophic modeling not only aids in immediate response but also contributes to long-term sustainability and preparedness, ensuring that our clients are well-protected against the unexpected.'
    },
    {
        name: 'Risk Assessment and Mitigation',
        content:'Catastrophic modeling is instrumental in assessing risk and developing effective mitigation strategies. By simulating various scenarios, we can better prepare for extreme events and minimize their impact.'
    },
    {
        name: 'Continuous Monitoring and Updates',
        content:'We believe in continuous improvement. Acentria is committed to refining our models and risk assessment processes to stay ahead of emerging threats and deliver the most accurate and reliable insights'
    },
    
])


</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent2" />

        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
