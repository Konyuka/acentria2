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
                                    class="font-sans tracking-normal text-4xl lg:text-5xl  text-brand-primary font-semibold leading-normal lg:leading-normal">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-normal lg:leading-normal">Acentria</span>
                                    Reinsurance Brokers
                                </h1>`,
})


const bannerTitle = ref('Acentria Reinsurance Brokers')

const slides = ref([
    {
        imageUrl: 'https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Reinsurance Optimization',
        description: 'Optimize your reinsurance strategy with Acentria. We help you maximize efficiency and minimize risk.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/189476/pexels-photo-189476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Treaty Administration',
        description: 'Efficiently manage your reinsurance treaties with our comprehensive administration services.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/7821684/pexels-photo-7821684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Claims Management',
        description: 'Streamline your claims process with our expert management services, ensuring quick and fair settlements.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Value Addition',
        description: 'Enhance your reinsurance portfolio with our value-added services, tailored to meet your unique needs.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Facultative Solutions',
        description: 'Tailored reinsurance solutions for specific risks, providing flexibility and targeted coverage.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/9068372/pexels-photo-9068372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Treaty Solutions',
        description: 'Comprehensive reinsurance agreements that cover a portfolio of risks, ensuring stability and predictability.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Special Lines Solutions',
        description: 'Customized reinsurance for niche markets and unique risks, offering specialized protection.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Reinsurance Data Analytics Tool',
        description: 'Leverage advanced analytics to optimize your reinsurance strategies and make informed decisions.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/',
        title: 'Acentria Reinsurance Solution',
        description: 'Comprehensive reinsurance solutions tailored to meet the unique needs of your business.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/11836813/pexels-photo-11836813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Catastrophic Modelling',
        description: 'Utilize sophisticated models to assess and mitigate the impact of catastrophic events on your portfolio.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/5716052/pexels-photo-5716052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
                        class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
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
                <h2
                    class="font-sans tracking-normal text-2xl text-black font-semibold leading-normal lg:leading-normal">
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
                        class="font-sans tracking-normal text-2xl text-white font-semibold leading-normal lg:leading-normal">
                        <span class="text-brand-primary">Your Reinsurance, Your Way.</span> <br>
                        Let Acentria Tailor Your Coverage To Your Needs
                    </h2>
                </div>
            </section>

            <div class="container pt-5">
                <div class="">
                    <h2 class="text-2xl font-semibold text- mb-4">
                        The <span class="text-brand-primary">Industries</span>
                    </h2>
                </div>

                <div class=" mx-auto text-black">
                    <p>
                        Every industry faces similar global challenges and opportunities, yet each has its own
                        unique
                        dynamics that call for specialized support.
                        At Acentria Group, We bring an unparalleled blend of industry-specific expertise, tap into
                        extensive
                        industry-specific data, analytics, technology and insights to craft solutions tailored
                        precisely to your needs.
                    </p>

                    <div class="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                            class="button-animation group">
                            <div
                                class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                                <NuxtImg :src="product.img" :alt="product.img"
                                    class="h-full w-full object-cover object-center group-hover:opacity-75" />
                            </div>
                            <div class=" mt-4 flex flex-col items-center justify-between subheading-class text-black">
                                <h3 class="text-xs">{{ product.name }}</h3>
                                <p class="text-xs italic mt-3">
                                    Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                                </p>
                            </div>
                            <!-- <p class="mt-1 text-xs italic text-gray-500">{{ product.description }}</p> -->
                        </a>
                    </div>
                </div>
            </div>

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