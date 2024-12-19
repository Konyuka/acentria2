<script setup>

const content = ref({
    vid: '/img/hd2.mp4',
    pageTitle: 'Acentria Group Reinsurance',
    title: 'Secure Your Future with <br> <span class="text-brand-primary">Comprehensive Reinsurance</span>',
})

const data = ref({
    services: [
        {
            name: 'Reinsurance Optimization',
            content: 'Optimize your reinsurance strategy with Acentria. We help you maximize efficiency and minimize risk.',
            icon: 'fas fa-chart-line',
            link: '/reinsurance/reinsurance-optimization'
        },
        {
            name: 'Treaty Administration',
            content: 'Efficiently manage your reinsurance treaties with our comprehensive administration services.',
            icon: 'fas fa-file-contract',
            link: '/reinsurance/treaty-administration'
        },
        {
            name: 'Claims Management',
            content: 'Streamline your claims process with our expert management services, ensuring quick and fair settlements.',
            icon: 'fas fa-tasks',
            link: '/reinsurance/claims-management'
        },
        {
            name: 'Value Addition',
            content: 'Enhance your reinsurance portfolio with our value-added services, tailored to meet your unique needs.',
            icon: 'fas fa-plus-circle',
            link: '/reinsurance/value-addition'
        },
    ],
    solutions: [
        {
            name: 'Facultative Solutions',
            content: 'Tailored reinsurance solutions for specific risks, providing flexibility and targeted coverage.',
            icon: 'fas fa-tools',
            link: '/reinsurance/facultative-solution'
        },
        {
            name: 'Treaty Solutions',
            content: 'Comprehensive reinsurance agreements that cover a portfolio of risks, ensuring stability and predictability.',
            icon: 'fas fa-file-alt',
            link: '/reinsurance/treaty-solutions'
        },
        {
            name: 'Special Lines Solutions',
            content: 'Customized reinsurance for niche markets and unique risks, offering specialized protection.',
            icon: 'fas fa-th-list',
            link: '/reinsurance/special-lines'
        },
    ],
    data: [
        {
            name: 'Reinsurance Data Analytics Tool',
            content: 'Leverage advanced analytics to optimize your reinsurance strategies and make informed decisions.',
            icon: 'fas fa-chart-bar',
            link: '/reinsurance/reinsurance-data-analytics-tool'
        },
        {
            name: 'Acentria Reinsurance Solution',
            content: 'Comprehensive reinsurance solutions tailored to meet the unique needs of your business.',
            icon: 'fas fa-briefcase',
            link: '/reinsurance/acentre-reinsurance-solution'
        },
        {
            name: 'Catastrophic Modelling',
            content: 'Utilize sophisticated models to assess and mitigate the impact of catastrophic events on your portfolio.',
            icon: 'fas fa-chart-area',
            link: '/reinsurance/catastrophic-modelling'
        },
        {
            name: 'Return On Risk Adjusted Capital',
            content: 'Maximize your returns by effectively managing risk-adjusted capital in your reinsurance operations.',
            icon: 'fas fa-chart-line',
            link: '/reinsurance/return-on-risk-adjusted-capital'
        },
    ]
});

const data2 = ref({
    services: [
        {
            name: 'Financial Services',
            content: 'Comprehensive financial services to support your actuarial needs, ensuring stability and growth.',
            icon: 'account_balance',
        },
        {
            name: 'Insurance Consulting',
            content: 'Expert insurance consulting to help you navigate complex actuarial challenges and optimize your strategies.',
            icon: 'lightbulb',
        },
        {
            name: 'Reinsurance Consulting',
            content: 'Specialized reinsurance consulting to streamline your processes and enhance risk management.',
            icon: 'policy',
        },
    ],
    other: [
        {
            name: 'IFRS 17 Implementation',
            content: 'Expert guidance on implementing IFRS 17, ensuring compliance and accurate financial reporting.',
            icon: 'account_balance',
        },
        {
            name: 'Innovation and Digitization',
            content: 'Leverage cutting-edge technology to enhance actuarial processes and drive innovation.',
            icon: 'lightbulb',
        },
        {
            name: 'Retirement and Employee Benefits',
            content: 'Comprehensive actuarial services for retirement plans and employee benefits, ensuring financial security.',
            icon: 'group',
        },
    ],
    products: [
        {
            name: 'AcentRe',
            content: 'AcentRe is an online reinsurance platform that specializes in data cleaning, pricing, and optimization to enhance your reinsurance strategies.',
            icon: 'cloud',
        },
        {
            name: 'Data Analysis Tool',
            content: 'Utilize our Data Analysis Tool for comprehensive insights and tailored reinsurance solutions to meet your unique business needs.',
            icon: 'insights',
        },
    ]
})


