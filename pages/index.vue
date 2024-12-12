<script setup> 
useSeoMeta({
  title: 'Acentria Group - Comprehensive Coverage Solutions',
  description: 'Discover Acentria Group, your trusted partner for comprehensive coverage solutions. Protect your health, home, car, and business with our tailored insurance plans.',
  ogTitle: 'Acentria Group Insurance - Comprehensive Coverage Solutions',
  ogDescription: 'Discover Acentria Group Insurance, your trusted partner for comprehensive coverage solutions. Protect your health, home, car, and business with our tailored insurance plans.',
  ogImage: '/img/LogoT.png',
  ogUrl: 'https://www.acentriagroup.com',
  twitterTitle: 'Acentria Group - Comprehensive Coverage Solutions',
  twitterDescription: 'Discover Acentria Group, your trusted partner for comprehensive coverage solutions. Protect your health, home, car, and business with our tailored insurance plans.',
  twitterImage: '/img/LogoT.png',
  twitterCard: 'summary_large_image'
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png'
    }
  ]
})

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
    link: '/join-our-team',
    description: 'Join us as a new customer and experience our exceptional services tailored to meet your needs.',
  },
  {
    name: 'Supplier',
    icon: 'fas fa-truck',
    link: '/join-our-team',
    description: 'Partner with us as a supplier and contribute to our supply chain with your quality products and services.',
  },
  {
    name: 'Career',
    icon: 'fas fa-briefcase',
    link: '/acentria-group-careers',
    description: 'Explore career opportunities at Acentria Group and become a part of our dynamic and innovative team.',
  },
])

