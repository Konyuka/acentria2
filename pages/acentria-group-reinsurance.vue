<script setup>

const content = ref({
    vid: '/img/hd2.mp4',
    pageTitle: 'Acentria Group Reinsurance',
    title: 'Secure Your Future with <br> <span class="text-brand-primary">Comprehensive Reinsurance</span>',
})

const data = ref({
    services: [
        {
            name: 'Treaty Administration',
            content: 'Unlock the full potential of your reinsurance program with our comprehensive Treaty Administration services.',
            icon: 'fas fa-file-contract',
            link: '/reinsurance/treaty-administration',
        },
        {
            name: 'Reinsurance Optimization',
            content: 'Elevate your reinsurance strategy and secure a brighter, more resilient future with our expert guidance.',
            icon: 'fas fa-chart-line',
            link: '/reinsurance/reinsurance-optimization',
        },
        {
            name: 'Claims Management',
            content: 'Empower your business with our comprehensive claims management solutions and see the difference in your bottom line.',
            icon: 'fas fa-tasks',
            link: '/reinsurance/claims-management',
        },
        {
            name: 'Catastrophic Modelling',
            content: 'Harness advanced catastrophe modeling to assess and manage exposure to natural disasters, ensuring robust risk management strategies.',
            icon: 'fas fa-cloud-showers-heavy',
            link: '/reinsurance/catastrophic-modelling',
        },
        {
            name: 'Return on Risk Adjusted Capital',
            content: 'Maximize your financial performance with our advanced Return on Risk-Adjusted Capital (RORAC) solutions.',
            icon: 'fas fa-coins',
            link: '/reinsurance/return-on-risk-adjusted-capital',
        },
        {
            name: 'Rating Agency Advisory',
            content: 'Enhance your financial credibility and secure favorable credit ratings with our expert Rating Agency Advisory services.',
            icon: 'fas fa-star',
            link: '/reinsurance/rating-agency-advisory',
        },
        {
            name: 'Risk Based Capital Regulation',
            content: 'Navigate the complexities of financial stability with our expert Risk-Based Capital Regulation services.',
            icon: 'fas fa-balance-scale',
            link: '/reinsurance/risk-based-capital-regulation',
        },
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
            link: '/reinsurance/facultative-solutions',
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
            link: '/reinsurance/data-analytics-tool',
        },
        {
            name: 'AcenRe Solution',
            content: 'Optimize reinsurance strategies with our comprehensive reinsurance solutions.',
            icon: 'fas fa-briefcase',
            link: '/reinsurance/acenre-solution',
        },
    ]
});


const menus = ref([
    {
        name: 'Expert Services',
        tag: 'services',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Reinsurance Solutions',
        tag: 'solutions',
        icon: 'fas fa-cogs',
    },
    {
        name: 'Innovation and Digitization',
        tag: 'data',
        icon: 'fas fa-chart-line',
    },
])

const slides = ref([
    {
        imageUrl: '/img/resilience.jpg',
        title: 'Empowering Resilience Through Tailored Reinsurance Solutions ',
        description:'',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/futures.jpg',
        title: 'Navigating Risks, Securing Futures, and Empowering Growth ',
        description: '',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/plan.jpg',
        title: 'Discover Our Services',
        description: '',
        url: '/contact-acentria-group',
    },
])

