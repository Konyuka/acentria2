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
    heading: 'Beyond a Logo <span class="text-brand-primary">or Tagline</span> <br> <span class="text-brand-primary">Empower |</span> Innovate | <span class="text-brand-primary">Prosper</span>',
    subheading: '',
    image: '/img/LogoT.png',
    link: '/',
    content: 'Our logo and tagline, "Empower, Innovate, Prosper", capture the essence of what we stand for. We believe in empowering our clients, partners, and communities to innovate and drive meaningful change. Through innovation, we push the boundaries of what’s possible, and by prospering together, we create sustainable success for everyone involved.'
});

const brandPromise = ref({
    orientation: 'image-right',
    heading: 'Our Brand, <span class="text-brand-primary">Your Future;</span> Done Smart',
    subheading: '',
    image: '/img/brandpromise.jpg',
    link: '/',
    content: 'We’re here to help you build a future that’s smarter, more efficient, and full of possibilities. With Done Smart, we’re not just creating solutions—we’re helping you unlock your potential and succeed, no matter what challenges come your way.',
    cta: 'Ready for Smart Solutions? <br> <span class="text-brand-primary">Let’s start your smart journey today.</span>'
});

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
        <ContentPic :content="heartOfBrand" />
        <ContentPic :content="beyondLogo" />
        <ContentPic :content="brandPromise" />

        <div class="container py-5">
            <h2 id="" class="section-heading">
                Ready for Smart Solutions? <br> <span class="text-brand-primary">Let’s start your smart journey
                    today.</span>
            </h2>
        </div>

    </section>
</template>

<style scoped></style>
