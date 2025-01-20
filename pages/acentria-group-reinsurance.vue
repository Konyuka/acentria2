<script setup>
const serviceHeading = ref('Resilience Through Tailored<span class="text-brand-primary"> Reinsurance Solutions & Services.</span>')

const menus = ref([
    {
        name: 'Strategic Advisory',
        tag: 'strategic',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Reinsurance Services',
        tag: 'services',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Reinsurance Solutions',
        tag: 'solutions',
        icon: 'fas fa-cogs',
    },
    {
        name: 'Innovation',
        tag: 'data',
        icon: 'fas fa-chart-line',
    },
])

const data = ref({
    strategic: [
        {
            name: 'Market Insights & Negotiation',
            content: 'Advising on emerging market trends, regulatory environments, and pricing to optimize placements and financing terms.',
            icon: 'fas fa-file-contract',
            link: '/reinsurance/market-insights',
        },
        {
            name: 'Financial Planning & Structuring',
            content: 'Crafting strategies that balance liquidity, solvency, and growth targets, ensuring optimal capital allocation.',
            icon: 'fas fa-chart-line', // Financial planning
            link: '/reinsurance/financial-planning-structuring',
        },
        {
            name: 'Risk Assessment & Modeling',
            content: 'In-depth analysis of potential exposures and loss scenarios, using quantitative and qualitative methods to forecast financial impacts.',
            icon: 'fas fa-balance-scale', // Risk assessment
            link: '/reinsurance/risk-assessment-modeling',
        },
        {
            name: 'Program Design & Optimization',
            content: 'Structuring reinsurance solutions aligned with a client’s risk tolerance and balance sheet objectives to optimize capital usage and minimize volatility.',
            icon: 'fas fa-cogs', // Optimization
            link: '/reinsurance/reinsurance-optimization',
        },
        {
            name: 'Regulatory Compliance & Governance',
            content: 'Implementing best practices in corporate governance, financial reporting, and solvency management to ensure adherence to regulatory standards.',
            icon: 'fas fa-gavel', // Compliance
            link: '/reinsurance/regulatory-compliance-governance',
        },
        {
            name: 'Rating Agency Advisory',
            content: 'Enhance your financial credibility and secure favorable credit ratings with our expert Rating Agency Advisory services.',
            icon: 'fas fa-star', // Ratings
            link: '/reinsurance/rating-agency-advisory',
        },
    ],
    services: [
        {
            name: 'Treaty Administration',
            content: 'Unlock the full potential of your reinsurance program with our comprehensive Treaty Administration services.',
            icon: 'fas fa-file-contract',
            link: '/reinsurance/treaty-administration',
        },
        {
            name: 'Claims Management',
            content: 'Empower your business with our comprehensive claims management solutions and see the difference in your bottom line.',
            icon: 'fas fa-tasks',
            link: '/reinsurance/claims-management',
        },
        {
            name: 'Market Insights and Negotiations',
            content: 'Leverage market insights to refine coverage terms, mitigate volatility, and enhance risk placement through strategic negotiations',
            icon: 'fas fa-eye',
            link: '/reinsurance/market-insights',
        },
        {
            name: 'Catastrophic Modelling',
            content: 'Harness advanced catastrophe modeling to assess and manage exposure to natural disasters, ensuring robust risk management strategies.',
            icon: 'fas fa-cloud-showers-heavy',
            link: '/reinsurance/catastrophic-modelling',
        },

        
        // {
        //     name: 'Reinsurance Optimization',
        //     content: 'Elevate your reinsurance strategy and secure a brighter, more resilient future with our expert guidance.',
        //     icon: 'fas fa-chart-line',
        //     link: '/reinsurance/reinsurance-optimization',
        // },
        
       
        // {
        //     name: 'Return on Risk Adjusted Capital',
        //     content: 'Maximize your financial performance with our advanced Return on Risk-Adjusted Capital (RORAC) solutions.',
        //     icon: 'fas fa-coins',
        //     link: '/reinsurance/return-on-risk-adjusted-capital',
        // },
        // {
        //     name: 'Rating Agency Advisory',
        //     content: 'Enhance your financial credibility and secure favorable credit ratings with our expert Rating Agency Advisory services.',
        //     icon: 'fas fa-star',
        //     link: '/reinsurance/rating-agency-advisory',
        // },
        // {
        //     name: 'Risk Based Capital Regulation',
        //     content: 'Navigate the complexities of financial stability with our expert Risk-Based Capital Regulation services.',
        //     icon: 'fas fa-balance-scale',
        //     link: '/reinsurance/risk-based-capital-regulation',
        // },
    ],
    solutions: [
        {
            name: 'Treaty Solutions',
            content: 'Unlock the potential of your insurance portfolio with our comprehensive Treaty Solutions.',
            icon: 'fas fa-file-alt',
            link: '/reinsurance/treaty-solutions',
        },
        {
            name: 'Facultative Solutions',
            content: 'Customized solutions for specific risks on both traditional lines and special lines of business.',
            icon: 'fas fa-tools',
            link: '/reinsurance/facultative-solution',
        },
        {
            name: 'Structured Solutions',
            content: 'Unlock the power of tailored financial strategies with our Structured Solutions.',
            icon: 'fas fa-th-list',
            link: '/reinsurance/structured-solutions',
        },
    ],
    data: [
        {
            name: 'Reinsurance Data Analytics Tool',
            content: 'Enhance decision making with our reinsurance data analytics tools.',
            icon: 'fas fa-chart-bar',
            link: '/reinsurance/reinsurance-data-analytics-tool',
        },
        {
            name: 'AcenRe Solution',
            content: 'Optimize reinsurance strategies with our comprehensive reinsurance solutions.',
            icon: 'fas fa-briefcase',
            link: '/reinsurance/acentre-reinsurance-solution',
        },
    ]
});



