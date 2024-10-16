<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Acent-Re Reinsurance System',
    image: 'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600',
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
    title: 'Measurable Metrics for Informed Decisions',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content:'AcentRe empowers insurers to transform their understanding of risk and return transfer while planning and negotiating reinsurance and retrocession treaties. Granting cedants the power of faster data analytics and deliberate transformative decision making, is at the core of the platform’s design. AcentRe redefines how you approach reinsurance by offering a data-driven approach. Our platform equips you with the metrics and analytics you need to make decisions with confidence. Gone are the days of relying on outdated industry norms. AcentRe empowers you to make strategic choices based on real-time data and deep insights.'
})

const faqs = ref([
    {
        name: 'Gross Revenue and Profits',
        content:'Understand how your reinsurance decisions can influence your top-line revenue and profitability. AcentRe provides you with the tools to optimize your financial performance..'
    },
    {
        name: 'Net Revenue and Profit Margins',
        content: 'AcentRe\'s metrics help you navigate the intricacies of reinsurance with an eye on your net revenue and profit margins.This results in a more financially secure and prosperous path for your business.'
    },
    {
        name: 'Volatility Transfer',
        content:'Manage risk volatility efficiently. AcentRe enables you to transfer volatility in a manner that aligns with your risk tolerance and business goals.'
    },
    {
        name: 'Impact of Worst-Case Scenarios',
        content: 'Prepare for the unexpected with AcentRe\'s comprehensive analysis of worst-case scenarios.Our platform equips you with the insights to mitigate potential risks and safeguard your financial stability.'
    }
])

const usage = ref([
    {
        name:'Reinsurance Pricing',
        content: 'Experience precision and confidence in reinsurance pricing. AcentRe\'s advanced tools provide you with the data- driven insights needed to set pricing that\'s not just competitive but perfectly aligned with risk assessment.'
    },
    {
        name:'Retrosession Pricing',
        content: 'Retrocession is no longer a guessing game. AcentRe\'s robust capabilities help you accurately evaluate retrocession pricing, ensuring that you make the most informed decisions for your organization.'
    },
    {
        name:'Reinsurance Optimization',
        content:'Optimize your reinsurance strategies like never before. AcentRe allows you to explore countless scenarios, so you can make choices that enhance your financial performance and mitigate risk effectively.'
    },
    {
        name:'Accumulation Analysis',
        content: 'Gain clarity and control over risk accumulation. AcentRe\'s analytical prowess empowers you to identify and address potential accumulation concerns before they become problems.'
    },
])

</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <div class="bg-white">
            <div class="font-sans mx-auto max-w-7xl px-6 py-5 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 class="font-sans text-3xl font-semibold tracking-tight text-black">
                    Adopt a deliberate data strategy with <br> <span class="text-brand-primary">Acentria's Data
                        Analytics
                        tool</span>
                </h2>
                <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                    <a href="#"
                        class="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Book a demo
                    </a>
                </div>
            </div>
        </div>
        <ReinsuranceFeature :content="ReinsuranceFeatureContent2" />

        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-10">

            <article v-for="service in usage"
                class="shadow-2xl p-4 border-2 border-brand-primary rounded-lg group flex flex-col items-start justify-between">
                <a class="w-full" href="#">

                    <!-- <i class="fas fa-caret-down text-brand-primary text-3xl"></i> -->
                    <div class="max-w-full">

                        <div class="font-sans group relative">
                            <h3
                                class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                <span class="absolute inset-0"></span>
                                {{ service.name }}
                            </h3>
                            <p class="mt-5 text-sm leading-6 text-gray-600">
                                {{ service.content }}
                            </p>
                        </div>
                    </div>
                </a>
            </article>

        </div>


        <ReFeatures :content="ReinsuranceFeatureContent" />

        <Accordion :faqs="faqs" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
