<script setup>
const principles = ref([
    {
        name: 'We foster strong partnerships',
        icon: 'fas fa-users',
        description: 'Customer focus is at the heart of what we do! We work as a team to build lasting customer relationships by understanding their needs, offering competitive solutions and going beyond their expectations.'
    },
    {
        name: 'Hire good people and empower them.',
        icon: 'fas fa-award',
        description: 'We are intentional about how we source talent in line with our key principles. We place the right people in the right positions, develop their talent and skills and provide opportunities for them to influence favorable outcomes.'
    },
    {
        name: 'Innovate and Focus on solutions, not problems.',
        icon: 'fas fa-lightbulb',
        description: 'Begin with the end in mind and involve the right people. Stay positive and work together for desired results.'
    },
    {
        name: 'Do what we say we\'re going to do.',
        icon: 'fas fa-check-circle',
        description: 'Set realistic expectations. Communicate clearly. Be accountable for your actions.'
    },
    {
        name: 'Have fun.',
        icon: 'fas fa-smile',
        description: 'Celebrate success, diversity, engage respectfully and contribute to a positive working environment.'
    },
    {
        name: 'Prosper and Play to win.',
        icon: 'fas fa-trophy',
        description: 'Put integrity first. Be competitive. Work together as a team to exceed expectations.'
    },

])

const ReinsuranceBannerContent = ref({
    title: 'Acentria Group Careers',
    image: '/img/careers.jpg',
})

const joinAsMembers = ref([
    {
        name: 'Our Vision',
        icon: 'fas fa-user-plus',
        description: 'To be a global leader empowering prosperity.',
    },
    {
        name: 'Our Mission',
        icon: 'fas fa-truck',
        description: 'To provide financial and risk advisory services through innovations that empower our clients’ prosperity.',
    },
    {
        name: 'Our Mantra',
        icon: 'fas fa-briefcase',
        description: '<div class="text-center"> <span class="text-brand-primary">#</span>Empower <span class="text-brand-primary">#</span>Innovate <span class="text-brand-primary">#</span>Prosper </div>',
    },
])

const benefits = ref([
    {
        name: 'Health & <span class="text-brand-primary"> Wellness </span>',
        icon: 'fas fa-heart',
        description: 'You take care of our customers, We take care of you. All Acentria team members receive comprehensive health care cover, access to wellness programs, subsidized gym memberships and health care management programs.'
    },
    {
        name: 'Competitive Staff <span class="text-brand-primary"> Benefits </span>',
        icon: 'fas fa-calendar-check',
        description: 'We provide workplace safety insurance covers, sufficient retirement benefits, staff loan facilities and adequate time off to cater for personal development and rejuvenation.'
    },
    {
        name: 'Personal &amp; Professional <span class="text-brand-primary"> Development </span>',
        icon: 'fas fa-piggy-bank',
        description: 'We create development plans for our staff and have a robust education support programme that boosts skills and academic qualifications and prepares our high potential employees for their next big challenges!'
    },
    {
        name: 'Skills Development <span class="text-brand-primary"> program </span>',
        icon: 'fas fa-user-friends',
        description: 'We give back to our future generations through partnerships with mentorship associations, provide capacity building platforms and programs for our partners and have internship programs to boost our talent pipeline.'
    },
    {
        name: '<span class="text-brand-primary"> Diversity, Equity & </span> Inclusion',
        icon: 'fas fa-dumbbell',
        description: 'Our workforce represents the face of the jurisdictions we dwell in and appreciate contributions from all generations as a means of improving our products, services and corporate culture.'
    },
    {
        name: 'Supportive <span class="text-brand-primary"> parental leave </span>',
        icon: 'fas fa-baby',
        description: 'Raising the next generation takes time. We support parents in taking time to bond with their newest family member.'
    }
]);
</script>

