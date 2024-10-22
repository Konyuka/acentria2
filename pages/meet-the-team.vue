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

</script>

<template>
    <section>
        <div class="relative isolate overflow-hidden bg-white py-20 mt-40">

            <img src="https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-leadership-and-synergy-concept-a-number-of-white-paper-arrow-against-a-bright-black-texture-439660462-transformed-1024x600.jpeg"
                alt="Success Team Hands Up"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

            <div class="absolute inset-0 bg-black opacity-40"></div>

            <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-primary to-black opacity-60"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>
            <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-primary to-black opacity-60"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
                </div>
            </div>

            <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                <div class="grid grid-cols-10 -gap-10">
                    <div class="text-white col-span-1">
                        <div class="w-20 h-1 bg-white mt-3">

                        </div>
                    </div>
                    <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                        <h2 class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                            Board and Management
                        </h2>
                        <h2 class="text-left text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                            Board and Management
                        </h2>
                        <p class="text-white text-left max-w-2xl mt-7">
                            Our board sets strategic direction and provides oversight and control, acting as an
                            independent
                            check and balance to the executive management team, whose responsibility is to manage the
                            business.
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


        <Board @openBoardProfile="openProfileBoardModal" ref="teamBoardComponent" />

        <Team @openProfile="openProfileModal" ref="teamComponent" />

    </section>
</template>

<style scoped></style>