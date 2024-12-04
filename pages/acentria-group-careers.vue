<script setup>
const principles = ref([
    {
        name: 'We foster strong partnerships',
        icon: 'fas fa-users',
        description: 'Customer focus is at the heart of what we do! We work as a team to build lasting customer relationships by understanding their needs, offering competitive solutions and going beyond their expectations.'
    },
    {
        name: 'Hire good people and empower them.',
        icon: 'fas fa-award',
        description: 'We are intentional about how we source talent in line with our key principles. We place the right people in the right positions, develop their talent and skills and provide opportunities for them to influence favorable outcomes.'
    },
    {
        name: 'Innovate and Focus on solutions, not problems.',
        icon: 'fas fa-lightbulb',
        description: 'Begin with the end in mind and involve the right people. Stay positive and work together for desired results.'
    },
    {
        name: 'Do what we say we\'re going to do.',
        icon: 'fas fa-check-circle',
        description: 'Set realistic expectations. Communicate clearly. Be accountable for your actions.'
    },
    {
        name: 'Have fun.',
        icon: 'fas fa-smile',
        description: 'Celebrate success, diversity, engage respectfully and contribute to a positive working environment.'
    },
    {
        name: 'Prosper and Play to win.',
        icon: 'fas fa-trophy',
        description: 'Put integrity first. Be competitive. Work together as a team to exceed expectations.'
    },

])

const bannerContent = ref({
    subtitle: 'Careers',
    title: 'Acentria Group Careers',
    image: '/img/team4.jpg'
})

const joinAsMembers = ref([
    {
        name: 'Our Vision',
        icon: 'fas fa-user-plus',
        description: 'To be a global leader empowering prosperity.',
    },
    {
        name: 'Our Mission',
        icon: 'fas fa-truck',
        description: 'To provide financial and risk advisory services through innovations that empower our clients’ prosperity.',
    },
    {
        name: 'Our Mantra',
        icon: 'fas fa-briefcase',
        description: '<div class="text-left"> <span class="text-brand-primary">#</span>Empower <span class="text-brand-primary">#</span>Innovate <span class="text-brand-primary">#</span>Prosper </div>',
    },
])

const values = ref([
    {
        name: 'Professionalism',
        image: 'https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'We are a trusted partner and do things the right way.'
    },
    {
        name: 'Customer Focus',
        image: 'https://images.pexels.com/photos/3801701/pexels-photo-3801701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'Our internal and external customers are our lifeline.'
    },
    {
        name: 'Integrity',
        image: 'https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'We do responsible business.'
    },
    {
        name: 'Innovativeness',
        image: 'https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg',
        description: 'We are agile and always investing ahead of the curve.'
    },
    {
        name: 'Teamwork',
        image: 'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        description: 'We deliver value together.'
    },
])

const careerPath = ref([
    {
        name: 'Insurance',
        icon: 'fas fa-shield-alt',
        description: 'Join our insurance team and help provide comprehensive coverage solutions to protect our clients\' assets and well-being.',
    },
    {
        name: 'Reinsurance',
        icon: 'fas fa-sync-alt',
        description: 'Be a part of our reinsurance team and work on innovative solutions to manage and mitigate risk for our clients.',
    },
    {
        name: 'Actuarial',
        icon: 'fas fa-chart-line',
        description: 'Join our actuarial team and use your analytical skills to assess risk and help design insurance policies that meet our clients\' needs.',
    },
    {
        name: 'Technology',
        icon: 'fas fa-laptop-code',
        description: 'Join our technology team and drive innovation by developing cutting-edge solutions to enhance our services and operations.',
    },
    {
        name: 'Investment',
        icon: 'fas fa-handshake',
        description: 'Become a part of our broking team and facilitate the best insurance deals for our clients through strong relationships with insurers.',
    },
])