const menus = ref([
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
        name: 'Data and Modelling',
        tag: 'data',
        icon: 'fas fa-chart-line',
    },
])

const whys = ref([
    {
        name: 'Innovation',
        content: 'We are Passionate about innovation because we believe its a driving force that fuels creativity, curiosity, and the pursuit of novel ideas and solutions',
        icon: '',
    },
    {
        name: 'Data driven analytical capabilities',
        content: 'Our ability to use data, advanced analytics, and technology to extract valuable insights, help us to guide business to make informed decisions',
        icon: '',
    },
    {
        name: 'Distinctive consumer insight capabilities',
        content: 'We offer distinctive consumer insight capabilities to help our clients understand the needs, and preferences of their clients.',
        icon: '',
    },
    {
        name: 'Better results',
        content: 'Achieving better results and long term prosperity is a shared long term goal for Acentria group, individuals, organizations, and societies alike',
        icon: '',
    },
])

const heroContent = ref({
    name: `<h1
                                    class="font-sans tracking-normal text-4xl lg:text-5xl  text-brand-primary font-semibold leading-tight lg:leading-tight">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight">Acentria</span>
                                    Reinsurance Brokers
                                </h1>`,
})


const bannerTitle = ref('Acentria Reinsurance Brokers')

const slides = ref([
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Reinsurance Optimization',
        description: 'Optimize your reinsurance strategy with Acentria. We help you maximize efficiency and minimize risk.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Treaty Administration',
        description: 'Efficiently manage your reinsurance treaties with our comprehensive administration services.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Claims Management',
        description: 'Streamline your claims process with our expert management services, ensuring quick and fair settlements.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Value Addition',
        description: 'Enhance your reinsurance portfolio with our value-added services, tailored to meet your unique needs.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Facultative Solutions',
        description: 'Tailored reinsurance solutions for specific risks, providing flexibility and targeted coverage.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Treaty Solutions',
        description: 'Comprehensive reinsurance agreements that cover a portfolio of risks, ensuring stability and predictability.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Special Lines Solutions',
        description: 'Customized reinsurance for niche markets and unique risks, offering specialized protection.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Reinsurance Data Analytics Tool',
        description: 'Leverage advanced analytics to optimize your reinsurance strategies and make informed decisions.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Acentria Reinsurance Solution',
        description: 'Comprehensive reinsurance solutions tailored to meet the unique needs of your business.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Catastrophic Modelling',
        description: 'Utilize sophisticated models to assess and mitigate the impact of catastrophic events on your portfolio.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Return On Risk Adjusted Capital',
        description: 'Maximize your returns by effectively managing risk-adjusted capital in your reinsurance operations.',
        url: '/contact-acentria-group',
    },
])

const exploreHelp = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Stabilizing the Company\'s  <br/> <span class="text-brand-primary">Overall Operating Results.</span>',
    subheading: '',
    image: 'https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/insurance-claims',
    content: 'To navigate volatility ranging from climate to economic factors, insurers need to delve deep into understanding and mitigating the risks by enhancing their view of risk. Data, tools and analytics must complement broking and advisory capabilities to help protect and grow insurers’ businesses. Insurers often seek to reduce the wide swings in profit and loss margins inherent to the insurance business. These fluctuations result, in part, from the unique nature of insurance, which involves pricing a product whose actual cost will not be known until sometime in the future. Through reinsurance, insurers can reduce these fluctuations in loss experience, and stabilize the company\'s overall operating results.',
})

const exploreHelp2 = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Protecting <br/><span class="text-brand-primary">Against Catastrophes</span>',
    subheading: '',
    image: 'https://images.pexels.com/photos/11836813/pexels-photo-11836813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/insurance-claims',
    content: 'In an increasingly risky world, insurers and reinsurers need more sophisticated tools to quantify and manage the risks facing their businesses. Acentria catastrophe model analytics helps, Impact Forecasting to enable firms to analyze the financial impacts of catastrophic events to develop effective reinsurance, underwriting and exposure managemen to stabilize an insurer\'s loss experience and reduce the disruptive effects of catastrophes have on an insurer\'s loss experience can be reduced dramatically'
})

