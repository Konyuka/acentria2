<script setup>


const bannerMainContent = ref({
    title: 'About <br><span class="text-brand-primary">Acentria Group</span>',
    subtitle: '<span class="text-brand-primary">#</span>Empower | <span class="text-brand-primary">#</span>Innovate | <span class="text-brand-primary">#</span>Prosper',
    image: '/img/aboutuus.jpg',
})

const scrollToSetScroll = () => {
    const setScroll = localStorage.getItem('scrollTo');
    console.log(setScroll);
};

const beforeRouteUpdate = (to, from, next) => {
    console.log(to.path, from.path);
    scrollToSetScroll();
    next();
};

defineExpose({ beforeRouteUpdate });

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
        name: 'Our Values',
        icon: 'fas fa-briefcase',
        description: '• Integrity • Excellence • Innovative <br/> • Teamwork • Relationships • Growth &amp; Prosperity',
    },
])

const features = [
    {
        icon: 'fas fa-shield-alt',
        title: 'Insurance',
        description: 'Mitigating Risks, Maximizing Opportunities',
        url: '/acentria-group-insurance',
        items: [
            'Acentria Risk Advisory',
            'Broking and Risk Transfer',
            'Risk & Insurance Management advisory',
            'Claims Management & Advisory',
            'Risk Surveys & Advisory'
        ]
    },
    {
        icon: 'fas fa-shield-virus',
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-reinsurance',
        items: [
            'Reinsurance & Risk Retention',
            'Treaty & Facultative',
            'Optimisation',
            'Risk Analytics',
            'Claims Management & Advisory',
            'Return on Risk Capital Adjustment'
        ]
    },
    {
        icon: 'fas fa-calculator',
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/acentria-group-actuarial',
        items: [
            'Actuarial Services',
            'Data, Analytics & Benchmarking',
            'Enterprise Risk Management',
            'Catastrophic Modelling',
            'Financial analysis',
            'Insurance consulting'
        ]
    },
    {
        icon: 'fas fa-laptop-code',
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/contact-acentria-group',
        items: [
            'Network Security Services',
            'Vulnerability assessment & Penetration testing services',
            'Client and Market Technologies',
            'Cloud to cloud solutions',
            'AI-Driven Software development',
            'IT consultancy'
        ]
    },
    {
        icon: 'fas fa-money-bill-wave-sign',
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
        items: [
            'Investment Advisory',
            'Portfolio Management',
            'Wealth Management',
            'Financial Planning',
            'Asset Allocation'
        ]
    },
]

const empower = ref([
    {
        title: 'For our clients',
        description: 'We provide the tools, insights, and solutions they need to overcome challenges, seize opportunities, and achieve their goals.',
    },
    {
        title: 'For our employees',
        description: 'We cultivate an environment where ideas flourish, ambitions are realized, and diverse talents shine.',
    },
    {
        title: 'For our communities',
        description: 'We strive to create a lasting impact through initiatives that champion equality, inclusion, and sustainability.',
    }
])

const innovate = ref([
    {
        title: 'Inspired by challenges',
        description: 'We thrive on solving complex problems, thinking differently, and creating transformative solutions.',
    },
    {
        title: 'Embracing technology and creativity',
        description: 'We leverage cutting-edge tools and imaginative approaches to redefine possibilities and deliver value in bold, unexpected ways.',
    },
    {
        title: 'Driven by resilience',
        description: 'The evolving needs of our stakeholders motivate us to stay ahead of the curve and continuously innovate.',
    }
]);

const prosper = ref([
    {
        title: 'Inspired by impact',
        description: 'We are driven by the positive difference we make in the lives of our clients and their stakeholders.',
    },
    {
        title: 'Measuring prosperity',
        description: 'We evaluate success through lasting relationships, ethical practices, and our contributions to a sustainable future.',
    },
    {
        title: 'Motivated by shared growth',
        description: 'We are inspired by the collective success we achieve alongside our clients and partners.',
    }
]);

const scrollToSection = () => {
    const targetSection = localStorage.getItem('targetSection');
    console.log(targetSection);
    if (targetSection) {
        const element = document.getElementById(targetSection);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('targetSection');
    }
}

const whoWeAre = ref({
    orientation: 'image-left',
    heading: 'Who <span class="text-brand-primary">We Are</span>',
    subheading: '',
    image: '/img/Who we are.jpg',
    link: '/',
    content:'Acentria Group is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, Technology, and Investment Advisory. We empower clients with tailored, forward-thinking solutions.'
})

const thingsThatInspireUs = ref({
    orientation: 'image-right',
    heading: 'Things that <span class="text-brand-primary">Inspire Us</span>',
    subheading: '<span class="text-brand-primary">#</span> Empower <span class="text-brand-primary">#</span> Innovate <span class="text-brand-primary">#</span> Prosper',
    image: '/img/inspire.jpg',
    link: '/things-that-inspire-us',
    content:'We are inspired by the potential to empower individuals, businesses, and communities. Innovation fuels our creativity to craft transformative solutions that drive success, while prosperity motivates us to create a lasting impact—building stories of growth for our clients and society as a whole.'
});

const whatWeDo = ref({
    orientation: 'image-left',
    heading: 'What <span class="text-brand-primary">We Do</span>',
    subheading: '',
    image: '/img/dreads.jpg',
    link: '/',
    content:'We deliver transformative services in Risk Management, Reinsurance, Actuarial, Investment Advisory, and Technology to maximize opportunities and achieve financial success.'
});

onMounted(() => {
    scrollToSection();
})
</script>

