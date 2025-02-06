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
    subheading: 'Unlock Your <span class="text-brand-primary">Financial Potential</span>',
    image: '/img/lady-shake.jpg',
    link: '/',
    content: 'We’re not your usual investment folks – we’re like your financial buddies. Our goal is to understand your dreams and make them happen. Whether it’s setting up guaranteed endowments that keep your future secure or showing you how unit trusts can help your money grow in different ways, we’re here for you. And when it comes to getting ready for retirement, we’re your guides to feeling confident about your finances later in life. We believe in building lasting relationships with our clients, understanding their unique needs, and providing personalized investment solutions. Our team of experts is dedicated to helping you navigate the complexities of the financial world, ensuring that your investments are aligned with your long-term goals. We take the time to educate you on the various investment options available, empowering you to make informed decisions that will benefit you and your family.'
})

const bannerMainContent = ref({
    title: 'Acentria Group Investment<br> <span class="text-brand-primary"> & Financial Services</span>',
    subtitle: ' Expert Investment & Financial Services for Your Business',
    image: '/img/iStock-483918009.jpg',
})

const features = [
    {
        img: 'https://img.freepik.com/free-photo/light-bulb-with-drawing-graph_1232-2775.jpg?t=st=1738395013~exp=1738398613~hmac=4a3a104adca9baf074d808b3a7aaff0c3cac0bb7abcd61c3d2c5e8abbec6ebd0&w=900',
        title: 'Savings with Strategy',
        description: 'We help you save by combining insurance and investments, ensuring a strategic approach to growing your wealth.',
        url: '/acentria-group-investment', 
    },
    {
        img: 'https://img.freepik.com/free-photo/focused-call-center-operator-typing-laptop_74855-4213.jpg?t=st=1738395063~exp=1738398663~hmac=694fda4068ed3ae8c10745e29a2cc71b883f4de5f9f2330c7dc2ae017290759a&w=900', 
        title: 'Support When You Need It',
        description: 'Get expert advice tailored to your needs, ensuring you have the right guidance at every step.',
        url: '/acentria-group-investment', 
    },
    {
        img: 'https://img.freepik.com/free-photo/confident-man_176420-33461.jpg?t=st=1738395113~exp=1738398713~hmac=a6d4ea514d22b6b56192ca4a46f99111c4f90026da58550fe8ffa55da376d690&w=900', 
        title: 'Easy to Use',
        description: 'Access convenient and user-friendly investment solutions designed for your comfort.',
        url: '/acentria-group-investment', 
    },
    {
        img: 'https://img.freepik.com/free-photo/front-view-confident-woman-studio_23-2148410803.jpg?t=st=1738395153~exp=1738398753~hmac=fc56a9fc501561107a40511439143855ce76ba30d2e473ef2b796394e2feac68&w=900',
        title: 'Confidence and Care',
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
            <div class="sm:grid grid-cols-4 gap-3 py-5">
                <HighlightCard :item="feature" v-for="feature in features" :key="feature.name" />
            </div>
        </div>

        <ContactForm />

        <InTouch />
    </div>
</template>

<style scoped></style>