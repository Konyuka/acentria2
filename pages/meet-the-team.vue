<script setup>
const teamComponent = ref(null)
const teamBoardComponent = ref(null)
const profileModal = ref(false)
const profileBoardModal = ref(false)

const openProfileModal = () => {
    profileModal.value = true
}
const openProfileBoardModal = () => {
    profileBoardModal.value = true
}

const profileData = computed(() => {
    return teamComponent.value?.profileContent
})
const profileBoardData = computed(() => {
    return teamBoardComponent.value?.profileContent
})

const bannerContent = ref({
    subtitle: 'Meet the Team',
    title: 'Governance & Leadership',
    image: 'https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-leadership-and-synergy-concept-a-number-of-white-paper-arrow-against-a-bright-black-texture-439660462-transformed-1024x600.jpeg'
})

const currentMenu = ref('Board');
const setMenu = (menu) => {
    currentMenu.value = menu
}
const setMobileMenu = (event) => {
    const selectedValue = event.target.value;
    currentMenu.value = selectedValue
}

</script>

<template>
    <section class="min-h-screen bg-white">



        <BannerMain :content="bannerContent" />

        <div class="max-w-6xl justify-center mx-auto mt-10">
            <div class="sm:hidden px-4">
                <label for="tabs" class="sr-only">Select a tab</label>
                <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                <select @change="setMobileMenu($event)" id="tabs" name="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary py-2 font-bold">
                    <option selected value="blogs">Blogs</option>
                    <option value="event">Events</option>
                    <option value="media">Media</option>
                </select>
            </div>
            <div class="hidden sm:block font-sans">
                <div class="divide-x divide-gray-200 ">
                    <nav class="-mb-px flex font-sans gap-40" aria-label="Tabs">
                        <button @click="setMenu('Governance')"
                            :class="[currentMenu == 'Governance' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4  px-1 py-4 text-center text-md subheading-class   hover:text-brand-primary">
                            <i class="fas fa-images mr-2"></i> Corporate Governance
                        </button>
                        <button @click="setMenu('Board')"
                            :class="[currentMenu == 'Board' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4 px-1 py-4 text-center text-md subheading-class   hover:text-brand-primary">
                            <i class="fas fa-blog mr-2"></i> Board of Directors
                        </button>
                        <button @click="setMenu('Executive')"
                            :class="[currentMenu == 'Executive' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4 px-1 py- text-center text-md subheading-class   hover:text-brand-primary">
                            <i class="fas fa-calendar-alt mr-2"></i> Management Team
                        </button>

                    </nav>
                </div>
            </div>
        </div>

        <Board v-if="currentMenu == 'Board'" @openBoardProfile="openProfileBoardModal" ref="teamBoardComponent" />

        <Team v-if="currentMenu == 'Executive'" @openProfile="openProfileModal" ref="teamComponent" />

        <div v-if="currentMenu == 'Governance'" class="container">
            <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover pt-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-left">
                            <div>
                                <h1 id="" class="heading-class text-brand-primary">
                                    <span class="text-black">Leadership & </span>
                                    Corporate Governance
                                </h1>
                                <h5 class="!capitalize text-lg mb-2 font-semibold">
                                    Transforming to <span class="text-brand-primary">become more responsible</span>
                                </h5>

                                <p class="font-sans tracking-normal text-xs text-gray-900 leading-normal pb-2">

                                    At Acentria Group, corporate governance is more than a policy—it’s a way of life. It
                                    defines how we lead, operate, and serve. Built on a foundation of <b>Integrity,
                                        Innovation, and Excellence,</b> our governance framework ensures we deliver
                                    sustainable
                                    value while upholding the trust placed in us by our stakeholders.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="800" decoding="async"
                        data-nimg="1"
                        src="https://images.pexels.com/photos/3832684/pexels-photo-3832684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style="color: transparent; object-fit: contain;" class="rounded-lg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 ">
                        Corporate <span class="text-brand-primary">Governance</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">

                            At Acentria Group, we are committed to upholding the highest standards of corporate
                            governance, ensuring accountability, transparency, and ethical conduct in every aspect of
                            our operations. Our governance framework is designed to support long-term value creation,
                            foster trust with stakeholders, and ensure that we act responsibly in all our business
                            dealings.
                            <br><br>
                            We adhere to robust policies and practices that promote integrity, manage risks effectively,
                            and safeguard the interests of our clients, employees, shareholders, and the communities we
                            serve. Our leadership team, alongside the Board of Directors, plays a vital role in steering
                            the company toward sustainable growth while maintaining compliance with all regulatory
                            requirements and industry standards.
                            <br><br>
                            Through effective corporate governance, we strive to maintain a culture of excellence,
                            responsibility, and transparency—empowering us to build lasting relationships and deliver
                            consistent, high-quality results.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="200" decoding="async"
                        data-nimg="1"
                        src="https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style="color: transparent; object-fit: contain;" class="rounded-lg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 ">
                        Corporate Governance <span class="text-brand-primary">Philosophy</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                            Our business strategy is powered by our strong commitment to good governance, which goes
                            beyond compliance and statutory norms. We believe that purpose-led corporate governance and
                            ethics-led corporate behaviour are essential to our success.
                            <br><br>
                            Our business strategy is pillared around the twin approach of being structured as a group of
                            entities, each with its own individual management and systems, while also concurrently
                            functioning as a single unit oriented towards our collective purpose.
                            <br><br>
                            We draw from the insights and expertise of our illustrious and proficient directors and are
                            able to continuously predict and proactively manage our opportunities and risks to protect
                            and enhance our business value.
                        </p>
                    </div>
                </div>
            </div>


            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="700" decoding="async"
                        data-nimg="1"
                        src="https://images.pexels.com/photos/885880/pexels-photo-885880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style="color: transparent; object-fit: contain;" class="rounded-lg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 ">
                        Our Governance <span class="text-brand-primary">Policies</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                            At Acentria Group, our governance policies are the cornerstone of our commitment to
                            integrity, accountability, and transparency. We have established a robust framework to
                            ensure that all operations are conducted with the highest ethical standards, in full
                            compliance with legal and regulatory requirements.
                            Our policies cover key areas, including:
                            <br><br>
                            <span>
                                • <b>Board Oversight:</b> Clear guidelines for the roles and responsibilities of our
                                Board of
                                Directors, ensuring effective decision-making and strategic direction. <br>
                                • <b>Risk Management:</b> Comprehensive strategies to identify, assess, and mitigate
                                risks,
                                safeguarding the interests of our clients, employees, and shareholders. <br>
                                • <b>Compliance and Ethics:</b> A strong focus on maintaining compliance with laws and
                                regulations, as well as promoting ethical conduct and corporate social responsibility.
                                <br>
                                • <b>Transparency and Accountability:</b> Practices that foster open communication,
                                regular
                                reporting, and accountability at every level of the organization. <br>
                                • <b>Sustainability and Social Responsibility:</b> A commitment to responsible business
                                practices that contribute to the well-being of our communities and the environment.
                            </span>
                            <br><br>
                            These policies provide a framework that guides our operations, ensuring that we remain
                            aligned with our values and consistently deliver on our promise of excellence and integrity.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="400" decoding="async"
                        data-nimg="1"
                        src="https://images.pexels.com/photos/2801126/pexels-photo-2801126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style="color: transparent; object-fit: contain;" class="rounded-lg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 ">
                        Board <span class="text-brand-primary">Governance</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                            As we grow from strength to strength, we continue to raise the bar of performance across our
                            governance practices. These practices range from our ground-breaking ESG commitments to
                            best-in-class disclosure practices, Board independence, diversity and inclusion, alignment
                            to globally accepted norms and policies, as well as our emphasis on running a
                            digitally-enabled, technology-led business.
                            <br><br>
                            Our strong governance practices manifest our future transformation journey, with
                            ‘responsible change’ as a core mandate. It is our constant endeavour to not only stretch
                            ourselves more to ensure enhanced growth and value creation but also set newer benchmarks
                            for the industry and peers. We continue to be change-makers in everything we do, with good
                            governance as the cornerstone that empowers us in our transformational efforts.
                            <br><br>
                            Our Board ensures the implementation of the strategic objectives of the Company. It guides
                            the management to fulfil the commitments made to various stakeholders while upholding the
                            principles of ethical business conduct and responsible growth.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-2 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Risk Management" loading="lazy" width="500" height="400" decoding="async"
                        data-nimg="1"
                        src="https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        style="color: transparent; object-fit: contain;" class="rounded-lg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="heading-class pb-4 ">
                        ESG <span class="text-brand-primary">Governance</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                            As part of our strong and sustained commitment to ESG, we have implemented a uniform ESG
                            governance structure across the organization. The ESG Committee, together with our Group
                            Sustainability and ESG function, is mandated with the responsibility to activate, mainstream
                            and monitor initiatives under the ‘Transforming for Good’. We have also established
                            dedicated forums for regular management and oversight at all levels.
                            In conducting its business, the Board is supported by:
                            <br><br>
                            <span>
                                • Established Committees <br>
                                • Risk Management Framework <br>
                                • Acentria Group Sustainability Framework <br>
                                • Code of Business Conduct and Ethics, and various other policies and practices adopted
                                by the Group
                            </span>
                        </p>
                    </div>
                </div>
            </div>


        </div>

        <div v-if="profileBoardModal" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">
            <div class="fixed inset-0 bg-black/20"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-3xl pl-10">

                        <div class="pointer-events-auto w-screen max-w-3xl">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div class="px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-base font-semibold leading-6 text-gray-900"
                                            id="slide-over-title">
                                            Profile Details
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="profileBoardModal = false" type="button"
                                                class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                                <span class="absolute -inset-2.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div class="relative z-0 flex flex-1 overflow-hidden">
                                        <main
                                            class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">

                                            <article>
                                                <!-- Profile header -->
                                                <div>
                                                    <div>
                                                        <div class=" w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-0 -mt-3 sticky top-[22vh] -z-20"
                                                            style="background-image:url('/img/bg.png');">
                                                            <div class="container">
                                                                <div
                                                                    class="flex items-center bg-cover px-4 py-1 text-center md:py-7 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                                                                    <div
                                                                        class="min-h-[20vh] flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                            <div class="flex">
                                                                <NuxtImg
                                                                    class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                    :src="profileBoardData.image" alt="" />
                                                                <div class="mt-14 sm:ml-6 sm:flex-1">
                                                                    <div>
                                                                        <div class="flex items-center">
                                                                            <h3 id=""
                                                                                class="text-xl pb-2 md:text-2xl xl:text-2xl 2xl:text-3xl leading-normal text-black font-bold">
                                                                                {{ profileBoardData.name }}
                                                                            </h3>
                                                                        </div>
                                                                        <p class="text-sm text-brand-primary font-bold">
                                                                            {{ profileBoardData.title }}
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="mt-2 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                                                        <div>
                                                                            <a href="https://www.linkedin.com/company/acentria-groupltd/"
                                                                                target="_blank">
                                                                                <i
                                                                                    class="fab fa-linkedin text-xl font-brand-primary"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                                <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                                    <h1
                                                                        class="truncate text-2xl font-bold text-gray-900">
                                                                        {{ profileBoardData.name }}
                                                                    </h1>
                                                                </div>
                                                                <div
                                                                    class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <!-- Description list -->
                                                <div class="mt-5 font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                        <div class="sm:col-span-2">
                                                            <dt class="text-sm font-semibold text-black">About</dt>
                                                            <dd class="mt-2 max-w-full space-y-1 text-xs text-gray-900">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="profileModal" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
            aria-modal="true">
            <div class="fixed inset-0 bg-black/20"></div>

            <div class="fixed inset-0 overflow-hidden">
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-3xl pl-10">

                        <div class="pointer-events-auto w-screen max-w-3xl">
                            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                <div class="px-4 sm:px-6">
                                    <div class="flex items-start justify-between">
                                        <h2 class="text-base font-semibold leading-6 text-gray-900"
                                            id="slide-over-title">
                                            Profile Details
                                        </h2>
                                        <div class="ml-3 flex h-7 items-center">
                                            <button @click="profileModal = false" type="button"
                                                class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                                <span class="absolute -inset-2.5"></span>
                                                <span class="sr-only">Close panel</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div class="relative z-0 flex flex-1 overflow-hidden">
                                        <main
                                            class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">


                                            <article>
                                                <!-- Profile header -->
                                                <div>
                                                    <div>
                                                        <div class=" w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-0 -mt-3 sticky top-[22vh] -z-20"
                                                            style="background-image:url('/img/bg.png');">
                                                            <div class="container">
                                                                <div
                                                                    class="flex items-center bg-cover px-4 py-1 text-center md:py-7 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                                                                    <div
                                                                        class="min-h-[20vh] flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">


                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                                            <div class="flex">
                                                                <NuxtImg
                                                                    class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                    :src="profileData.image" alt="" />
                                                                <div class="mt-14 sm:ml-6 sm:flex-1">
                                                                    <div>
                                                                        <div class="flex items-center">
                                                                            <h3 id=""
                                                                                class="text-xl pb-2 md:text-2xl xl:text-2xl 2xl:text-3xl leading-normal text-black font-bold">
                                                                                {{ profileData.name }}
                                                                            </h3>
                                                                        </div>
                                                                        <p class="text-sm text-brand-primary font-bold">
                                                                            {{ profileData.title }}
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="mt-2 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                                                                        <div>
                                                                            <a href="https://www.linkedin.com/company/acentria-groupltd/"
                                                                                target="_blank">
                                                                                <i
                                                                                    class="fab fa-linkedin text-xl font-brand-primary"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="mt-2 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                                                <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                                                    <h1
                                                                        class="truncate text-2xl font-bold text-gray-900">
                                                                        {{ profileData.name }}
                                                                    </h1>
                                                                </div>
                                                                <div
                                                                    class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>


                                                <!-- Description list -->
                                                <div class="mt-5 font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                                    <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                                        <div class="sm:col-span-2">
                                                            <dt class="text-sm font-semibold text-black">About</dt>
                                                            <dd class="mt-2 max-w-full space-y-1 text-xs text-gray-900">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </section>
</template>

<style scoped></style>