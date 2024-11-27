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
    subtitle:'Meet the Team',
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

        <div class="max-w-4xl mx-auto mt-10">
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
                    <nav class="-mb-px flex font-sans gap-20" aria-label="Tabs">
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
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center">
                            <div>
                                <h2 id="" class="heading-class text-brand-primary mb-2">
                                    <span class="text-black">Corporate</span>
                                    Governance
                                </h2>
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
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col py-8 lg:gap-16">
                <div class="relative p-4 lg:basis-1/2"><img alt="Image of Risk Management" loading="lazy" width="500"
                        height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                        style="color: transparent; object-fit: contain;" class="rounded-lg"></div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-black ">
                        <span class="text-brand-primary">Governance</span>
                    </h2>
                    <div class="text-light-content pb-5 ">
                        <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">

                            <span>
                                • <b>Leadership Rooted in Integrity:</b> Our leaders exemplify ethical conduct,
                                inspiring
                                confidence and setting the standard for decision-making across the organization. <br>
                                • <b>Transparent and Accountable Practices:</b> We operate with openness, ensuring that
                                our
                                stakeholders have clear insights into our objectives, performance, and impact. <br>
                                • <b>Sustainability at Our Core:</b> Corporate governance at Acentria integrates
                                environmental,
                                social, and governance (ESG) principles to create lasting impact for our communities,
                                partners, and the planet.

                            </span> <br><br>
                            Through steadfast adherence to these principles, we reinforce our commitment to empowering
                            dreams, driving innovation, and fostering prosperity for all.

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
                                                                <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                    :src="profileBoardData.image" alt="">
                                                                <div class="mt-14 sm:ml-6 sm:flex-1">
                                                                    <div>
                                                                        <div class="flex items-center">
                                                                            <h3 id=""
                                                                                class="text-xl pb-2 md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-black font-bold">
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
                                                                <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                                                    :src="profileData.image" alt="">
                                                                <div class="mt-14 sm:ml-6 sm:flex-1">
                                                                    <div>
                                                                        <div class="flex items-center">
                                                                            <h3 id=""
                                                                                class="text-xl pb-2 md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-black font-bold">
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