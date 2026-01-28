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
    image: '/img/Professionals and Business Service.png',
    link: '/',
    content: 'Acentria Group is a trusted global consultant dedicated to empowering growth in Risk and Insurance, Reinsurance, Actuarial, Technology, and Investment Advisory. With over a decade of expertise, we craft innovative solutions that stay ahead of the curve, ensuring that our clients unlock opportunities and navigate challenges with confidence.'
})

const thingsThatInspireUs = ref({
    orientation: 'image-right',
    heading: 'Things that <span class="text-brand-primary">Inspire Us</span>',
    subheading: '<span class="text-brand-primary">#</span> Empower <span class="text-brand-primary">#</span> Innovate <span class="text-brand-primary">#</span> Prosper',
    image: '/img/inspire.jpg',
    link: '/things-that-inspire-us',
    content: 'We are inspired by the potential to empower individuals, businesses, and communities. Innovation fuels our creativity to craft transformative solutions that drive success, while prosperity motivates us to create a lasting impact—building stories of growth for our clients and society as a whole.'
});

const whatWeDo = ref({
    orientation: 'image-left',
    heading: 'What <span class="text-brand-primary">We Do</span>',
    subheading: '',
    image: '/img/dreads.jpg',
    link: '/',
    content: 'At Acentria Group, we provide transformative solutions in Risk and Insurance, Reinsurance, Actuarial, Technology, and Investment Advisory. Success for us goes beyond exceptional service; it’s about creating sustainable solutions that benefit society, protect the environment, and create value for all our stakeholders.'
});

const ourJourney = ref({
    orientation: 'image-left',
    heading: 'Our <span class="text-brand-primary">Journey</span>',
    subheading: '',
    image: 'https://images.unsplash.com/photo-1628144527410-a4ba57eff3ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/',
    content: 'At Acentria Group, our journey is defined by resilience, vision, and dedication. We adapt to change while staying true to our mission of empowering businesses and communities. Together, we rise, shaping a future of shared prosperity and collective success.'
});

const ourLeadership = ref({
    orientation: 'image-right',
    heading: 'Our <span class="text-brand-primary">Leadership</span>',
    subheading: '',
    image: '/img/iStock-2148737980 Leadership.jpg',
    link: '/meet-the-team',
    content: 'Our leaders are dedicated to innovation and excellence. They drive growth, inspire change, and empower us to stay ahead in the industry, rising to new challenges and opportunities.'
});

const ourCulture = ref({
    orientation: 'image-left',
    heading: 'Our <span class="text-brand-primary">Culture</span>',
    subheading: '',
    image: 'https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/corporate-culture',
    content: 'The Acentria Way is not just about the work we do—it’s about how we do it. Our culture is the foundation of our success. We foster an innovative, supportive environment where everyone can thrive, delivering excellence and empowering our people and communities.'
});

const ourBrand = ref({
    orientation: 'image-right',
    heading: 'Our <span class="text-brand-primary">Brand</span>',
    subheading: '',
    image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/our-brand',
    content: 'Our brand promise is simple: "Done Smart." Every solution we deliver is designed with intelligence and innovation to empower clients in a rapidly evolving world.'
});


onMounted(() => {
    scrollToSection();
})
</script>

<template>
    <section class="bg-white">
        <Carousel2 :content="bannerMainContent" />

        <div class="container">
            <div class="sm:grid grid-cols-12 gap-2 py-5">

                <div class="hidden sm:block col-span-3 container max-w-6xl mx-auto justify-between content-center">
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

            <p class="container content pb-5">
                We offer a comprehensive suite of services designed to meet the evolving needs of our
                clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                and individuals to thrive in diverse areas, including:
            </p>

            <div class="container py-5">
                <h2 id="" class="section-heading pb-3  text-brand-primary">
                    <span class="text-black">
                        Our Vision |
                    </span>
                    Mission | <span class="text-black">Values</span>
                </h2>

                <div class="relative isolate overflow-hidden bg-black py-5 font-sans">
                    <NuxtImg format="webp" src="/img/tornado.png" alt=""
                        class="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="container relative mx-auto max-w-6xl px-6 lg:px-8">
                        <div>
                            <dl
                                class="font-sans pl-10 mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-10 text-white sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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


            <ContentPic :content="ourJourney" />
            <ContentPic :content="ourLeadership" />
            <ContentPic :content="ourCulture" />
            <ContentPic :content="ourBrand" />

        </div>
    </section>
</template>

<style scoped></style>