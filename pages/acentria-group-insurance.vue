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
            name: 'Health Insurance',
            content: 'Secure Your Wellness Today',
            icon: 'fas fa-heartbeat',
            link: '/insurance/health-insurance'
        },
        {
            name: 'Life Insurance',
            content: 'Protecting Your Loved Ones is Priceless.',
            icon: 'fas fa-heart',
            link: '/insurance/life-insurance'
        },
        {
            name: 'Car Insurance',
            content: 'Drive Confidently. Your Safety, Our Priority',
            icon: 'fas fa-car',
            link: '/insurance/home-insurance'
        },
        {
            name: 'Domestic Cover',
            content: 'Protect your home sweet home with reliable insurance for your peace of mind.',
            icon: 'fas fa-home',
            link: '/insurance/motor-insurance'
        },
        {
            name: 'Travel Insurance',
            content: 'Adventure Awaits – Secure Your Travel Plans. Explore with Confidence.',
            icon: 'fas fa-plane',
            link: '/insurance/travel-insurance'
        },
        {
            name: 'Golfers Insurance',
            content: 'Don\'t let the unexpected ruin your game – Protect your swing with golfer\'s insurance.',
            icon: 'fas fa-golf-ball',
            link: '/insurance/'
        },
    ],
    corporate: [
        {
            name: 'Staff Health',
            content: 'Elevate Employee Well-being Today',
            icon: 'fas fa-user-md',
            link: '/insurance/staff-health-cover'
        },
        {
            name: 'Staff Travel',
            content: 'Empower Your Team\'s Journeys Today',
            icon: 'fas fa-suitcase-rolling',
            link: '/insurance/staff-travel-cover'
        },
        {
            name: 'Professional Indemnity',
            content: 'Secure Your Professional Reputation Today',
            icon: 'fas fa-shield-alt',
            link: '/insurance/'
        },
        {
            name: 'Office Content',
            content: 'Safeguard Your Business Assets with Acentria\'s Office Content Coverage.',
            icon: 'fas fa-briefcase',
            link: '/insurance/office-content-cover'
        },
        {
            name: 'Credit Risk',
            content: 'Boost Financial Confidence with Acentria\'s Credit Risk Coverage. Safeguard Your Business\'s Financial Stability Today.',
            icon: 'fas fa-credit-card',
            link: '/insurance/credit-risk-cover'
        },
        {
            name: 'Cyber Liability',
            content: 'Protect Your Digital Fortresses with Acentria\'s Cyber Liability Insurance. Defend Your Business Against Online Threats Today.',
            icon: 'fas fa-shield-virus',
            link: '/insurance/cyber-liability-cover'
        },
        {
            name: 'Marine Cover',
            content: 'Sail Securely with Acentria\'s Marine Insurance. Protect Your Maritime Ventures with Confidence.',
            icon: 'fas fa-ship',
            link: '/insurance/'
        },
        {
            name: 'Aviation Cover',
            content: 'Reach New Heights with Acentria\'s Aviation Insurance. Fly Safely and Confidently with Our Coverage.',
            icon: 'fas fa-plane-departure',
            link: '/insurance/'
        },
    ],
    business: [
        {
            name: 'All-in-One Package',
            content: 'Simplify and Secure with Acentria\'s All-in-One Insurance Package. Comprehensive Protection for All Your Needs.',
            icon: 'fas fa-box',
            link: '/insurance/'
        },
        {
            name: 'Biashara Cover',
            content: 'Empower your SME with comprehensive business coverage – fortify your enterprise for a resilient future.',
            icon: 'fas fa-store',
            link: '/insurance/biasahara-cover'
        },
        {
            name: 'General Liability',
            content: 'Protect your business with Acentria\'s General Liability Insurance – your shield against unexpected challenges and legal uncertainties.',
            icon: 'fas fa-balance-scale',
            link: '/insurance/general-liability-insurance'
        },
        {
            name: 'Commercial Vehicle',
            content: 'Drive with Confidence - Choose Acentria\'s Commercial Vehicle Coverage. Protect Your Business on the Road.',
            icon: 'fas fa-truck',
            link: '/insurance/'
        },
        {
            name: 'Commercial Property',
            content: 'Secure Your Business Space - Choose Acentria\'s Commercial Property Coverage. Protect Your Business Assets and Premises.',
            icon: 'fas fa-building',
            link: '/insurance/commercial-property-insurance'
        },
        {
            name: 'Crop & Livestock',
            content: 'Guard your crops and livestock with comprehensive insurance coverage for a secure farming future.',
            icon: 'fas fa-seedling',
            link: '/insurance/crops-and-livestock'
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
    {
        name: 'Corporate Insurance Cover',
        tag: 'corporate',
        icon: 'fas fa-shield-alt',
    },
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
    heading: 'Welcome to <span class="text-brand-primary">Acentria Group</span>',
    subheading: 'A reliable partner you can trust.',
    image: 'https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-business-woman-handshake-and-agreement-for-partnership-in-office-for-collaboration-promotion-or-2311431727-transformed-1024x767.jpeg',
    link: '/insurance-claims',
    content: 'Acentria Group is your trusted friend in the world of insurance. We’re here to make sure you and anything you care for is safe and sound. Insurance can be confusing, but we’re experts at making it simple. We’ll take the time to understand exactly what you need and find the right insurance plan just for you. So, why choose us? Because we genuinely care about keeping you and your things protected. We’re not just about selling insurance; we’re about making sure you’re worry-free and your wallet stays happy. Whether it’s your health, home, car, or business, we’ve got the perfect insurance plan that won’t break the bank. Trust us to be your friendly insurance guide, making sure you’re covered no matter what life throws your way.',
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

</script>

<template>
    <main>
        <div class="">
            <Carousel :slides="slides" />
            <!-- <ServiceHero2 :content="content" /> -->
            <!-- 
            <div class="bg-white relative w-full bg-cover bg-center bg-no-repeat" style="background-image: none;">
                <div class="container">
                    <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center">
                        <div>
                            <h1 class="my-5 heading-class text-left">
                                Overview <br> <span class="text-brand-primary"> Insurance & Risk </span>
                            </h1>
                            <p
                                class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal lg:leading-normal pb-2">
                                Acentria Group is your trusted friend in the world of insurance. We’re here to make sure
                                you and anything you care for is safe and sound. Insurance can be confusing, but we’re
                                experts at making it simple. We’ll take the time to understand exactly what you need and
                                find the right insurance plan just for you.
                                <br>
                                So, why choose us? Because we genuinely care about keeping you and your things
                                protected. We’re not just about selling insurance; we’re about making sure you’re
                                worry-free and your wallet stays happy. Whether it’s your health, home, car, or
                                business, we’ve got the perfect insurance plan that won’t break the bank. Trust us to be
                                your friendly insurance guide, making sure you’re covered no matter what life throws
                                your way.
                            </p>
                        </div>

                        
                        
                    </div>
                </div>
            </div> -->

            <div class="bg-white py-5">
                <ContentPic :content="introContent" />
            </div>

            <ContentPic :content="exploreRisks" />

            <div class="bg-white">
                <div class="py-5 text-left container">
                    <h2 class="heading-class text-black">
                        Pick a cover and, <span class="text-brand-primary"> <br /> we'll take care of the rest</span>
                    </h2>
                </div>
            </div>

            <div class="py-2 text-white bg-white">
                <section class="relative">
                    <div class="container px-4 py-5">
                        <!-- <ServiceTabs :menus="menus" :data="data" /> -->
                        <Solutions :menus="menus" :data="data" />
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

            <!-- <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" /> -->
            <WhyUs2 />

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