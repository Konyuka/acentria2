<script setup>

const content = ref({
    vid: '/img/hd1.mp4',
    pageTitle: 'Acentria Group Insurance',
    title: 'Your Insurance, Your Way.   <br/> <span class="text-brand-primary">Let Acentria Tailor Your Coverage To Your Needs</span>',
    // description: 'Protect what matters most with our tailored insurance plans. At Acentria Group, we offer a wide range of coverage options designed to safeguard your assets, your business, and your peace of mind. Trust us to help you navigate the complexities of insurance, ensuring you’re prepared for whatever life may bring.',
})

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


const whys = ref([
    {
        title: 'We save you money',
        content: 'We provide unique offerings that enable you to combine your insurance products.',
        icon: 'fas fa-piggy-bank',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile scope',
        icon: 'fas fa-headset',
    },
    {
        title: 'Easy claim process',
        content: 'Our claims process is hassle-free, and we are proud of our service',
        icon: 'fas fa-check-circle',
    },
    {
        title: 'Prompt Quotations',
        content: 'Let us help you with the best timely quotations for your needs',
        icon: 'fas fa-clock',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'fas fa-thumbs-up',
    },
    {
        title: 'Peace of Mind',
        content: 'Our team of experts shall offer professional advice for your needs.',
        icon: 'fas fa-smile',
    },
])
const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <span class="text-brand-primary"> Acentria</span>`)

const menus = ref([
    {
        name: 'Personal Insurance Cover',
        tag: 'personal',
        icon: 'fas fa-user-shield',
    },
    // {
    //     name: 'Corporate Insurance Cover',
    //     tag: 'corporate',
    //     icon: 'fas fa-shield-alt',
    // },
    {
        name: 'Business Insurance Cover',
        tag: 'business',
        icon: 'fas fa-briefcase',
    },
])


const heroContent = ref({
    name: `<h1
                                    class="font-sans tracking-normal text-4xl lg:text-5xl  text-brand-primary font-semibold leading-normal lg:leading-normal">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-normal lg:leading-normal">Acentria</span>
                                    Insurance Brokers
                                </h1>`,
})
const bannerTitle = ref('Acentria Insurance Brokers')


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

const exploreProducts = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Explore <span class="text-brand-primary">Products</span>',
    subheading: 'Get a  <span class="text-brand-primary">5% Discount</span>',
    image: '/img/handhouse.jpg',
    link: '/insurance-products',
    content: 'At Acentria we offers a wide variety of insurance options for peace of mind for your business, on the road, under your roof, and in your daily life.',
})

const exploreRisks = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Explore <span class="text-brand-primary">Risk Areas</span>',
    subheading: '',
    image: '/img/carinsurance.jpg',
    link: '/insurance-products',
    content: 'At Acentria we help clients to identify, mitigate and transfer an evolving range of risks and deliver solutions that safegueard people and businesses to recover from financial losses due to accidents, illnesses, natural disasters, and other unforeseen events giving you a financial security.',
})

const exploreClaims = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Learn More <span class="text-brand-primary">About Claims</span>',
    subheading: '',
    image: '/img/safehouse.jpg',
    link: '/insurance-claims',
    content: 'No matter which type of claim you have, our goal is to make sure everything goes smoothly. That means making your claims process as easy as possible and keeping you updated. Select a product to view the insurance claims process Get a breakdown of the claims process, what to do, and where to go from here.',
})

const introContent = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Welcome to <span class="text-brand-primary">  Acentria</span>',
    subheading: 'A reliable partner you can trust',
    image: 'https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-business-woman-handshake-and-agreement-for-partnership-in-office-for-collaboration-promotion-or-2311431727-transformed-1024x767.jpeg',
    link: '/insurance-claims',
    content: 'Acentria is a world class Insurance Broker that has skills and expertise to combine specialized insurance brokerage services with deep analytics to provide tailored smart solutions that meet the unique needs of our clients worldwide. We pride ourselves as top-notch insurance experts with a reputation to handle complex risks and claims.',
})

const slides = ref([
    {
        imageUrl: '/img/heath.jpg',
        title: 'Health Insurance',
        description: 'Secure your wellness with our comprehensive health insurance plans.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/life.jpg',
        title: 'Life Insurance',
        description: 'Protect your loved ones with our reliable life insurance policies.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/carinsurance.jpg',
        title: 'Car Insurance',
        description: 'Drive confidently with our extensive car insurance coverage.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/handhouse.jpg',
        title: 'Home Insurance',
        description: 'Keep your home safe with our comprehensive home insurance plans.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/travel.jpg',
        title: 'Travel Insurance',
        description: 'Explore the world with peace of mind with our travel insurance.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/family-four-red-umbrella.jpg',
        title: 'Business Insurance',
        description: 'Protect your business with our tailored business insurance solutions.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: 'https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Marine Insurance',
        description: 'Secure your maritime ventures with our reliable marine insurance.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/53.jpg',
        title: 'Aviation Insurance',
        description: 'Fly safely with our comprehensive aviation insurance coverage.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/glasses.jpg',
        title: 'Cyber Insurance',
        description: 'Protect your digital assets with our robust cyber insurance plans.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/liability.jpg',
        title: 'Liability Insurance',
        description: 'Safeguard your business with our comprehensive liability insurance.',
        url: '/contact-acentria-group',
    },
    {
        imageUrl: '/img/safehouse.jpg',
        title: 'Property Insurance',
        description: 'Protect your property with our extensive property insurance plans.',
        url: '/contact-acentria-group',
    },
])

const specials = ref([
    {
        name: 'Financial <br/> <span class="text-brand-primary">Wellness</span>',
        img: 'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Comprehensive financial planning and advisory services to help you achieve your long-term financial goals and secure your future.'
    },
    {
        name: 'Risk  <br/> <span class="text-brand-primary">Management</span>',
        img: 'https://images.pexels.com/photos/266403/pexels-photo-266403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Strategic risk assessment and mitigation strategies to protect your assets and minimize potential exposures.'
    },
    {
        name: 'Cyber Risk <br/> <span class="text-brand-primary">Management</span>',
        img: 'https://images.pexels.com/photos/38275/anonymous-studio-figure-photography-facial-mask-38275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Advanced cybersecurity solutions and insurance coverage to protect your digital assets and maintain business continuity.'
    },
    {
        name: 'Claims  <br/> <span class="text-brand-primary">Management</span>',
        img: 'https://images.pexels.com/photos/5699480/pexels-photo-5699480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Efficient and streamlined claims processing with dedicated support throughout the entire claims lifecycle.'
    },
    {
        name: 'Insurance Policy <br/> <span class="text-brand-primary">Management</span>',
        img: 'https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: 'Comprehensive policy administration and review services to ensure optimal coverage and cost-effectiveness.'
    }
]);

</script>

<template>
    <main>
        <div class="">
            <Carousel :slides="slides" />

            <div class="bg-white py-5">
                <ContentPic :content="introContent" />
            </div>

            <div class="bg-white">
                <div class="container pt-5">
                    <div class="">
                        <h2 class="text-2xl font-semibold text- mb-4">
                            Expert <span class="text-brand-primary">Insurance Services</span>
                        </h2>
                    </div>

                    <div class=" mx-auto text-black">
                        <p>
                            Our expert insurance services combine deep industry knowledge with cutting-edge solutions to
                            protect what matters most. With decades of experience, our team of specialists understands
                            the complex risks facing businesses and individuals today.
                            We pride ourselves on delivering customized insurance solutions that go beyond standard
                            coverage. Our approach integrates comprehensive risk assessment, strategic planning, and
                            proactive risk management to ensure you have the protection you need when you need it most.


                        </p>

                        <div class="py-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                            <a v-for="product in specials" :key="product.id" @click="setLineData(product)"
                                class="button-animation group shadow-md p-3 rounded-md">
                                <div
                                    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                                    <NuxtImg :src="product.img" :alt="product.img"
                                        class="h-full w-full object-cover object-center group-hover:opacity-75" />
                                </div>
                                <div
                                    class=" mt-4 flex flex-col items-start justify-between subheading-class text-black">
                                    <h6 class="text-sm" v-html="product.name "></h6>
                                    <p class="text-xs italic mt-3">
                                        Learn More <i class="ml-2 fas fa-arrow-right text-brand-primary"></i>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <ContentPic :content="exploreRisks" />

            <div class="bg-white">
                <div class="py-5 text-left container">
                    <h2 class="heading-class text-black">
                        Pick a cover and, <span class="text-brand-primary"> <br /> we'll take care of the risks</span>
                    </h2>
                </div>
            </div>

            <div class="py-2 text-white bg-white">
                <section class="relative">
                    <div class="container px-4 py-5">
                        <ServiceTabs :menus="menus" :data="data" />
                        <!-- <Solutions :menus="menus" :data="data" /> -->
                    </div>
                </section>
            </div>

            <section id="" class="relative py-3 text-left pt-2">
                <div class="container">
                    <h2 class="heading-class text-white">
                        <span class="text-brand-primary">Do it yourself</span>
                        or with expert help
                    </h2>
                </div>

                <div class="px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
                    <div class="container mx-auto pb-2">
                        <div class="mt-5 space-y-10">
                            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div v-for="help in helps" :key="help.heading"
                                    class="bg-white button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                    <a class="w-full" href="#">
                                        <div class="max-w-full">
                                            <div class="!text-left font-sans group relative">
                                                <h3
                                                    class="mt-3 line-clamp-2 subheading-class transition-colors group-hover:text-brand-primary">
                                                    <span class="absolute inset-0"></span>
                                                    {{ help.heading }}
                                                </h3>
                                                <p class="mt-3 line-clamp-3 text-xs text-black">
                                                    {{ help.subheading }}
                                                </p>
                                                <button type="button"
                                                    class="mt-5 rounded-sm bg-brand-primary px-5 py-2 text-xs text-white shadow-sm hover:bg-black">
                                                    {{ help.cta }}
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- <ContentPic :content="exploreProducts" /> -->


            <WhyUs2 />

            <InsuranceInsights />

            <HowHelp />


            <!-- <ContentPic :content="exploreClaims" /> -->

            <section id="" class="relative py-8 bg-black/60 text-center">
                <div class="container px-4">
                    <h2
                        class="font-sans tracking-normal text-2xl text-white font-semibold leading-normal lg:leading-normal">
                        <span class="text-brand-primary">Your Insurance, Your Way.</span> <br>
                        Let Acentria Tailor Your Coverage To Your Needs
                    </h2>
                </div>
            </section>

            <!-- <ContactForm /> -->

            <InTouch />

            <!-- <News /> -->
        </div>
    </main>
</template>

<style scoped></style>