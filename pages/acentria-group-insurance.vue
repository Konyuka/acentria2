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
        },
        {
            name: 'Life Insurance',
            content: 'Protecting Your Loved Ones is Priceless – Secure Their Future with Acentria Life Insurance.',
            icon: 'favorite',
        },
        {
            name: 'Car Insurance',
            content: 'Drive Confidently with Acentria Car Insurance. Your Safety, Our Priority – Get Covered Today',
            icon: 'directions_car',
        },
        {
            name: 'Domestic Cover',
            content: 'Protect your home sweet home with reliable insurance for your peace of mind.',
            icon: 'home',
        },
        {
            name: 'Travel Insurance',
            content: 'Adventure Awaits – Secure Your Travels with Acentria Travel Insurance. Explore with Confidence..',
            icon: 'flight',
        },
        {
            name: 'Golfers Insurance',
            content: 'Don\'t let the unexpected ruin your game – Protect your swing with golfer\'s insurance today.',
            icon: 'sports_golf',
        },
    ],
    corporate: [
        {
            name: 'Staff Health Cover',
            content: 'Elevate Employee Well-being Today – Choose Acentria Staff Health Coverage. Their Health, Our Priority.',
            icon: 'medical_services',
        },
        {
            name: 'Staff Travel Cover',
            content: 'Empower Your Team\'s Journeys Today – Choose Acentria Staff Travel Protection.Their Adventures, Our Priority.',
            icon: 'luggage',
        },
        {
            name: 'Professional Indemnity',
            content: 'Secure Your Professional Reputation Today – Choose Acentria Professional Indemnity Assurance. Your Expertise, Our Priority',
            icon: 'verified',
        },
        {
            name: 'Office Content Cover',
            content: 'Safeguard Your Business Assets with Acentria\'s Office Content Coverage.',
            icon: 'verified',
        },
        {
            name: 'Credit Risk Cover',
            content: 'Boost Financial Confidence with Acentria\'s Credit Risk Coverage.Safeguard Your Business\'s Financial Stability Today.',
            icon: 'verified',
        },
        {
            name: 'Cyber Liability Cover',
            content: 'Protect Your Digital Fortresses with Acentria\'s Cyber Liability Insurance.Defend Your Business Against Online Threats Today',
            icon: 'security',
        },
        {
            name: 'Marine Cover',
            content: 'Sail Securely with Acentria\'s Marine Insurance.Protect Your Maritime Ventures with Confidence.',
            icon: 'sailing',
        },
        {
            name: 'Aviation Cover',
            content: 'Reach New Heights with Acentria\'s Aviation Insurance.Fly Safely and Confidently with Our Coverage.',
            icon: 'local_airport',
        },
    ],
    business: [
        {
            name: 'All-in -One Package',
            content: 'Simplify and Secure with Acentria\'s All-in-One Insurance Package.Comprehensive Protection for All Your Needs.',
            icon: 'all_inclusive',
        },
        {
            name: 'Biashara Cover',
            content: 'Empower your SME with comprehensive business coverage – fortify your enterprise for a resilient future.',
            icon: 'storefront',
        },
        {
            name: 'General Liability Cover',
            content: 'Protect your business with Acentria\'s General Liability Insurance – your shield against unexpected challenges and legal uncertainties',
            icon: 'gavel',
        },
        {
            name: 'Commercial Vehicle Cover',
            content: 'Drive with Confidence - Choose Acentria\'s Commercial Vehicle Coverage.Protect Your Business on the Road.',
            icon: 'local_shipping',
        },
        {
            name: 'Commercial Property Cover',
            content: 'Secure Your Business Space - Choose Acentria\'s Commercial Property Coverage.Protect Your Business Assets and Premises.',
            icon: 'store',
        },
        {
            name: 'Crop & Livestock Cover',
            content: 'Guard your crops and livestock with comprehensive insurance coverage for a secure farming future.',
            icon: 'agriculture',
        },
    ]
})

const personal = ref({
    title: '',
    description: '',
    icon: '',

})

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

                <div class="py-6 text-white xl:py-12" style="background-color: #282e37">
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
                <section id="" class="relative py-8 lg:py-20 bg-white text-center">
                    <div class="container px-4">
                        <h2
                            class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                            <span class="text-brand-primary">Your Insurance, Your Way.</span>
                            Let Acentria Tailor Your Coverage To Your Needs
                        </h2>
                    </div>
                </section>
                <div class="py-6 text-white xl:py-12" style="background-color: #f6f8fc">

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

                <WhyUs />

                <ContactForm />

            </div>
        </div>
    </main>
</template>

<style scoped></style>