const content1 = ref({
    orientation: 'image-left',
    heading: '<h1 class="heading-class text-left"> Welcome to <span class="text-brand-primary"> Acentria </span> </h1> <h4 class="text-xl font-semibold text-left"> Your Trusted <span class="text-brand-primary">Reinsurance Partner</span> </h4>',
    subheading: '',
    image:'/img/Re1.jpg',
    link: '/insurance-claims',
    content:'Acentria is your trusted partner in risk management, boasting a team of seasoned professionals dedicated to protecting your business. With our unrivaled market insights and innovative strategies, we provide bespoke reinsurance solutions that align perfectly with your unique needs. <br> At Acentria, we specialize in transforming complex risks into manageable solutions. As a leading reinsurance broker, we are your go-to experts for navigating the intricate world of reinsurance with ease and confidence.'
})
const content2 = ref({
    orientation: 'image-right',
    heading: 'Stabilizing the Company\'s  <br/><span class="text-brand-primary">Overall Operating Results</span>',
    subheading: '',
    image: '/img/Re2.jpg',
    link: '/operating-results',
    content: 'Achieve a new level of financial stability with our expert services aimed at stabilizing your company\'s overall operating results.By implementing strategic risk management, optimizing capital allocation, and enhancing operational efficiency, we help you navigate uncertainties and ensure consistent performance.Our tailored approach is designed to protect your bottom line, drive sustainable growth, and secure your business\'s future in a dynamic market. Transform volatility into predictability and resilience with our comprehensive solutions, and watch your business thrive with confidence.'
})
const content3 = ref({
    orientation: 'image-left',
    heading: 'Protecting  <br/><span class="text-brand-primary">Against Catastrophes</span>',
    subheading: '',
    image: '/img/Re3.jpg',
    link: '/catastrophes',
    content:'Shield your business from the unexpected with our comprehensive Catastrophe Protection solutions. By leveraging advanced modeling, strategic risk transfer, and proactive mitigation measures, we help you safeguard your assets and ensure business continuity. Our tailored approach empowers you to face potential catastrophic events with confidence, transforming uncertainty into resilience. Embrace the future with a fortified defense against the unpredictable, and secure your company’s legacy with our expert guidance.'
})
const content4 = ref({
    orientation: 'image-right',
    heading: 'Limiting Liability &  <br/><span class="text-brand-primary">Increasing Capacities</span>',
    subheading: '',
    image: '/img/Re4.jpg',
    link: '/reinsurance/treaty-solutions',
    content: 'In a predictable world where re/insurers seek to introduce new solutions to customers, capital can serve as a bridge between innovation and investment. However, optimizing capital requires strategic decisions to support growth and maintain a stable balance sheet. At Acentria we assist insurers in limiting their loss exposure to levels commensurate with their net assets. We structure reinsurance solutions that stabilize loss experiences on individual risks and accumulated losses under multiple policies over a specified period.'
})
const content5 = ref({
    orientation: 'image-left',
    heading: 'Elevate your Strategies <br/><span class="text-brand-primary">with Precision & Innovation</span>',
    subheading: '',
    image: '/img/precise.jpg',
    link: '/img/Precision and innovation.jpg',
    content: 'Harness the power of advanced analytics and technology to optimize insurance, reinsurance, and investment decisions. Our solutions provide you with the insights needed to make data-driven decisions, reduce risks, and enhance profitability. By leveraging state-of-the-art tools and methodologies, we help you navigate the complexities of the financial landscape, adapt to changing conditions, and seize new opportunities for growth. Stay competitive and resilient with our comprehensive suite of services designed to meet the unique needs of your business.'
})
const content6 = ref({
    orientation: 'image-right',
    heading: 'Unlock Greater Efficiency <br/><span class="text-brand-primary">& Insight with Our Expertise.</span>',
    subheading: '',
    image: '/img/Re6.jpg',
    link: '/financial-wellness',
    content:'Streamline your operations and enhance decision-making with our integrated solutions in risk management, actuarial services, and technological advancements tailored to your industry needs. Our comprehensive approach ensures you have the tools and insights necessary to navigate complex challenges and seize emerging opportunities. By leveraging our expertise, you can improve efficiency, reduce risks, and drive sustainable growth. Partner with us to stay ahead in a rapidly evolving market and achieve your strategic objectives with confidence.'
})
const content7 = ref({
    orientation: 'image-left',
    heading: 'Explore Risk <br/><span class="text-brand-primary">Areas</span>',
    subheading: '',
    image: '/img/Re7.jpg',
    link: '/reinsurance-products',
    content:'Every industry faces similar global challenges and opportunities, yet each has its own unique dynamics that call for specialized support. At Acentria Group, We bring an unparalleled blend of industry-specific expertise, tap into extensive industry-specific data, analytics, technology and insights to craft solutions tailored precisely to your needs.'
})
const content8 = ref({
    orientation: 'image-right',
    heading: 'Partner with Us for <br/><span class="text-brand-primary">a Resilient Future</span>',
    subheading: '',
    image: '/img/balance.jpg',
    link: '/insurance-claims',
    content: 'In the dynamic world of insurance and reinsurance, having a reliable partner can make all the difference. At Acentria we stand out as your ideal reinsurance broker, offering unparalleled expertise, tailored solutions, and a commitment to excellence.'
})


