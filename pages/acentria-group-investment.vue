<script setup>
const whys = ref([
    {
        title: 'We save you money',
        content: 'Through innovation, we provide unique offerings that enable you to combine your insurance products, ensure prudent risk management, reduce your loss ratios, and hence save you on cost',
        icon: 'savings',
    },
    {
        title: 'We are there for you',
        content: 'We will take care of your insurance needs through our versatile products and scope',
        icon: 'support_agent',
    },
    {
        title: 'Convenience',
        content: 'Our services and solutions are simplified for clients\' use.',
        icon: 'thumb_up',
    },
    {
        title: 'Peace of Mind',
        content: 'Your peace of mind is our priority. Our team of experts shall offer professional advice for your needs.',
        icon: 'sentiment_satisfied',
    },
])
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
    content:'We’re not your usual investment folks – we’re like your financial buddies. Our goal is to understand your dreams and make them happen. Whether it’s setting up guaranteed endowments that keep your future secure or showing you how unit trusts can help your money grow in different ways, we’re here for you. And when it comes to getting ready for retirement, we’re your guides to feeling confident about your finances later in life. We believe in building lasting relationships with our clients, understanding their unique needs, and providing personalized investment solutions. Our team of experts is dedicated to helping you navigate the complexities of the financial world, ensuring that your investments are aligned with your long-term goals. We take the time to educate you on the various investment options available, empowering you to make informed decisions that will benefit you and your family.'
})

</script>

<template>
    <div>
        <ServiceHero2 :content="content" />

        <div class="bg-white">

            <ContentPic :content="introContent" />

            <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

            <ContactForm />

            <InTouch />
        </div>
    </div>
</template>

<style scoped></style>