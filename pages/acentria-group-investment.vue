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
const leftTitle = ref(`Why Invest with <br> <span class="text-brand-primary">Acentria</span>`)

const content = ref({
    vid: '/img/hd1.mp4',
    pageTitle: 'Acentria Group Investment',
    title: 'Grow Your Wealth with <br/> <span class="text-brand-primary">Expert Investment Solutions</span>',
})

</script>

<template>
    <div>
        <ServiceHero2 :content="content" />

        <div class="bg-white">
            <section id="" class="relative py-2 bg-white text-center">
                <div class="container px-4">
                    <h2
                        class="font-sans tracking-normal text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight">
                        <span class="text-brand-primary">Acentria Investment Services</span> <br>
                        Unlock Your Financial Potential
                    </h2>
                </div>
            </section>

            <div class="container py-3 text-white mx-auto max-w-6xl align-center h-full"
                style="background-color: white">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative py-4 lg:basis-1/2">
                        <img alt="Image of Streamline evaluations and questionnaires" loading="lazy" decoding="async"
                            data-nimg="1" style="color: transparent; object-fit: contain"
                            class="rounded-xl w-full h-auto"
                            src="https://images.pexels.com/photos/6802048/pexels-photo-6802048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>
                    <div class="flex flex-col justify-center lg:basis-1/2">
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-sans text-light-content !text-inherit mb-4">
                                We’re not your usual investment folks – we’re like your financial buddies. Our goal is
                                to understand your dreams and make them happen. Whether it’s setting up guaranteed
                                endowments that keep your future secure or showing you how unit trusts can help your
                                money grow in different ways, we’re here for you. And when it comes to getting ready for
                                retirement, we’re your guides to feeling confident about your finances later in life.
                                <br><br>
                                We believe in building lasting relationships with our clients, understanding their
                                unique needs, and providing personalized investment solutions. Our team of experts is
                                dedicated to helping you navigate the complexities of the financial world, ensuring that
                                your investments are aligned with your long-term goals. We take the time to educate you
                                on the various investment options available, empowering you to make informed decisions
                                that will benefit you and your family.
                                <br><br>
                                The best part? We’re known for being straight-up and true, always giving you advice
                                that’s good for you. We follow the rules of Financial Planning to make sure we’re on the
                                right track. So, when you’re with Acentria, it’s not just advice – it’s a friendship
                                built on helping you succeed. Our commitment to transparency and integrity means that
                                you can trust us to always have your best interests at heart.
                                <br><br>
                                In addition to our core services, we offer specialized financial planning workshops and
                                seminars designed to keep you informed about the latest trends and strategies in the
                                investment world. These sessions are tailored to address your specific concerns and
                                provide you with the knowledge and tools needed to make the most of your financial
                                journey. By staying educated and proactive, you can confidently navigate the
                                ever-changing financial landscape and achieve your goals.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <WhyUs :whys="whys" :intro="intro" :leftTitle="leftTitle" />

            <ContactForm />

            <InTouch />
        </div>
    </div>
</template>

<style scoped></style>