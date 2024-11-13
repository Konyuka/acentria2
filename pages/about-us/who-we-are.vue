<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Who We Are',
    image: 'https://img.freepik.com/free-vector/v915-red_53876-174930.jpg?t=st=1728266840~exp=1728270440~hmac=e94c9d586c21dc1e57888d5e3b499c5109a624670b07a4c6188be1f6b9a5686b&w=826',
})

const bannerContent = ref({
    subtitle: 'About Us',
    title: 'About Acentria Group',
    image: 'https://images.pexels.com/photos/7413967/pexels-photo-7413967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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

onMounted(()=>{
    // scrollToSetScroll();
    // const element = document.getElementById('mission-tabs')
    // const scrollTo = (element) => {
    //     window.scroll({
    //         behavior: 'smooth',
    //         left: 0,
    //         top: element.offsetTop
    //     });
    // }
})
</script>

<template>
    <section class="bg-white">
        <!-- <ReinsuranceBanner :content="ReinsuranceBannerContent" /> -->
        <BannerMain :content="bannerContent" />

        <div class="bg-white px-6 py-1  font-sans mt-auto">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                data-v-inspector="components/Why.vue:8:9">
                <div class="relative py-4 lg:basis-1/2 scale-90" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/innovate.png" data-v-inspector="components/Why.vue:10:17" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                        data-v-inspector="components/Why.vue:15:17">Acentria Group
                    </label>
                    <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                        data-v-inspector="components/Why.vue:18:17">
                        Who we are
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                            data-v-inspector="components/Why.vue:23:21">
                            Acentria Group of companies is a trusted global
                            consultant in Risk and Insurance, Reinsurance,
                            Actuarial, and Investment Advisory. With decades of
                            experience and a commitment to excellence, we provide
                            comprehensive solutions tailored to meet the unique
                            needs of our clients. Our team of experts works
                            diligently to deliver innovative strategies that enhance
                            risk management, optimize insurance and reinsurance
                            programs, and provide insightful actuarial and
                            investment advice. By partnering with Acentria Group,
                            you gain access to a wealth of knowledge and resources
                            that empower you to make informed decisions, mitigate
                            risks, and achieve your financial goals.
                        </p>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1  font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                    data-v-inspector="components/Why.vue:32:9">
                    <div class="relative py-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:33:13">
                        <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                            src="/img/what.jpg" data-v-inspector="components/Why.vue:34:17" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                        <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                            data-v-inspector="components/Why.vue:39:17">Our Services
                        </label>
                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                            data-v-inspector="components/Why.vue:42:17">
                            What We Do
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:46:17">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                                data-v-inspector="components/Why.vue:47:21">
                                We offer the best solutions in Risk and Insurance,
                                Reinsurance, Actuarial, and Investment Advisory. We
                                consider the trust of our stakeholders and communities
                                to be our most valuable resource. To us, success is not
                                only measured by the products and services we offer, but
                                more importantly, by providing innovative solutions that
                                ensure sustainable development, and serve our
                                environment and societies in the best way possible.
                                Accordingly, we make sure that we are in compliance with
                                laws and regulations and that we are investing in the
                                public good in terms of the projects we take on, the
                                partners we choose, and the way we do business We are
                                committed to equal gender representation at all levels
                                having archived a 50:50 senior management gender parity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white px-6 py-1  font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                    data-v-inspector="components/Why.vue:54:9">
                    <div class="relative py-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:55:13">
                        <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                            decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-lg" src="/img/bill.jpg" data-v-inspector="components/Why.vue:56:17" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:60:13">
                        <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                            data-v-inspector="components/Why.vue:61:17">Experience</label>
                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                            data-v-inspector="components/Why.vue:63:17">
                            Our journey
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:67:17">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4"
                                data-v-inspector="components/Why.vue:68:21">
                                Our journey is about Empowering dreams, igniting
                                imagination, and propelling prosperity to infinite
                                possibilities for all our partners and the communities
                                we serve. Internally we give a fair platform to all our
                                employees to achieve their dreams. Our journey is a
                                testament to humble beginnings, resilience,
                                adaptability, and trust; it involves building a
                                resilient and prosperous community. Through partnerships
                                and collaborations, we have fostered resilience in
                                individuals, businesses, and society as a whole.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section id="" class="relative py-5 bg-white text-left">
                <div class="container px-4">

                    <div class="my-1">
                        <MissionTabs ref="mission" />
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-1 gap-5 mt-4">
                        <div class="font-sans content-center items-center grid grid-cols-1 gap-5">
                            <div v-show="selectedMenu == 'vision'" class="flex flex-row gap-2 justify-center">

                                <div class="mt-10 container mx-auto flex px-4 lg:flex-row flex-col lg:gap-0 justify-around"
                                    data-v-inspector="components/Why.vue:54:9">
                                    <div class="relative py-4 lg:basis-1/2 content-center"
                                        data-v-inspector="components/Why.vue:55:13">
                                        <img alt="Image of Ensure regulatory compliance" loading="lazy" width="400"
                                            height="350" decoding="async" data-nimg="1"
                                            style="color: transparent; object-fit: contain" class="rounded-lg"
                                            src="https://images.pexels.com/photos/175744/pexels-photo-175744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            data-v-inspector="components/Why.vue:56:17" />
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:60:13">
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:63:17">
                                            Our <span class="text-brand-primary">Vision</span>
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:67:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:68:21">
                                                To be a global leader empowering prosperity.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div v-show="selectedMenu == 'mission'" class="flex flex-row gap-2 justify-center">

                                <div class="mt-10 container mx-auto flex px-4 lg:flex-row flex-col lg:gap-0"
                                    data-v-inspector="components/Why.vue:54:9">
                                    <div class="relative py-4 lg:basis-1/2 content-center"
                                        data-v-inspector="components/Why.vue:55:13">
                                        <img alt="Image of Ensure regulatory compliance" loading="lazy" width="400"
                                            height="350" decoding="async" data-nimg="1"
                                            style="color: transparent; object-fit: contain" class="rounded-lg"
                                            src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            data-v-inspector="components/Why.vue:56:17" />
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:60:13">
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:63:17">
                                            Our <span class="text-brand-primary">Mission</span>
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:67:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:68:21">
                                                To provide financial and risk advisory services through
                                                innovations that
                                                empower our clients’ prosperity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div v-show="selectedMenu == 'values'" class="font-sans mx-auto max-w-[93vw] px-6 lg:px-8 mb-10">

                        <dl
                            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-3 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i
                                            class="fas fa-scale-balanced text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Integrity
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        We do the right thing, through honoring our commitments
                                        to our clients.
                                    </dd>
                                </div>
                            </div>
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i class="fas fa-award text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Excellence
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        Deliver the highest levels of service and
                                        product excellence.
                                    </dd>
                                </div>
                            </div>
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i
                                            class="fas fa-lightbulb text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Innovative
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        Seek to use unique and creative solutions
                                        in solving problems.
                                    </dd>
                                </div>
                            </div>
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i class="fas fa-users text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Teamwork
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        Continuously promote team spirit among
                                        its staff and stakeholders.
                                    </dd>
                                </div>
                            </div>
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i
                                            class="fas fa-handshake text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Relationships
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        We value the relationships built with our clients and
                                        partners.
                                    </dd>
                                </div>
                            </div>
                            <div
                                class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                                <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                    <div
                                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                        <i
                                            class="fas fa-chart-line text-xl text-brand-primary group-hover:text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <dt class="font-semibold text-xl !text-black">
                                        Growth &amp; Prosperity
                                    </dt>
                                    <dd class="mt-1 text-secondary text-sm">
                                        We embrace opportunities to learn and improve.
                                    </dd>
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <div class="bg-white px-6 py-1  font-sans">
                <section class="relative mb-10 mt-5">
                    <div class="font-sans container px-4">
                        <div class="pb-7 text-center">
                            <h2 id=""
                                class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                                <span
                                    class="font-sans text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-4xl 2xl:text-4xl">
                                    Awards
                                </span>
                                and Recognitions
                            </h2>
                        </div>
                        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-0">
                            <a class="button-animation cursor-pointer relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                                href="resources/blog/preparing-for-ai-regulations.html">
                                <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                    <div
                                        class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                        <div
                                            class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                            <figure
                                                class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                                <div class="h-0 w-full max-w-full pb-[75%]">
                                                    <div
                                                        class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                        <picture class="flex h-[300px] w-full max-w-none">
                                                            <img alt="AI is here. AI regulations are on the way. Is your board ready?"
                                                                loading="lazy" decoding="async" data-nimg="fill"
                                                                class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw" src="../cdn.sanity.io/images/33u1mixi/production/7ef13321754c150f46ae8370675e14d1efce6c2e-1080x72097c5.jpg?w=3840&amp;q=90&amp;fit=clip&amp;auto=format" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                                    </div>
                                </div>
                                <div
                                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                                    <section class="grid items-start justify-start gap-y-3">
                                        <div class="relative flex min-h-[100px] flex-col gap-y-1">

                                            <h6
                                                class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                                                Award 1
                                            </h6>
                                        </div>

                                    </section>
                                </div>

                            </a>
                            <a class="button-animation cursor-pointer relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                                href="resources/guides/elevating-grc-maturity.html">
                                <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                    <div
                                        class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                        <div
                                            class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                            <figure
                                                class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                                <div class="h-0 w-full max-w-full pb-[75%]">
                                                    <div
                                                        class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                        <picture class="flex h-[300px] w-full max-w-none">
                                                            <img alt="Stronger consolidation: Elevating your GRC maturity for better risk management"
                                                                loading="lazy" decoding="async" data-nimg="fill"
                                                                class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw" src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                                    </div>
                                </div>
                                <div
                                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                                    <section class="grid items-start justify-start gap-y-3">
                                        <div class="relative flex min-h-[100px] flex-col gap-y-1">
                                            <h6
                                                class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                                                Award 2
                                            </h6>
                                        </div>
                                    </section>
                                </div>

                            </a>
                            <a class="button-animation cursor-pointer relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                                href="resources/guides/grc-vendor-consolidation-checklist.html">
                                <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                    <div
                                        class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                        <div
                                            class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                            <figure
                                                class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                                <div class="h-0 w-full max-w-full pb-[75%]">
                                                    <div
                                                        class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                        <picture class="flex h-[300px] w-full max-w-none">
                                                            <img alt="Your guide to GRC vendor consolidation"
                                                                loading="lazy" decoding="async" data-nimg="fill"
                                                                class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw" src="https://images.pexels.com/photos/12442888/pexels-photo-12442888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                                    </div>
                                </div>
                                <div
                                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                                    <section class="grid items-start justify-start gap-y-3">
                                        <div class="relative flex min-h-[100px] flex-col gap-y-1">
                                            <h6
                                                class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                                                Award 3
                                            </h6>
                                        </div>
                                    </section>
                                </div>
                            </a>
                            <a class="button-animation cursor-pointer relative flex h-[388px] max-h-[388px] min-h-[72px] min-w-[100px] flex-col justify-between overflow-hidden rounded-lg bg-brand-white shadow-card"
                                href="resources/blog/the-case-for-purpose-built-software.html">
                                <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                    <div
                                        class="ease relative z-[3] aspect-[1.5] w-full origin-top overflow-hidden rounded transition-transform duration-500 will-change-transform">
                                        <div
                                            class="ease absolute left-0 top-0 aspect-[1.5] w-full origin-top overflow-hidden transition-transform duration-500 will-change-transform">
                                            <figure
                                                class="ease absolute h-full w-full max-w-sm origin-top rounded transition-transform duration-500 will-change-transform">
                                                <div class="h-0 w-full max-w-full pb-[75%]">
                                                    <div
                                                        class="absolute left-0 top-0 h-full w-full origin-center will-change-transform">
                                                        <picture class="flex h-[300px] w-full max-w-none">
                                                            <img alt="The case for purpose-built software: Why tailored programming outperforms modified solutions"
                                                                loading="lazy" decoding="async" data-nimg="fill"
                                                                class="object-center object-cover" style="
                                        position: absolute;
                                        height: 100%;
                                        width: 100%;
                                        left: 0;
                                        top: 0;
                                        right: 0;
                                        bottom: 0;
                                        color: transparent;
                                      " sizes="240w 100vw" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" />
                                                        </picture>
                                                    </div>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                    <div
                                        class="ease absolute left-0 top-0 z-[2] aspect-[1.5] w-full rounded-b bg-brand-primary transition-transform duration-500 will-change-transform">
                                        <div class="relative flex min-h-[100px] flex-col gap-y-1">

                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="ease relative z-10 grid gap-2 bg-brand-white px-4 py-6 transition-transform duration-500 will-change-transform translate-y-0">
                                    <section class="grid items-start justify-start gap-y-3">
                                        <div class="relative flex min-h-[100px] flex-col gap-y-1">
                                            <h6
                                                class="font-sans tracking-normal text-base lg:text-lg text-gray-900 font-semibold leading-tight lg:leading-tight">
                                                Award 4
                                            </h6>
                                        </div>
                                    </section>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    </section>
</template>

<style scoped></style>