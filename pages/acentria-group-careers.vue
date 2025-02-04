<script setup>
const principles = ref([
    {
        name: 'Foster Strong Partnerships',
        icon: 'fas fa-users',
        description: 'Customer focus is at the heart of our business. We work as a team to build lasting relationships, understanding our clients\' needs, offering competitive solutions, and exceeding their expectations.'
    },
    {
        name: 'Hire Good People and Empower Them',
        icon: 'fas fa-award',
        description: 'We are intentional in sourcing talent aligned with our values. We place the right people in the right positions, develop their skills, and provide opportunities for them to influence positive outcomes.'
    },
    {
        name: 'Innovate & Focus on Solutions, Not Problems',
        icon: 'fas fa-lightbulb',
        description: 'We begin with the end in mind, involve the right people, and stay positive as we work together to achieve desired results.'
    },
    {
        name: 'Do What We Say We’re Going to Do',
        icon: 'fas fa-check-circle',
        description: 'We set realistic expectations, communicate clearly, and hold ourselves accountable for our actions.'
    },
    {
        name: 'Have Fun',
        icon: 'fas fa-smile',
        description: 'We celebrate success, embrace diversity, engage respectfully, and contribute to a positive and enjoyable working environment.'
    },
    {
        name: 'Prosper and Play to Win',
        icon: 'fas fa-trophy',
        description: 'We put integrity first, embrace competition, and work as a team to exceed expectations.'
    },
])

const bannerContent = ref({
    subtitle: 'Careers',
    title: 'Acentria Group Careers',
    image: '/img/team4.jpg'
})

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
        link: '/acentria-group-insurance',
        description: 'Join our insurance team and help provide comprehensive coverage solutions to protect our clients\' assets and well-being.',
    },
    {
        name: 'Reinsurance',
        icon: 'fas fa-sync-alt',
        link: '/acentria-group-reinsurance',
        description: 'Be a part of our reinsurance team and work on innovative solutions to manage and mitigate risk for our clients.',
    },
    {
        name: 'Actuarial',
        icon: 'fas fa-chart-line',
        link: '/acentria-group-actuarial',
        description: 'Join our actuarial team and use your analytical skills to assess risk and help design insurance policies that meet our clients\' needs.',
    },
    {
        name: 'Technology',
        icon: 'fas fa-laptop-code',
        link: '/',
        description: 'Join our technology team and drive innovation by developing cutting-edge solutions to enhance our services and operations.',
    },
    {
        name: 'Investment',
        icon: 'fas fa-handshake',
        link: '/acentria-group-investment',
        description: 'Become a part of our broking team and facilitate the best insurance deals for our clients through strong relationships with insurers.',
    },
])

const pathfinder = ref({
    orientation: 'image-right',
    heading: '<span class="text-brand-primary ">Grow With a</span> <br> Pathfinder',
    subheading: '',
    image: '/img/give.jpg',
    link: '/',
    content: 'Acentria Group has experienced remarkable growth over the past few years, driven by business diversification, continuous learning, and a transformation in corporate culture. As we evolve, our relationships with partners have deepened, and we remain focused on doing business the right way—sustainably and with integrity. We are committed to providing incremental value to our customers and employees, ensuring that every step we take is aligned with our core principles of <b>Empowerment</b>, <b>Innovation</b>, and <b>Prosperity</b>. These values guide our path forward as we continue to foster a thriving culture and pave the way for long-term success.'
})

const ourPeople = ref({
    orientation: 'image-left',
    heading: '<span class="text-brand-primary">Our</span> <br>People',
    subheading: '',
    image: '/img/Professionals and Business Service.JPG',
    link: '/',
    content: 'At Acentria Group, we are SMART people—driven by the belief that everything we do should be SMART in thinking, design, and the value it brings to both our company and the market. We are committed to ensuring smart solutions are at the core of our actions, staying energized, passionate, and focused on executing this vision. <br><br> This mindset is a fundamental part of Acentria Group’s DNA, fueling our continuous growth and the success of our clients, partners, and employees.'
})

const whyWork = ref({
    orientation: 'image-left',
    heading: '<span class="text-black">Why would you <br></span> <span class="text-brand-primary">work for Acentria</span>',
    subheading: '',
    image: '/img/documents-and-hands-on-table-in-conference-room-in-business-presentation-or-seminar.jpg_s=1024x1024&w=is&k=20&c=b5tpQztc7QrHHoqzb2d6zi51fV-g_sr1nQiT0r8rDJg=.jpg',
    link: '/acentria-benefits',
    content: 'At Acentria Group, we are SMART people—driven by the belief that everything we do should be SMART in thinking, design, and the value it brings to both our company and the market. We are committed to ensuring smart solutions are at the core of our actions, staying energized, passionate, and focused on executing this vision. <br><br> This mindset is a fundamental part of Acentria Group’s DNA, fueling our continuous growth and the success of our clients, partners, and employees.'
})

