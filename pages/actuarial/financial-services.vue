<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Financial Services',
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
        name: 'Asset liability matching (ALM)',
        content:'We perform detailed analysis of the maturity profile, cash flows, and interest rate sensitivity of both assets and liabilities, enabling you to make informed decisions to achieve financial stability and maximize returns while considering the organization’s risk appetite.'
    },
    {
        name: 'Financial Modelling and Business Planning',
        content:'Our financial modeling services assist in strategic business planning, including growth projections, mergers, acquisitions, and capital raising initiatives. These models provide a basis for informed decision-making and optimizing financial performance.'
    },
    {
        name: 'Enterprise Risk Management (ERM)',
        content:'We conduct in-depth risk assessments, utilizing sophisticated modeling techniques to quantify and manage various financial risks, including credit risk, market risk, and operational risk. Our expertise helps optimize capital allocation, ensuring compliance with regulatory requirements.'
    },
    {
        name: 'Valuation and Fair Value Assessment',
        content:'Our actuarial experts assist in the valuation of financial instruments, including complex derivatives and structured products, ensuring accurate and compliant financial reporting under accounting standards like IFRS and GAAP.'
    },
    {
        name: 'IFRS9 Implementation',
        content:'With a team of experienced accountants, risk analysts, and compliance experts, we assist in designing and implementing robust IFRS 9-compliant financial instruments accounting frameworks. Our services encompass classification and measurement of financial assets and liabilities, impairment modeling, and hedge accounting strategies.'
    },
    {
        name: 'Investment portfolio optimization',
        content: 'Our services cater to institutions seeking to achieve optimal risk-adjusted returns while aligning their investment strategies with clients\' risk tolerance.Through sophisticated modeling techniques and a deep understanding of financial markets, we assist in designing well- diversified and efficient investment portfolios.Our approach combines quantitative analysis with qualitative insights to identify suitable investment opportunities, manage portfolio risk, and enhance long - term performance.we empower you to deliver value and meet your clients\' financial objectives.'
    },
])


</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ActuarialFeature :content="ReinsuranceFeatureContent2" />


        <div class="font-sans mx-auto max-w-7xl px-6 sm:mt-10 lg:px-8 my-10">
            <div class="!mb-10 isolate mx-auto mt-10 grid max-w-7xl grid-cols-1 md:grid-cols-3 gap-8">

                <div v-for="special in offers" class="p-3 ring-1 ring-brand-primary shadow-xl rounded-md">

                    <h2 id="tier-hobby"
                        class=" text-center text-md font-semibold leading-8 text-white bg-brand-primary flex justify-center content-center p-1 rounded-md">
                        {{ special.name }}
                    </h2>
                    <ul role="list" class="divide-y divide-gray-100">

                        <li class="flex gap-x-4 py-1">
                            <div class="min-w-0">
                                <p class="text-xs leading-5 text-gray-900"><i
                                        class="fas fa-caret-right mr-2"></i> {{ special.content }}</p>
                            </div>
                        </li>

                    </ul>

                </div>



            </div>
        </div>

        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
