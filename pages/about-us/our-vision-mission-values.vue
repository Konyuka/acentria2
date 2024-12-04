<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Who We Are',
    image: 'https://img.freepik.com/free-vector/v915-red_53876-174930.jpg?t=st=1728266840~exp=1728270440~hmac=e94c9d586c21dc1e57888d5e3b499c5109a624670b07a4c6188be1f6b9a5686b&w=826',
})


const mission = ref(null)
const selectedMenu = computed(() => {
    return mission.value?.currentMenu
})
</script>

<template>
    <section>
        <!-- <ReinsuranceBanner :content="ReinsuranceBannerContent" /> -->

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
                                    <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="400"
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
                                    <NuxtImg alt="Image of Ensure regulatory compliance" loading="lazy" width="400"
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
                                    <i class="fas fa-lightbulb text-xl text-brand-primary group-hover:text-white"></i>
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
                                    <i class="fas fa-handshake text-xl text-brand-primary group-hover:text-white"></i>
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
                                    <i class="fas fa-chart-line text-xl text-brand-primary group-hover:text-white"></i>
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

    </section>
</template>

<style scoped></style>