</script>

<template>
    <main>
        <div class="bg-white !font-sans">
            <BannerMain :content="bannerContent" />
            <ContentPic :content="pathfinder" />
            <ContentPic :content="ourPeople" />
            <div class="container py-5">
                <h2 class="section-heading pb-3">
                    We are Devoted to <br><span class="text-brand-primary">Our Core Principles</span>
                </h2>
                <p class="content pb-5">
                    At Acentria Group, we are guided by a set of core principles that shape everything
                    we do. These principles ensure we build strong relationships, foster innovation, and
                    achieve success together.
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div v-for="principle in principles"
                        class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                        <div class="flex flex-col">
                            <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                            <h4 class="card-heading pb-3">{{
                                principle.name }}</h4>
                            <p class="content">{{ principle.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContentPic :content="whyWork" />

            <div class="container py-5 font-sans">
                <h2 class="section-heading">
                    Career Paths <span class="text-brand-primary">At Acentria</span>
                </h2>
                <div class="my-6">
                    <NuxtLink to="/our-brand" class="pt-5">
                        <AppButton title="Search for Open Positions" />
                    </NuxtLink>
                </div>
                <div class="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-5 py-5">
                    <NuxtLink :to="member.link" v-for="member in careerPath" :key="member.name"
                        class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-r-2 border-brand-primary">
                        <div class="sm:flex-shrink-0 flex justify-center">
                            <i :class="member.icon" class="text-black text-xl"></i>
                        </div>
                        <div class="mt-1 sm:ml-6 lg:ml-0">
                            <h3 class="text-brand-primary flex justify-center font-semibold">{{ member.name
                                }}</h3>
                            <i
                                class="fas fa-arrow-right mt-5 font-bold text-md group-hover:text-brand-primary text-gray-300 duration-700"></i>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <div class="container mx-auto">

                <h2 class="section-heading font-sans pb-5">
                    Our Shared <span class="text-brand-primary"><br>Company Values</span>
                </h2>

                <div class="relative isolate overflow-hidden bg-black p-5 font-sans">
                    <NuxtImg src="/img/tornado.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-black opacity-30"></div>

                    <div class="mb-5 container">
                        <div class="font-sans">
                            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-0">
                                <a v-for="news in values" :key="news.title"
                                    class="relative flex flex-col overflow-hidden rounded-md bg-brand-white shadow-card"
                                    href="resources/blog/preparing-for-ai-regulations.html">
                                    <div class="relative mx-1 mt-1 aspect-[1.5] origin-top overflow-hidden rounded">
                                        <NuxtImg :src="news.image" alt="Image"
                                            class="object-center object-cover h-full w-full" />
                                    </div>
                                    <div class="relative z-10 grid gap-2 bg-brand-white px-4 py-2">
                                        <section class="grid items-start justify-start gap-y-3">
                                            <div class="relative flex flex-col gap-y-1">
                                                <h6 class="card-heading line-clamp-1">{{
                                                    news.name }}</h6>
                                                <p class="content">{{ news.description }}</p>
                                            </div>
                                        </section>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-white py-10">
                    <div class="container grid grid-cols-12 gap-10">

                        <div class="col-span-5 flex flex-col justify-center lg:basis-2/5">
                            <h2 class="pb-3 section-heading text-brand-primary">
                                <span class="font-sans text-black">Join our</span> <br>
                                Talent Community
                            </h2>
                            <p class="content pb-5">
                                At Acentria Group, we are catalysts of transformation. Please join our talent community
                                to get job alerts and share your career details with us for future considerations.
                            </p>
                            <NuxtLink to="/meet-the-team" class="">
                                <AppButton title="Join Now" />
                            </NuxtLink>

                            <div class="font-sans pt-10">
                                <label for="email" class="block text-md font-semibold leading-6 text-black">Your Email
                                    Address</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <i class="fas fa-paper-plane text-black"></i>
                                    </div>
                                    <input type="email" name="email" id="email"
                                        class="tracking-widest font-semibold block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-black placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6"
                                        placeholder="you@example.com">
                                </div>
                            </div>
                            <a href="#"
                                class="mt-3">
                                <AppButton title="Subscribe for job alerts" />
                            </a>
                            <p class="small-text italic mt-2 text-[10px]">
                                By submitting this form, you agree to receive the information requested as well as sales
                                and/or marketing communication on resources, news, and events related to Acentria Group.
                            </p>
                        </div>

                        <div class="col-span-7 relative py-4">
                            <NuxtImg alt="Image of community" loading="lazy" decoding="async" src="/img/Join our.JPG"
                                class="rounded-xl w-full h-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>