<script setup>

const serviceHeading = ref('Best of Actuarial Consulting, <span class="text-brand-primary">Products & Services</span>')

const menus = ref([
    {
        name: 'Actuarial Services',
        tag: 'services',
        icon: 'fas fa-handshake',
    },
    {
        name: 'Actuarial Products',
        tag: 'products',
        icon: 'fas fa-chart-line',
    },
])

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
    ]
});

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

const exploreHelp = ref({
    orientation: 'image-left',
    heading: 'How Acentria Actuaries <span class="text-brand-primary">Can Help</span>',
    subheading: '',
    image: '/img/handshake.jpg',
    link: '/',
    content: 'At Acentria, our actuarial and analytic specialists help organizations to gain insightful knowledge. We leverage advanced analytics, modeling and quantification expertise for clients and service our clients Our ability to use data, advanced analytics, and technology to extract valuable insights, help us to guide business to make informed decisions',
})

const bannerMainContent = ref({
    title: 'Acentria Group Actuarial<br> <span class="text-brand-primary"> & Financial Services</span>',
    subtitle: ' Expert Actuarial & Financial Services for Your Business',
    image: '/img/ACTUARIAL- MAIN PAGE.jpg',
})

const introContent = ref({
    orientation: 'image-left',
    heading: 'Welcome to <span class="text-brand-primary">  Acentria</span>',
    subheading: 'Your Trusted <span class="text-brand-primary"> Actuarial & Financial Services Partner</span>',
    image: '/img/lady-shake.jpg',
    link: '/',
    content: 'Acentria Actuarial & financial services is one of the leading Actuarial independent specialists’ firms operating in Kenya, and international markets. Our Actuarial team is led by a Fellow Actuary and has expertise in financial risk and capital modelling, helping clients to manage business complexities. We use a blend of technical and commercial expertise to provide insight, assurance and enable effective insightful decision-making by business leaders'
})

const blackBannerContent = ref(
    '<span class="text-brand-primary">Your Actuarial Services, Your Way.</span> <br> Let Acentria Tailor Your Solutions To Your Needs'
)

const transformingRiskIntoOpportunities = ref({
    orientation: 'image-right',
    heading: 'Transforming risks <span class="text-brand-primary"> into Opportunities</span>',
    subheading: 'Innovative <span class="text-brand-primary">Risk Management & Insurance Solutions</span>',
    image: 'https://img.freepik.com/free-photo/african-business-male-people-shaking-hands_1303-18516.jpg?t=st=1738681016~exp=1738684616~hmac=2de40fba10b5b489b9c115ab6888f34f7a61fdab5965c9461c2b3e9646358529&w=900',
    link: '/actuarial/insurance-consulting',
    content: 'At Acentria we pride ourselves in ensuring our clients understand their risk exposure and are well prepared to mitigate it. Through our expertise and experience, we work with our insurance clients to design and price insurance products. We also support our clients in liability assessment and capital modelling. Through our strategy teams we support our clients to embed modern and innovative solutions in their long-term and short-term strategies.'
})

const enablingAndEmpoweringPeople = ref({
    orientation: 'image-left',
    heading: 'Enabling and <span class="text-brand-primary">Empowering Your People</span>',
    subheading: 'World-Class <span class="text-brand-primary">Employee & Retirement Benefits</span>',
    image: 'https://img.freepik.com/free-photo/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory_482257-36889.jpg?t=st=1739167712~exp=1739171312~hmac=5a8fad3f12107ad4986d8c73d2035e103e4ee0d305c76dbcbe3e3804f3fc1f64&w=996',
    link: '/actuarial/retirement-and-employee-benefits',
    content: 'We understand that people are the most important resource of any organization. Therefore, we are committed to providing world-class employee and retirement benefits, ranging from pension fund valuations to employee benefits structuring and optimization.'
})