const content1 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: '<h1 class="heading-class text-left"> Welcome to <span class="text-brand-primary"> Acentria </span> </h1> <h4 class="text-xl font-semibold text-left"> Your Trusted <span class="text-brand-primary">Reinsurance Partner</span> </h4>',
    subheading: '',
    image:'/img/Re1.jpg',
    link: '/insurance-claims',
    content:'Acentria is your trusted partner in risk management, boasting a team of seasoned professionals dedicated to protecting your business. With our unrivaled market insights and innovative strategies, we provide bespoke reinsurance solutions that align perfectly with your unique needs. <br> At Acentria, we specialize in transforming complex risks into manageable solutions. As a leading reinsurance broker, we are your go-to experts for navigating the intricate world of reinsurance with ease and confidence.'
})
const content2 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Stabilizing the Company\'s  <br/><span class="text-brand-primary">Overall Operating Results</span>',
    subheading: '',
    image: '/img/Re2.jpg',
    link: '/operating-results',
    content: 'Achieve a new level of financial stability with our expert services aimed at stabilizing your company\'s overall operating results.By implementing strategic risk management, optimizing capital allocation, and enhancing operational efficiency, we help you navigate uncertainties and ensure consistent performance.Our tailored approach is designed to protect your bottom line, drive sustainable growth, and secure your business\'s future in a dynamic market. Transform volatility into predictability and resilience with our comprehensive solutions, and watch your business thrive with confidence.'
})
const content3 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Protecting  <br/><span class="text-brand-primary">Against Catastrophes</span>',
    subheading: '',
    image: '/img/Re3.jpg',
    link: '/catastrophes',
    content:'Shield your business from the unexpected with our comprehensive Catastrophe Protection solutions. By leveraging advanced modeling, strategic risk transfer, and proactive mitigation measures, we help you safeguard your assets and ensure business continuity. Our tailored approach empowers you to face potential catastrophic events with confidence, transforming uncertainty into resilience. Embrace the future with a fortified defense against the unpredictable, and secure your company’s legacy with our expert guidance.'
})
const content4 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Limiting Liability &  <br/><span class="text-brand-primary">Increasing Capacities</span>',
    subheading: '',
    image: '/img/Re4.jpg',
    link: '/reinsurance/treaty-solutions',
    content: 'In a predictable world where re/insurers seek to introduce new solutions to customers, capital can serve as a bridge between innovation and investment. However, optimizing capital requires strategic decisions to support growth and maintain a stable balance sheet. At Acentria we assist insurers in limiting their loss exposure to levels commensurate with their net assets. We structure reinsurance solutions that stabilize loss experiences on individual risks and accumulated losses under multiple policies over a specified period.'
})
const content5 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Elavate your Strategies <br/><span class="text-brand-primary">with Precision & Innovation</span>',
    subheading: '',
    image: '/img/Re5.jpg',
    link: '/reinsurance/acentre-solution',
    content: 'Harness the power of advanced analytics and technology to optimize insurance, reinsurance, and investment decisions. Our solutions provide you with the insights needed to make data-driven decisions, reduce risks, and enhance profitability. By leveraging state-of-the-art tools and methodologies, we help you navigate the complexities of the financial landscape, adapt to changing conditions, and seize new opportunities for growth. Stay competitive and resilient with our comprehensive suite of services designed to meet the unique needs of your business.'
})
const content6 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Unlock Greater Efficiency <br/><span class="text-brand-primary">& Insight with Our Expertise.</span>',
    subheading: '',
    image: '/img/Re6.jpg',
    link: '/financial-wellness',
    content:'Streamline your operations and enhance decision-making with our integrated solutions in risk management, actuarial services, and technological advancements tailored to your industry needs. Our comprehensive approach ensures you have the tools and insights necessary to navigate complex challenges and seize emerging opportunities. By leveraging our expertise, you can improve efficiency, reduce risks, and drive sustainable growth. Partner with us to stay ahead in a rapidly evolving market and achieve your strategic objectives with confidence.'
})
const content7 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Explore Risk <br/><span class="text-brand-primary">Areas</span>',
    subheading: '',
    image: '/img/Re7.jpg',
    link: '/reinsurance-products',
    content:'Every industry faces similar global challenges and opportunities, yet each has its own unique dynamics that call for specialized support. At Acentria Group, We bring an unparalleled blend of industry-specific expertise, tap into extensive industry-specific data, analytics, technology and insights to craft solutions tailored precisely to your needs.'
})
const content8 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Partner with Us for <br/><span class="text-brand-primary">a Resilient Future</span>',
    subheading: '',
    image: '/img/Re8.jpg',
    link: '/insurance-claims',
    content: 'In the dynamic world of insurance and reinsurance, having a reliable partner can make all the difference. At Acentria we stand out as your ideal reinsurance broker, offering unparalleled expertise, tailored solutions, and a commitment to excellence. Here\'s why partnering with us is a smart choice for your business: '
})

