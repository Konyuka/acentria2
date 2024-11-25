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
                            Acentria Group of companies is a trusted global consultant that seeks to empower, innovate
                            and steer growth and prosperity in Risk and Insurance, Reinsurance, Actuarial, Technology
                            and Investment Advisory.
                            With a decade of expertise and an unwavering commitment to excellence, we craft tailored
                            solutions that empower our clients to thrive. Our innovative approach to risk management,
                            insurance optimization, and investment advisory ensures you’re always ahead of the curve.
                            When you partner with Acentria Group, you’re not just accessing solutions—you’re unlocking a
                            world of knowledge and resources designed to mitigate risks, maximize opportunities, and
                            achieve your financial goals. Trust us to turn challenges into opportunities and ambition
                            into achievement.

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
                                At Acentria Group, we deliver transformative products and solutions in Risk and
                                Insurance, Reinsurance, Actuarial, Investment Advisory, and Technology. We believe our
                                greatest asset is the trust of our clients and communities. Success, for us, isn’t just
                                about delivering exceptional services—it’s about creating sustainable, impactful
                                solutions that benefit society and protect the environment.
                                Every project we undertake, every partner we collaborate with, and every decision we
                                make reflects our commitment to compliance, ethical practices, and the public good. With
                                an unwavering focus on equality, we’re proud to have achieved a 50:50 gender parity in
                                senior management, setting a benchmark for inclusivity across industries.

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
                                At Acentria Group, our journey is a testament to resilience, vision, and the boundless
                                possibilities that come with dedication. From our humble beginnings, we have evolved,
                                adapting to the changing times while staying true to our mission of empowering
                                individuals, businesses, and communities.
                                Our growth is deeply rooted in the dreams we nurture—both for our clients and for our
                                team. By championing equal opportunities, we’ve built a culture where everyone can
                                contribute and thrive, laying the foundation for shared success.
                                Through strategic partnerships and impactful collaborations, we’ve worked hand in hand
                                with our stakeholders to strengthen foundations and achieve sustainable progress.
                                Together, we are shaping a future defined by resilience and shared prosperity. Be part
                                of our extraordinary journey as we continue to reimagine what’s possible.

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

            <Awards />
        </div>

    </section>
</template>

<style scoped></style>