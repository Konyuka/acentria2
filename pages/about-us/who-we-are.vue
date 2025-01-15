<script setup>
const bannerContent = ref({
    subtitle: 'About Us',
    title: 'About Acentria Group',
    image: '/img/About Acentria Group- Cover photo-2472155125.jpg'
})


const mission = ref(null)
const selectedMenu = computed(() => {
    return mission.value?.currentMenu
})

const scrollToSetScroll = () => {
    const setScroll = localStorage.getItem('scrollTo');
    console.log(setScroll);
};

const router = useRoute();
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
        icon: 'fas fa-dollar-sign',
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

onMounted(() => {
    scrollToSection();
})
</script>

<template>
    <section class="bg-white">
        <BannerMain :content="bannerContent" />

        <div class="container py-2">
            <div class="mt-10">
                <h1 class="text-4xl font-semibold text-center">Welcome to <span class="text-brand-primary">Acentria
                        Group</span>
                </h1>
                <p class="mt-5 text-xs leading-normal text-center">
                    At Acentria Group, we shape the future of our partners through our expertise and solutions by
                    EMPOWERING the vision of our clients and communities. Through INNOVATIVE thinking, we deliver the
                    best solutions that enhance PROSPERITY. We are constantly seeking better ways to manage risk,
                    guiding effective pathways to achieve SMART and sustainable outcomes.
                    <br><br><br>
                    <span class="tracking-widest font-semibold italic text-[20px] text-gray-600 tm-10">
                        Let us help you navigate the complexities of today’s world and unlock your true potential.
                    </span>
                </p>
            </div>
        </div>

        <div class="bg-white py-1 font-sans mt-5">

            <div id="Who we are" class="container mx-auto flex lg:flex-row flex-col my-8 lg:my-4 lg:gap-2">
                <div class="relative py-4 lg:basis-1/2 scale-90">
                    <NuxtImg alt="Image of Elevate strategic risk management" loading="lazy" width="500" height="300"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/social.jpg" />
                </div>

                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="text-2xl font-semibold text- mb-4">
                        Who <span class="text-brand-primary">We Are</span>
                    </h2>
                    <div class="text-black pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                            Acentria Group of Companies is a trusted global consultant dedicated to empowering growth
                            and
                            prosperity in Risk and Insurance, Reinsurance, Actuarial, Technology, and Investment
                            Advisory.
                            With over a decade of expertise and an unwavering commitment to excellence, we craft
                            tailored
                            solutions that empower our clients to thrive. Our innovative approach to risk management,
                            insurance
                            optimization, and investment advisory ensures you’re always ahead of the curve.
                            When you partner with Acentria Group, you’re not just accessing solutions—you’re unlocking a
                            world
                            of knowledge and resources designed to mitigate risks, maximize opportunities, and achieve
                            your
                            financial goals.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg v-motion-fade-visible alt="Image of Enable growth" loading="lazy" decoding="async"
                        data-nimg="1" style="color: transparent; object-fit: contain"
                        class="w-full h-[300px] shadow-2xl rounded-lg !object-cover" src="/img/inspire.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                        <h2 class="text-2xl font-semibold text-black">
                            Things that <span class="text-brand-primary">Inspire Us</span>
                        </h2>
                        <h3 class="text-xl font-semibold pb-4">
                            <span class="text-brand-primary">#</span> Empower <span class="text-brand-primary">#</span>
                            Innovate <span class="text-brand-primary">#</span> Prosper
                        </h3>
                        <p class="text-sm leading-normal text-light-content !text-inherit mb-4">
                            At Acentria Group, we are driven by our mantra: <br> <b>Empower, Innovate, Prosper.</b> <br>
                            We find inspiration in empowering individuals, businesses, and communities to achieve their
                            dreams. Innovation fuels our creativity, helping us craft transformative solutions that
                            tackle
                            today’s challenges. Prosperity motivates us to create lasting impact—building success
                            stories
                            that uplift not just our clients but society as a whole. Together, we turn possibilities
                            into
                            progress,
                            delivering excellence every step of the way.
                        </p>
                        <NuxtLink href="/things-that-inspire-us"
                            class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                            Learn More
                            <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>


            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Enable growth" loading="lazy" width="500" height="290" decoding="async"
                            data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                            src="/img/dreads.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="text-2xl font-semibold text- mb-4">
                            What <span class="text-brand-primary">We Do</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                At Acentria Group, we deliver transformative products and solutions in Risk and
                                Insurance, Reinsurance, Actuarial, Investment Advisory, and Technology. We believe our
                                greatest asset is the trust of our clients and communities. Success, for us, isn’t just
                                about delivering exceptional services—it’s about creating sustainable, impactful
                                solutions that benefit society and protect the environment.
                                Every project we undertake, every partner we collaborate with, and every decision we
                                make reflects our commitment to compliance, ethical practices, and the public good.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <h2 class="text-2xl font-semibold text- mb-4">
                    Our <span class="text-brand-primary">Capabilities</span>
                </h2>
            </div>

            <div class="container mx-auto text-black">
                <p>At Acentria Group, we offer a comprehensive suite of services tailored to meet the evolving
                    needs
                    of our clients. Through innovation, expertise, and unwavering dedication, we empower businesses
                    and individuals to thrive across the following areas.
                    <br><br>
                </p>
            </div>

            <div class="container grid grid-cols-3 gap-5 justify-between my-5 pb-10">

                <div class="">
                    <p class="text-start text-black">
                        We provide expert insights and innovative solutions designed to address complex challenges and
                        unlock new opportunities. Our capabilities span a diverse range of fields, enabling us to
                        deliver
                        customized strategies that drive growth, mitigate risks, and enhance prosperity in an
                        ever-changing global landscape.
                        <br><br>
                        With a focus on inclusivity, sustainability, and impactful results, we leverage our expertise to
                        ensure success for our clients, colleagues, and the communities we serve.
                    </p>
                </div>

                <div class="col-span-2">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        <NuxtLink :href="feature.url" v-for="feature in features"
                            class="button-animation flex px-3 py-2 shadow-md border-l-4 border-brand-primary">
                            <div class="mr-6">
                                <i :class="feature.icon" class="text-brand-primary text-xl"></i>
                            </div>
                            <div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="subheading-class text-left">
                                        {{ feature.title }}
                                    </p>

                                </div>

                                <div class="mt-1 text-black">
                                    <p>
                                        {{ feature.description }}
                                    </p>
                                </div>

                            </div>
                        </NuxtLink>
                    </div>
                </div>

            </div>

            <div class="container mb-5">
                <h2 id="" class="pb-4 md:pb-5 heading-class text-brand-primary">
                    <span class="heading-class">
                        Our Vision,
                    </span>
                    Mission & Values
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
                                    <dt class="subheading-class text-white">
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
                        <h2 class="heading-class mb-4">
                            Our <span class="text-brand-primary">Journey</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                At Acentria Group, our journey is a testament to resilience, vision, and the limitless
                                possibilities that come with dedication. From humble beginnings, we have evolved,
                                continuously adapting to the changing times while remaining true to our mission of
                                empowering individuals, businesses, and communities.
                                <br><br>
                                Our growth is rooted in the dreams we nurture—for our clients and our team. By
                                championing equal opportunities, we’ve fostered a culture where everyone has the chance
                                to contribute and thrive, laying the groundwork for shared success.
                                Through strategic partnerships and impactful collaborations, we’ve worked closely with
                                our stakeholders to strengthen foundations and achieve sustainable progress. Together,
                                we are shaping a future defined by resilience, shared prosperity, and collective
                                achievement.
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
                            class="rounded-lg" src="/img/suits.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <h2 class="heading-class mb-4">
                            Our <span class="text-brand-primary">Leadership</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                Our success is powered by a dynamic and dedicated leadership team. With diverse
                                expertise and a shared commitment to excellence, our leaders play a crucial role in
                                shaping our organization's vision, strategy, and culture.
                                <br><br>
                                Meet the visionaries and strategists driving innovation, growth, and success. Their
                                unwavering dedication and forward-thinking approach ensure we remain at the forefront of
                                our industry, consistently adapting to new challenges and seizing opportunities.
                            </p>
                            <NuxtLink href="/meet-the-team"
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
                        <h2 class="heading-class mb-4">
                            Our <span class="text-brand-primary">Culture</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                At Acentria Group, our corporate culture is the foundation of everything we do. It is
                                the fertile soil where seeds of promise grow into prosperity. Guided by a clear purpose,
                                our culture fosters a supportive, innovative, and dynamic environment where every
                                employee has the opportunity to thrive.
                                <br><br>
                                The Acentria Way is more than just about the work we do—it’s about how we do it. Our
                                values and principles shape every engagement, driving us to deliver excellence while
                                empowering our people and the communities we serve.
                            </p>
                            <NuxtLink href="/corporate-culture"
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
                        <h2 class="heading-class mb-4">
                            Our <span class="text-brand-primary">Brand</span>
                        </h2>
                        <div class="text-black pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-black !text-inherit mb-4">
                                At Acentria, our brand promise is simple yet powerful: &quot;Done Smart.&quot; Every
                                strategy, every service,
                                and every solution we deliver is designed with intelligence and innovation in mind. We
                                commit to
                                providing our clients with the smartest solutions, empowering them to thrive in an
                                ever-evolving
                                world. Our promise reflects the precision, thoughtfulness, and expertise we bring to
                                every project.
                            </p>
                            <NuxtLink href="/our-brand"
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