const specials = ref([
    {
        name: 'Insurance & Reinsurance',
        items: [
            '• Bankers Blanket Bond',
            '• Cyber Insurance',
            '• Commercial Crime',
            '• Trade Credit',
            '• Directors & Officers Liability',
            '• Professional Indemnity'
        ],
        img: 'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Financial Lines Insurance provides essential coverage for businesses and professionals against the unique risks they face in their financial and managerial operations. This includes protection for directors and officers, professional indemnity, cyber incidents, fidelity fraud, and specialized risks within financial institutions. “In a world of evolving financial risks and regulated business environment, financial lines insurance is your safeguard for sound decision-making and business continuity.”'
    },
    {
        name: 'Financial Institutions',
        items: [
            '• Advance Payment Bonds',
            '• Performance Bonds',
            '• Bid Bonds',
            '• Customs and Warehousing Bonds',
            '• Retention and Maintenance Bonds'
        ],
        img: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Bonds and guarantees are specialized financial instruments used to provide assurance and security in business transactions.'
    },
    {
        name: 'Industrials & Manufacturing',
        items: [
            '• Political Violence including Riot, Strike and Civil Commotion',
            '• Terrorism and Sabotage',
            '• Business interruption'
        ],
        img: 'https://images.pexels.com/photos/2698473/pexels-photo-2698473.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'In uncertain times, having the right coverage in place ensures your business is shielded from the impact of political unrest and terrorism. At Acentria, we help our clients identify the exposures to such risks and provide tailored reinsurance solutions that offer protection against a wide range of threats, including war, civil commotion, insurrection, and terrorist attacks.'
    },
    {
        name: 'Professionals & Business Service',
        items: [
            '• Marine Hull',
            '• Marine Cargo',
            '• Marine Hull and Machinery',
            '• Protection and Indemnity',
            '• Goods in Transit',
            '• Aquaculture'
        ],
        img: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Marine insurance is a cornerstone of global trade, offering protection against the risks associated with the transportation of goods and vessels across seas, rivers, and other waterways. We specialize in designing comprehensive marine reinsurance solutions tailored to the unique needs of shipping companies, logistics providers, and businesses engaged in international trade. Our expertise and global market access enable us to secure competitive terms and innovative reinsurance arrangements that ensure seamless risk transfer.'
    },
    {
        name: 'Technology',
        items: [
            '• Geothermal plants',
            '• Renewable energy',
            '• Power plants',
            '• Utilities',
            '• Offshore Energy',
            '• Onshore Energy',
            '• Onshore Energy construction Business'
        ],
        img: 'https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'With access to global markets and expertise in energy risk assessment, we design programs that deliver comprehensive protection for upstream, midstream, and downstream operations. Our solutions are customized to support both traditional and renewable energy projects, ensuring clients stay resilient in a rapidly evolving industry.'
    },
    {
        name: 'Transport & Logistics',
        items: [
            '• Hull All Risk Hull War Aviation',
            '• Product & Premises Liability Airport',
            '• Terminal Liability Ground Handling',
            '• Liability Hangar Keepers Liability',
            '• Third Party Liability Passenger Legal',
            '• Liability Combined Single Liability',
            '• Aviation Refuelers Liability'
        ],
        img: '/img/63.jpg',
        description: 'Aviation insurance provides essential protection for the complex and high-stakes risks faced by the aviation industry, covering everything from aircraft hull and liability to passenger and cargo exposures. Whether for commercial airlines, private operators, or airport facilities, our specialized coverage ensures financial resilience in the face of accidents, mechanical failures, natural disasters, or third-party claims. "Empowering the aviation industry to thrive, even in turbulent times.”'
    },
    {
        name: 'Hospitality, Travel & Leisure',
        items: [
            '• Professional Indemnity',
            '• Public & Products Liability',
            '• Employers Liability',
            '• Trustee Liability',
            '• Directors and Officers Liability',
            '• Product Recall',
            '• Environmental Liability'
        ],
        img: 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Casualty and liability insurance provides essential protection for businesses against third-party claims arising from injuries, property damage, or legal liabilities. This class of insurance covers a wide range of exposures, including general liability, employer’s liability, product liability, professional liability, and environmental liability.'
    },
    {
        name: 'Construction & Real Estate',
        items: [
            '• Fire and Allied Perils',
            '• Fire loss of profit Industrial All Risk',
            '• Asset All Risk Deterioration of Stock',
            '• Advance Loss of Profits',
            '• Machinery Breakdown',
            '• Contractors Plant and Machinery',
            '• Electronic Equipment Insurance',
            '• Erection All Risks',
            '• Contractors All Risks',
            '• Delay in start-up Insurance'
        ],
        img: 'https://images.pexels.com/photos/942560/pexels-photo-942560.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Property and engineering insurance is designed to protect businesses and assets against physical damage, financial loss, and risks associated with construction and operational activities. This includes coverage for commercial properties, industrial facilities, construction projects, and specialized engineering risks such as machinery breakdown and project delays. From safeguarding infrastructure investments to mitigating the risks of natural disasters and technical failures, we help our clients protect what matters most.'
    },
    {
        name: 'Mining & Natural Resources',
        items: [
            '• Individual Life',
            '• Group Life',
            '• Group Credit & Mortgage',
            '• Keyman Insurance'
        ],
        img: 'https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
    },
    {
        name: 'Energy & Power',
        items: [
            '• Individual Life',
            '• Group Life',
            '• Group Credit & Mortgage',
            '• Keyman Insurance'
        ],
        img: 'https://images.pexels.com/photos/208189/pexels-photo-208189.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Life insurance plays a pivotal role in providing financial security and peace of mind to individuals and families. As a reinsurance broker, we specialize in supporting life insurers by designing reinsurance solutions that help them manage risks, improve capital efficiency, and ensure long-term sustainability. From traditional life insurance to innovative products like critical illness and annuities, our tailored programs address the evolving needs of the life insurance market.'
    },
]);

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
    title: 'Acentria Reinsurance',
    subtitle: 'Secure Your Future with Comprehensive Reinsurance',
    image: '/img/reinsure.jpeg',
})


