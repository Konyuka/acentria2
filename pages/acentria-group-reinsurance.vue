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
            icon: 'trending_up',
            link: '/reinsurance/reinsurance-optimization'
        },
        {
            name: 'Treaty Administration',
            content: 'Efficiently manage your reinsurance treaties with our comprehensive administration services.',
            icon: 'gavel',
            link: '/reinsurance/treaty-administration'
        },
        {
            name: 'Claims Management',
            content: 'Streamline your claims process with our expert management services, ensuring quick and fair settlements.',
            icon: 'assignment_turned_in',
            link: '/reinsurance/claims-management'
        },
        {
            name: 'Value Addition',
            content: 'Enhance your reinsurance portfolio with our value-added services, tailored to meet your unique needs.',
            icon: 'add_circle_outline',
            link: '/reinsurance/value-addition'
        },
    ],
    solutions: [
        {
            name: 'Facultative Solutions',
            content: 'Tailored reinsurance solutions for specific risks, providing flexibility and targeted coverage.',
            icon: 'build',
            link: '/reinsurance/facultative-solution'
        },
        {
            name: 'Treaty Solutions',
            content: 'Comprehensive reinsurance agreements that cover a portfolio of risks, ensuring stability and predictability.',
            icon: 'policy',
            link: '/reinsurance/treaty-solutions'
        },
        {
            name: 'Special Lines Solutions',
            content: 'Customized reinsurance for niche markets and unique risks, offering specialized protection.',
            icon: 'category',
            link: '/reinsurance/special-lines'
        },
    ],
    data: [
        {
            name: 'Reinsurance Data Analytics Tool',
            content: 'Leverage advanced analytics to optimize your reinsurance strategies and make informed decisions.',
            icon: 'analytics',
            link: '/reinsurance/reinsurance-data-analytics-tool'
        },
        {
            name: 'Acentria Reinsurance Solution',
            content: 'Comprehensive reinsurance solutions tailored to meet the unique needs of your business.',
            icon: 'business_center',
            link: '/reinsurance/acentre-reinsurance-solution'
        },
        {
            name: 'Catastrophic Modelling',
            content: 'Utilize sophisticated models to assess and mitigate the impact of catastrophic events on your portfolio.',
            icon: 'bar_chart',
            link: '/reinsurance/catastrophic-modelling'
        },
        {
            name: 'Return On Risk Adjusted Capital',
            content: 'Maximize your returns by effectively managing risk-adjusted capital in your reinsurance operations.',
            icon: 'trending_up',
            link: '/reinsurance/return-on-risk-adjusted-capital'
        },
    ]
})

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

</script>

<template>
    <main>
        <div>
            <div>

                <ServiceHero2 :content="content" />

                <!-- <BannerVid :bannerTitle="bannerTitle" /> -->

                <!-- <Hero2 :data="heroContent" /> -->

                <div class="py-5 text-center  ">
                    <h2
                        class="font-sans tracking-normal text-3xl text-black font-semibold leading-tight lg:leading-tight">
                        Delivering Reinsurance <span class="text-brand-primary">Solutions & Services</span>
                    </h2>
                </div>

                <div class="py-5 text-white ">
                    <section class="relative py-2">
                        <div class="container px-4">
                            <ServiceTabs :menus="menus" :data="data" />
                        </div>
                    </section>
                </div>



                <section id="" class="relative py-8 bg-black/60 text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl text-white font-semibold leading-tight lg:leading-tight">
                            <span class="text-brand-primary">Your Reinsurance, Your Way.</span> <br>
                            Let Acentria Tailor Your Coverage To Your Needs
                        </h2>
                    </div>
                </section>

                <div class="bg-white">
                    <div class="py-6 text-white xl:py-5 max-w-6xl mx-auto" style="background-color: #f6f8fc">

                        <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

                            <div class="relative p-4 lg:basis-1/2">
                                <img alt="Image of Streamline evaluations and questionnaires " loading="lazy"
                                    decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain" class="rounded-xl w-full h-[300px]"
                                    src="https://images.pexels.com/photos/7735630/pexels-photo-7735630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                            </div>
                            <div class="flex flex-col justify-center items-center lg:basis-1/2">
                                <div class="text-light-content pb-5 md:pb-6">
                                    <p
                                        class="text-xs leading-normal font-sans text-light-content !text-inherit mb-4 flex items-center align-middle justify-center content-center">
                                        We specialize in addressing underwriting and capital management challenges,
                                        showcasing a deep understanding of the complexities involved in managing risk
                                        and
                                        financial resources within the insurance industry.
                                        <br><br>
                                        Our comprehensive range of
                                        services supports insurance companies, encompassing risk analysis, designing and
                                        placing reinsurance programs, providing claims support, developing alternative
                                        risk
                                        strategies, and offering various risk management consulting services.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <Why />


                <WhyRe :whys="whys" />

                <div>
                    <div class="container flex items-center justify-center">
                        <div class="relative p-4">
                            <img alt="Image of Mobilize an integrated risk management strategy" loading="lazy"
                                width="1600" height="350" decoding="async" data-nimg="1"
                                style="color:transparent;object-fit:contain" class="rounded-xl" src="/img/map.jpg">
                        </div>
                    </div>
                </div>


                <ContactForm />

                <InTouch />

            </div>
        </div>
    </main>
</template>

<style scoped></style>