<script setup>
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

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
  title: `Empowering Dreams <br /> <span class="font-sans tracking-normal text-brand-primary leading-normal lg:leading-normal"> Igniting Imagination </span>`,
  image: "/img/empower.jpeg",
  content:
    "At Acentria Group, we drive prosperity by unlocking infinite possibilities, empowering dreams, and igniting imagination to shape a brighter future.",
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
    description: 'Our partnerships with advisers, super funds and employer funds help us protect more people.',
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

const others = ref([
  {
    name: 'Vision <span class="text-brand-primary">& Mission</span>',
    description: 'A Lifestyle Built <span class="text-brand-primary"> Around Excellence</span>',
    image: '/img/join.jpg',
    link: '/our-brand',
  },
  {
    name: 'Our <span class="text-brand-primary">Leadership</span>',
    description: 'The leaders who <span class="text-brand-primary">inspire us</span>',
    image: '/img/leadership.jpg',
    link: '/meet-the-team',
  },
  {
    name: 'Our <span class="text-brand-primary">Culture</span>',
    description: 'The Acentria <span class="text-brand-primary">Way!</span>',
    image: '/img/hi5.jpg',
    link: '/corporate-culture',
  },
  {
    name: 'Our <span class="text-brand-primary">Brand</span>',
    description: 'A Lifestyle Built <span class="text-brand-primary"> Around Excellence</span>',
    image: '/img/join.jpg',
    link: '/our-brand',
  },

])

const chunkedBlogs = computed(() => {
  const chunkSize = 3
  const result = []
  for (let i = 0; i < others.value.length; i += chunkSize) {
    result.push(others.value.slice(i, i + chunkSize))
  }
  return result
})

onMounted(() => {
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

              <div class="w-full h-full border-t-4 border-brand-primary">
                <MakesUs2 />
              </div>

              <div class="container relative min-h-[30vh] ">
                <div class="mb-5 bottom-0 absolute max-w-7xl mx-auto">
                  <h2 class="text-2xl font-semibold text-white py-1">
                    Your might also <span class="text-brand-primary">be interested in</span>
                  </h2>
                  <h3 class="text-xl font-semibold text-white">
                    More about <span class="text-brand-primary"> Acentria</span>
                  </h3>
                </div>
              </div>

              <!-- <div class="bg-white">
                <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 bg-white">
                  <NuxtLink :to="blog.link" v-for="blog in others"
                    class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                    <div class="relative w-full">
                      <NuxtImg alt="" loading="lazy" width="300" height="200" decoding="async" data-nimg="1"
                        class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                        sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px" :src="blog.image"
                        style="color: transparent;" />
                      <div
                        class="absolute inset-0 flex flex-col items-start justify-between rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                      </div>
                    </div>
                    <div class="max-w-full">
                      <div class="font-sans group relative">
                        <h1 v-html="blog.name"
                          class="mt-3 text-[16px] font-semibold leading-normal text-black transition-colors group-hover:text-brand-primary">
                        </h1>
                        <p v-html="blog.description" class="line-clamp-3 text-[13px] leading-normal text-black">
                        </p>
                      </div>
                      <div class="font-semibold mt-5 text-xs">
                        Learn More <i class="ml-2 fas fa-arrow-right"></i>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div> -->

              <div class="!overflow-x-hidden !font-sans bg-white pb-5">
                <!-- Carousel Wrapper -->
                <Carousel :autoplay="2000" :wrap-around="true" :items-to-show="1">
                  <!-- Each Slide -->
                  <Slide v-for="(chunk, cIndex) in chunkedBlogs" :key="cIndex" class="relative">
                    <!-- Grid of Cards Inside One Slide -->
                    <div class="bg-white">
                      <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                        <NuxtLink v-for="(blog, index) in chunk" :key="index" :to="blog.link"
                          class="button-animation rounded-xl p-3 shadow-md group flex flex-col items-start justify-between">
                          <div class="relative w-full">
                            <NuxtImg alt="" loading="lazy" width="300" height="200" decoding="async" data-nimg="1"
                              class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                              :src="blog.image" style="color: transparent;" />
                            <div
                              class="absolute inset-0 flex flex-col items-start justify-between rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                            </div>
                          </div>
                          <div class="max-w-full">
                            <div class="font-sans group relative">
                              <h1 v-html="blog.name"
                                class="mt-3 text-[16px] font-semibold leading-normal text-black transition-colors group-hover:text-brand-primary">
                              </h1>
                              <p v-html="blog.description" class="line-clamp-3 text-[13px] leading-normal text-black">
                              </p>
                            </div>
                            <div class="font-semibold mt-5 text-xs">
                              Learn More <i class="ml-2 fas fa-arrow-right"></i>
                            </div>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </Slide>

                  <!-- Carousel Controls (Pagination & Navigation) -->
                  <template #addons>
                    <Pagination />
                    <Navigation class="text-black px-10" />
                  </template>
                </Carousel>
              </div>

              <section class="container max-w-6xl mx-auto relative py-5">
                <div class="py-5 text-2xl font-semibold text-white text-left">
                  Our <span class="text-brand-primary">Commitments</span>
                  <h3 class="text-xl font-semibold text-white">
                    Always looking for ways <span class="text-brand-primary">to do things better!</span>
                  </h3>
                </div>

                <div class="font-sans grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-0">
                  <NuxtLink v-motion-fade-visible :to="item.link" v-for="item in commitments"
                    class="shadow-2xl button-animation duration-700 group border-0 border-solid border-black shadow-card m-auto flex rounded-lg bg-black/40 p-5 w-full h-full">
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
                  <NuxtImg src="/img/esggreen.jpg" alt="city view"
                    class="w-full h-full object-center object-cover absolute sm:block hidden" />
                  <NuxtImg src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view"
                    class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                  <div
                    class="!py-28 text-xl relative z-20  to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md">
                    <div>
                      <p
                        class="container ml-20 text-xs leading-loose   text-white xl:w-5/12 lg:w-8/12 md:w-10/12 2xl:pr-12 mt-4">
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
                        <h2 class="text-2xl font-semibold text-white text-left">
                          Lets Grow <span class="text-brand-primary">Together</span>
                        </h2>
                      </div>
                      <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-3">
                        <NuxtLink v-motion-fade-visible :href="member.link" v-for="member in joinAsMembers"
                          :key="member.name"
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