</script>

<template>
    <main>
        <div class="bg-white">

            <Carousel :content="bannerMainContent" />
            <!-- <Carousel :slides="slides" /> -->



            <ContentPic :content="content1" class="my-5" />
            <ContentPic :content="content2" class="my-5" />
            <ContentPic :content="content3" class="my-5" />
            <ContentPic :content="content4" class="my-5" />
            <ContentPic :content="content5" class="my-5" />
            <ContentPic :content="content6" class="my-5" />
            <ContentPic :content="content7" class="my-5" />

            <div>
                <div class="py-5 text-center bg-white">
                    <h2
                        class="font-sans tracking-normal text-2xl text-black font-semibold leading-normal lg:leading-normal">
                        Empowering Resilience Through Tailored<span class="text-brand-primary"> Reinsurance Solutions &
                            Services.</span>
                    </h2>
                </div>

                <div class="text-white bg-white">
                    <section class="relative py-2">
                        <div class="container px-4">
                            <ServiceTabs :menus="menus" :data="data" />
                        </div>
                    </section>
                </div>
            </div>

            <ContentPic :content="content8" class="my-5" />

            <div class="bg-white pb-5">
                <div class="container">
                    <Accordion :faqs="faqs" />
                </div>
            </div>





            <section id="" class="relative py-8 bg-black text-center">
                <div class="container px-4">
                    <h2
                        class="font-sans tracking-normal text-2xl text-white font-semibold leading-normal lg:leading-normal">
                        <span class="text-brand-primary">Your Reinsurance, Your Way.</span> <br>
                        Let Acentria Tailor Your Coverage To Your Needs
                    </h2>
                </div>
            </section>

            <ReinsuranceInsights />

            <HowHelp />

            <InTouch />
        </div>
    </main>
</template>

<style scoped></style>