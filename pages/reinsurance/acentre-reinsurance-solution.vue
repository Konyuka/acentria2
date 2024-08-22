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
        name:'Reinsurance Strategy Optimization',
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

        <div class="overflow-hidden bg-white py-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-1 mb-20">
                    
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-full">
                            <h2 class="text-base font-semibold leading-7 text-primary">Acentre</h2>
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Measurable Metrics for Informed Decisions
                            </p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                AcentRe empowers insurers to transform their understanding of risk and return transfer
                                while planning and negotiating reinsurance and retrocession treaties. Granting cedants
                                the power of faster data analytics and deliberate transformative decision making, is at
                                the core of the platform’s design.



                                AcentRe redefines how you approach reinsurance by offering a data-driven approach. Our
                                platform equips you with the metrics and analytics you need to make decisions with
                                confidence. Gone are the days of relying on outdated industry norms. AcentRe empowers
                                you to make strategic choices based on real-time data and deep insights.
                            </p>

                        </div>
                    </div>
                </div>

                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                How can it help you
                            </p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                In a world where data and precision are paramount, AcentRe stands as the pinnacle of
                                innovation in the insurance and reinsurance sector. Join us and unleash the power of
                                data-driven decision-making for a brighter and more profitable future.
                            </p>

                        </div>
                    </div>
                    <img src="https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Product screenshot"
                        class="w-full  max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:h-full">
                </div>
                <dl
                    class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none grid grid-cols-2 gap-5">

                    <div v-for="use in usage" class="relative pl-9">
                        <dt class="inline font-semibold text-gray-900">
                            <i class="left-1 top-1 h-5 w-5 text-primary fas fa-caret-right text-xl"></i>
                            {{ use.name }}
                        </dt>
                        <dd class="inline">
                            {{ use.content }}
                        </dd>
                    </div>

                </dl>
            </div>
        </div>


        <ReFeatures :content="ReinsuranceFeatureContent" />
        <div class="grid grid-cols-2">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 align-center my-10">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">

                        <p class="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                            Measurable Metrics for Informed Decisions
                        </p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">
                            AcentRe redefines how you approach reinsurance by offering a data-driven approach. Our
                            platform equips you with the metrics and analytics you need to make decisions with
                            confidence. Gone are the days of relying on outdated industry norms. AcentRe empowers you to
                            make strategic choices based on real-time data and deep insights.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <ReinsuranceFaqs :content="faqs" />
            </div>
        </div>
        <ReinsuranceWhy />
        <InTouch />
    </div>



</template>
