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
            icon: 'health_and_safety',
            link:'/insurance/health-insurance'
        },
        {
            name: 'Life Insurance',
            content: 'Protecting Your Loved Ones is Priceless.',
            icon: 'favorite',
            link: '/insurance/life-insurance'
        },
        {
            name: 'Car Insurance',
            content: 'Drive Confidently. Your Safety, Our Priority',
            icon: 'directions_car',
            link: '/insurance/home-insurance'
        },
        {
            name: 'Domestic Cover',
            content: 'Protect your home sweet home with reliable insurance for your peace of mind.',
            icon: 'home',
            link: '/insurance/motor-insurance'
        },
        {
            name: 'Travel Insurance',
            content: 'Adventure Awaits – Secure Your Travel Plans. Explore with Confidence.',
            icon: 'flight',
            link: '/insurance/travel-insurance'
        },
        {
            name: 'Golfers Insurance',
            content: 'Don\'t let the unexpected ruin your game – Protect your swing with golfer\'s insurance.',
            icon: 'sports_golf',
            link: '/insurance/'
        },
    ],
    corporate: [
        {
            name: 'Staff Health Cover',
            content: 'Elevate Employee Well-being Today',
            icon: 'medical_services',
            link: '/insurance/staff-health-cover'
        },
        {
            name: 'Staff Travel Cover',
            content: 'Empower Your Team\'s Journeys Today',
            icon: 'luggage',
            link: '/insurance/staff-travel-cover'
        },
        {
            name: 'Professional Indemnity',
            content: 'Secure Your Professional Reputation Today ',
            icon: 'verified',
            link: '/insurance/'
        },
        {
            name: 'Office Content Cover',
            content: 'Safeguard Your Business Assets with Acentria\'s Office Content Coverage.',
            icon: 'verified',
            link: '/insurance/office-content-cover'
        },
        {
            name: 'Credit Risk Cover',
            content: 'Boost Financial Confidence with Acentria\'s Credit Risk Coverage.Safeguard Your Business\'s Financial Stability Today.',
            icon: 'verified',
            link: '/insurance/credit-risk-cover'
        },
        {
            name: 'Cyber Liability Cover',
            content: 'Protect Your Digital Fortresses with Acentria\'s Cyber Liability Insurance.Defend Your Business Against Online Threats Today',
            icon: 'security',
            link: '/insurance/cyber-liability-cover'
        },
        {
            name: 'Marine Cover',
            content: 'Sail Securely with Acentria\'s Marine Insurance.Protect Your Maritime Ventures with Confidence.',
            icon: 'sailing',
            link: '/insurance/'
        },
        {
            name: 'Aviation Cover',
            content: 'Reach New Heights with Acentria\'s Aviation Insurance.Fly Safely and Confidently with Our Coverage.',
            icon: 'local_airport',
            link: '/insurance/'
        },
    ],
    business: [
        {
            name: 'All-in -One Package',
            content: 'Simplify and Secure with Acentria\'s All-in-One Insurance Package.Comprehensive Protection for All Your Needs.',
            icon: 'all_inclusive',
            link: '/insurance/'
        },
        {
            name: 'Biashara Cover',
            content: 'Empower your SME with comprehensive business coverage – fortify your enterprise for a resilient future.',
            icon: 'storefront',
            link: '/insurance/biasahara-cover'
        },
        {
            name: 'General Liability Cover',
            content: 'Protect your business with Acentria\'s General Liability Insurance – your shield against unexpected challenges and legal uncertainties',
            icon: 'gavel',
            link: '/insurance/general-liability-insurance'
        },
        {
            name: 'Commercial Vehicle Cover',
            content: 'Drive with Confidence - Choose Acentria\'s Commercial Vehicle Coverage.Protect Your Business on the Road.',
            icon: 'local_shipping',
            link: '/insurance/'
        },
        {
            name: 'Commercial Property Cover',
            content: 'Secure Your Business Space - Choose Acentria\'s Commercial Property Coverage.Protect Your Business Assets and Premises.',
            icon: 'store',
            link: '/insurance/commercial-property-insurance'
        },
        {
            name: 'Crop & Livestock Cover',
            content: 'Guard your crops and livestock with comprehensive insurance coverage for a secure farming future.',
            icon: 'agriculture',
            link: '/insurance/crops-and-livestock'
        },
    ]
})


