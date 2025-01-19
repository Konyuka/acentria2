<script setup>
const serviceHeading = ref('Pick a cover and, <span class="text-brand-primary"> we\'ll take care of the risks</span > ')

const menus = ref([
    {
        name: 'Personal Insurance Cover',
        tag: 'personal',
        icon: 'fas fa-user-shield',
    },
    {
        name: 'Business Insurance Cover',
        tag: 'business',
        icon: 'fas fa-briefcase',
    },
])

const data = ref({
    personal: [
        {
            name: 'My Life',
            icon: 'fas fa-heart',
            content: 'Secure your family\'s future with flexible life insurance.',
            link: '/insurance/life-insurance',
        },
        {
            name: 'My Health',
            icon: 'fas fa-stethoscope',
            content: 'Comprehensive health coverage for peace of mind.',
            link: '/insurance/health-insurance',
        },
        {
            name: 'My Car',
            icon: 'fas fa-car',
            content: 'Drive confidently with our comprehensive car insurance plans.',
            link: '/insurance/motor-insurance',
        },
        {
            name: 'My Home',
            icon: 'fas fa-home',
            content: 'Protect your home and belongings with comprehensive coverage.',
            link: '/insurance/home-insurance',
        },
        {
            name: 'My Travel',
            icon: 'fas fa-plane',
            content: 'Explore the world worry-free with our travel insurance.',
            link: '/insurance/travel-insurance',
        },
        {
            name: 'International Medical',
            icon: 'fas fa-globe',
            content: 'We got your health covered wherever you are in the world.',
            link: '/insurance/international-medical',
        },
        {
            name: 'Golfer’s Insurance',
            icon: 'fas fa-golf-ball',
            content: 'Don’t let the unexpected ruin your game protect your swing with golfer’s insurance.',
            link: '/insurance/golfers-insurance',
        },
    ],
    business: [
        {
            name: 'Staff Health Covers',
            icon: 'fas fa-user-md',
            content: 'Ensure employee well-being with comprehensive health coverage.',
            link: '/insurance/staff-health-cover',
        },
        {
            name: 'Staff Life Covers',
            icon: 'fas fa-heartbeat',
            content: 'Provide financial security for employees’ families with life insurance.',
            link: '/insurance/staff-health-cover',
        },
        {
            name: 'Asset & Stock Covers',
            icon: 'fas fa-warehouse',
            content: 'Protect your business assets and stock against damage or loss.',
            link: '/insurance/asset-stock-covers',
        },
        {
            name: 'Financial Losses Covers',
            icon: 'fas fa-money-bill-wave',
            content: 'Mitigate financial risks and protect against monetary losses.',
            link: '/insurance/financial-losses-money-covers',
        },
        {
            name: 'Biashara Cover',
            icon: 'fas fa-briefcase',
            content: 'Comprehensive business insurance to protect your enterprise from risks.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Marine Insurance Covers',
            icon: 'fas fa-ship',
            content: 'Comprehensive coverage for your marine vessels and cargo, protecting against risks such as damage, theft, and loss during transit.',
            link: '/insurance/marine-covers',
        },
    ]
});

const helps = ref([
    {
        heading: 'Do it yourself',
        subheading: 'Compare quotes, choose your policy, and get same-day coverage.',
        cta: 'Compare Quotes Online',
        img: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        heading: 'Live agent assistance',
        subheading: 'Review your quotes online, then get tailored advice from our agents.',
        cta: 'See my Quotes',
        img: 'https://images.pexels.com/photos/5453822/pexels-photo-5453822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        heading: 'Full Service',
        subheading: 'Send us your current policy, and our agents will find a better fit for you.',
        cta: 'Connect with an Expert',
        img: 'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
])

const exploreRisks = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Explore <span class="text-brand-primary">Risk Areas</span>',
    subheading: '',
    image: '/img/risky.jpeg',
    link: '/insurance-products',
    content: 'At Acentria we help clients to identify, mitigate and transfer an evolving range of risks and deliver solutions that safegueard people and businesses to recover from financial losses due to accidents, illnesses, natural disasters, and other unforeseen events giving you a financial security.',
})

const introContent = ref({
    orientation: 'image-left',
    heading: 'Welcome to <span class="text-brand-primary">  Acentria</span>',
    subheading: 'A Reliable Partner <span class="text-brand-primary">  You Can Trust</span>',
    image: '/img/lady-shake.jpg',
    link: '/insurance-claims',
    content: 'Acentria is a world class Insurance Broker that has skills and expertise to combine specialized insurance brokerage services with deep analytics to provide tailored smart solutions that meet the unique needs of our clients worldwide. We pride ourselves as top-notch insurance experts with a reputation to handle complex risks and claims.',
})