const faqs = ref([
    {
        name: 'Expertise and Experience',
        content: 'With years of industry experience, our team of seasoned professionals brings a wealth of knowledge and expertise to the table. We understand the complexities of the reinsurance market and provide tailored solutions to meet your specific needs.',
    },
    {
        name: 'Comprehensive Solutions',
        content: 'We provide a full suite of services, including risk management, actuarial services, and advanced technological solutions. Our integrated approach ensures you have all the tools and insights necessary to navigate challenges, reduce risks, and seize opportunities.',
    },
    {
        name: 'Customized Reinsurance Strategies',
        content: 'Every business is unique, and so are its risk management needs. We craft bespoke reinsurance solutions that align with your business objectives, helping you stabilize loss experience, optimize capital, and enhance profitability.',
    },
    {
        name: 'Advanced Analytics and Technology',
        content: 'We leverage advanced analytics and state-of-the-art technology to empower data-driven decisions. Our catastrophe models and impact forecasting tools help analyze financial impacts, develop effective strategies, and adapt to the evolving market.',
    },
    {
        name: 'Reliable Claims Management',
        content: 'Our seamless claims management ensures a smooth process from filing to settlement. We help maintain business continuity and accelerate recovery, minimizing disruption during significant events.',
    },
    {
        name: 'Commitment to Excellence',
        content: 'We are dedicated to delivering exceptional service and building long-lasting relationships based on trust and reliability. Our commitment to excellence ensures that you can count on us as your steadfast partner in risk management and reinsurance.',
    },
    {
        name: 'Strategic Guidance and Support',
        content: 'We offer proactive advice and strategic support to help you adapt to changing financial conditions, navigate challenges, and seize growth opportunities. Our goal is to empower you to make informed decisions with confidence and achieve your objectives.',
    },
]);


