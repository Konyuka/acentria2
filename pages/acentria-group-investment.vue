<script setup>
const intro = ref('At Acentria, we’re not just about insurance – we understand your financial aspirations. Our comprehensive investment solutions are designed to help you grow and protect your wealth, offering personalized strategies that give you peace of mind. Let us handle your investment needs at Acentria.')
const leftTitle = ref(`Why Invest <br> <span class="text-brand-primary">with Acentria</span>`)

const content = ref({
    vid: '/img/hd1.mp4',
    pageTitle: 'Acentria Group Investment',
    title: 'Grow Your Wealth with <br/> <span class="text-brand-primary">Expert Investment Solutions</span>',
})

const introContent = ref({
    orientation: 'image-left',
    heading: 'Acentria  <br> <span class="text-brand-primary">  Investment Services</span>',
    subheading: 'Empowering Your <span class="text-brand-primary">Financial Future</span>',
    image: '/img/lady-shake.jpg',
    link: '/',
    content:'At Acentria, we believe in standing with you, walking with you, and rising with you. Our investment solutions, from endowments to unit trusts, are designed to match your unique goals. We’re here to help you make confident, informed decisions for a secure financial future.'
})

const bannerMainContent = ref({
    title: 'Acentria Group Investment<br> <span class="text-brand-primary"> & Financial Services</span>',
    subtitle: ' Expert Investment & Financial Services for Your Business',
    image: '/img/iStock-483918009.jpg',
})

const features = [
    {
        img: 'https://img.freepik.com/free-vector/business-growth-concept-illustration_114360-8666.jpg?t=st=1739430164~exp=1739433764~hmac=130adc24e4937ef2a346f9b22cd7df09eebb53d6f719d33100e1293a902b75a4&w=1380',
        title: 'Smart Growth',
        description: 'Choose from a variety of options to grow your wealth with innovative strategies tailored to your goals.',
        url: '/acentria-group-investment',
    },
    {
        img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-business-strategy-concept_23-2149145877.jpg?t=st=1739430207~exp=1739433807~hmac=7b25e21ec9ed2d7826c6d834f1f3702e40f00a1b6054d7c7106657c5ef751a5c&w=1380',
        title: 'Savings with Strategy',
        description: 'We help you save by combining insurance and investments, ensuring a strategic approach to growing your wealth.',
        url: '/acentria-group-investment',
    },
    {
        img: 'https://img.freepik.com/free-vector/active-support-concept-illustration_114360-587.jpg?t=st=1739430242~exp=1739433842~hmac=ccbde1cee41fe35fb39175551ab4bc7b0a077a0e59382d07911b95a3f9c1d2ed&w=2000',
        title: 'Support on Need',
        description: 'Get expert advice tailored to your needs, ensuring you have the right guidance at every step.',
        url: '/acentria-group-investment',
    },
    {
        img: 'https://img.freepik.com/free-photo/view-3d-hand-showing-peace-sign_23-2150990265.jpg?t=st=1739430311~exp=1739433911~hmac=ec4315e8d5ebd9ff50b816519072afc93e904f9ff595ca9cb3492a5dfa339198&w=2000',
        title: 'Easy to Use',
        description: 'Access convenient and user-friendly investment solutions designed for your comfort.',
        url: '/acentria-group-investment',
    },
    {
        img: 'https://img.freepik.com/free-vector/upvote-concept-illustration_114360-521.jpg?t=st=1739430348~exp=1739433948~hmac=f1311657f3eace4c77dbe779dc61fd93081e519333eadf161b3722f5038f0b09&w=1380',
        title: 'Confidence & Care',
        description: 'Professional guidance to secure your future, giving you confidence in your financial decisions.',
        url: '/acentria-group-investment',
    },
];


</script>

<template>
    <div class="bg-white">
        <Carousel2 :content="bannerMainContent" />

        
        <ContentPic :content="introContent" />

        <div class="container py-5">
            <h2 class=" section-heading pb-3">
                Why Invest <span class="text-brand-primary">with Acentria</span>
            </h2>
            <div class="sm:grid grid-cols-5 gap-3 py-5">
                <HighlightCard :item="feature" v-for="feature in features" :key="feature.name" />
            </div>
        </div>

        <ContactForm />

        <InTouch />
    </div>
</template>

<style scoped></style>