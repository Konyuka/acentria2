<script setup>

const bannerTitle = ref('Acentria Actuarial & Financial Services')

const content = ref({
    vid: '/img/hd3.mp4',
    pageTitle: 'Acentria Group Actuarial & Financial Services',
    title: 'Expert Actuarial & Financial <br> <span class="text-brand-primary">Services for Your Business</span>',
})


const data = ref({
    services: [
        {
            name: 'Financial Services',
            content: 'Comprehensive financial services to support your actuarial needs, ensuring stability and growth.',
            icon: 'fas fa-university',
            link: '/actuarial/financial-services'
        },
        {
            name: 'Insurance Consulting',
            content: 'Expert insurance consulting to help you navigate complex actuarial challenges and optimize your strategies.',
            icon: 'fas fa-lightbulb',
            link: '/actuarial/insurance-consulting'
        },
        {
            name: 'Reinsurance Consulting',
            content: 'Specialized reinsurance consulting to streamline your processes and enhance risk management.',
            icon: 'fas fa-shield-alt',
            link: '/actuarial/reinsurance-consulting'
        },
    ],
    other: [
        {
            name: 'IFRS 17 Implementation',
            content: 'Expert guidance on implementing IFRS 17, ensuring compliance and accurate financial reporting.',
            icon: 'fas fa-file-invoice-dollar',
            link: '/actuarial/ifrs-17-implementation'
        },
        {
            name: 'Innovation and Digitization',
            content: 'Leverage cutting-edge technology to enhance actuarial processes and drive innovation.',
            icon: 'fas fa-robot',
            link: '/actuarial/innovation-and-digitization'
        },
        {
            name: 'Retirement and Employee Benefits',
            content: 'Comprehensive actuarial services for retirement plans and employee benefits, ensuring financial security.',
            icon: 'fas fa-users',
            link: '/actuarial/retirement-and-employee-benefits'
        },
    ],
    products: [
        {
            name: 'AcentRe',
            content: 'AcentRe is an online reinsurance platform that specializes in data cleaning, pricing, and optimization to enhance your reinsurance strategies.',
            icon: 'fas fa-cloud',
            link: '/reinsurance/acentre-reinsurance-solution'
        },
        {
            name: 'Data Analysis Tool',
            content: 'Utilize our Data Analysis Tool for comprehensive insights and tailored reinsurance solutions to meet your unique business needs.',
            icon: 'fas fa-chart-line',
            link: '/reinsurance/reinsurance-data-analytics-tool'
        },
    ]
});