const bannerMainContent = ref({
    title: 'Acentria Group Reinsurance<br> <span class="text-brand-primary"> & Strategic Advisory</span>',
    subtitle: 'Navigating Risks, Securing Futures, and Empowering Growth',
    image: '/img/reinsure.jpeg',
})


const blackBannerContent = ref(
    '<span class="text-brand-primary">Your Reinsurance, Your Way.</span> <br> Let Acentria Tailor Your Coverage To Your Needs'
)


const benefits = ref([
    {
        icon: "fas fa-user-tie", // Represents expertise and professionalism
        title: "Expertise and Experience",
        description: "With years of industry experience, our team of seasoned professionals brings a wealth of knowledge and expertise to the table. We understand the complexities of the reinsurance market and provide tailored solutions to meet your specific needs.",
    },
    {
        icon: "fas fa-th-list", // Represents a wide range of services or solutions
        title: "Comprehensive Solutions",
        description: "We provide a full suite of services, including risk management, actuarial services, and advanced technological solutions. Our integrated approach ensures you have all the tools and insights necessary to navigate challenges, reduce risks, and seize opportunities.",
    },
    {
        icon: "fas fa-cogs", // Represents customization and crafted strategies
        title: "Customized Reinsurance Strategies",
        description: "Every business is unique, and so are its risk management needs. We craft bespoke reinsurance solutions that align with your business objectives, helping you stabilize loss experience, optimize capital, and enhance profitability.",
    },
    {
        icon: "fas fa-chart-line", // Represents data and analytics
        title: "Advanced Analytics and Technology",
        description: "We leverage advanced analytics and state-of-the-art technology to empower data-driven decisions. Our catastrophe models and impact forecasting tools help analyze financial impacts, develop effective strategies, and adapt to the evolving market.",
    },
    {
        icon: "fas fa-handshake", // Represents trust and claims management
        title: "Reliable Claims Management",
        description: "Our seamless claims management ensures a smooth process from filing to settlement. We help maintain business continuity and accelerate recovery, minimizing disruption during significant events.",
    },
    {
        icon: "fas fa-award", // Represents excellence and dedication
        title: "Commitment to Excellence",
        description: "We are dedicated to delivering exceptional service and building long-lasting relationships based on trust and reliability. Our commitment to excellence ensures that you can count on us as your steadfast partner in risk management and reinsurance.",
    },
    {
        icon: "fas fa-lightbulb", // Represents strategic guidance and support
        title: "Strategic Guidance and Support",
        description: "We offer proactive advice and strategic support to help you adapt to changing financial conditions, navigate challenges, and seize growth opportunities. Our goal is to empower you to make informed decisions with confidence and achieve your objectives.",
    },
]);


</script>

<template>
    <main>
        <div class="bg-white">
            <Carousel2 :content="bannerMainContent" />
            <ContentPic :content="content1" class="my-5" />
            <ContentPic :content="content2" class="my-5" />
            <ContentPic :content="content3" class="my-5" />
            <ContentPic :content="content4" class="my-5" />
            <ContentPic :content="content5" class="my-5" />
            <ContentPic :content="content6" class="my-5" />
            <ContentPic :content="content7" class="my-5" />
            <ServiceTabs :serviceHeading="serviceHeading" :menus="menus" :data="data" />
            <ContentPic :content="content8" class="my-5" />


            <div class="container font-sans py-5">
                <h1 class="section-heading pb-3">
                    Why Partner <span class="text-brand-primary"> with Acentria</span>
                </h1>
                <p class="!content pb-5">
                    Here are some compelling reasons why you should partner with us:
                </p>
                <div class="grid grid-cols-3 gap-5 text-left ">
                    <div v-for="(item, index) in benefits" :key="index" class="shadow-md py-2 px-4 rounded-md">
                        <div class="text-red-600 text-3xl mb-3 flex items-center justify-between">
                            <h3 class=" card-heading">{{ item.title }}</h3>
                            <i :class="item.icon"></i>
                        </div>
                        <p class="!content !text-left">{{ item.description }}</p>
                    </div>
                </div>
            </div>

            <!-- <div class="bg-white pb-5">
                <div class="container">
                    <Accordion :faqs="faqs" />
                </div>
            </div> -->

            <ReinsuranceInsights />

            <HowHelp />

            <BlackBanner :content="blackBannerContent" />

            <InTouch />
        </div>
    </main>
</template>

<style scoped></style>