const exploreHelp3 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Limiting Liability &  <br/><span class="text-brand-primary">Increasing Capacities</span>',
    subheading: '',
    image: 'https://images.pexels.com/photos/50634/pexels-photo-50634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/insurance-claims',
    content: 'In a predictable world where re/insurers look to bring new solutions to customers, capital can provide a bridge between innovation and investment. However, finding the right balance to optimize capital requires strategic decisions to supporting growth and enhance a stable balance sheet. We assist Insurers with mechanism through which they limit their loss exposure to levels commensurate with their net assets, we structure reinsurance solutions to enables insurance to stabilize loss experience on individual risks, as well as on accumulated losses under many policies occurring during a specified period.',
})

</script>

<template>
    <main>
        <div class="bg-white">
            <Carousel :slides="slides" />
            <!-- <ServiceHero2 :content="content" /> -->

            <div class="bg-white">
                <div class="container">
                    <h1 class="my-5 heading-class text-left">
                        Overview <br> <span class="text-brand-primary"> Reinsurance </span>
                    </h1>
                    <p
                        class="text-left font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                        Acentria re is one of the leading independent specialists (re)insurance broking firms operating
                        in Kenya, and international markets.
                        Acentria Re’s dedicated risk teams provide a combination of specialized reinsurance brokerage
                        services and analytical expertise for our clients worldwide. Our unique ability to navigate an
                        ever-changing market with overwhelming force while steadily executing the most valuable
                        solutions sets us apart and demonstrates our overarching commitment to helping our clients
                        succeed.
                    </p>
                </div>
            </div>

            <ContentPic :content="exploreHelp" class="my-5" />

            <div class="bg-white">
                <div class="container">
                    <div class="grid grid-cols-3 gap-5 py-5">
                        <div class="flex flex-col items-center">
                            <div class="bg-red-500 rounded-full p-4 mb-4">
                                <i class="fas fa-chart-line text-white h-8 w-8 text-center text-xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Elevate Your Risk Assessment</h3>
                            <p class="text-black text-center">Are you tired of uncertainty when assessing risks?
                                With our experts by your side, you'll gain a new level of precision in risk
                                assessment
                            </p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="bg-red-500 rounded-full p-4 mb-4">
                                <i class="fas fa-balance-scale text-white h-8 w-8 text-center text-xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Unlock Precision in Risk Pricing</h3>
                            <p class="text-black text-center">With our specialized knowledge, you can ensure that
                                your risk pricing aligns perfectly with the true cost</p>
                        </div>

                        <div class="flex flex-col items-center">
                            <div class="bg-red-500 rounded-full p-4 mb-4">
                                <i class="fas fa-lightbulb text-white h-8 w-8 text-center text-xl"></i>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">Enhance Your Decision-Making</h3>
                            <p class="text-black text-center">The art of making sound decisions starts with
                                reliable data and expert insights. Our Actuarial Support provides just that.</p>
                        </div>
                    </div>

                </div>
            </div>

            <ContentPic :content="exploreHelp2" class="my-5" />
            <ContentPic :content="exploreHelp3" class="my-5" />

            <div class="py-5 text-center bg-white">
                <h2 class="font-sans tracking-normal text-2xl text-black font-semibold leading-tight lg:leading-tight">
                    Delivering Reinsurance <span class="text-brand-primary">Solutions & Services</span>
                </h2>
            </div>

            <div class="text-white bg-white">
                <section class="relative py-2">
                    <div class="container px-4">
                        <ServiceTabs :menus="menus" :data="data" />
                    </div>
                </section>
            </div>

            <section id="" class="relative py-8 bg-black text-center">
                <div class="container px-4">
                    <h2
                        class="font-sans tracking-normal text-2xl text-white font-semibold leading-tight lg:leading-tight">
                        <span class="text-brand-primary">Your Reinsurance, Your Way.</span> <br>
                        Let Acentria Tailor Your Coverage To Your Needs
                    </h2>
                </div>
            </section>

            <Why />

            <WhyRe :whys="whys" />

            <!-- <div>
                <div class="container flex items-center justify-center">
                    <div class="relative p-4">
                        <NuxtImg alt="Image of Mobilize an integrated risk management strategy" loading="lazy"
                            width="1600" height="1150" decoding="async" data-nimg="1"
                            style="color:transparent;object-fit:contain" class="rounded-xl" src="/img/map.jpg" />
                    </div>
                </div>
            </div> -->

            <ContactForm />

            <InTouch />
        </div>
    </main>
</template>

<style scoped></style>