const menus = ref([
    {
        name: 'Actuarial Consulting',
        tag: 'services',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Actuarial Services',
        tag: 'other',
        icon: 'fas fa-cogs',
    },
    {
        name: 'Actuarial Products',
        tag: 'products',
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
                                    Actuarial & Financial Services
                                </h1>`,
})

const slides = ref([
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Actuarial Audits',
        description: 'Empowering your decisions with data precision and strategic insights',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Risk Assessment',
        description: 'Utilizing advanced models to evaluate and mitigate potential risks',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Financial Forecasting',
        description: 'Providing accurate financial projections to guide strategic planning',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Data Analytics',
        description: 'Leveraging big data to uncover trends and inform decision-making',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Regulatory Compliance',
        description: 'Ensuring adherence to industry regulations and standards',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Pension Consulting',
        description: 'Offering expert advice on pension plan design and management',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Investment Analysis',
        description: 'Evaluating investment opportunities to maximize returns',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Claims Reserving',
        description: 'Accurately estimating reserves for future claims liabilities',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Product Development',
        description: 'Designing innovative insurance products to meet market needs',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1498354136128-58f790194fa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Actuarial Audits',
        description: 'Conducting thorough audits to ensure accuracy and reliability',
        url: '/contact-acentria-group',
    },
])


const systems = ref([
    {
        name: 'Acent<span class="text-brand-primary">Re </span>',
        link: '/reinsurance/acentre-reinsurance-solution',
        image: 'https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'AcentRe is an innovative online software solution that transforms how insurers understand and manage risk, optimize returns, and plan reinsurance strategies.',
    },
    {
        name: 'Data Analytics<span class="text-brand-primary"> Tool</span>',
        link: '/reinsurance/reinsurance-data-analytics-tool',
        image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Our data analytics platform offers features to help the organizations leverage data-driven insights for improved risk management & decision-making',
    },
    {
        name: 'Acent-<span class="text-brand-primary">IFRS17</span>',
        link: '/reinsurance/reinsurance-data-analytics-tool',
        image: 'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content: 'Our IFRS 17 solution ensures compliance with standards, providing comprehensive tools for financial reporting and risk management',
    },
])



const exploreHelp2 = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Data Driven & <span class="text-brand-primary"> Analytical Capabilities</span>',
    subheading: '',
    image: '/img/glasses.jpg',
    link: '/insurance-claims',
    content: 'Accurate risk quantification is an essential part of an effective risk management program. To design a sustainable and successful risk management strategy, an organization must identify, measure, analyze and understand the existing and emerging risks they face.',
})

const exploreHelp = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'How Acentria Actuaries <span class="text-brand-primary">Can Help</span>',
    subheading: '',
    image: '/img/handshake.jpg',
    link: '/insurance-claims',
    content: 'At Acentria, our actuarial and analytic specialists help organizations to gain insightful knowledge. We leverage advanced analytics, modeling and quantification expertise for clients and service our clients Our ability to use data, advanced analytics, and technology to extract valuable insights, help us to guide business to make informed decisions',
})




</script>

<template>
    <main>
        <div class="bg-white">
            <div>

                <Carousel :slides="slides" />

                <!-- <ServiceHero2 :content="content" /> -->

                <!-- <BannerVid :bannerTitle="bannerTitle" /> -->

                <!-- <Hero2 :data="heroContent" /> -->

                <div class="bg-white">
                    <div class="container">
                        <h1 class="my-5 heading-class text-left">
                            Overview <br> <span class="text-brand-primary"> Actuarial & Financial Services </span>
                        </h1>
                        <p
                            class="text-left font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                            Acentria Actuarial & financial services is one of the leading Actuarial independent
                            specialists’ firms operating in Kenya, and international markets.
                            Our Actuarial team lead by a signing Actuary having expertise in using financial, risk, and
                            capital modelling to help clients manage the complexities that are inherent in business. We
                            use a blend of technical and commercial expertise to provide insight, assurance and enable
                            effective insightful decision-making by business leaders.
                        </p>
                    </div>

                </div>

                <div class="bg-white">
                    <div class="container">
                        <div class="grid grid-cols-3 gap-5 py-10">
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

                <ContentPic :content="exploreHelp" class="my-5" />

                <div class="py-5 text-center bg-white">
                    <h2
                        class="font-sans tracking-normal text-3xl text-black font-semibold leading-tight lg:leading-tight">
                        Best of Actuarial Consulting, <span class="text-brand-primary">Products & Services</span>
                    </h2>
                </div>

                <div class="py-5 text-white bg-white">
                    <section class="relative py-2">
                        <div class="container px-4">
                            <ServiceTabs :menus="menus" :data="data" />
                        </div>
                    </section>
                </div>

                <div class="bg-white pb-6">
                    <div class="container">
                        <h1 class="my-3 heading-class text-left">
                            Elite Tech Tools <br> <span class="text-brand-primary">for Optimal Solutions</span>
                        </h1>
                    </div>

                    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4">

                        <article v-for="service in systems"
                            class="button-animation shadow-2xl border-l-2 px-4 py-2 border-brand-primary group flex flex-col items-start justify-between">
                            <NuxtLink class="w-full" :to="service.link">
                                <div class="max-w-full">

                                    <div class="font-sans group relative">
                                        <div class="flex">
                                            <h3 v-html="service.name"
                                                class="text-xl font-semibold mt-3 line-clamp-2 subheading-class leading-normal text-black transition-colors group-hover:text-brand-primary">
                                            </h3>
                                            <i class="fas fa-trademark"></i>
                                        </div>
                                        <p class="mt-2 text-xs leading-normal text-black">
                                            {{ service.content }}
                                        </p>
                                    </div>

                                    <span class="text-black">Learn More <i
                                            class="mt-2 fas fa-arrow-right ml-3"></i></span>
                                </div>
                            </NuxtLink>
                        </article>

                    </div>
                </div>

                <section id="" class="relative py-8 bg-black text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl text-white font-semibold leading-tight lg:leading-tight">
                            <span class="text-brand-primary">Your Actuarial Services, Your Way.</span> <br>
                            Let Acentria Tailor Your Solutions To Your Needs
                        </h2>
                    </div>
                </section>

                <div class="bg-white">
                    <div class="py-4 text-white max-w-6xl mx-auto">

                        <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-2  lg:gap-16">

                            <div class="relative py-4 lg:basis-1/2">
                                <NuxtImg alt="Image of Streamline evaluations and questionnaires " loading="lazy"
                                    width="500" height="350" decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain" class="rounded-xl"
                                    src="https://acentriagroup.com/wp-content/uploads/2023/10/8.jpeg" />
                            </div>
                            <div class="flex flex-col justify-center lg:basis-1/2">
                                <div class="text-light-content pb-5 md:pb-6">
                                    <p class="text-xs leading-normal font-sans text-light-content !text-inherit mb-4">
                                        Acentria Actuarial & Financial Services has been a trusted provider of Actuarial
                                        Services to Life, Non-Life Companies, and Pension Schemes in East & Central
                                        Africa
                                        for many years. Our dedicated expertise extends to advising various Health
                                        Insurance
                                        Schemes and actively participating in the development and design of insurance
                                        products. Rooted in our deep understanding of regional markets and their
                                        ever-changing dynamics, we offer a comprehensive range of services tailored to
                                        meet
                                        your needs.

                                        <br><br>

                                        With Acentria, you gain access to a partner who not only comprehends the
                                        intricacies
                                        of the insurance landscape but also helps you navigate it with precision and
                                        insight. Allow us to empower your financial strategies and shape your success.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <ServicesCards class="bg-white" />

                <Why2 class="bg-white" />

                <WhyRe :whys="whys" class="bg-white" />

                <ContactForm />

                <InTouch />

            </div>
        </div>
    </main>
</template>

<style scoped></style>