const whys = ref([
    {
        title: 'We save you money',
        content: 'We provide unique offerings that enable you to combine your insurance products.',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile scope',
        icon: 'support_agent',
    },
    {
        title: 'Easy claim process',
        content: 'Our claims process is hassle-free, and we are proud of our service',
        icon: 'assignment_turned_in',
    },
    {
        title: 'Prompt Quotations',
        content: 'Let us help you with the best timely quotations for your needs',
        icon: 'query_builder',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'thumb_up',
    },
    {
        title: 'Peace of Mind',
        content: 'Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
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
                                    class="font-sans tracking-normal text-4xl lg:text-5xl  text-brand-primary font-semibold leading-tight lg:leading-tight">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight">Acentria</span>
                                    Insurance Brokers
                                </h1>`,
})

const bannerTitle = ref('Acentria Insurance Brokers')


const helps = ref([
    {
        heading:'Do it yourself',
        subheading:'Compare quotes, choose your policy, and get same-day coverage.',
        cta:'Compare Quotes Online',
        img:'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    },
    {
        heading:'Live agent assistance',
        subheading:'Review your quotes online, then get tailored advice from our agents.',
        cta:'See my Quotes',
        img:'https://images.pexels.com/photos/5453822/pexels-photo-5453822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        heading:'Full Service',
        subheading:'Send us your current policy, and our agents will find a better fit for you.',
        cta:'Connect with an Expert',
        img:'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
])

const exploreProducts = ref({
    orientation: 'lg:flex-row flex-col',
    heading: 'Explore <span class="text-brand-primary">Products</span>',
    subheading: 'Get a  <span class="text-brand-primary">5% Discount</span>',
    image: 'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/insurance-products',
    content: 'At Acentria we offers a wide variety of insurance options for peace of mind for your business, on the road, under your roof, and in your daily life.',
})

const exploreClaims = ref({
    orientation: 'lg:flex-row-reverse flex-col',
    heading: 'Learn More <span class="text-brand-primary">About Claims</span>',
    subheading: '',
    image: 'https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    link: '/insurance-claims',
    content: 'No matter which type of claim you have, our goal is to make sure everything goes smoothly. That means making your claims process as easy as possible and keeping you updated. Select a product to view the insurance claims process Get a breakdown of the claims process, what to do, and where to go from here.',
})

</script>

<template>
    <main>
        <div>
            <div>

                <ServiceHero2 :content="content" />

                <div class="bg-white relative w-full bg-cover bg-center bg-no-repeat false"
                    style="background-image: none;">

                    <div class="container">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center ">
                            <div>
                                <p class="my-5 heading-class text-black text-left">
                                    Acentria Group - <span class="text-brand-primary">Insurance & Risk Management</span>
                                </p>
                                <p
                                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">

                                    Acentria Group is your trusted friend in the world of insurance. We’re here to make
                                    sure you and anything you care for is safe and sound. Insurance can be confusing,
                                    but we’re experts at making it simple. We’ll take the time to understand exactly
                                    what you need and find the right insurance plan just for you.
                                    <br>
                                    So, why choose us? Because we genuinely care about keeping you and your things
                                    protected. We’re not just about selling insurance; we’re about making sure you’re
                                    worry-free and your wallet stays happy. Whether it’s your health, home, car, or
                                    business, we’ve got the perfect insurance plan that won’t break the bank. Trust us
                                    to be your friendly insurance guide, making sure you’re covered no matter what life
                                    throws your way.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <ContentPic :content="exploreProducts" />




                <div class="pb-5 text-left bg-white">
                    <h2 class="heading-class text-black container">
                        Pick a cover and, <span class="text-brand-primary"> <br /> we'll take care of the rest</span>
                    </h2>
                </div>

                <div class="py-2 text-white">
                    <section class="relative">
                        <div class="container px-4 py-10">
                            <ServiceTabs :menus="menus" :data="data" />
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

                    <div class=" px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
                        <div class="container mx-auto pb-2">
                            <div class="mt-5 space-y-10">

                                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                    <div v-for="help in helps"
                                        class="bg-white/40 button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                        <a class="w-full" href="#">
                                            <!-- <div class="relative w-full"><img alt="" loading="lazy" width="150"
                                                    height="100" decoding="async" data-nimg="1"
                                                    class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/1]"
                                                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                                    :src="help.img" style="color: transparent;">
                                            </div> -->
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

                <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

                <ContentPic :content="exploreClaims" />

                <div class=" font-sans text-white xl:py-1" style="background-color: #fff">
                    <div class="container mx-auto flex px-4 lg:flex-row flex-col lg:my-2 lg:gap-16">
                        <div class="relative py-4 lg:basis-1/2">
                            <img alt="Image of Forrester recognizes Diligent as a Leader in GRC software" loading="lazy"
                                decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                                class="w-full h-96 !rounded-lg" src="/public/img/award.jpg" />
                        </div>
                        <div class="flex flex-col justify-center lg:basis-1/2">
                            <label class="subheading-class leading-normal text-brand-primary">
                                We belive in innovation and simplicity
                            </label>
                            <h2 class="pb-4 md:pb-5 heading-class">
                                Leader in Industry Standards
                            </h2>
                            <div class="text-light-content pb-5 md:pb-6">
                                <p class="text-xs leading-normal mb-4">
                                    Uncover the fantastic opportunity to team up with Acentria Group, where
                                    collaboration is not just a
                                    buzzword but a way of life. In the world of Acentria Group, success isn't just a
                                    destination, it's a
                                    shared experience. With our innovative approach, award-winning culture, and
                                    unwavering focus on
                                    community, we stand as the epitome of what an ideal partnership should be. Welcome
                                    to a realm where
                                    simplicity meets professionalism, and your aspirations find a home.

                                    Experience the genuine difference that Acentria Group offers in a journey tailored
                                    for success,
                                    where your potential unfolds in every collaborative moment.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                <section id="" class="relative py-8 bg-black/60 text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl text-white font-semibold leading-tight lg:leading-tight">
                            <span class="text-brand-primary">Your Insurance, Your Way.</span> <br>
                            Let Acentria Tailor Your Coverage To Your Needs
                        </h2>
                    </div>
                </section>

                <ContactForm />

                <InTouch />

                <News />

            </div>
        </div>
    </main>
</template>

<style scoped></style>