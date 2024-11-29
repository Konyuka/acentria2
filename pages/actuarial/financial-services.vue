<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Financial Services',
    subTitle: 'Expert Guidance',
    image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
    title: 'Offering tailored solutions and expert guidance to help you achieve your monetary goals',
    image: 'https://images.pexels.com/photos/4386325/pexels-photo-4386325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'Financial services in actuarial science encompass a wide range of areas where actuarial expertise is utilized to assess and manage risk, make financial decisions, and provide valuable insights. In the realm of financial services, actuarial science plays a crucial role in managing risk and uncertainty, particularly in the context of insurance and pension industries. At Acentria, our actuarial professionals are instrumental in providing valuable insights and data-driven solutions to various financial services areas.'
})

const faqs = ref([
    {
        name: 'Data Driven Insights',
        content: 'Our approach to managing risk on adjusted capital is rooted in data-driven insights. Acentria leverages advanced analytics, historical data, and cutting-edge technology to assess and optimize the allocation of adjusted capital.'
    },
    {
        name: 'Regulatory Adherence and Compliance',
        content: 'Stringent compliance with industry regulations and legal requirements is integral to our strategy. Acentria ensures that our risk management practices meet the highest standards, providing transparency and security.'
    },
    {
        name: 'Profitability Objectives',
        content: 'A core focus of our strategy is achieving profitability while managing risk on adjusted capital efficiently. We work to maintain financial strength and sustainability while supporting our clients\' goals.'
    },
    {
        name: 'Sustainable Growth',
        content: 'Managing risk on adjusted capital is not only about protection but also about facilitating growth. We aim to strike a balance between preserving capital and enabling long-term financial success.'
    },


])

const offers = ref([
    {
        name: 'Asset Liability Matching (ALM)',
        content: 'We analyze cash flows, interest rate sensitivity, and maturity profiles of assets and liabilities to support informed decisions, achieving financial stability, maximizing returns, and aligning with your organization\'s risk appetite.'
    },
    {
        name: 'Financial Modelling and Business Planning',
        content: 'We create financial models for strategic planning, including growth, mergers, and capital raising, enabling data-driven decisions to optimize performance and achieve business goals efficiently.'
    },
    {
        name: 'Enterprise Risk Management (ERM)',
        content: 'We assess and model credit, market, and operational risks, optimizing capital allocation and ensuring regulatory compliance through advanced risk management techniques.'
    },
    {
        name: 'Valuation and Fair Value Assessment',
        content: 'We value financial instruments, including derivatives and structured products, ensuring compliance with IFRS and GAAP standards for accurate financial reporting.'
    },
    {
        name: 'IFRS 9 Implementation',
        content: 'Our team designs IFRS 9-compliant frameworks, covering asset and liability classification, impairment modeling, and hedge accounting, ensuring accurate and effective financial reporting.'
    },
    {
        name: 'Investment Portfolio Optimization',
        content: 'We design diversified investment portfolios, combining advanced modeling with market insights to enhance performance, manage risk, and achieve optimal risk-adjusted returns aligned with your financial objectives.'
    },
])

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <!-- <ActuarialFeature :content="ReinsuranceFeatureContent2" /> -->

        <div class="container pt-5">
            <p class="text-xs">
                Acentria offers actuarial expertise to assess risks, guide financial decisions, and provide solutions in
                insurance, pensions, and finance, helping businesses manage uncertainty and make informed choices
            </p>
        </div>

        <div class="container">
            <h2
                class="text-left font-sans tracking-normal text-3xl text-black font-semibold leading-tight lg:leading-tight my-3">
                Services <span class="text-brand-primary">We Offer</span>
            </h2>
        </div>
        <AccordionActuarial :faqs="offers" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
