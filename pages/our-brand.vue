<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Our Brand',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const smartSolutions = ref({
    orientation: 'image-right',
    heading: 'The Power of <span class="text-brand-primary">Smart Solutions</span>',
    subheading: '',
    image: '/img/compass.jpg',
    link: '/',
    content: 'For us, smart solutions go beyond technology—they are about understanding your needs, being creative in our approach, and looking ahead. Done Smart means blending intelligence with action to create solutions that go beyond what’s expected and help you navigate the future with confidence.'
});

const heartOfBrand = ref({
    orientation: 'image-right',
    heading: 'The Heart of <span class="text-brand-primary">Our Brand</span>',
    subheading: '',
    image: '/img/heart.jpg',
    link: '/',
    content: 'At the core of Acentria lies a deep belief in innovation, integrity, and intelligence. These principles guide our every move. The heart of our brand is not just about doing things well; it’s about doing them in the smartest, most thoughtful way to create lasting value. We strive for brilliance in all that we do, nurturing meaningful relationships and driving progress that inspires.'
});

const beyondLogo = ref({
    orientation: 'image-left',
    heading: 'The  <span class="text-brand-primary">Acentria Way</span>',
    subheading: '',
    image: '/img/LogoT.png',
    link: '/',
    content:'At Acentria, Done Smart is part of everything we do. It’s in how we collaborate, how we innovate, and how we empower you to achieve your goals. Together, we rise.'
});

const brandPromise = ref({
    orientation: 'image-right',
    heading: 'Our Brand, <span class="text-brand-primary">Your Future;</span> Done Smart',
    subheading: '',
    image: '/img/brandpromise.jpg',
    link: '/',
    content:'We’re here to help you build a future that’s smarter, more efficient, and full of possibilities. With Done Smart, we’re not just creating solutions—we’re helping you unlock your potential and succeed, no matter what challenges come your way.’',
    cta: 'Ready for Smart Solutions? <br> <span class="text-brand-primary">Let’s start your smart journey today.</span>'
});

const joinAsMembers = ref([
    {
        name: 'Empowering Ideas',
        icon: 'fas fa-lightbulb',
        link: '/',
        description: 'We’re here to stand by you with tailored solutions that make your journey smoother, more innovative, and ultimately, more successful.',
    },
    {
        name: 'Innovating for Impact',
        icon: 'fas fa-chart-line',
        link: '/',
        description: 'We don’t just follow trends—we set them. Done Smart is about embracing change, simplifying complexity, and delivering results that really matter to you.',
    },
    {
        name: 'Prosperity in Every Step',
        icon: 'fas fa-seedling',
        link: '/',
        description: 'We believe success is about more than just today. Done Smart ensures that every solution is designed for long-term growth and sustainable success.',
    },
]);


</script>

<template>
    <section class="min-h-screen font-sans bg-white">
        <BannerMain :content="bannerContent" />

        <div class="container">
            <div>
                <h1 class="my-5 section-heading text-black text-left">
                    Done Smart: <span class="text-brand-primary">The Acentria Brand Promise</span>
                </h1>
                <p class="content pb-2">
                    At Acentria, we believe that the smartest solutions are the ones that truly make a difference.
                    <b>Done Smart</b> isn’t just a catchy phrase—it’s our promise to deliver solutions that are not only
                    clever but thoughtful, impactful, and designed to empower you to succeed.
                </p>
            </div>
        </div>

        <ContentPic :content="smartSolutions" />
        <div class="container py-5">

            <div class="justify-between content-center">
                <h2 class="section-heading text-black text-left pb-5">
                    Lets Grow <span class="text-brand-primary">Together</span>
                </h2>

                <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <NuxtLink v-motion-fade-visible :to="member.link" v-for="member in joinAsMembers" :key="member.name"
                        class="group button-animation sm:flex lg:block bg-gray-50 px-5 py-2 rounded-xs border-t-8 border-brand-primary">
                        <div class="sm:flex-shrink-0 flex justify-center py-5">
                            <i :class="member.icon" class="text-black fa-xl"></i>
                        </div>
                        <div>
                            <h3 class="card-heading text-brand-primary flex justify-center">{{ member.name }}</h3>
                            <p class="mt-2 content">{{ member.description }}</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>

        </div>
        <ContentPic :content="beyondLogo" />
        <ContentPic :content="brandPromise" />
        <!-- <ContentPic :content="brandPromise" /> -->

        <div class="container py-5">
            <h2 id="" class="section-heading">
                Ready for Smart Solutions? <br> <span class="text-brand-primary">Let’s start your smart journey
                    today.</span>
            </h2>
        </div>

    </section>
</template>

<style scoped></style>
