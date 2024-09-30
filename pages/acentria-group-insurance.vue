<script setup>

const content = ref({
    pageTitle: 'Acentria Group Insurance',
    title: 'Secure Your Future with Comprehensive Insurance Solutions',
    description: 'Protect what matters most with our tailored insurance plans. At Acentria Group, we offer a wide range of coverage options designed to safeguard your assets, your business, and your peace of mind. Trust us to help you navigate the complexities of insurance, ensuring you’re prepared for whatever life may bring.',
})

const data = ref({
    personal: [
        {
            name: 'Health Insurance',
            content: 'Secure Your Wellness Today – Choose Acentria Health Insurance. Your Health, Our Priority',
            icon: 'health_and_safety',
            link:'/insurance/health-insurance'
        },
        {
            name: 'Life Insurance',
            content: 'Protecting Your Loved Ones is Priceless – Secure Their Future with Acentria Life Insurance.',
            icon: 'favorite',
            link: '/insurance/life-insurance'
        },
        {
            name: 'Car Insurance',
            content: 'Drive Confidently with Acentria Car Insurance. Your Safety, Our Priority – Get Covered Today',
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
            content: 'Adventure Awaits – Secure Your Travels with Acentria Travel Insurance. Explore with Confidence..',
            icon: 'flight',
            link: '/insurance/travel-insurance'
        },
        {
            name: 'Golfers Insurance',
            content: 'Don\'t let the unexpected ruin your game – Protect your swing with golfer\'s insurance today.',
            icon: 'sports_golf',
            link: '/insurance/'
        },
    ],
    corporate: [
        {
            name: 'Staff Health Cover',
            content: 'Elevate Employee Well-being Today – Choose Acentria Staff Health Coverage. Their Health, Our Priority.',
            icon: 'medical_services',
            link: '/insurance/staff-health-cover'
        },
        {
            name: 'Staff Travel Cover',
            content: 'Empower Your Team\'s Journeys Today – Choose Acentria Staff Travel Protection.Their Adventures, Our Priority.',
            icon: 'luggage',
            link: '/insurance/staff-travel-cover'
        },
        {
            name: 'Professional Indemnity',
            content: 'Secure Your Professional Reputation Today – Choose Acentria Professional Indemnity Assurance. Your Expertise, Our Priority',
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
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products, ensure prudent risk management, reduce your loss ratios, and hence save you on cost',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile products and scope',
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
        content: 'Your peace of mind is our priority. Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
    },
])
const intro = ref('At Acentria, we’re not just about insurance – we understand what’s on your mind. Our easy process takes care of your insurance needs, offering reliable coverage that gives you peace of mind.Let us handle your insurance worries at Acentria.')
const leftTitle = ref(`Why Insure with <br> <span class="text-brand-primary">Acentria</span>`)

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

</script>

<template>
    <main>
        <div>
            <div>

                <ServiceHero :content="content" />

                <div class="py-6 text-white" style="background-color: #282e37">
                    <div class="undefined">
                        <section id="" class="relative py-4 lg:py-10">
                            <div class="container px-4">
                                <div class="pb-10 text-center lg:pb-14">
                                    <h2
                                        class="font-sans tracking-normal text-3xl lg:text-4xl text-white font-semibold leading-tight lg:leading-tight">
                                        Pick a cover, and we'll take care of the rest
                                    </h2>
                                    <label
                                        class="pt-5 text-base leading-normal font-sans text-light-highlight font-bold">
                                        Get an insurance quote today — It’s that simple with Acentria
                                    </label>
                                </div>

                                <ServiceTabs :menus="menus" :data="data" />

                            </div>
                        </section>
                    </div>
                </div>

                <section id="" class="relative py-8 lg:py-5 bg-white text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                            <span class="text-brand-primary">Do it yourself</span>
                            or with expert help
                        </h2>
                    </div>

                    <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
                        <div class="container mx-auto pb-2">
                            <div class="mt-5 space-y-10">

                                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                                    <div
                                        class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                        <a class="w-full" href="#">
                                            <div class="relative w-full"><img alt="" loading="lazy" width="300"
                                                    height="200" decoding="async" data-nimg="1"
                                                    class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                                    src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                                                    style="color: transparent;">
                                            </div>
                                            <div class="max-w-full">
                                                <div class="!text-left font-sans group relative">
                                                    <h3
                                                        class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                                        <span class="absolute inset-0"></span>
                                                        Do it yourself
                                                    </h3>
                                                    <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                                                        Compare quotes, choose your policy, and get same-day coverage in
                                                        a few clicks.
                                                    </p>
                                                    <button type="button"
                                                        class="mt-5 rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                        Compare Quotes Online
                                                    </button>

                                                </div>
                                            </div>

                                        </a>
                                    </div>

                                    <div
                                        class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                        <a class="w-full" href="#">
                                            <div class="relative w-full"><img alt="" loading="lazy" width="300"
                                                    height="200" decoding="async" data-nimg="1"
                                                    class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                                    src="https://images.pexels.com/photos/5453822/pexels-photo-5453822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    style="color: transparent;">
                                            </div>
                                            <div class="max-w-full">
                                                <div class="!text-left font-sans group relative">
                                                    <h3
                                                        class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                                        <span class="absolute inset-0"></span>
                                                        Live agent assistance
                                                    </h3>
                                                    <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                                                        Review your quotes online, then get tailored advice from a
                                                        licensed insurance agent.
                                                    </p>
                                                    <button type="button"
                                                        class="mt-5 rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                        See my Quotes
                                                    </button>

                                                </div>
                                            </div>

                                        </a>
                                    </div>

                                    <div
                                        class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                        <a class="w-full" href="#">
                                            <div class="relative w-full"><img alt="" loading="lazy" width="300"
                                                    height="200" decoding="async" data-nimg="1"
                                                    class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                                    sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                                    src="https://images.pexels.com/photos/3727469/pexels-photo-3727469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                                    style="color: transparent;">
                                            </div>
                                            <div class="max-w-full">
                                                <div class="!text-left font-sans group relative">
                                                    <h3
                                                        class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                                        <span class="absolute inset-0"></span>
                                                        Full Service
                                                    </h3>
                                                    <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                                                        Send us your current policy, and our agents will find a better
                                                        fit for you.
                                                    </p>
                                                    <button type="button"
                                                        class="mt-5 rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                                        Connect with an Expert
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


                <section id="" class="relative md:py-8 lg:py-5 bg-white text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                            <span class="text-brand-primary">Your Insurance, Your Way.</span> <br>
                            Let Acentria Tailor Your Coverage To Your Needs
                        </h2>
                    </div>
                </section>
                <div class="py-3 text-white" style="background-color: #f6f8fc">

                    <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">

                        <div class="relative p-4 lg:basis-1/2">
                            <img alt="Image of Streamline evaluations and questionnaires " loading="lazy" width="500"
                                height="350" decoding="async" data-nimg="1"
                                style="color: transparent; object-fit: contain" class="rounded-xl"
                                src="https://images.pexels.com/photos/7688374/pexels-photo-7688374.jpeg?auto=compress&cs=tinysrgb&w=600" />
                        </div>
                        <div class="flex flex-col justify-center lg:basis-1/2">
                            <div class="text-light-content pb-5 md:pb-6">
                                <p class="text-base leading-normal font-sans text-light-content !text-inherit mb-4">
                                    Acentria Group is your trusted friend in the world of insurance. We’re here to make
                                    sure you and anything you care for is safe and sound. Insurance can be confusing,
                                    but we’re experts at making it simple. We’ll take the time to understand exactly
                                    what you need and find the right insurance plan just for you.

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

                <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

                <ContactForm />

                <InTouch />

            </div>
        </div>
    </main>
</template>

<style scoped></style>