const bannerMainContent = ref({
    title: 'Acentria Group Insurance <br> <span class="text-brand-primary"> & Risk Management</span>',
    subtitle: 'Protecting Your World with Precision',
    image: '/img/rope-gray.jpeg',
})

const products = ref([
   
    {
        name: 'Financial <br/> <span class="text-brand-primary">Wellness</span>',
        img: '/img/risk-areas.jpg',
        link:'/financial-wellness',
        description: 'Comprehensive financial planning and advisory services to help you achieve your long-term financial goals and secure your future.'
    },
    {
        name: 'Cyber Risk <br/> <span class="text-brand-primary">Management</span>',
        img: '/img/tech2.jpg',
        link: '/cyber-risk-management',
        description: 'Advanced cybersecurity solutions and insurance coverage to protect your digital assets and maintain business continuity.'
    },
    {
        name: 'Claims  <br/> <span class="text-brand-primary">Management</span>',
        img: '/img/claims.jpg',
        link: '/claims-management',
        description: 'Efficient and streamlined claims processing with dedicated support throughout the entire claims lifecycle.'
    },
    {
        name: 'Risk  <br/> <span class="text-brand-primary">Management</span>',
        img: '/img/risky2.jpg',
        link: '/risk-management',
        description: 'Strategic risk assessment and mitigation strategies to protect your assets and minimize potential exposures.'
    },
    {
        name: 'Insurance Policy <br/> <span class="text-brand-primary">Management</span>',
        img: '/img/policy.png',
        link: '/insurance-policy-management',
        description: 'Comprehensive policy administration and review services to ensure optimal coverage and cost-effectiveness.'
    }
]);

const blackBannerContent = ref(
    '<span class="text-brand-primary">Your Insurance, Your Way.</span> <br>Let Acentria Tailor Your Coverage To Your Needs'
)

onMounted(() => {
    const targetSection = localStorage.getItem('targetSection');
    if (targetSection == 'Full Service') {
        setMenu('Governance')
    } 
})
</script>

<template>
    <main>
        <div class="bg-white ">
            <Carousel2 :content="bannerMainContent" />
            <ContentPic :content="introContent" />
            <div class="container py-5">
                <h1 class="section-heading pb-3">
                    Expert <span class="text-brand-primary">Insurance Services</span>
                </h1>
                <p class="!font-sans content pb-3">
                    Our expert insurance services combine deep industry knowledge with cutting-edge solutions to
                    protect what matters most. With decades of experience, our team of specialists understands
                    the complex risks facing businesses and individuals today.
                    We pride ourselves on delivering customized insurance solutions that go beyond standard
                    coverage. Our approach integrates comprehensive risk assessment, strategic planning, and
                    proactive risk management to ensure you have the protection you need when you need it most.
                </p>
                <div class=" grid grid-cols-5 gap-5">
                    <NuxtLink :to="product.link" v-for="product in products" :key="product.id"
                        class="button-animation group shadow-md p-3 rounded-md">
                        <div class="overflow-hidden rounded-lg">
                            <NuxtImg :src="product.img" :alt="product.img"
                                class="w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class="mt-4 flex flex-col items-start justify-between subheading-class text-black">
                            <h4 class="carding-heading" v-html="product.name"></h4>
                            <p class="!small-text mt-3">
                                Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                            </p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <ContentPic :content="exploreRisks" />
            <ServiceTabs :serviceHeading="serviceHeading" :menus="menus" :data="data" />
            <div class="container py-5">
                <h2 class="section-heading pb-3 text-brand-primary">
                    <span class="text-black">Do it yourself</span> or with expert help
                </h2>
                <div class="grid grid-cols-3 gap-5">
                    <div v-for="help in helps" :key="help.heading"
                        class="bg-white button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                        <NuxtLink class="w-full" to="/">
                            <div class="!text-left font-sans group relative">
                                <div class="card-heading pb-3">
                                    <h4>
                                        {{ help.heading }}
                                    </h4>
                                </div>
                                <div class="!content pb-3">
                                    <p>
                                        {{ help.subheading }}
                                    </p>
                                </div>
                                <button type="button"
                                    class="rounded-sm group-hover:!bg-brand-primary px-5 py-2 text-xs text-white shadow-sm bg-black">
                                    {{ help.cta }}
                                </button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <WhyUs2 />
            <InsuranceInsights />
            <HowHelp />
            <BlackBanner :content="blackBannerContent" />
            <InTouch />
        </div>
    </main>
</template>

<style scoped></style>