<template>
    <main>
        <div>
            <div>

                <div class="relative isolate overflow-hidden bg-white py-20 mt-40">
                    <img :src="ReinsuranceBannerContent.image" alt="Success Team Hands Up"
                        class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

                    <div class="absolute inset-0 bg-black opacity-40"></div>

                    <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                        <div class="grid grid-cols-10 -gap-10">
                            <div class="text-white col-span-1">
                                <div class="w-20 h-1 bg-white mt-3">

                                </div>
                            </div>
                            <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                                <h2
                                    class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                                    Careers
                                </h2>
                                <h2 class="text-left text-3xl font-bold tracking-tight text-white font-sans">
                                    {{ ReinsuranceBannerContent.title }}
                                </h2>
                                <p class="text-white text-left max-w-2xl mt-7 text-xs">
                                    At Acentria, we understand the profound impact businesses can have on the world.
                                    That’s why
                                    we are dedicated to integrating Environmental, Social, and Governance (ESG)
                                    principles into
                                    our core business practices. Our commitment goes beyond financial success, focusing
                                    on
                                    sustainable and responsible business operations that contribute positively to the
                                    well-being
                                    of our planet and society.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="isolate !mb-5 py-5 md:py-0 mt-5">
                    <div class="relative isolate -z-10">
                        <div class="container overflow-hidden">

                            <div class="max-w-full">
                                <div
                                    class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-between">

                                    <div class="flex w-full max-w-xl flex-col gap-2 pr-0 sm:pr-10 lg:shrink-0 lg:pr-0">
                                        <h1 id=""
                                            class="font-sans text-3xl font-semibold leading-tight md:text-4xl xl:leading-tight text-light-title pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0">
                                            <span
                                                class="text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-3xl">Grow
                                                With a</span> <br>
                                            Pathfinder
                                        </h1>
                                        <p class="font-sans text-xs leading-normal font-regular text-light-content">
                                            Acentria Group has experienced tremendous growth over the last few years.
                                            Our journey has been characterized by diversification of business, immense
                                            learning experiences, changes in corporate culture and increased intensity
                                            in the relationships with our partners. We have evolved from brokerage
                                            services and ventured into other complimentary lines of business that
                                            separate us from the pack and evoke trust and confidence from our partners.
                                            We focus on doing business the right way, in a sustainable manner and
                                            providing incremental value to our customers and employees.
                                            <br><br>
                                            At Acentria Group, we work collaboratively to achieve team success. Our
                                            culture is underpinned by the principles of <b>Empowerment</b>,
                                            <b>Innovation</b> and
                                            <b>Prosperity</b>. We offer careers in a variety of fields where talented
                                            people
                                            can learn, develop, grow professionally and personally.


                                        </p>

                                    </div>

                                    <div class="relative py-4 lg:basis-1/2">
                                        <img alt="Image of null" loading="lazy" width="500" height="350"
                                            decoding="async" data-nimg="1"
                                            style="color: transparent; object-fit: contain" src="/img/simo-office.jpg"
                                            class="rounded-xl" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="" class="relative md:py-2 bg-white text-left">
                    <div class="container px-4">
                        <h2
                            class="text-center font-sans tracking-normal text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight py-1">
                            What drives us at <br>
                            <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                                Acentria Group?
                            </span>
                        </h2>

                        <div class="bg-white !font-sans container my-1">
                            <div class="mx-auto max-w-7xl py-5 sm:px-2 lg:px-4">
                                <div class="mx-auto max-w-7xl px-4 lg:max-w-none">
                                    <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 max-w-6xl mx-auto">
                                        <div v-for="member in joinAsMembers" :key="member.name"
                                            class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8  border-brand-primary">
                                            <div class="sm:flex-shrink-0 flex justify-center">
                                                <i :class="member.icon" class="text-black text-2xl"></i>
                                            </div>
                                            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                <h3
                                                    class="text-lg text-brand-primary font-semibold flex justify-center">
                                                    {{ member.name
                                                    }}</h3>
                                                <p class="mt-2 text-xs text-gray-500" v-html="member.description"></p>
                                                <!-- <i
                                                    class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div class="relative w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-5"
                    style="background-image:url('/img/bg.png');">
                    <div class="container">
                        <div
                            class="flex items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                            <div
                                class="flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">
                                <div class="w-full">
                                    <p
                                        class="text-left font-sans tracking-normal text-2xl lg:text-sm text-white font-semibold leading-tight lg:leading-tight">
                                        At our company, we specialize in providing comprehensive insurance and
                                        reinsurance solutions,
                                        backed by expert actuarial services and strategic investment management. Our
                                        cutting-edge
                                        technology ensures that we deliver innovative and efficient solutions tailored
                                        to meet the
                                        unique needs of our clients. Trust us to safeguard your future with precision
                                        and excellence.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="py-3 text-white" style="background-color: #f6f8fc">
                    <div class="undefined">
                        <section id="" class="relative py-1">
                            <div class="container px-4">
                                <div class="pb-5 text-center">
                                    <h2
                                        class="font-sans tracking-normal text-3xl text-gray-700 font-semibold leading-tight lg:leading-tight mb-4">
                                        We are Devoted to <br><span class="text-brand-primary">Our Core
                                            Principles</span>
                                    </h2>
                                </div>
                                <div
                                    class="font-sans container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 py-0">

                                    <div v-for="principle in principles"
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[200px] max-w-[90vw] rounded-xs bg-white p-5 md:max-w-[90vw] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i :class="[principle.icon]" class="text-brand-primary text-4xl pb-4"></i>
                                            <div>
                                                <h4 id=""
                                                    class="text-md pb-4 md:pb-5 font-semibold leading-tight text-light-title">
                                                    {{ principle.name }}
                                                </h4>
                                            </div>
                                            <p
                                                class="text-xs leading-normal font-regular text-light-content text-sm font-normal not-italic">
                                                {{ principle.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div class="container mx-auto">
                    <div class="py-8">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div
                                class="font-sans mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div>
                                    <h2
                                        class="font-sans tracking-normal text-3xl text-brand-primary font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                                        <span
                                            class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight">
                                            Why would you <br>
                                        </span>
                                        work for Acentria
                                    </h2>
                                    <p
                                        class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                        Working at Acentria is an enriching journey to growth and prosperity. We have
                                        numerous engagement forums, propagate empowerment and job autonomy, nurture a
                                        supportive and inclusive environment and do not have a “Straight-jacket”
                                        approach towards learning and development.
                                        Your contributions will be recognized and rewarded, ensuring a fulfilling, warm
                                        and lasting experience at Acentria.

                                        <br><br>
                                        Here is how you benefit by joining our Team:

                                    </p>
                                </div>
                                <div
                                    class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                                    <div v-for="benefit in benefits" class="flex flex-row gap-2">
                                        <i :class="benefit.icon" class="text-xl text-brand-primary mr-4"></i>
                                        <div>
                                            <h5 v-html="benefit.name"
                                                class="text-sm pb-3 md:pb-4 font-semibold leading-tight text-light-title">

                                            </h5>
                                            <p class="leading-normal font-regular text-light-content text-xs">
                                                {{ benefit.description }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section id="" class="relative py-5 bg-white text-left">
                    <div class="container px-4">
                        <!-- <h2
                            class="text-center font-sans tracking-normal text-2xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                            We Firmly Believe That What Makes Us <br>
                            <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                                Different Also Makes us Stronger
                            </span>
                        </h2> -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-5xl">
                            <div class="content-center items-center">
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    It is critical to our success to foster a diverse workforce that not only reflects
                                    the communities where we do business, but also encourages a variety of thoughts,
                                    opinions and ideas. Each of us is unique and our employees represent a diverse team
                                    of industry veterans, seasoned professionals and new team members with fresh ideas
                                    and different perspectives.
                                </p>
                                <br><br>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    We all work to ensure our workplace is free from discrimination and intolerance. We
                                    celebrate the diverse talent and skills of these team members, provide equal access
                                    to growth and advancement, and treat each other with respect. Our philosophy of
                                    inclusion influences how we relate to each other, how we manage our company and how
                                    we serve our customers. Above all, it’s about respect and what each of our employees
                                    brings to Acentria Group
                                </p>

                            </div>
                            <div class="mx-auto">
                                <img alt="Image of Streamline evaluations and questionnaires " loading="lazy"
                                    width="420" height="350" decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain" class="rounded-xl"
                                    src="/img/team2.jpeg" />
                            </div>
                        </div>
                    </div>
                </section>

                <!-- <div class="py-5 text-white" style="background-color: #f6f8fc">
                    <div class="undefined">
                        <section id="" class="relative py-1">
                            <div class="container px-4">
                                <div class="pb-5 text-center">
                                    <h2
                                        class="font-sans tracking-normal text-3xl lg:text-4xl text-gray-700 font-semibold leading-tight lg:leading-tight mb-4">
                                        Our <span class="text-brand-primary">Values</span>
                                    </h2>
                                </div>
                                <div
                                    class="font-sans container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-0">
                                    <div
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[210px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i class="material-symbols-outlined text-brand-primary text-4xl pb-4"
                                                translate="no">work</i>
                                            <div>
                                                <h4 id=""
                                                    class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                                                    Professionalism
                                                </h4>
                                            </div>
                                            <p
                                                class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                                                We are a trusted partner and do things the right way.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[210px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i class="material-symbols-outlined text-brand-primary text-4xl pb-4"
                                                translate="no">man</i>
                                            <div>
                                                <h4 id=""
                                                    class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                                                    Customer Focus
                                                </h4>
                                            </div>
                                            <p
                                                class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                                                Our internal and external customers are our lifeline
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[210px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i class="material-symbols-outlined text-brand-primary text-4xl pb-4"
                                                translate="no">verified</i>
                                            <div>
                                                <h4 id=""
                                                    class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                                                    Integrity
                                                </h4>
                                            </div>
                                            <p
                                                class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                                                We do responsible business.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[210px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i class="material-symbols-outlined text-brand-primary text-4xl pb-4"
                                                translate="no">lightbulb</i>
                                            <div>
                                                <h4 id=""
                                                    class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                                                    Innovation
                                                </h4>
                                            </div>
                                            <p
                                                class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                                                We are agile and always investing ahead of the curve
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[210px] max-w-[340px] rounded-xl bg-white p-5 md:max-w-[300px] w-full h-full">
                                        <div class="flex h-fit flex-col">
                                            <i class="material-symbols-outlined text-brand-primary text-4xl pb-4"
                                                translate="no">group</i>
                                            <div>
                                                <h4 id=""
                                                    class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl">
                                                    Teamwork
                                                </h4>
                                            </div>
                                            <p
                                                class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal">
                                                We deliver value together
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div> -->

                <section id="" class="relative py-5 bg-white text-left">
                    <div class="container px-4">
                        <h2
                            class="text-center font-sans tracking-normal text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                            Our commitment to
                            <span
                                class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">diversity</span>,
                            <span
                                class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">equity</span>
                            and
                            <span
                                class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">inclusion</span>
                        </h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mx-auto max-w-5xl">
                            <div class="mx-auto">
                                <img alt="Image of Streamline evaluations and questionnaires " loading="lazy"
                                    width="420" height="350" decoding="async" data-nimg="1"
                                    style="color: transparent; object-fit: contain" class="rounded-xl"
                                    src="/img/give.jpg" />
                            </div>
                            <div class="content-center items-center">
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    Acentria is committed to fostering, cultivating and
                                    preserving a culture that celebrates and values diversity,
                                    equity and inclusion. Our DEI&amp;I plan accelerates
                                    progress, with education being a critical component. We
                                    offer access to training courses and resources which aim to
                                    build a shared vocabulary, develop new skills and foster
                                    collaboration in service to creating an even more inclusive
                                    organization. We also encourage open dialogue and continuous
                                    feedback to ensure that every voice is heard and valued,
                                    promoting a sense of belonging and mutual respect among all
                                    employees.
                                </p>
                                <br>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    Acentria also supports several Employee Resource Groups
                                    (ERGs) including Generational,
                                    Multicultural, Parenting &amp; Care Giving, Mental Health and Women in Tech. These
                                    groups
                                    fast-track DEI&amp;I education and create a safe place for
                                    growth, understanding, compassion and empathy.
                                </p>
                                <br>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    We believe that diverse leadership is an essential part of
                                    modern governance and remain committed to exploring new
                                    opportunities to diversify our C-suite.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <div class="text-white" style="background-color: #f6f8fc">
                    <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                        <div class="relative py-4 lg:basis-1/2">
                            <img alt="Image of null" loading="lazy" width="500" height="350" decoding="async"
                                data-nimg="1" style="color: transparent; object-fit: contain" src="/img/join.jpg"
                                class="rounded-xl" />
                        </div>
                        <div class="flex flex-col justify-center lg:basis-1/2">
                            <div class="text-light-content pb-5 md:pb-6">
                                <h2 id="" class="pb-4 md:pb-5 font-semibold text-3xl  leading-tight text-light-title">
                                    <span
                                        class="font-sans text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 text-3xl">Join
                                        our</span>
                                    Talent Community
                                </h2>
                                <p
                                    class="font-sans text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                                    At Acentria Group, we are catalysts of transformation. We are redefining
                                    how businesses operate, reshaping the way industries function, and
                                    empowering decision-makers to drive impactful change—for their
                                    organizations and the world at large.
                                    <br><br>
                                    We believe that significant growth occurs when you're leading the charge
                                    in creating extraordinary change. When you embrace challenges you've
                                    never faced before and discover solutions that once seemed out of reach.
                                    <br><br>
                                    Please join our talent community to get job alerts and share your career details
                                    with us for future considerations.
                                </p>
                            </div>
                            <div>

                                <div class="font-sans mb-5">
                                    <label for="email" class="block text-lg font-semibold leading-6 text-black">Your
                                        Email Address</label>
                                    <div class="relative mt-2 rounded-md shadow-sm">
                                        <div
                                            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <i class="fas fa-paper-plane text-black"></i>
                                        </div>
                                        <input type="email" name="email" id="email"
                                            class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                            placeholder="you@example.com">
                                    </div>
                                </div>

                                <a href="#"
                                    class="button-animation font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">
                                    Get Job Alerts
                                    <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                        fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                        <g fill-rule="evenodd">
                                            <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                            <path class="transition-all duration-75 translate-x-0 transform-none"
                                                d="M1 1l4 4-4 4"></path>
                                        </g>
                                    </svg></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-cover bg-center py-10 " style="
                  background-image: url(https://cdn.sanity.io/images/33u1mixi/production/b695dd70af0f5f4be3c091f4607fd14514ac5650-1440x447.svg);
                ">
                    <div class="font-sans container mx-auto px-4 lg:px-0">
                        <div class="rounded-sm px-6 py-8 bg-brand-dim">
                            <div class="grid grid-cols-1 items-center gap-4 lg:grid-cols-1">
                                <div class="relative mb-8 text-center lg:mb-0 lg:text-left">
                                    <div class="mb-4 !text-dark-content justify-center">
                                        <h2 id=""
                                            class="text-white text-center text-3xl pb-4 md:pb-5 font-semibold leading-tight undefined lg:pt10 pt-6">
                                            Let’s make an impact together?
                                        </h2>
                                        <p class="text-center undefined undefined">
                                            At Acentria we collaborate, innovate and adapt in
                                            service of our clients and global communities to
                                            create better outcomes for all.
                                        </p>
                                    </div>
                                    <a href="#"
                                        class=" flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-white text-black hover:text-white hover:bg-brand-primary-dark focus:ring-brand-primary-dark px-4 py-3 text-base">Search
                                        open positions<svg
                                            class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                            fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                            <g fill-rule="evenodd">
                                                <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                                <path class="transition-all duration-75 translate-x-0 transform-none"
                                                    d="M1 1l4 4-4 4"></path>
                                            </g>
                                        </svg></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<style scoped></style>