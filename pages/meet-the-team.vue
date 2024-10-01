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
        <div class="relative isolate overflow-hidden bg-white py-20">
            <video autoplay loop muted
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
                <source
                    src="https://www.shutterstock.com/shutterstock/videos/3512180955/preview/stock-footage-success-team-hands-up-business-team-teamwork-concept-group-of-people-holding-hands-raised-their.webm"
                    type="video/mp4">
                Your browser does not support the video tag.
            </video>
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
            <div class="relative z-50 mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-7xl lg:mx-0 text-center">
                    <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                        Leadership Team
                    </h2>
                </div>
            </div>
        </div>

        <Board @openBoardProfile="openProfileBoardModal" ref="teamBoardComponent" />

        <Team @openProfile="openProfileModal" ref="teamComponent" />


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
                            <button @click="profileModal = false" type="button"
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

    </section>
</template>

<style scoped></style>