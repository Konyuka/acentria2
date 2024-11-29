<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Acent-Re Reinsurance System',
    subTitle: 'Transforming the Industry',
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
    content: 'AcentRe empowers insurers to transform their understanding of risk and return transfer while planning and negotiating reinsurance and retrocession treaties. Granting cedants the power of faster data analytics and deliberate transformative decision making, is at the core of the platform’s design. AcentRe redefines how you approach reinsurance by offering a data-driven approach. Our platform equips you with the metrics and analytics you need to make decisions with confidence. Gone are the days of relying on outdated industry norms. AcentRe empowers you to make strategic choices based on real-time data and deep insights.'
})

const faqs = ref([
    {
        name: 'Data Cleaning',
        content: 'Ensure your actuarial datasets are accurate and ready for analysis, removing inconsistencies and preparing your data for reliable decision-making.'
    },
    {
        name: 'Reinsurance Pricing',
        content: 'Optimize reinsurance pricing with data-driven insights, ensuring fair and accurate premiums based on risk profiles, enabling competitive and sustainable pricing.'
    },
    {
        name: 'Reinsurance Optimization',
        content: 'Design optimal reinsurance structures by balancing risk and cost, tailored to your organization\'s needs, improving financial resilience and risk management.'
    },
    {
        name: 'Accumulation Management',
        content: 'Monitor and manage aggregated risk exposures in real-time, proactively mitigating risks to stay within desired tolerance levels and improve portfolio stability.'
    },
    {
        name: 'Catastrophe (Cat) Modeling',
        content: 'Simulate disaster scenarios and assess the financial impact of extreme events, optimizing risk strategies to enhance preparedness and financial resilience.'
    }
]);

const usage = ref([
    {
        name: 'Reinsurance Pricing',
        content: 'Experience precision and confidence in reinsurance pricing. AcentRe\'s advanced tools provide you with the data- driven insights needed to set pricing that\'s not just competitive but perfectly aligned with risk assessment.'
    },
    {
        name: 'Retrosession Pricing',
        content: 'Retrocession is no longer a guessing game. AcentRe\'s robust capabilities help you accurately evaluate retrocession pricing, ensuring that you make the most informed decisions for your organization.'
    },
    {
        name: 'Reinsurance Optimization',
        content: 'Optimize your reinsurance strategies like never before. AcentRe allows you to explore countless scenarios, so you can make choices that enhance your financial performance and mitigate risk effectively.'
    },
    {
        name: 'Accumulation Analysis',
        content: 'Gain clarity and control over risk accumulation. AcentRe\'s analytical prowess empowers you to identify and address potential accumulation concerns before they become problems.'
    },
])

const reinsuranceFeatures = [
    {
        icon: 'fas fa-cogs',
        title: 'Efficiency',
        description: 'Automate complex tasks, saving time and reducing errors. Our solutions streamline processes, allowing you to focus on strategic decision-making.'
    },
    {
        icon: 'fas fa-bullseye',
        title: 'Accuracy',
        description: 'Leverage data-driven insights for pricing, optimization, accumulation, and catastrophe modeling. Ensure precise and reliable outcomes with our advanced analytics.'
    },
    {
        icon: 'fas fa-puzzle-piece',
        title: 'Customization',
        description: 'Tailored solutions to meet your specific actuarial and reinsurance needs. We work closely with you to develop customized strategies that align with your goals.'
    },
    {
        icon: 'fas fa-dollar-sign',
        description: 'Reduce operational costs through powerful automation and real-time data. Our cost-effective solutions help you achieve financial efficiency and sustainability.'
    },
    {
        icon: 'fas fa-plug',
        title: 'Seamless Integration',
        description: 'Easily integrate with existing systems for a smooth workflow. Our solutions are designed to fit seamlessly into your current operations, enhancing productivity and efficiency.'
    }
];

</script>

<template>
    <div class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white py-5">
            <div class="container mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <h2 class="text-xl lg:text-2xl font-semibold text-black leading-tight">
                    Adopt a deliberate data strategy with <br> 
                    <span class="text-brand-primary">Acentria's Reinsurance System</span>
                </h2>
                <div class="mt-5 lg:mt-0">
                    <a href="#" class="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                        Book a demo
                    </a>
                </div>
            </div>
        </div>

        <div class="container py-5">
            <p class="text-sm leading-relaxed">
                AcentRe is an innovative online software solution that transforms how insurers understand and manage risk, optimize returns, and plan reinsurance strategies. Our platform combines powerful data analytics with advanced actuarial tools, empowering businesses to make strategic, data-driven decisions.
            </p>
        </div>

        <AccordionActuarial :faqs="faqs" />

        <div class="bg-white py-10">
            <div class="container mx-auto">
                <div class="text-left">
                    <h2 class="text-xl lg:text-2xl font-semibold text-gray-900">
                        Why Work <span class="text-brand-primary">With AcentRe</span>
                    </h2>
                </div>

                <div class="mt-10 grid gap-6 md:grid-cols-5">
                    <div v-for="feature in reinsuranceFeatures" class="rounded-md p-4 ring-1 ring-brand-primary shadow-xl">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg font-semibold text-gray-900">{{ feature.title }}</h3>
                            <i :class="feature.icon" class="text-xl text-brand-primary"></i>
                        </div>
                        <p class="mt-2 text-sm leading-relaxed">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>

        <ReinsuranceWhy />
        <ContactForm />
    </div>
</template>
