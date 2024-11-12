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
    icon: 'fas fa-users', 
    description: 'We\'re committed to helping Australians live a life that\'s as healthy and as full as possible.',
    link: '/our-commitment'
  },
  {
    name: 'Our Partners',
    icon: 'fas fa-handshake', 
    description: 'Our partnerships with advisers, super funds and employer funds help us protect more Australians.',
    link: '/our-commitment'
  },
  {
    name: 'Our People',
    icon: 'fas fa-user-friends', 
    description: 'We\'ve built a culture that lets our people make the most of every opportunity.',
    link: '/our-commitment'
  },
  {
    name: 'Our Communities',
    icon: 'fas fa-globe', 
    description: 'Improving lives through active involvement and raising standards for the industry as a whole.',
    link: '/our-commitment'
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
    <div class="">
      <main class="font-sans">
        <main>
          <div>
            <div>
              <AboutHero1 :InsuranceBannerContent="InsuranceBannerContent" />

              <div class="w-full h-full bg-white">
                <MakesUs2 />
              </div>

              <div class="container relative min-h-[30vh] min-w-screen">
                <div class="bottom-0 absolute max-w-7xl mx-auto">

                  <h2
                    class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-white">
                    Our <span class="text-brand-primary">Leadership</span>
                  </h2>
                </div>
              </div>



              <div class="font-sans py-2 text-white" style="background-color: rgb(246, 248, 252)">


                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                  <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain" class="!object-cover w-full h-60 shadow-2xl rounded-lg"
                      src="/img/careers.jpg" data-v-inspector="components/Why.vue:34:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2">

                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
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

                <div class="container relative min-w-screen mt-14">
                  <div class="bottom-0 absolute max-w-7xl mx-auto">

                    <h2
                      class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-black">
                      Corporate <span class="text-brand-primary">Culture</span>
                    </h2>
                  </div>
                </div>

                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-20 lg:gap-16">
                  <div class="flex flex-col justify-center lg:basis-1/2">
                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                        Our mission is to exceed our stakeholders' expectations by delivering excellence in every aspect
                        of our business, every day.
                        Central to this mission is fostering a strong corporate culture - a business environment where
                        everything we do is guided by our core values of Integrity, Innovation, and Excellence.
                        "The Acentria Way" embodies our global culture, perfectly aligned with our corporate strategy.
                        It encompasses our purpose, our vision, and our approach to conducting business.
                        It is the foundation of our organization, ensuring that we operate as a responsible and
                        forward-thinking company.
                      </p>
                      <NuxtLink href="/corporate-culture"
                        class="!button-animation z-[10] relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-md rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain"
                      class="w-full h-60 shadow-2xl rounded-lg !object-cover"
                      src="https://images.pexels.com/photos/3869651/pexels-photo-3869651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      data-v-inspector="components/Why.vue:34:17" />
                  </div>
                </div>

                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                  <div class="relative py-4 lg:basis-1/2">
                    <img alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain"
                      class="w-full h-60 shadow-2xl rounded-lg !object-cover"
                      src="/img/award.jpg"
                      data-v-inspector="components/Why.vue:34:17" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2">

                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <h2
                        class="text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-black">
                        Our <span class="text-brand-primary">Brand</span>
                      </h2>
                      <p class="text-xs leading-normal font-regular text-light-content !text-inherit mb-4">
                        Our brand represents the essence of who we are and what we stand for. It is built on a
                        foundation of trust, integrity, and innovation. At Acentria Group, our brand is more than just a
                        logo or a tagline; it is a reflection of our commitment to excellence and our dedication to our
                        stakeholders.
                        Central to our brand is a strong corporate identity that resonates with our clients, partners,
                        and communities. Our core values of Integrity, Innovation, and Excellence are at the heart of
                        everything we do, guiding our actions and decisions.
                        "The Acentria Way" is not just a slogan; it is a way of life that embodies our global culture
                        and aligns perfectly with our corporate strategy. It encompasses our purpose, our vision, and
                        our approach to conducting business.
                      </p>
                      <NuxtLink href="/corporate-culture"
                        class="!button-animation z-[10] relative bg-brand-primary !hover:bg-black text-white font-medium py-1 sm:py-1 md:py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-md rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>


              </div>

              <section id="" class="bg-white relative md:py-2  text-left">
                <div class="container">
                  <h2
                    class="text-left font-sans tracking-normal text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight py-1">
                    What drives us at <br>
                    <span class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">
                      Acentria Group?
                    </span>
                  </h2>

                  <div class=" !font-sans container my-1">
                    <div class="mx-auto max-w-7xl py-5">
                      <div class="mx-auto max-w-7xl px-4 lg:max-w-none">
                        <div class="grid grid-cols-3 gap-5">

                          <div
                            class="shadow-2xl button-animation duration-700 group border-l-4 border-t-4 border-solid border-black/20 shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full">
                            <div class="flex h-fit flex-col"><i
                                class="fas fa-bullseye text-black text-4xl pb-4 group-hover:text-brand-primary"
                                translate="no"></i>
                              <h3
                                class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                                Our Mission</h3>
                              <p class="mt-2 text-xs text-gray-500">
                                To provide financial and risk advisory services through innovations that empower our
                                clients’ prosperity.
                              </p>
                            </div>
                          </div>

                          <div
                            class="shadow-2xl button-animation duration-700 group border-l-4 border-t-4 border-solid border-black/20 shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full">
                            <div class="flex h-fit flex-col"><i
                                class="fas fa-eye text-black text-4xl pb-4 group-hover:text-brand-primary"
                                translate="no"></i>
                              <h3
                                class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                                Our Vision</h3>
                              <p class="mt-2 text-xs text-gray-500">
                                To be a global leader empowering prosperity.
                              </p>
                            </div>
                          </div>

                          <div
                            class="shadow-2xl button-animation duration-700 group border-l-4 border-t-4 border-solid border-black/20 shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-xl bg-white p-5 w-full h-full">
                            <div class="flex h-fit flex-col"><i
                                class="fas fa-gem text-black text-4xl pb-4 group-hover:text-brand-primary"
                                translate="no"></i>
                              <h3
                                class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
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

                </div>
              </section>

              <section class="container max-w-6xl mx-auto relative py-5">

                <div class="py-5 text-3xl font-semibold tracking-tight text-white text-left">
                  Our <span class="text-brand-primary">Commitments</span>
                </div>

                <div class=" px-4">
                  <div class="font-sans grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-0">

                    <NuxtLink :to="item.link" v-for="item in commitments"
                      class="shadow-2xl button-animation duration-700 group border-2 border-solid border-black shadow-card m-auto flex min-h-fit md:min-h-[250px] md:max-w-[30vw] max-w-[90vw] rounded-lg bg-black/10 p-5 w-full h-full">

                      <div class="flex h-fit flex-col">
                        <i :class="item.icon" class="text-black text-lg pb-2 group-hover:text-brand-primary"
                          translate="no"></i>
                        <h3 class="text-lg text-brand-primary font-semibold flex justify-left group-hover:text-black">
                          {{ item.name
                          }}</h3>
                        <p class="mt-1 text-xs text-white">{{ item.description }}</p>
                        <i
                          class="fas fa-arrow-right mt-5 font-bold text-2xl group-hover:text-brand-primary text-gray-300 duration-700"></i>
                      </div>

                    </NuxtLink>

                  </div>
                </div>
              </section>

              <Services />

              <Stats />

              <Testimonials />

              <div class="bg-white w-full h-full">
                <Awards />
              </div>

              <h1 class="text-black font-semibold text-3xl bg-white mx-auto">
                <div class="container max-w-6xl mx-auto text-left py-5 bg-white">
                  Corporate Social Responsibility
                  <span class="text-brand-primary"><br> &
                    Sustainability
                  </span>
                </div>
              </h1>


              <div class="2xl:mx-auto bg-black/50 2xl:container md:px-20 px-4 md:py-12 py-9">
                <div class="relative rounded-md">
                  <img
                    src="https://www.shutterstock.com/shutterstock/photos/2509093239/display_1500/stock-photo-autumn-natural-bokeh-background-with-maple-trees-in-park-with-copyspace-2509093239.jpg"
                    alt="city view"
                    class="w-full h-full rounded-md  object-center object-cover absolute sm:block hidden" />
                  <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view"
                    class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                  <div
                    class="text-xl relative z-20 bg-gradient-to-r from-gray-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                    <div>
                      <p class="text-xs leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
                        Our initiatives focus on reducing our environmental impact, promoting ethical business
                        practices, and contributing positively to the communities we serve. We believe in creating
                        long-term value for our stakeholders by integrating sustainable practices into our core
                        operations and fostering a culture of responsibility and transparency.
                      </p>
                    </div>
                    <div class="mt-10 max-w-md">
                      <NuxtLink to="/csr"
                        class="text-white underline underline-offset-8 hover:button-animation font-semibold tracking-widest">
                        Learn More <i class="fas fa-caret-right"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" w-full h-full container mx-auto max-w-6xl">
                <div class=" !font-sans  my-0">
                  <div class="py-10 sm:px-2 lg:px-4">
                    <div class="lg:max-w-none">
                      <div class="justify-between content-center">
                        <h2 class="text-3xl font-semibold tracking-tight text-gray-900 text-left">
                          Join Our <span class="text-brand-primary">Team</span>
                        </h2>
                      </div>
                      <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
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
