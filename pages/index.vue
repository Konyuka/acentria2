<script setup>
const InsuranceBannerContent = ref({
  subtitle: "Acentria Group",
  title: `Empowering Dreams <br /> <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight"> Igniting Imagination </span>`,
  image: "/img/empower.jpeg",
  content:
    "At Acentria Group, we propel prosperity to infinite possibilities.",
});

const mission = ref(null)
// const selectedMenu = ref(null)
const selectedMenu = computed(() => {
  return mission.value?.currentMenu
})

const profileModal = ref(false);
const profileBoardModal = ref(false);
const teamComponent = ref(null);
const teamBoardComponent = ref(null);
const profileData = computed(() => {
  return teamComponent.value?.profileContent;
});
const profileBoardData = computed(() => {
  return teamBoardComponent.value?.profileContent;
});

const openProfileModal = () => {
  profileModal.value = true;
};
const openProfileBoardModal = () => {
  profileBoardModal.value = true;
};

onMounted(() => {
  // if (mission.value) {
  //     selectedMenu.value = mission.value.currentMenu;
  // }
});
</script>

<template>
  <div>
    <div id="">
      <main class="font-sans">
        <main>
          <div>
            <div>
              <AboutHero1 :InsuranceBannerContent="InsuranceBannerContent" />

              <Hero class="py-2" />

              <div data-v-02281a80="" class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">

                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                  data-v-inspector="components/Why.vue:8:9">
                  <div class="relative py-4 lg:basis-1/2 scale-90" data-v-inspector="components/Why.vue:9:13">
                    <img alt="Image of Elevate strategic risk management " loading="lazy" width="500" height="350"
                      decoding="async" data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                      src="/img/innovate.png" data-v-inspector="components/Why.vue:10:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:14:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                      data-v-inspector="components/Why.vue:15:17">Acentria Group
                    </label>
                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                      data-v-inspector="components/Why.vue:18:17">
                      Who we are
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:22:17">
                      <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
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
                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                      data-v-inspector="components/Why.vue:42:17">
                      What We Do
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:46:17">
                      <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
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

                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16"
                  data-v-inspector="components/Why.vue:54:9">
                  <div class="relative py-4 lg:basis-1/2 content-center" data-v-inspector="components/Why.vue:55:13">
                    <img alt="Image of Ensure regulatory compliance" loading="lazy" width="500" height="350"
                      decoding="async" data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                      src="/img/bill.jpg" data-v-inspector="components/Why.vue:56:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:60:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                      data-v-inspector="components/Why.vue:61:17">Experience</label>
                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                      data-v-inspector="components/Why.vue:63:17">
                      Our journey
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:67:17">
                      <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
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

                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16"
                  data-v-inspector="components/Why.vue:32:9">
                  <div class="relative py-4 lg:basis-1/2" data-v-inspector="components/Why.vue:33:13">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                      data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                      src="https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-leadership-and-synergy-concept-a-number-of-white-paper-arrow-against-a-bright-black-texture-439660462-transformed-1024x600.jpeg"
                      data-v-inspector="components/Why.vue:34:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2" data-v-inspector="components/Why.vue:38:13">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold"
                      data-v-inspector="components/Why.vue:39:17">The team
                    </label>
                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                      data-v-inspector="components/Why.vue:42:17">
                      Our Leadership
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:46:17">
                      <p class="text-base leading-normal font-regular text-light-content !text-inherit mb-4"
                        data-v-inspector="components/Why.vue:47:21">
                        Our success is driven by a dynamic and dedicated
                        leadership team. Comprising individuals with diverse
                        expertise and a shared commitment to excellence, our
                        leaders play a pivotal role in shaping the vision,
                        strategy, and culture of our organization. Meet the
                        visionaries and strategists who lead us toward
                        innovation, growth, and success. Their unwavering
                        dedication and forward-thinking approach ensure that we
                        remain at the forefront of our industry, continuously
                        adapting to new challenges and opportunities.
                      </p>

                      <NuxtLink href="/meet-the-team"
                        class="!button-animation z-[20] relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-md rounded-sm mt-10">
                        Meet the Team
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <section id="" class="relative py-5 bg-white text-left">
                <div class="container px-4">
                  <!-- <h2
                                        class="text-center font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                                        Our
                                        <span
                                            class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                                            Vision, Mission & Values
                                        </span>
                                    </h2> -->

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
                            <img alt="Image of Ensure regulatory compliance" loading="lazy" width="400" height="350"
                              decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                              class="rounded-lg"
                              src="https://images.pexels.com/photos/175744/pexels-photo-175744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              data-v-inspector="components/Why.vue:56:17" />
                          </div>
                          <div class="flex flex-col justify-center lg:basis-1/2"
                            data-v-inspector="components/Why.vue:60:13">
                            <h2
                              class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                              data-v-inspector="components/Why.vue:63:17">
                              Our <span class="text-brand-primary">Vision</span>
                            </h2>
                            <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:67:17">
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
                            <img alt="Image of Ensure regulatory compliance" loading="lazy" width="400" height="350"
                              decoding="async" data-nimg="1" style="color: transparent; object-fit: contain"
                              class="rounded-lg"
                              src="https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              data-v-inspector="components/Why.vue:56:17" />
                          </div>
                          <div class="flex flex-col justify-center lg:basis-1/2"
                            data-v-inspector="components/Why.vue:60:13">
                            <h2
                              class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title"
                              data-v-inspector="components/Why.vue:63:17">
                              Our <span class="text-brand-primary">Mission</span>
                            </h2>
                            <div class="text-light-content pb-5 md:pb-6" data-v-inspector="components/Why.vue:67:17">
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
                </div>
              </section>




              <div v-show="selectedMenu == 'values'" class="font-sans mx-auto max-w-[93vw] px-6 lg:px-8 mb-10">

                <dl
                  class="mx-auto grid max-w-2xl grid-cols-1 gap-x-2 gap-y-3 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  <div
                    class="flex gap-5 shadow-md border-2 hover:border-brand-primary p-5 rounded-lg border border-brand-primary border-2 group">
                    <div class="flex items-center justify-center rounded-full h-3/4 w-auto p-2">
                      <div
                        class="flex items-center justify-center h-10 w-10 bg-gray-200 group-hover:bg-primary rounded-full duration-700 ease-in-out">
                        <i class="fas fa-scale-balanced text-xl text-brand-primary group-hover:text-white"></i>
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

              <section class="relative py-10" data-v-inspector="components/Cards.vue:8:9">
                <div class="container px-4" data-v-inspector="components/Cards.vue:9:13">
                  <div class="font-sans grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-0"
                    data-v-inspector="components/Cards.vue:10:17">
                    <div
                      class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full"
                      data-v-inspector="components/Cards.vue:11:21">
                      <div class="flex h-fit flex-col" data-v-inspector="components/Cards.vue:13:25">
                        <i class="fas fa-coffee text-brand-primary text-4xl pb-4" translate="no"
                          data-v-inspector="components/Cards.vue:14:29"></i>
                        <div data-v-inspector="components/Cards.vue:15:29">
                          <h4
                            class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                            data-v-inspector="components/Cards.vue:16:33">
                            Our Purpose
                          </h4>
                        </div>
                        <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                          data-v-inspector="components/Cards.vue:21:29">
                          Empower our clients and communities through innovative
                          solutions, enhancing prosperity and adding value to a
                          dynamic global environment.
                        </p>
                      </div>
                    </div>

                    <div
                      class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full"
                      data-v-inspector="components/Cards.vue:29:21">
                      <div class="flex h-fit flex-col" data-v-inspector="components/Cards.vue:31:25">
                        <i class="fas fa-lightbulb text-brand-primary text-4xl pb-4" translate="no"
                          data-v-inspector="components/Cards.vue:32:29"></i>
                        <div data-v-inspector="components/Cards.vue:33:29">
                          <h4
                            class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                            data-v-inspector="components/Cards.vue:34:33">
                            Our Commitment
                          </h4>
                        </div>
                        <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                          data-v-inspector="components/Cards.vue:39:29">
                          Passionately remain at the forefront in empowering the
                          vision of our clients through igniting innovative
                          thinking in offering the best solutions to enhance
                          prosperity.
                        </p>
                      </div>
                    </div>

                    <div
                      class="border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full"
                      data-v-inspector="components/Cards.vue:47:21">
                      <div class="flex h-fit flex-col" data-v-inspector="components/Cards.vue:49:25">
                        <i class="fas fa-shield-alt text-brand-primary text-4xl pb-4" translate="no"
                          data-v-inspector="components/Cards.vue:50:29"></i>
                        <div data-v-inspector="components/Cards.vue:51:29">
                          <h4
                            class="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title 3xl:!text-xl 2xl:!text-xl"
                            data-v-inspector="components/Cards.vue:52:33">
                            Our Promise
                          </h4>
                        </div>
                        <p class="text-base leading-normal font-regular text-light-content text-sm font-normal not-italic leading-normal"
                          data-v-inspector="components/Cards.vue:57:29">
                          Be your trusted partner, working tirelessly to provide
                          the peace of mind you deserve, knowing that your
                          assets and interests are safeguarded with care and
                          expertise.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div class="bg-white font-sans">
                <div>
                  <h2
                    class="text-center font-sans tracking-normal text-3xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                    Our Lines
                    <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                      of Business
                    </span>
                  </h2>
                </div>
                <div class="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8">
                  <ServiceCarousel />
                </div>

              </div>

              <!-- <div class="bg-white font-sans">
                                <div class="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8">
                                    <div class="rounded-lg border border-brand-primary border-2 bg-black px-2 py-5 sm:p-5">
                                        <div class="mx-auto max-w-7xl">
                                            <div class="text-center">
                                                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                                    Our Lines of Business
                                                </h2>
                                            </div>
                                            <div
                                                class="mx-2 mt-5 grid max-w-[90vw] grid-cols-1 gap-x-2 gap-y-10 sm:max-w-none lg:grid-cols-5">
                                                <NuxtLink to="/acentria-group-insurance"
                                                    class="group button-animation text-left sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md p-2 border-2 border-primary">
                                                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                        <div
                                                            class="group-hover:scale-110 transition ease-in-out duration-700 text-center">
                                                            <i
                                                                class="fas fa-shield-alt text-brand-primary text-4xl my-3"></i>
                                                        </div>
                                                        <h3 class="text-center text-3xl font-bold text-primary">
                                                            Insurance
                                                        </h3>
                                                        <p class="mt-2 text-sm text-gray-500 text-left mb-5">
                                                            Acentria Group's comprehensive insurance broking services
                                                            are
                                                            designed to protect your assets and mitigate
                                                            risks.
                                                        </p>
                                                        <button
                                                            class="group-hover:scale-110 transition ease-in-out duration-900 button-animation relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm md:text-md rounded-sm mt-2">
                                                            Learn More
                                                            <i class="fas fa-arrow-right text-primary ml-2"></i>
                                                        </button>
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink to="/acentria-group-reinsurance"
                                                    class="group button-animation text-left sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md p-2 border-2 border-primary">
                                                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                        <div
                                                            class="group-hover:scale-110 transition ease-in-out duration-700 text-center">
                                                            <i
                                                                class="fas fa-sync-alt text-brand-primary text-4xl my-3"></i>
                                                        </div>
                                                        <h3 class="text-center text-3xl font-bold text-primary">
                                                            Reinsurance
                                                        </h3>
                                                        <p class="mt-2 text-sm text-gray-500 text-left mb-5">
                                                            At Acentria Group, we provide expert reinsurance
                                                            broking services tailored to meet the diverse
                                                            needs of our esteemed clients.
                                                        </p>
                                                        <button
                                                            class="group-hover:scale-110 transition ease-in-out duration-900 button-animation relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm md:text-md rounded-sm mt-2">
                                                            Learn More
                                                            <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                                                        </button>
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink to="/acentria-group-actuarial"
                                                    class="group button-animation text-left sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md p-2 border-2 border-primary">
                                                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                        <div
                                                            class="group-hover:scale-110 transition ease-in-out duration-700 text-center">
                                                            <i
                                                                class="fas fa-chart-line text-brand-primary text-4xl my-3"></i>
                                                        </div>
                                                        <h3 class="text-center text-3xl font-bold text-primary">
                                                            Actuarial
                                                        </h3>
                                                        <p class="mt-2 text-sm text-gray-500 text-left mb-5">
                                                            Our Actuarial team is at the forefront of the
                                                            industry, providing insights and solutions that
                                                            drive informed decision-making.
                                                        </p>
                                                        <button
                                                            class="group-hover:scale-110 transition ease-in-out duration-900 button-animation relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm md:text-md rounded-sm mt-2">
                                                            Learn More
                                                            <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                                                        </button>
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink href="tech.acentriagroup.com" target="_blank"
                                                    class="group button-animation text-left sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md p-2 border-2 border-primary">
                                                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                        <div
                                                            class="group-hover:scale-110 transition ease-in-out duration-700 text-center">
                                                            <i
                                                                class="fas fa-laptop-code text-brand-primary text-4xl my-3"></i>
                                                        </div>
                                                        <h3 class="text-center text-3xl font-bold text-primary">
                                                            Technology
                                                        </h3>
                                                        <p class="mt-2 text-sm text-gray-500 text-left mb-5">
                                                            Acentria Group's technology services are designed
                                                            to optimize operational efficiency and secure
                                                            long-term success for our clients.
                                                        </p>
                                                        <button
                                                            class="group-hover:scale-110 transition ease-in-out duration-900 button-animation relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm md:text-md rounded-sm mt-2">
                                                            Learn More
                                                            <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                                                        </button>
                                                    </div>
                                                </NuxtLink>
                                                <NuxtLink to="/acentria-group-investment"
                                                    class="group button-animation text-left sm:flex sm:text-left lg:block lg:text-center bg-white rounded-md p-2 border-2 border-primary">
                                                    <div class="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                                                        <div
                                                            class="group-hover:scale-110 transition ease-in-out duration-700 text-center">
                                                            <i
                                                                class="fas fa-chart-pie text-brand-primary text-4xl my-3"></i>
                                                        </div>
                                                        <h3 class="text-center text-3xl font-bold text-primary">
                                                            Investments
                                                        </h3>
                                                        <p class="mt-2 text-sm text-gray-500 text-left mb-5">
                                                            Acentria Group's investment services are designed
                                                            to optimize financial growth and secure long-term
                                                            success for our clients.
                                                        </p>
                                                        <button
                                                            class="group-hover:scale-110 transition ease-in-out duration-900 button-animation relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm md:text-md rounded-sm mt-2">
                                                            Learn More
                                                            <i class="fas fa-arrow-right text-primary ml-2 text-md"></i>
                                                        </button>
                                                    </div>
                                                </NuxtLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->

              <Stats />

              <Testimonials class="mt-10" />

              <!-- <Esg /> -->

              <Awards />

            </div>
          </div>

          <div class="mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
            <div
              class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
              <img class="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="" />
              <div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
              <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                <div
                  class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
              </div>
              <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                aria-hidden="true">
                <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
              </div>
              <div class="relative mx-auto max-w-2xl lg:mx-0">
                <h1 class="text-white font-bold text-3xl">
                  Corporate Social Responsibility
                  <br>
                  <span class="text-brand-primary">&
                    Sustainability
                  </span>
                </h1>
                <figure>
                  <blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                    <p>
                      Our initiatives focus on reducing our environmental impact, promoting ethical
                      business practices,
                      and contributing positively to the communities we serve. We believe in creating
                      long-term value
                      for our stakeholders by integrating sustainable practices into our core
                      operations and fostering
                      a culture of responsibility and transparency.
                    </p>
                  </blockquote>
                  <figcaption class="mt-6 text-base text-white">
                    <NuxtLink to="/csr" class="underline underline-offset-8 hover:button-animation font-semibold tracking-widest">
                      Learn More <i class="fas fa-caret-right"></i>
                    </NuxtLink>
                  </figcaption>
                </figure>
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
                  <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                    <div>
                      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                        alt="Your Company" />
                    </div>
                    <div>
                      <button type="button"
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          aria-hidden="true">
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
                    <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                      <a href="#" class="inline-flex items-center space-x-3 text-sm font-medium text-brand-primary">
                        <svg class="-ml-2 h-5 w-5 text-brand-primary" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
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
                            alt="" />
                        </div>
                        <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                          <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div class="flex">
                              <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                :src="profileData.image" alt="" />
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
                                  <i class="fas fa-paper-plane text-lg text-brand-primary"></i>
                                  <span class="mt-1">Contact on Mail</span>
                                </a>
                                <a :href="profileData.linkedin" target="_blank"
                                  class="button-animation inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                  <i class="fab fa-linkedin text-lg text-brand-primary"></i>
                                  <span class="mt-1">Contact on LinkedIn</span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div class="mt-2 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                            <h1 class="truncate text-2xl font-bold text-gray-900">
                              {{ profileData.name }}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <!-- Description list -->
                      <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                          <div class="sm:col-span-1">
                            <!-- <dt class="text-lg font-semibold text-black">Title</dt> -->
                            <dd class="mt-1 text-sm text-gray-900">
                              {{ profileData.title }}
                            </dd>
                          </div>
                          <!-- <div class="sm:col-span-1">
                                                        <dt class="text-sm font-semibold text-black">Email</dt>
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileData.email }}
                                                        </dd>
                                                    </div> -->

                          <div class="sm:col-span-2">
                            <dt class="text-sm font-semibold text-black">
                              About
                            </dt>
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

    <div v-if="profileBoardModal" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div @click="profileBoardModal = false" class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-gray-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[80vw] sm:p-6">
            <div class="flex h-full">
              <div class="flex min-w-0 flex-1 flex-col overflow-hidden">
                <div class="lg:hidden">
                  <div class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5">
                    <div>
                      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=pink&shade=500"
                        alt="Your Company" />
                    </div>
                    <div>
                      <button type="button"
                        class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          aria-hidden="true">
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
                    <nav class="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden" aria-label="Breadcrumb">
                      <a href="#" class="inline-flex items-center space-x-3 text-sm font-medium text-brand-primary">
                        <svg class="-ml-2 h-5 w-5 text-brand-primary" viewBox="0 0 20 20" fill="currentColor"
                          aria-hidden="true">
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
                            alt="" />
                        </div>
                        <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                          <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div class="flex">
                              <img class="h-48 w-48 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                :src="profileBoardData.image" alt="" />
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
                            <h1 class="truncate text-2xl font-bold text-gray-900">
                              {{ profileBoardData.name }}
                            </h1>
                          </div>
                        </div>
                      </div>

                      <!-- Description list -->
                      <div class="font-sans mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                          <div class="sm:col-span-1">
                            <!-- <dt class="text-lg font-semibold text-black">Title</dt> -->
                            <dd class="mt-1 text-sm text-gray-900">
                              {{ profileBoardData.title }}
                            </dd>
                          </div>
                          <!-- <div class="sm:col-span-1">
                                                        <dt class="text-sm font-semibold text-black">Email</dt>
                                                        <dd class="mt-1 text-sm text-gray-900">{{ profileBoardData.email
                                                            }}
                                                        </dd>
                                                    </div> -->

                          <div class="sm:col-span-2">
                            <dt class="text-sm font-semibold text-black">
                              About
                            </dt>
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
