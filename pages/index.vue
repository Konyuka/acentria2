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
    "At Acentria Group, we drive prosperity by unlocking infinite possibilities, <br> empowering dreams, and igniting imagination to shape a brighter future.",
});

const mission = ref(null)





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
    name: 'Our <span class="text-brand-primary ml-2"> Customers</span>',
    icon: 'fas fa-users',
    description: 'We\'re committed to helping live a life that\'s as healthy and as full as possible.',
    link: '/our-commitment'
  },
  {
    name: 'Our <span class="text-brand-primary ml-2"> Partners</span>',
    icon: 'fas fa-handshake',
    description: 'Our partnerships with advisers, super funds and employer funds help us protect more people.',
    link: '/our-commitment'
  },
  {
    name: 'Our <span class="text-brand-primary ml-2"> People</span>',
    icon: 'fas fa-user-friends',
    description: 'We\'ve built a culture that lets our people make the most of every opportunity.',
    link: '/our-commitment'
  },
  {
    name: 'Our <span class="text-brand-primary ml-2"> Communities</span>',
    icon: 'fas fa-globe',
    description: 'Improving lives through active involvement and raising standards for the industry as a whole.',
    link: '/our-commitment'
  },
])

const others = ref([
  {
    name: 'Vision <span class="text-brand-primary">& Mission</span>',
    description: 'A Lifestyle Built <span class="text-brand-primary"> Around Excellence</span>',
    image: 'https://img.freepik.com/premium-photo/vision-mission-values-outline-signpost-with-three-arrows_764664-8909.jpg?w=1380',
    link: '/our-brand',
  },
  {
    name: 'Our <span class="text-brand-primary">Leadership</span>',
    description: 'The leaders who inspire us',
    image: '/img/iStock-2148737980 Leadership.jpg',
    link: '/meet-the-team',
  },
  {
    name: 'Our <span class="text-brand-primary">Culture</span>',
    description: 'The Acentria Way!',
    image: '/img/Things that Inspire Us.JPG',
    link: '/corporate-culture',
  },
  {
    name: 'Our <span class="text-brand-primary">Brand</span>',
    description: 'A Lifestyle Built Around Excellence',
    image: '/img/join.jpg',
    link: '/our-brand',
  },
  {
    name: 'News &<span class="text-brand-primary"> Updates</span>',
    description: 'Stay informed with the latest news, trends, and updates from our company and industry.',
    image: 'https://img.freepik.com/free-photo/online-blog_53876-123696.jpg?t=st=1737285729~exp=1737289329~hmac=0699c60be392436d82c05b4f4e9a880ca2116b9b18e0814bf0964e103f4182e1&w=900',
    link: '/contact-acentria-group',
  },
  {
    name: 'Acentria <span class="text-brand-primary">Careers</span>',
    description: 'Explore exciting career opportunities and join our team to build a future of excellence.',
    image: '/img/team4.jpg',
    link: '/acentria-group-careers',
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
    <div class="font-sans">
      <AboutHero1 :InsuranceBannerContent="InsuranceBannerContent" />
      <MakesUs2 />
      <div class="container relative min-h-[30vh]">
        <div class="bottom-5 absolute">
          <h1 class="section-heading pb-3 text-white">
            Your might also <span class="text-brand-primary">be interested in</span>
          </h1>
          <h4 class="bannerDescription text-white">
            More about <span class="text-brand-primary"> Acentria</span>
          </h4>
        </div>
      </div>
      <div class="!overflow-x-hidden !font-sans bg-white py-5">
        <Carousel :autoplay="2000" :wrap-around="true" :items-to-show="1">
          <Slide v-for="(chunk, cIndex) in chunkedBlogs" :key="cIndex" class="relative">
            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <NuxtLink v-for="(blog, index) in chunk" :key="index" :to="blog.link"
                class="button-animation rounded-md p-3 shadow-md group flex flex-col items-start justify-between !bg-black">

                <div class="relative w-full">
                  <NuxtImg alt="" loading="lazy" width="300" height="200" decoding="async" data-nimg="1"
                    class="aspect-[16/9] w-full rounded-md bg-red-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                    :src="blog.image" style="color: transparent;" />
                  <div
                    class="absolute inset-0 flex flex-col items-start justify-between rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                  </div>
                </div>

                <div>
                  <div class="text-left font-sans group pb-5">
                    <h1 v-html="blog.name" class="card-heading !text-white mt-3 group-hover:text-brand-primary pb-2">
                    </h1>
                    <p v-html="blog.description" class="content !text-white">
                    </p>
                    <p class="small-text !text-white">
                      Learn More <i class="ml-2 fas fa-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </Slide>

          <template #addons>
            <Pagination />
            <Navigation class="text-black px-10" />
          </template>
        </Carousel>
      </div>
      <div class="container relative py-5">
        <h1 class="section-heading text-white text-left">
          Our <span class="text-brand-primary">Commitments</span>
        </h1>
        <h4 class="bannerDescription text-white pb-3">
          Always looking for ways <span class="text-brand-primary">to do things better!</span>
        </h4>
        <div class="font-sans grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 py-0">
          <NuxtLink v-motion-fade-visible :to="item.link" v-for="item in commitments"
            class="shadow-2xl button-animation duration-700 group border-0 border-solid border-black shadow-card m-auto flex rounded-lg bg-black/40 p-5 w-full h-full">
            <div class="flex h-fit flex-col">
              <i :class="item.icon" class="text-black text-lg pb-2 group-hover:text-brand-primary" translate="no"></i>
              <h3 class="card-heading flex justify-left group-hover:text-black" v-html="item.name"></h3>
              <p class="content text-white">{{ item.description }}</p>
              <i
                class="fas fa-arrow-right mt-5 font-bold text-right text-lg group-hover:text-brand-primary text-gray-300 duration-700"></i>
            </div>
          </NuxtLink>
        </div>
      </div>
      <Stats />
      <Testimonials />
      <div class=" bg-white w-screen pt-10 pb-5">
        <div class="relative">

          <NuxtImg src="/img/esggreen.jpg" alt="city view"
            class="w-full h-full object-center object-cover absolute sm:block hidden" />
          <NuxtImg src="/img/esggreen.jpg" alt="city view"
            class="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />

          <div
            class="!py-28 text-xl relative z-20  to-transparent w-full h-full top-0 md:p-16 p-6 flex flex-col justify-between rounded-md">

            <div class="container">
              <h1 class="section-heading text-white pb-5">
                Corporate Social Responsibility
                <span class="text-brand-primary"><br> & Sustainability</span>
              </h1>
              <p class="content text-white">
                Our initiatives focus on reducing our environmental impact, promoting ethical business
                practices, and contributing positively to the communities we serve. We believe in creating
                long-term value for our stakeholders by integrating sustainable practices into our core
                operations and fostering a culture of responsibility and transparency.
              </p>
              <div class="mt-5">
                <NuxtLink to="/csr" class="subheading-class text-white underline underline-offset-8 button-animation">
                  Learn More <i class="fas fa-caret-right mt-2"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white w-full h-full">
        <Awards />
      </div>

      <div class="container py-5">

        <div class="justify-between content-center">
          <h2 class="section-heading text-white text-left pb-5">
            Lets Grow <span class="text-brand-primary">Together</span>
          </h2>

          <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <NuxtLink v-motion-fade-visible :href="member.link" v-for="member in joinAsMembers" :key="member.name"
              class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8 border-brand-primary">
              <div class="sm:flex-shrink-0 flex justify-center py-5">
                <i :class="member.icon" class="text-black fa-xl"></i>
              </div>
              <div>
                <h3 class="card-heading text-brand-primary flex justify-center">{{ member.name }}</h3>
                <p class="mt-2 content">{{ member.description }}</p>
                <i
                  class="fas fa-arrow-right mt-5 font-bold text-md text-brand-primary group-hover:text-gray-300 duration-700"></i>
              </div>
            </NuxtLink>
          </div>
        </div>



      </div>

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