const uncertaintyToResilience = ref({
    orientation: 'image-right',
    heading: 'From <span class="text-brand-primary">Uncertainty to Resilience</span>',
    subheading: 'Expert <span class="text-brand-primary">Risk Analytics & Optimization</span>',
    image: 'https://img.freepik.com/free-photo/tree-bubble_1048-4660.jpg?t=st=1739167817~exp=1739171417~hmac=c62361896755560a97bac182ada62ce9e798dcc0edc86c8a835798c55dc266cd&w=1060',
    link: '/actuarial/reinsurance-consulting',
    content: 'We have built over 10 years’ worth of experience in risk analytics, optimization and transfer. This ensures we comfortably support our clients in risk assessment and mitigation through reinsurance optimization and catastrophic risk assessment. Our proprietary AcentRe tool utilizes AI powered engines to deliver excellent results, on reinsurance pricing and analytics to the users.'
})

const resilienceInFinancialServices = ref({
    orientation: 'image-left',
    heading: 'Resilience in <span class="text-brand-primary">Financial Services</span>',
    subheading: 'Driving Insights for <span class="text-brand-primary">Banks, SACCOs, and Insurers</span>',
    image: 'https://img.freepik.com/free-photo/workplace-team-cooperation-businesswoman-laptop-office_1418-44.jpg?t=st=1738681078~exp=1738684678~hmac=0ef2e1f2778b3c367e4d248b060352e609d20c15e5c255d09af12411c4ca585d&w=900',
    link: '/actuarial/financial-services',
    content: 'To support our financial services clients, we provide excellent analysis to drive insights for banks, SACCOs and insurance companies. Our services range from IFRS9 implementation, asset liability matching and financial strategy setting. Our experts have diverse and rich experience and are eager to support the clients we have.'
})

const dataDrivenTransformation = ref({
    orientation: 'image-right',
    heading: 'Data Driven <span class="text-brand-primary">Transformation</span>',
    subheading: 'Innovative <span class="text-brand-primary">Data Management & AI Solutions</span>',
    image: '/img/precise.jpg',
    link: '/',
    content: 'Our approach includes a proper review of the data strategy of the company, to understand the gaps and inefficiencies available. Our data processes include setting up data management strategies and advisory on process automation and artificial intelligence. Our team of tech experts is always ready to deliver excellent solutions.'
})


</script>

<template>
    <main>
        <div class="bg-white">
            <Carousel2 :content="bannerMainContent" />
            <ContentPic :content="introContent" />

            <ContentPic :content="transformingRiskIntoOpportunities" />
            <ContentPic :content="enablingAndEmpoweringPeople" />
            <ContentPic :content="uncertaintyToResilience" />
            <ContentPic :content="resilienceInFinancialServices" />
            <ContentPic :content="dataDrivenTransformation" />

            <ContentPic :content="exploreHelp" />


            <ServiceTabs :serviceHeading="serviceHeading" :menus="menus" :data="data" />

            <div class="bg-white pb-6">
                <div class="container">
                    <h1 class="my-3 section-heading text-left">
                        Elite Actuarial Tech Tools <br> <span class="text-brand-primary">for Optimal
                            Solutions</span>
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
                                            class="text-lg font-semibold mt-3 line-clamp-2 subsection-heading leading-normal text-black transition-colors group-hover:text-brand-primary">
                                        </h3>
                                        <i class="fas fa-trademark"></i>
                                    </div>
                                    <p class="mt-2 text-xs leading-normal text-black">
                                        {{ service.content }}
                                    </p>
                                </div>

                                <span class="text-black">Learn More <i class="mt-2 fas fa-arrow-right ml-3"></i></span>
                            </div>
                        </NuxtLink>
                    </article>

                </div>
            </div>

            <BlackBanner :content="blackBannerContent" />

            <ReinsuranceInsights />

            <ContactForm />

            <InTouch />
        </div>
    </main>
</template>

<style scoped></style>