const products = [
    {
        id: 1,
        name: 'Video 1',
        href: '#',
        price: '$13',
        description: 'Ms 1',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-01.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Video 2',
        href: '#',
        price: '$64',
        description: 'Mr 1',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-02.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'Video 3',
        href: '#',
        price: '$32',
        description: 'Ms 2',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-03.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
]

</script>

<template>
    <main>
        <div class="bg-white">
    <div>
        <BannerMain :content="bannerContent" />

        <div class="isolate !mb-5 py-5 md:py-0 mt-5 bg-white">
            <div class="relative isolate -z-10">
                <div class="container overflow-hidden">
                    <div class="container max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div class="flex flex-col gap-2">
                                <h1 class="text-2xl font-semibold leading-normal">
                                    <span class="text-brand-primary">Grow With a</span> <br>
                                    Pathfinder
                                </h1>
                                <p class="text-sm leading-normal">
                                    Acentria Group has experienced tremendous growth over the last few years.
                                    Our journey has been characterized by diversification of business, immense
                                    learning experiences, changes in corporate culture, and increased intensity
                                    in the relationships with our partners. We focus on doing business the right
                                    way, in a sustainable manner, providing incremental value to our customers
                                    and employees. Our culture is underpinned by the principles of <b>Empowerment, Innovation</b>, and <b>Prosperity.</b>
                                </p>
                            </div>

                            <div class="relative py-4">
                                <NuxtImg alt="Image of growth" loading="lazy" decoding="async" src="/img/give.jpg"
                                    class="rounded-xl w-full h-[250px] object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="container mx-auto mb-5 pl-20 font-sans">
            <h2 class="text-2xl font-semibold text-black">
                What Drives Us <span class="text-brand-primary"> at Acentria Group</span>
            </h2>
        </section>

        <div class="relative isolate overflow-hidden bg-black py-5 font-sans">
            <NuxtImg src="/img/tornado.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div class="container relative mx-auto max-w-6xl px-6 lg:px-8">
                <dl class="font-sans grid grid-cols-1 gap-10 text-white sm:grid-cols-2 lg:grid-cols-3">
                    <div v-for="(feature, index) in joinAsMembers" :key="feature.name" class="flex flex-col">
                        <dt class="text-white flex items-center">
                            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                <i :class="feature.icon" class="text-white" aria-hidden="true"></i>
                            </div>
                            <span class="ml-2">{{ feature.name }}</span>
                        </dt>
                        <dd class="mt-1 text-xs text-white">
                            <p v-html="feature.description"></p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>

        <div class="py-2" style="background-color: #f6f8fc">
            <section class="relative py-1">
                <div class="container px-4">
                    <h2 class="text-2xl font-semibold text-black mb-4">
                        We are Devoted to <br><span class="text-brand-primary">Our Core Principles</span>
                    </h2>
                    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div v-for="principle in principles" class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold pb-1 leading-normal">{{ principle.name }}</h4>
                                <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div class="font-sans py-0" style="background-color: rgb(246, 248, 252)">
            <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                <div class="relative py-4 lg:basis-1/2">
                    <NuxtImg alt="Image of Enable growth" loading="lazy" decoding="async" class="w-full h-[300px] rounded-lg" src="/img/what.jpg" />
                </div>
                <div class="flex flex-col justify-center lg:basis-1/2">
                    <h2 class="text-2xl font-semibold pb-4 pt-6 text-brand-primary">
                        <span class="text-black">Why would you <br></span> work for Acentria
                    </h2>
                    <p class="text-sm leading-normal mb-4">
                        Working at Acentria is an enriching journey to growth and prosperity. We have numerous engagement forums, propagate empowerment and job autonomy, and nurture a supportive and inclusive environment.
                    </p>
                    <NuxtLink href="/acentria-benefits" class="text-center !button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Learn how you benefit by joining us
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div class="container mx-auto max-w-6xl">
            <div class="my-0">
                <div class="py-10 sm:px-2 lg:px-4">
                    <h2 class="text-2xl font-semibold text-black text-left">
                        Career Paths <span class="text-brand-primary">At Acentria</span>
                    </h2>
                    <div class="my-6">
                        <NuxtLink href="/our-brand" class="!button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                            Search for Open Positions <i class="fas fa-search text-primary ml-2"></i>
                        </NuxtLink>
                    </div>
                    <div class="mt-5 grid grid-cols-1 gap-x-2 gap-y-4 lg:grid-cols-5">
                        <div v-for="member in careerPath" :key="member.name" class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-b-2 border-brand-primary">
                            <div class="sm:flex-shrink-0 flex justify-center">
                                <i :class="member.icon" class="text-black text-2xl"></i>
                            </div>
                            <div class="mt-1 sm:ml-6 lg:ml-0">
                                <h3 class="text-brand-primary flex justify-center font-semibold">{{ member.name }}</h3>
                                <i class="fas fa-arrow-right mt-5 font-bold text-md group-hover:text-brand-primary text-gray-300 duration-700"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white font-sans">
            <div class="container mx-auto max-w-6xl px-4 py-0 sm:px-6 lg:max-w-6xl lg:px-8">
                <h2 class="text-2xl font-semibold text-black text-left mb-5">
                    Life at <span class="text-brand-primary">Acentria Group</span>
                </h2>
                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2">
                            <NuxtImg :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class="mt-4 flex items-center justify-between subheading-class text-black">
                            <h3>{{ product.name }}</h3>
                            <p>
                                <i class="fas fa-play text-2xl text-brand-primary"></i>
                            </p>
                        </div>
                        <p class="mt-1 text-xs italic text-gray-500">{{ product.description }}</p>
                    </a>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <div class="container mx-auto mb-5 font-sans">
                <h2 class="text-2xl font-semibold text-black">
                    Our Shared <span class="text-brand-primary"><br>Company Values</span>
                </h2>
            </div>

            <div class="relative isolate overflow-hidden bg-black py-14 font-sans">
                <NuxtImg src="/img/tornado.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-black opacity-30"></div>

                <section class="mb-5 container">
                    <div class="font-sans">
                        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-0">
                            <a v-for="news in values" :key="news.title" class="relative flex flex-col overflow-hidden rounded-lg bg-brand-white shadow-card" href="resources/blog/preparing-for-ai-regulations.html">
                                <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                    <NuxtImg :src="news.image" alt="Image" class="object-center object-cover h-full w-full" />
                                </div>
                                <div class="relative z-10 grid gap-2 bg-brand-white px-4 py-2">
                                    <section class="grid items-start justify-start gap-y-3">
                                        <div class="relative flex flex-col gap-y-1">
                                            <label class="text-xs text-brand-primary capitalize">{{ news.tag }}</label>
                                            <h6 class="text-[15px] font-semibold text-black line-clamp-1">{{ news.name }}</h6>
                                            <p class="text-xs leading-normal">{{ news.description }}</p>
                                        </div>
                                    </section>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        <div class="text-white py-10" style="background-color: #f6f8fc">
            <div class="container mx-auto flex px-4 lg:flex-row flex-col lg:gap-16">
                <div class="flex flex-col justify-center lg:basis-2/5">
                    <h2 class="pb-4 md:pb-5 text-2xl font-semibold text-brand-primary">
                        <span class="font-sans text-black">Join our</span> <br>
                        Talent Community
                    </h2>
                    <p class="text-xs leading-normal mb-4 text-black">
                        At Acentria Group, we are catalysts of transformation. Please join our talent community to get job alerts and share your career details with us for future considerations.
                    </p>
                    <NuxtLink href="/meet-the-team" class="text-center !button-animation !hover:bg-black bg-brand-primary text-white font-medium py-3 px-12 text-sm rounded-md mt-10">
                        Join Now
                        <i class="fas fa-award text-primary ml-2"></i>
                    </NuxtLink>
                    <div class="font-sans my-5">
                        <label for="email" class="block text-md font-semibold leading-6 text-black">Your Email Address</label>
                        <div class="relative mt-2 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fas fa-paper-plane text-black"></i>
                            </div>
                            <input type="email" name="email" id="email" class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6" placeholder="you@example.com">
                        </div>
                    </div>
                    <NuxtLink href="/meet-the-team" class="text-center !button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                        Subscribe for job alerts
                        <i class="fas fa-arrow-right text-primary ml-2"></i>
                    </NuxtLink>
                    <p class="text-gray-500 italic mt-3">
                        By submitting this form, you agree to receive the information requested as well as sales and/or marketing communication on resources, news, and events related to Acentria Group.
                    </p>
                </div>

                <div class="relative py-4 lg:basis-3/5">
                    <NuxtImg alt="Image of community" loading="lazy" decoding="async" src="/img/join2.jpg" class="rounded-xl w-full h-[500px]" />
                </div>
            </div>
        </div>
    </div>
</div>
    </main>
</template>

<style scoped></style>