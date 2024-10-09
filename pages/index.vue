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


const joinAsMembers = ref([
  {
    name: 'New Customer',
    icon: 'fas fa-user-plus',
    description: 'Join us as a new customer and experience our exceptional services tailored to meet your needs.',
  },
  {
    name: 'Supplier',
    icon: 'fas fa-truck',
    description: 'Partner with us as a supplier and contribute to our supply chain with your quality products and services.',
  },
  {
    name: 'Career',
    icon: 'fas fa-briefcase',
    description: 'Explore career opportunities at Acentria Group and become a part of our dynamic and innovative team.',
  },
])

const commitments = ref([
  {
    name: 'Our Customers',
    icon: 'fas fa-users', // Represents a group of people, suitable for customers
    description: 'We\'re committed to helping Australians live a life that\'s as healthy and as full as possible.',
  },
  {
    name: 'Our Partners',
    icon: 'fas fa-handshake', // Represents partnerships and collaboration
    description: 'Our partnerships with advisers, super funds and employer funds help us protect more Australians.',
  },
  {
    name: 'Our People',
    icon: 'fas fa-user-friends', // Represents a group of people, suitable for employees or team members
    description: 'We\'ve built a culture that lets our people make the most of every opportunity.',
  },
  {
    name: 'Our Communities',
    icon: 'fas fa-globe', // Represents global community and involvement
    description: 'Improving lives through active involvement and raising standards for the industry as a whole.',
  },
])

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

              <div class=" w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-0 -mt-3 sticky top-[136px] z-20"
                style="background-image:url('/img/bg.png');">
                <div class="container">
                  <div
                    class="flex items-center bg-cover px-4 py-1 text-center md:py-7 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                      class="flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">
                      <div class="w-full grid grid-cols-10">
                        <div class="col-span-3">
                          <h1 class="text-3xl text-white font-bold my-2 ">Acentria Group</h1>
                        </div>
                        <div class="col-span-7">
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div class="w-full h-full bg-white">
                <MakesUs />
              </div>


              <div class="relative w-full bg-cover bg-center bg-no-repeat bg-gray-600 mb-0"
                style="background-image:url('/img/bg.png');">
                <div class="container">
                  <div
                    class="flex items-center bg-cover px-4 py-4 text-center md:py-10 lg:px-0 lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                    <div
                      class="flex flex-col gap-6 mx-auto items-center justify-center text-center md:max-w-md lg:max-w-5xl">
                      <div class="w-full">
                        <p
                          class="text-left font-sans tracking-normal text-2xl lg:text-sm text-white font-semibold leading-tight lg:leading-tight">
                          At our company, we specialize in providing comprehensive insurance and reinsurance solutions,
                          backed by expert actuarial services and strategic investment management. Our cutting-edge
                          technology ensures that we deliver innovative and efficient solutions tailored to meet the
                          unique needs of our clients. Trust us to safeguard your future with precision and excellence.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <div class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                  <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                      data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                      src="https://acentriagroup.com/wp-content/uploads/2023/11/stock-photo-leadership-and-synergy-concept-a-number-of-white-paper-arrow-against-a-bright-black-texture-439660462-transformed-1024x600.jpeg"
                      data-v-inspector="components/Why.vue:34:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2">
                    <label class="text-base leading-normal font-regular text-light-highlight font-bold">
                      The team
                    </label>
                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                      Our Leadership
                    </h2>
                    <div class="text-light-content pb-5 md:pb-6">
                      <p class="text-sm leading-normal font-regular text-light-content !text-inherit mb-4">
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
                        class="!button-animation z-[10] relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-md rounded-sm mt-10">
                        Meet the Team
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" py-10" style="background-color: rgb(246, 248, 252)">
                <h2
                  class="text-center font-sans tracking-normal text-2xl lg:text-4xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                  We Firmly Believe That What Makes Us <br>
                  <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                    Different Also Makes us Stronger
                  </span>
                </h2>
              </div>

              <div class="bg-gray-600 py-10">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                  <div class="mx-auto max-w-7xl lg:mx-0">
                    <h2 class="text-3xl font-bold tracking-tight text-white text-center"> Empower <span
                        class="text-primary">|</span> Innovate <span class="text-primary">|</span> Prosper </h2>
                  </div>
                  <div class="mx-auto text-md mt-10 max-w-2xl lg:max-w-5xl text-white">
                    <div class="grid grid-cols-3 gap-5">

                      <div
                        class="button-animation duration-700 group border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xs bg-white p-5 w-full h-full">
                        <div class="flex h-fit flex-col"><i
                            class="fas fa-bullseye text-black text-4xl pb-4 group-hover:text-brand-primary"
                            translate="no"></i>
                          <h3 class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                            Our Mission</h3>
                          <p class="mt-2 text-xs text-gray-500">
                            To provide financial and risk advisory services through innovations that empower our
                            clients’ prosperity.
                          </p>
                        </div>
                      </div>

                      <div
                        class="button-animation duration-700 group border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xs bg-white p-5 w-full h-full">
                        <div class="flex h-fit flex-col"><i
                            class="fas fa-eye text-black text-4xl pb-4 group-hover:text-brand-primary"
                            translate="no"></i>
                          <h3 class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                            Our Vision</h3>
                          <p class="mt-2 text-xs text-gray-500">
                            To be a global leader empowering prosperity.
                          </p>
                        </div>
                      </div>

                      <div
                        class="button-animation duration-700 group border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xs bg-white p-5 w-full h-full">
                        <div class="flex h-fit flex-col"><i
                            class="fas fa-gem text-black text-4xl pb-4 group-hover:text-brand-primary"
                            translate="no"></i>
                          <h3 class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                            Our Values</h3>
                          <div class="grid grid-cols-2 gap-1 text-black text-xs">
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Integrity</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Excellence</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Innovative</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Teamwork</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Relationships</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Growth &amp; Prosperity</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                  <div class="flex flex-col justify-center lg:basis-1/2">

                    <div class="text-light-content pb-2">

                      <div class="grid grid-cols-2 gap-3">

                        <div class="flex flex-col justify-center lg:basis-1/2 mt-4">
                          <h2
                            class="text-2xl pb-1 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                            Our <span class="text-brand-primary">Mission</span>
                          </h2>
                          <div class="text-light-content pb-2">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                              To provide financial and risk advisory services through
                              innovations that
                              empower our clients’ prosperity.
                            </p>
                          </div>
                        </div>

                        <div class="flex flex-col justify-center lg:basis-1/2">
                          <h2
                            class="text-2xl pb-1 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                            Our <span class="text-brand-primary">Vision</span>
                          </h2>
                          <div class="text-light-content pb-2">
                            <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                              To be a global leader empowering prosperity.
                            </p>
                          </div>
                        </div>


                      </div>


                      <div class="flex flex-col justify-center lg:basis-1/2 mt-10">
                        <h2
                          class="text-2xl pb-1 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-light-title">
                          Our <span class="text-brand-primary">Values</span>
                        </h2>
                        <div class="text-black pb-2">
                          <div class="grid grid-cols-3 gap-3 mt-2">
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Integrity</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Excellence</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Innovative</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Teamwork</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Relationships</p>
                            <p><i class="fas fa-check mr-1 text-brand-primary"></i> Growth &amp; Prosperity</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" width="500" height="350" decoding="async"
                      data-nimg="1" style="color: transparent; object-fit: contain" class="rounded-lg"
                      src="/img/compass.jpeg" data-v-inspector="components/Why.vue:34:17" />
                  </div>
                </div>
              </div> -->

              <section class="relative py-10">
                <div class="container px-4">
                  <div class=" max-w-6xl justify-between content-center">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 text-center">
                      Our <span class="text-brand-primary">Commitments</span>
                    </h2>
                    <p
                      class="text-center max-w-2xl mx-auto my-5 text-base leading-normal font-semibold text-white text-sm font-normal not-italic">
                      At Acentria, we believe we have a responsibility to not only our customers and business partners,
                      but
                      also to our people and the broader community.
                    </p>
                  </div>
                  <div class="font-sans grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-0">

                    <div v-for="item in commitments"
                      class="button-animation duration-700 group border-t-8 border-solid border-brand-primary shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xs bg-white p-5 w-full h-full">

                      <div class="flex h-fit flex-col">
                        <i :class="item.icon" class="text-black text-4xl pb-4 group-hover:text-brand-primary"
                          translate="no"></i>
                        <h3 class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                          {{ item.name
                          }}</h3>
                        <p class="mt-2 text-xs text-gray-500">{{ item.description }}</p>
                        <i
                          class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
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

              <Stats />

              <Testimonials />

              <div class="bg-white w-full h-full">
                <Awards />
              </div>




            </div>
          </div>

          <div class="mx-auto max-w-screen">
            <div class="relative bg-gray-900 px-6 py-20 shadow-xl sm:rounded-xs sm:px-10 sm:py-24 md:px-12 lg:px-40">
              <img class="absolute inset-0 h-full w-full object-cover brightness-50 saturate-10"
                src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="" />
              <div class="absolute inset-0 bg-gray-900/5 mix-blend-multiply" />
              <div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
                <!-- <div
                  class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" /> -->
              </div>
              <div class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
                aria-hidden="true">
                <!-- <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" /> -->
              </div>

              <div class="relative mx-auto max-w-2xl lg:mx-0">
                <h1 class="text-white font-bold text-2xl">
                  Corporate Social Responsibility
                  <br>
                  <span class="text-brand-primary">&
                    Sustainability
                  </span>
                </h1>
                <figure>
                  <blockquote class="mt-6 text-xs font-semibold text-white sm:text-xl sm:leading-5 ">
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
                    <NuxtLink to="/csr"
                      class="underline underline-offset-8 hover:button-animation font-semibold tracking-widest">
                      Learn More <i class="fas fa-caret-right"></i>
                    </NuxtLink>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div class="bg-white w-full h-full">
            <div class="bg-white !font-sans container my-0">
              <div class="mx-auto max-w-7xl py-10 sm:px-2 lg:px-4">
                <div class="mx-auto max-w-7xl px-4 lg:max-w-none">
                  <div class="max-w-7xl justify-between content-center">
                    <h2 class="text-3xl font-semibold tracking-tight text-gray-900 text-center">
                      Join Our Team
                    </h2>
                  </div>
                  <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3 max-w-6xl mx-auto">
                    <div v-for="member in joinAsMembers" :key="member.name"
                      class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8  border-brand-primary">
                      <div class="sm:flex-shrink-0 flex justify-center">
                        <i :class="member.icon" class="text-black text-2xl"></i>
                      </div>
                      <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                        <h3 class="text-lg text-brand-primary font-semibold flex justify-center">{{ member.name
                          }}</h3>
                        <p class="mt-2 text-xs text-gray-500">{{ member.description }}</p>
                        <i
                          class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </main>
      </main>
    </div>

  </div>
</template>

<style scoped>
.sticky-div {
  position: -webkit-sticky;
  /* For Safari */
  position: sticky;
  top: 0;
  /* Adjust this value to the height of your navigation bar */
  z-index: 50;
  /* Ensure it stays above other content */
}
</style>