const commitments = ref([
  {
    name: 'Our Customers',
    icon: 'fas fa-users',
    description: 'We\'re committed to helping live a life that\'s as healthy and as full as possible.',
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

              <div class="w-full h-full bg-white border-t-4 border-brand-primary">
                <MakesUs2 />
              </div>

              <div class="container relative min-h-[30vh] min-w-screen">
                <div class="pb-5 bottom-0 absolute max-w-7xl mx-auto">
                  <h2 class="text-2xl font-semibold text-white">
                    Our <span class="text-brand-primary">Brand</span>
                  </h2>
                  <h3 class="text-xl font-semibold text-white">
                    We build our lifestyle <span class="text-brand-primary">around our brand!</span>
                  </h3>
                </div>
              </div>

              <div class="font-sans py-2 text-white" >
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16 items-center">
                  <div class="flex text-left lg:basis-1/2">
                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <p class="text-sm leading-normal mb-4 mt-4">
                        At Acentria Group, our brand is a reflection of our identity, built on the core pillars of
                        <b>Integrity, Innovation,</b> and <b>Excellence</b>. It represents our unwavering commitment to
                        empowering dreams, igniting imagination, and creating meaningful impact for our clients,
                        employees, and
                        communities. Guided by The Acentria Way, we prioritize trust, transparency, and responsibility
                        in every
                        interaction. Our brand is not just a logo—it’s a promise to deliver transformative solutions,
                        foster sustainable growth, and uphold the highest standards of excellence. Through empowerment,
                        innovation,
                        and a legacy of responsibility, we inspire confidence and build lasting partnerships that drive
                        success for all.
                      </p>
                      <NuxtLink href="/our-brand"
                        class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2 text-[12px]"></i>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain"
                      class="w-full h-[300px] shadow-2xl rounded-lg !object-cover" src="/img/join.jpg" />
                  </div>
                </div>

                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                  <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain"
                      class="w-full h-[330px] shadow-2xl rounded-lg !object-cover" src="/img/handshake.jpg" />
                  </div>
                  <div class="flex flex-col justify-center lg:basis-1/2">
                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <h2 class="text-2xl font-semibold text-black">
                        Things that <span class="text-brand-primary">Inspire Us</span>
                      </h2>
                      <h3 class="text-xl font-semibold pb-4">
                        <span class="text-brand-primary">#</span> Empower <span class="text-brand-primary">#</span>
                        Innovate <span class="text-brand-primary">#</span> Prosper
                      </h3>
                      <p class="text-sm leading-normal text-light-content !text-inherit mb-4">
                        At Acentria Group, we are driven by our mantra: <br> <b>Empower, Innovate, Prosper.</b> <br>
                        We find inspiration in empowering individuals, businesses, and communities to achieve their
                        dreams. Innovation fuels our creativity, helping us craft transformative solutions that tackle
                        today’s challenges. Prosperity motivates us to create lasting impact—building success stories
                        that uplift not just our clients but society as a whole. Together, we turn possibilities into
                        progress,
                        delivering excellence every step of the way.
                      </p>
                      <NuxtLink href="/things-that-inspire-us"
                        class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                </div>

                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-20 lg:gap-16">
                  <div class="flex flex-col justify-center lg:basis-1/2">
                    <div class="pb-4">
                      <h2 class="text-2xl font-semibold text-black">
                        Our Corporate <span class="text-brand-primary">Culture</span>
                      </h2>
                      <h3 class="text-xl font-semibold">
                        The Acentria <span class="text-brand-primary">Way!</span>
                      </h3>
                    </div>
                    <div class="text-light-content pb-5 md:pb-6 py-auto">
                      <p class="text-sm leading-normal text-light-content !text-inherit mb-4">
                        At Acentria Group, our corporate culture is the driving force behind everything we do. It the
                        soil within which the seeds of promise mature to prosperity. It is shaped by a clear sense of
                        purpose and guided by our commitment to fostering a supportive, innovative, and dynamic
                        environment where every employee thrives. <br><br>
                        Our culture isn't just about the work we do—it’s about how we do it and the values that drive
                        our engagements. We call this <b>The Acentria Way!</b>
                      </p>
                      <NuxtLink href="/corporate-culture"
                        class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Learn More
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                      style="color: transparent; object-fit: contain"
                      class="w-full h-[320px] shadow-2xl rounded-lg !object-cover" src="/img/hi5.jpg" />
                  </div>
                </div>
              </div>

              <div class="container relative min-h-[30vh] min-w-screen">
                <div class="mb-5 bottom-0 absolute max-w-7xl mx-auto">
                  <h2 class="text-2xl font-semibold text-white py-1">
                    Our <span class="text-brand-primary">Leadership</span>
                  </h2>
                  <h3 class="text-xl font-semibold text-white">
                    The leaders who <span class="text-brand-primary">inspire us</span>
                  </h3>
                </div>
              </div>

              <section id="" class="bg-white relative md:py-2 text-left">
                <div class="container">
                  <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2">
                      <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" data-nimg="1"
                        style="color: transparent; object-fit: contain"
                        class="!object-cover w-full h-[300px] shadow-2xl rounded-lg" src="/img/leadership.jpg" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                      <div class="text-light-content pb-5 md:pb-6 py-auto">
                        <p class="text-sm leading-normal mb-4">
                          Our success is driven by a dynamic and dedicated leadership team. Comprising individuals with
                          diverse
                          expertise and a shared commitment to excellence, our leaders play a pivotal role in shaping
                          the vision,
                          strategy, and culture of our organization. Meet the visionaries and strategists who lead us
                          toward
                          innovation, growth, and success. Their unwavering dedication and forward-thinking approach
                          ensure that we
                          remain at the forefront of our industry, continuously adapting to new challenges and
                          opportunities.
                        </p>
                        <NuxtLink href="/meet-the-team"
                          class="button-animation bg-black hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                          Meet the Team
                          <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>

                  <div class="mx-auto max-w-6xl lg:mx-0 mb-2">
                    <h2 class="text-2xl font-semibold text-black">
                      Our Lines <span class="text-brand-primary">of Business</span>
                    </h2>
                  </div>

                  <Services />
                </div>
              </section>

              <section class="container max-w-6xl mx-auto relative py-5">
                <div class="py-5 text-2xl font-semibold text-white text-left">
                  Our <span class="text-brand-primary">Commitments</span>
                  <h3 class="text-xl font-semibold text-white">
                    Always looking for ways <span class="text-brand-primary">to do things better!</span>
                  </h3>
                </div>

                <div class="font-sans grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-0">
                  <NuxtLink :to="item.link" v-for="item in commitments"
                    class="shadow-2xl button-animation duration-700 group border-0 border-solid border-black shadow-card m-auto flex rounded-lg bg-black/10 p-5 w-full h-full">
                    <div class="flex h-fit flex-col">
                      <i :class="item.icon" class="text-black text-lg pb-2 group-hover:text-brand-primary"
                        translate="no"></i>
                      <h3 class="text-md font-semibold text-brand-primary flex justify-left group-hover:text-black">
                        {{ item.name }}
                      </h3>
                      <p class="text-sm text-white">{{ item.description }}</p>
                      <i
                        class="fas fa-arrow-right mt-5 font-bold text-right text-lg group-hover:text-brand-primary text-gray-300 duration-700"></i>
                    </div>
                  </NuxtLink>
                </div>
              </section>

              <Stats />

              <Testimonials />

              <div class="bg-white">
                <div class="container max-w-6xl mx-auto text-left py-5">
                  <h1 class="text-2xl font-semibold text-black">
                    Corporate Social Responsibility
                    <span class="text-brand-primary"><br> & Sustainability</span>
                  </h1>
                </div>
              </div>

              <div class="mx-auto bg-white w-screen">
                <div class="relative">
                  <NuxtImg
                    src="https://media.istockphoto.com/id/1373228637/photo/shot-of-a-young-woman-working-with-crops-on-a-farm.jpg?s=1024x1024&w=is&k=20&c=mm8qrVd-G14H6Qu1ZG1hclp5AaulaOs-Je5ZY23YmME="
                    alt="city view" class="w-full h-full object-center object-cover absolute sm:block hidden" />
                  <NuxtImg src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view"
                    class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                  <div
                    class="text-xl relative z-20 bg-gradient-to-r from-gray-700 to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md">
                    <div>
                      <p
                        class="container ml-20 text-xs leading-normal text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
                        Our initiatives focus on reducing our environmental impact, promoting ethical business
                        practices, and contributing positively to the communities we serve. We believe in creating
                        long-term value for our stakeholders by integrating sustainable practices into our core
                        operations and fostering a culture of responsibility and transparency.
                      </p>
                      <div class="ml-20 mt-10 max-w-md">
                        <NuxtLink to="/csr"
                          class="subheading-class text-white underline underline-offset-8 hover:button-animation">
                          Learn More <i class="fas fa-caret-right mt-1"></i>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-white w-full h-full">
                <Awards />
              </div>

              <div class="w-full h-full container mx-auto max-w-6xl">
                <div class="font-sans my-0">
                  <div class="py-10 sm:px-2 lg:px-4">
                    <div class="lg:max-w-none">
                      <div class="justify-between content-center">
                        <h2 class="text-2xl font-semibold text-black text-left">
                          Join Our <span class="text-brand-primary">Team</span>
                        </h2>
                      </div>
                      <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
                        <NuxtLink :href="member.link" v-for="member in joinAsMembers" :key="member.name"
                          class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8 border-brand-primary">
                          <div class="sm:flex-shrink-0 flex justify-center">
                            <i :class="member.icon" class="text-black text-2xl"></i>
                          </div>
                          <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                            <h3 class="subheading-class text-brand-primary flex justify-center">{{ member.name }}</h3>
                            <p class="mt-2 text-[13px] text-gray-500">{{ member.description }}</p>
                            <i
                              class="fas fa-arrow-right mt-5 font-bold text-md group-hover:text-brand-primary text-gray-300 duration-700"></i>
                          </div>
                        </NuxtLink>
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
