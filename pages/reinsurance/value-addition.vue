<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Value Addition',
    image: 'https://images.pexels.com/photos/4560177/pexels-photo-4560177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Best of Our Value Addition Services',
    image: 'https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria, our commitment to value addition is deeply rooted in expertise, innovation, and a dedication to delivering value to our clients. We understand the importance of aligning our goals with your specific needs and the ever-changing dynamics of the insurance and reinsurance industry. With our comprehensive approach, we are well-prepared to navigate the intricacies of value addition, providing stability, reliability, and a competitive edge to our valued clients. Your success and the creation of lasting value are our top priorities, and our value addition expertise reflects that unwavering commitment.',
})

const faqs = ref([
    {
        name: 'Actuarial Support',
        content:'Reinsurance optimization and analytics Quarterly assessment and presentation of exposures Data modelling and analytics using in- house tools and externally certified tools i.e. Analyze Re SARB, Virtual I and RMSI Data management'
    },
    {
        name: 'Enhanced Risk Placement',
        content:'Our presence and exposure to regional and global markets Strategic partnership Provision of innovative solutions that are client centric and are driven by the cedant’s needs & underwriting profile, market trends and gaps identifiedduring the gap analysis processes Risk management analysis to ensure bespoke insurance a nd reinsurance program designs that ensure optimum coverage, cost effectiveness, balanced portfolio that maximizes profits through ensuring retention of favorable risks and complicated risk placements Special risk placement and negotiation of capacities both locally and internationally allowing room for innovation .A 360- Treaty management solution that shall aim at growth in premiums, balanced retention and ceding of risks, improved solvency margins and in turn ensure the best global credit rating.'
    },
    {
        name: 'Rating Agency Advisory',
        content:'Through in-depth analytics, we advise our clients on credit rating concerns and help them restructure their portfolios and operations to achieve the target credit rating. This ensures our clients remain stable and provide better services to the ultimate consumers.'
    },
    {
        name: 'Market Trend Reports',
        content:'We are keen on ensuring that our clients are kept abreast of local and international trends. Our research and development provide our clients with well-informed market trend reports on a quarterly basis. Our reports capture important aspects of market dynamics such as competitive analysis, market entry and expansion, product development and innovation, regulatory compliance, and frameworks. These insights are key in promoting strategic decision-making, market positioning, and long-term planning. In addition to the above, we carry out peer comparison during treaty analysis, which entails key aspects such as returns and retention as a percent of capital versus surplus.'
    },
    {
        name: 'Capacity Building',
        content:'We are keen on ensuring that our clients are kept abreast of local and international trends. Our research and development provide our clients with well-informed market trend reports on a quarterly basis. Our reports capture important aspects of market dynamics such as competitive analysis, market entry and expansion, product development and innovation, regulatory compliance, and frameworks. These insights are key in promoting strategic decision-making, market positioning, and long-term planning. In addition to the above, we carry out peer comparison during treaty analysis, which entails key aspects such as returns and retention as a percent of capital versus surplus.'
    },
])

</script>

<template>

    <div class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
