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
        name: 'Return on risk adjusted capital (RORAC)',
        content: 'Acentria is committed to providing reinsurance arrangements that create value for risk. While structuring reinsurance plans, both cedants and reinsurers must ensure the plans fit into their capital strategies. We assess the balance between risk retention and capital requirements to provide treaties that give the best return on investment for both reinsurers and cedants. Our commitment is to create value for our partners.'
    },
    {
        name: 'Treaty analytics & optimization',
        content: 'We conduct comprehensive analytics of your existing reinsurance treaties, evaluating their performance, risk exposure, and cost-effectiveness. Leveraging advanced modeling techniques, we identify opportunities for optimization, allowing you to tailor your reinsurance program to better align with your risk appetite and financial objectives. Our strategic recommendations enable you to make informed decisions to improve capital efficiency, reduce volatility, and enhance overall profitability.'
    },
    {
        name: 'Catastrophe modelling',
        content: 'We are keen on building capacity to help organizations understand their portfolio risk exposure to catastrophes better for optimal reinsurance. Our catastrophe risk management measures focus on pricing, underwriting, accumulation, and the design of better risk transfer strategies. As such, we deploy both proprietary and third-party software to help with simulations that help organizations predict their annual average loss per return period. Our offering includes both earthquake and flooding models and captures how catastrophes behave and impact insurable assets using sophisticated simulation methods.'
    },
])


</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent2" />
        <div class="pb-2 text-center">
            <h2
                class="font-sans tracking-normal text-3xl lg:text-4xl text-brand-primary font-semibold leading-tight lg:leading-tight my-5">
                Services We Offer
            </h2>
        </div>
        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