<template>
    <section class="bg-white">
        <Carousel2 :content="bannerMainContent" />

        <!-- <div class="container py-5">
            <h1 class="section-heading pb-3">Welcome to <span class="text-brand-primary">Acentria Group</span>
            </h1>
            <p class="!content">
                At Acentria Group, we shape the future of our partners through our expertise and solutions by
                EMPOWERING the vision of our clients and communities. Through INNOVATIVE thinking, we deliver the
                best solutions that enhance PROSPERITY. We are constantly seeking better ways to manage risk,
                guiding effective pathways to achieve SMART and sustainable outcomes.
                <br><br>
                <span class="tracking-widest font-semibold text-[20px] text-black tm-10">
                    Let us help you navigate the complexities of today’s world and unlock your true potential.
                </span>
            </p>
        </div> -->

        <div class="container">
            <div class="grid grid-cols-12 gap-2 py-5">
                <div class="col-span-3 container max-w-6xl mx-auto justify-between content-center">
                    <h1 class="section-heading">
                        About
                    </h1>
                    <h1 class="text-[7rem] text-transparent bg-clip-text bg-contain bg-center leading-none font-extrabold tracking-tighter"
                        style="background-image: url('/img/sun-tornado.png');">
                        <div class="">
                            US
                        </div>
                    </h1>
                </div>

                <div class="col-span-9 relative">
                    <h2 class="section-heading pb-3">
                        Acentria <span class="text-brand-primary"> Group</span>
                    </h2>
                    <p>
                        At Acentria Group, we rise with our clients, unlocking possibilities and empowering success
                        through innovative solutions. Our mission is to transform risk management, drive growth,
                        and create lasting impact for our clients, colleagues, and communities.
                    </p>
                </div>
            </div>
        </div>



        <ContentPic :content="whoWeAre" />
        <ContentPic :content="thingsThatInspireUs" />
        <ContentPic :content="whatWeDo" />

        <div class="bg-white py-5">



            <div class="container">
                <h2 class="section-heading pb-3">
                    Our <span class="text-brand-primary">Capabilities</span>
                </h2>
                <p class="content">
                    We offer a comprehensive suite of services designed to meet the evolving needs of our
                    clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                    and individuals to thrive in diverse areas, including:
                </p>
            </div>

            <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
                <NuxtLink :to="feature.url" v-for="feature in features"
                    class="button-animation flex p-3 shadow-md border-l-4 border-brand-primary">
                    <div class="pr-3">
                        <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                    </div>
                    <div>
                        <h4 class="card-heading text-left">
                            {{ feature.title }}
                        </h4>
                        <p class="content">
                            {{ feature.description }}
                        </p>
                    </div>
                </NuxtLink>
            </div>

            <p class="container content">
                We offer a comprehensive suite of services designed to meet the evolving needs of our
                clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                and individuals to thrive in diverse areas, including:
            </p>

            <div class="container my-5">
                <h2 id="" class="section-heading pb-3  text-brand-primary">
                    <span class="text-black">
                        Our Vision |
                    </span>
                    Mission | <span class="text-black">Values</span>
                </h2>

                <div class="relative isolate overflow-hidden bg-black py-5 font-sans">
                    <NuxtImg src="/img/tornado.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="container relative mx-auto max-w-6xl px-6 lg:px-8">
                        <div>
                            <dl
                                class="font-sans pl-10 mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-10 text-white sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div v-for="(feature, index) in joinAsMembers" :key="feature.name"
                                    class="flex flex-col">
                                    <dt class="subsection-heading text-white">
                                        <div
                                            class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                            <i :class="feature.icon" class="text-white" aria-hidden="true" />
                                        </div>
                                        {{ feature.name }}
                                    </dt>
                                    <dd class="mt-1 flex flex-auto flex-col text-xs text-white">
                                        <p class="flex-auto leading-normal text-sm" v-html="feature.description"></p>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                            decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-lg" src="/img/bill.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="section-heading mb-4">
                            Our <span class="text-brand-primary">Journey</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                At Acentria Group, our journey is defined by resilience, vision, and dedication. We
                                adapt to
                                change while staying true to our mission of empowering businesses and communities.
                                Together, we rise, shaping a future of shared prosperity and collective success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                            decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-lg" src="/img/iStock-2148737980 Leadership.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="section-heading mb-4">
                            Our <span class="text-brand-primary">Leadership</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                Our leaders are dedicated to innovation and excellence. They drive growth, inspire
                                change,
                                and empower us to stay ahead in the industry, rising to new challenges and
                                opportunities.
                            </p>
                            <NuxtLink to="/meet-the-team"
                                class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                                Meet the Team
                                <i class="fas fa-arrow-right text-primary ml-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                            decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-lg" src="/img/Things that Inspire Us.JPG" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="section-heading mb-4">
                            Our <span class="text-brand-primary">Culture</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                The Acentria Way is not just about the work we do—it’s about how we do it. Our culture
                                is
                                the foundation of our success. We foster an innovative, supportive environment where
                                everyone can thrive, delivering excellence and empowering our people and communities.
                            </p>
                            <NuxtLink to="/corporate-culture"
                                class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                                Learn More
                                <i class="fas fa-arrow-right text-primary ml-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                            decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-lg" src="/img/join.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="section-heading mb-4">
                            Our <span class="text-brand-primary">Brand</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                Our brand promise is simple: &quot;Done Smart.&quot; Every solution we deliver is
                                designed with intelligence and innovation to empower clients in a rapidly evolving world.
                            </p>
                            <NuxtLink to="/our-brand"
                                class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                                Learn More
                                <i class="fas fa-arrow-right text-primary ml-2 text-[12px]"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped></style>