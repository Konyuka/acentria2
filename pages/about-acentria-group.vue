<script setup>
const InsuranceBannerContent = ref({
    subtitle: "About Acentria Group",
    title: `Empowering Dreams <br /> <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight"> Igniting Imagination </span>`,
    image:
        "https://acentriagroup.com/wp-content/uploads/2023/11/BeFunky-collage-1024x1024.jpg",
    content:
        "Acentria Group of companies is a trusted global consultant in Risk and Insurance, Reinsurance, Actuarial, and Investment Advisory.",
});

const profileModal = ref(false)
const profileBoardModal = ref(false)
const teamComponent = ref(null)
const teamBoardComponent = ref(null)
const profileData = computed(()=>{
    return teamComponent.value?.profileContent
})
const profileBoardData = computed(()=>{
    return teamBoardComponent.value?.profileContent
})

const openProfileModal = () => {
    profileModal.value = true
}
const openProfileBoardModal = () => {
    profileBoardModal.value = true
}

</script>

<template>
    <div>

        <div id="__next">
            <main class="jsx-2839774277 __className_e3c363 __ptNoRemap font-sans">


                <main>
                    <div>
                        <div>

                            <AboutHero1 :InsuranceBannerContent="InsuranceBannerContent" />

                            <!-- <AboutHero /> -->

                            <div data-v-02281a80="" class="font-sans py-6 text-white"
                                style="background-color: rgb(246, 248, 252);">
                                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                                    data-v-inspector="components/Why.vue:8:9">
                                    <div class="relative p-4 lg:basis-1/2" data-v-inspector="components/Why.vue:9:13">
                                        <img alt="Image of Elevate strategic risk management " loading="lazy"
                                            width="500" height="350" decoding="async" data-nimg="1"
                                            style="color:transparent;object-fit:contain;" class="rounded-lg"
                                            src="https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            data-v-inspector="components/Why.vue:10:17">
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:14:13"><label
                                            class="text-base leading-normal font-regular text-light-highlight font-bold"
                                            data-v-inspector="components/Why.vue:15:17">Acentria Group
                                        </label>
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:18:17">
                                            Who we are
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:22:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:23:21">
                                                Acentria Group of companies is a trusted global consultant that seeks to
                                                empower, innovate and steer growth and prosperity in Risk and Insurance,
                                                Reinsurance, Actuarial and Investment Advisory.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                                    data-v-inspector="components/Why.vue:32:9">
                                    <div class="relative p-4 lg:basis-1/2 content-center"
                                        data-v-inspector="components/Why.vue:33:13">
                                        <img alt="Image of Enable growth" loading="lazy" width="500" height="350"
                                            decoding="async" data-nimg="1" style="color:transparent;object-fit:contain;"
                                            class="rounded-lg"
                                            src="https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                            data-v-inspector="components/Why.vue:34:17">
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:38:13"><label
                                            class="text-base leading-normal font-regular text-light-highlight font-bold"
                                            data-v-inspector="components/Why.vue:39:17">Our Services
                                        </label>
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:42:17">
                                            What We Do
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:46:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:47:21">
                                                We offer the best solutions in Risk and Insurance, Reinsurance,
                                                Actuarial, and Investment Advisory. We consider the trust of our
                                                stakeholders and communities to be our most valuable resource. To us,
                                                success is not only measured by the products and services we offer, but
                                                more importantly, by providing innovative solutions that ensure
                                                sustainable development, and serve our environment and societies in the
                                                best way possible. Accordingly, we make sure that we are in compliance
                                                with laws and regulations and that we are investing in the public good
                                                in terms of the projects we take on, the partners we choose, and the way
                                                we do business We are committed to equal gender representation at all
                                                levels having archived a 50:50 senior management gender parity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                                    data-v-inspector="components/Why.vue:54:9">
                                    <div class="relative p-4 lg:basis-1/2 content-center"
                                        data-v-inspector="components/Why.vue:55:13">
                                        <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500"
                                            height="350" decoding="async" data-nimg="1"
                                            style="color:transparent;object-fit:contain;" class="rounded-lg"
                                            src="https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-adventure-night-road-trip-in-the-forest-aerial-view-of-a-car-headlights-on-deep-jungle-road-on-1932802550-transformed-1024x571.jpeg"
                                            data-v-inspector="components/Why.vue:56:17">
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:60:13"><label
                                            class="text-base leading-normal font-regular text-light-highlight font-bold"
                                            data-v-inspector="components/Why.vue:61:17">Experience</label>
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:63:17">
                                            Our journey
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:67:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:68:21">
                                                Our journey is about Empowering dreams, igniting imagination, and
                                                propelling prosperity to infinite possibilities for all our partners and
                                                the communities we serve. Internally we give a fair platform to all our
                                                employees to achieve their dreams.

                                                Our journey is a testament to humble beginnings, resilience,
                                                adaptability, and trust; it involves building a resilient and prosperous
                                                community. Through partnerships and collaborations, we have fostered
                                                resilience in individuals, businesses, and society as a whole.

                                                Our experience and expertise of over ten years have seen us grow to be
                                                one of the top-tier companies, with a niche in the provision of
                                                technical expertise in reinsurance, insurance actuarial, and investment
                                                advisory. With an in-depth understanding of the market, we provide
                                                solutions that are tailor-made to suit a client while assuring the
                                                client of value addition.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                                    data-v-inspector="components/Why.vue:32:9">
                                    <div class="relative p-4 lg:basis-1/2" data-v-inspector="components/Why.vue:33:13">
                                        <img alt="Image of Enable growth" loading="lazy" width="500" height="350"
                                            decoding="async" data-nimg="1" style="color:transparent;object-fit:contain;"
                                            class="rounded-lg"
                                            src="https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-leadership-and-synergy-concept-a-number-of-white-paper-arrow-against-a-bright-black-texture-439660462-transformed-1024x600.jpeg"
                                            data-v-inspector="components/Why.vue:34:17">
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2"
                                        data-v-inspector="components/Why.vue:38:13"><label
                                            class="text-base leading-normal font-regular text-light-highlight font-bold"
                                            data-v-inspector="components/Why.vue:39:17">The team
                                        </label>
                                        <h2 class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                                            data-v-inspector="components/Why.vue:42:17">
                                            Our Leadership
                                        </h2>
                                        <div class="text-light-content pb-5 md:pb-6"
                                            data-v-inspector="components/Why.vue:46:17">
                                            <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                                                data-v-inspector="components/Why.vue:47:21">
                                                Our success is driven by a dynamic and dedicated leadership team.
                                                Comprising individuals with diverse expertise and a shared commitment to
                                                excellence, our leaders play a pivotal role in shaping the vision,
                                                strategy, and culture of our organization.
                                                Meet the visionaries and strategists who lead us toward innovation,
                                                growth, and success.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Board @openBoardProfile="openProfileBoardModal" ref="teamBoardComponent" />

                            <Team @openProfile="openProfileModal" ref="teamComponent" />


                            <section class="relative py-4 lg:py-10" data-v-inspector="components/Cards.vue:8:9">
                                <div class="container px-4" data-v-inspector="components/Cards.vue:9:13">
                                    <div class="font-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-0"
                                        data-v-inspector="components/Cards.vue:10:17">

                                        <div class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[30vw] rounded-xl bg-white p-5 w-full h-full"
                                            data-v-inspector="components/Cards.vue:11:21">
                                            <div class="flex h-fit flex-col"
                                                data-v-inspector="components/Cards.vue:13:25"><i
                                                    class="fas fa-coffee text-brand-primary text-4xl pb-4"
                                                    translate="no" data-v-inspector="components/Cards.vue:14:29"></i>
                                                <div data-v-inspector="components/Cards.vue:15:29">
                                                    <h4 class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                                                        data-v-inspector="components/Cards.vue:16:33">
                                                        Our Purpose
                                                    </h4>
                                                </div>
                                                <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                                                    data-v-inspector="components/Cards.vue:21:29">
                                                    Empower our clients and communities through innovative solutions,
                                                    enhancing prosperity and adding value to a dynamic global
                                                    environment.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[30vw] rounded-xl bg-white p-5 w-full h-full"
                                            data-v-inspector="components/Cards.vue:29:21">
                                            <div class="flex h-fit flex-col"
                                                data-v-inspector="components/Cards.vue:31:25"><i
                                                    class="fas fa-lightbulb text-brand-primary text-4xl pb-4"
                                                    translate="no" data-v-inspector="components/Cards.vue:32:29"></i>
                                                <div data-v-inspector="components/Cards.vue:33:29">
                                                    <h4 class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                                                        data-v-inspector="components/Cards.vue:34:33"> Our Commitment
                                                    </h4>
                                                </div>
                                                <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                                                    data-v-inspector="components/Cards.vue:39:29">
                                                    Passionately remain at the forefront in empowering the vision of our
                                                    clients through igniting innovative thinking in offering the best
                                                    solutions to enhance prosperity.
                                                </p>
                                            </div>
                                        </div>

                                        <div class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[30vw] rounded-xl bg-white p-5 w-full h-full"
                                            data-v-inspector="components/Cards.vue:47:21">
                                            <div class="flex h-fit flex-col"
                                                data-v-inspector="components/Cards.vue:49:25"><i
                                                    class="fas fa-shield-alt text-brand-primary text-4xl pb-4"
                                                    translate="no" data-v-inspector="components/Cards.vue:50:29"></i>
                                                <div data-v-inspector="components/Cards.vue:51:29">
                                                    <h4 class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                                                        data-v-inspector="components/Cards.vue:52:33">
                                                        Our Promise
                                                    </h4>
                                                </div>
                                                <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                                                    data-v-inspector="components/Cards.vue:57:29">
                                                    Be your trusted partner, working tirelessly to provide the peace of
                                                    mind you deserve, knowing that your assets and interests are
                                                    safeguarded with care and expertise.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>


                            <div class="font-sans mx-auto mt-5 max-w-[93vw] px-6 sm:mt-10 lg:px-8 mb-10">
                                <div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
                                    <h2 class="text-3xl font-semibold text-brand-primary sm:text-4xl"> Our values
                                    </h2>
                                    <!-- <p class="mt-4 text-secondary text-md"> Our values are the guiding stars that
                                        illuminate our path to success, shaping our actions and defining our character.
                                    </p> -->
                                </div>
                                <dl
                                    class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                    <!--[-->
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-scale-balanced text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Integrity
                                            </dt>
                                            <dd class="mt-1 text-secondary text-sm">We do the right thing, through
                                                honoring our commitments to our clients.</dd>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-award text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Excellence
                                            </dt>
                                            <dd class="mt-1 text-secondary text-sm">We strive to deliver the highest
                                                levels of service and product excellence.</dd>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-lightbulb text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Innovative
                                            </dt>
                                            <dd class="mt-1 text-secondary text-sm">Acentria Group seek to use unique
                                                and creative solutions in solving problems affecting our clients.</dd>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-users text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Teamwork</dt>
                                            <dd class="mt-1 text-secondary text-sm">Acentria Group continuously promote
                                                team spirit among its staff and stakeholders to attain its goals.</dd>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-handshake text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Relationships
                                            </dt>
                                            <dd class="mt-1 text-secondary text-sm">We value the relationships built
                                                with our clients and partners.</dd>
                                        </div>
                                    </div>
                                    <div
                                        class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-3 rounded-md group">
                                        <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                                            <div
                                                class="flex items-center justify-center h-20 w-20 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                                                <i
                                                    class="fas fa-chart-line text-5xl text-brand-primary group-hover:text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <dt class="font-semibold text-xl !text-black tracking-widest">Growth &amp;
                                                Prosperity</dt>
                                            <dd class="mt-1 text-secondary text-sm">We embrace opportunities to learn
                                                and improve.</dd>
                                        </div>
                                    </div><!--]-->
                                </dl>
                            </div>

                            <Stats />

                            <!-- <Esg /> -->



                            <div class="py-6 text-white xl:py-12" style="background-color: #f6f8fc">
                                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                                    <div class="relative p-4 lg:basis-1/2">
                                        <img alt="Image of null" loading="lazy" width="500" height="350"
                                            decoding="async" data-nimg="1"
                                            style="color: transparent; object-fit: contain"
                                            src="/img/team.jpeg" class="rounded-xl" />
                                    </div>
                                    <div class="flex flex-col justify-center lg:basis-1/2">
                                        <div class="text-light-content pb-5 md:pb-6">
                                            <h2 id=""
                                                class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                                                <span
                                                    class="font-sans text-brand-primary pb-0 sm:pb-0 md:!pb-0 lg:pb-0 xl:pb-0 xl:text-4xl 2xl:text-4xl">Join
                                                    us</span>
                                                and make an impact!
                                            </h2>
                                            <p
                                                class="font-sans text-base leading-normal font-regular text-light-content !text-inherit mb-4">
                                                At Acentria Group, we are catalysts of transformation. We are redefining
                                                how businesses operate, reshaping the way industries function, and
                                                empowering decision-makers to drive impactful change—for their
                                                organizations and the world at large.
                                                <br><br>
                                                We believe that significant growth occurs when you're leading the charge
                                                in creating extraordinary change. When you embrace challenges you've
                                                never faced before and discover solutions that once seemed out of reach.
                                                <br><br>
                                                We are a global team united by a common vision for the future of
                                                businesses. We invite you to join us in bringing that vision to life.
                                            </p>
                                        </div>
                                        <a href="careers/index.html"
                                            class="button-animation cursor-pointer font-semibold text-brand-primary hover:text-brand-primary-dark text-base relative flex items-center w-fit self-center md:self-start">
                                            Careers Page
                                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px]"
                                                fill="none" stroke="currentColor" viewBox="0 0 10 10"
                                                aria-hidden="true">
                                                <g fill-rule="evenodd">
                                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                                    <path
                                                        class="transition-all duration-75 translate-x-0 transform-none"
                                                        d="M1 1l4 4-4 4"></path>
                                                </g>
                                            </svg></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>


            </main>
        </div>

        <div v-if="profileModal" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div @click="profileModal = false" class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        class="relative transform overflow-hidden rounded-lg bg-gray-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[80vw] sm:p-6">

                        <div class="flex h-full">


                            <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
                                <div class="lg:hidden">
                                    <div
                                        class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                                        <div>
                                            <img class="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                                                alt="Your Company">
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                                                <span class="sr-only">Open sidebar</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative z-0 flex flex-1 overflow-hidden">
                                    <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                                        <!-- Breadcrumb -->
                                        <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                                            aria-label="Breadcrumb">
                                            <a href="#"
                                                class="inline-flex items-center space-x-3 text-sm font-medium text-brand-primary">
                                                <svg class="-ml-2 h-5 w-5 text-brand-primary" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>Directory</span>
                                            </a>
                                        </nav>

                                        <article>
                                            <!-- Profile header -->
                                            <div>
                                                <div>
                                                    <img class="h-20 w-full object-cover lg:h-16"
                                                        src="https://cdn.sanity.io/images/33u1mixi/production/9586fc11ddcb60222de682cdb07fe9d57103448b-1440x595.svg?fit=max&amp;auto=format"
                                                        alt="">
                                                </div>
                                                <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                        <div class="flex">
                                                            <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                :src="profileData.image" alt="">
                                                        </div>
                                                        <div
                                                            class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                            <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                                <h1 class="truncate text-2xl font-bold text-gray-900">
                                                                    {{ profileData.name }}
                                                                </h1>
                                                            </div>
                                                            <div
                                                                class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                                <a :href="'mailto:' + profileData.email" type="button"
                                                                    class="button-animation inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                                    <i
                                                                        class="fas fa-paper-plane text-lg text-brand-primary"></i>
                                                                    <span class="mt-1">Contact on Mail</span>
                                                                </a>
                                                                <a :href="profileData.linkedin" target="_blank"
                                                                    class="button-animation inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                                    <i
                                                                        class="fab fa-linkedin text-lg text-brand-primary"></i>
                                                                    <span class="mt-1">Contact on LinkedIn</span>
                                                                </a>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mt-2 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                                                        <h1 class="truncate text-2xl font-bold text-gray-900">{{
                                                            profileData.name }}</h1>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Description list -->
                                            <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                                                    <div class="sm:col-span-1">
                                                        <!-- <dt class="text-lg font-semibold text-black">Title</dt> -->
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileData.title }}
                                                        </dd>
                                                    </div>
                                                    <!-- <div class="sm:col-span-1">
                                                        <dt class="text-sm font-semibold text-black">Email</dt>
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileData.email }}
                                                        </dd>
                                                    </div> -->


                                                    <div class="sm:col-span-2">
                                                        <dt class="text-sm font-semibold text-black">About</dt>
                                                        <dd class="max-w-full space-y-1 text-[13px] text-gray-900">
                                                            <p>
                                                                {{ profileData.profile }}
                                                            </p>

                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>


                                        </article>
                                    </main>

                                </div>
                            </div>
                        </div>


                        <div class="font-sans mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                            <button @click="profileModal=false" type="button"
                                class="inline-flex w-full justify-center rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">
                                Close Profile
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="profileBoardModal" class="relative z-50" aria-labelledby="modal-title" role="dialog"
            aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div @click="profileBoardModal = false" class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        class="relative transform overflow-hidden rounded-lg bg-gray-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[80vw] sm:p-6">

                        <div class="flex h-full">


                            <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
                                <div class="lg:hidden">
                                    <div
                                        class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                                        <div>
                                            <img class="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                                                alt="Your Company">
                                        </div>
                                        <div>
                                            <button type="button"
                                                class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                                                <span class="sr-only">Open sidebar</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="relative z-0 flex flex-1 overflow-hidden">
                                    <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                                        <!-- Breadcrumb -->
                                        <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                                            aria-label="Breadcrumb">
                                            <a href="#"
                                                class="inline-flex items-center space-x-3 text-sm font-medium text-brand-primary">
                                                <svg class="-ml-2 h-5 w-5 text-brand-primary" viewBox="0 0 20 20"
                                                    fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                                <span>Directory</span>
                                            </a>
                                        </nav>

                                        <article>
                                            <!-- Profile header -->
                                            <div>
                                                <div>
                                                    <img class="h-20 w-full object-cover lg:h-16"
                                                        src="https://cdn.sanity.io/images/33u1mixi/production/9586fc11ddcb60222de682cdb07fe9d57103448b-1440x595.svg?fit=max&amp;auto=format"
                                                        alt="">
                                                </div>
                                                <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                        <div class="flex">
                                                            <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                :src="profileBoardData.image" alt="">
                                                        </div>
                                                        <div
                                                            class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                            <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                                <h1 class="truncate text-2xl font-bold text-gray-900">
                                                                    {{ profileBoardData.name }}
                                                                </h1>
                                                            </div>
                                                            <div
                                                                class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                                <!-- <button type="button"
                                                                    class="button-animation inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                                    <i
                                                                        class="fas fa-paper-plane text-lg text-brand-primary"></i>
                                                                    <span class="mt-1">Contact on Mail</span>
                                                                </button> -->
                                                                <!-- <button type="button"
                                                                    class="button-animation inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                                    <i
                                                                        class="fab fa-linkedin text-lg text-brand-primary"></i>
                                                                    <span class="mt-1">Contact on LinkedIn</span>
                                                                </button> -->

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mt-2 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                                                        <h1 class="truncate text-2xl font-bold text-gray-900">{{
                                                            profileBoardData.name }}</h1>
                                                    </div>
                                                </div>
                                            </div>


                                            <!-- Description list -->
                                            <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                                                    <div class="sm:col-span-1">
                                                        <!-- <dt class="text-lg font-semibold text-black">Title</dt> -->
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileBoardData.title
                                                            }}
                                                        </dd>
                                                    </div>
                                                    <!-- <div class="sm:col-span-1">
                                                        <dt class="text-sm font-semibold text-black">Email</dt>
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileBoardData.email
                                                            }}
                                                        </dd>
                                                    </div> -->


                                                    <div class="sm:col-span-2">
                                                        <dt class="text-sm font-semibold text-black">About</dt>
                                                        <dd class="max-w-full space-y-1 text-[13px] text-gray-900">
                                                            <p>
                                                                {{ profileBoardData.profile }}
                                                            </p>

                                                        </dd>
                                                    </div>
                                                </dl>
                                            </div>


                                        </article>
                                    </main>

                                </div>
                            </div>
                        </div>


                        <div class="font-sans mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                            <button @click="profileModal = false" type="button"
                                class="inline-flex w-full justify-center rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2">
                                Close Profile
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped></style>