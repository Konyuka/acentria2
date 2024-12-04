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
        <BannerMain :content="bannerContent" />

        <div class="bg-white px-6 py-1 font-sans mt-auto">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative py-4 lg:basis-1/2 scale-90">
                    <NuxtImg alt="Image of Elevate strategic risk management" loading="lazy" width="500" height="400"
                        decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                        class="rounded-lg" src="/img/cover.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold">Acentria
                        Group</label>
                    <h2 class="heading-class mb-4">
                        Who <span class="text-brand-primary">We Are</span>
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                        <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
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

            <div class="bg-white px-6 py-1 font-sans">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2 content-center">
                        <NuxtImg alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                            data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                            src="/img/what.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <label class="text-base leading-normal font-regular text-light-highlight font-bold">Our
                            Services</label>
                        <h2 class="heading-class mb-4">
                            What <span class="text-brand-primary">We Do</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
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
                        <label
                            class="text-base leading-normal font-regular text-light-highlight font-bold">Experience</label>
                        <h2 class="heading-class mb-4">
                            Our <span class="text-brand-primary">Journey</span>
                        </h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
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
        </div>
    </section>
</template>

<style scoped></style>