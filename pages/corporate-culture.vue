<script setup>
const bannerContent = ref({
    subtitle: 'Our Organizational Culture',
    title: 'Corporate Culture',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const faqs = ref([
    {
        name: "Think Customer",
        content: "I care about our customers so I go the extra mile to earn their trust and loyalty.",
    },
    {
        name: "Embrace Change",
        content: "I embrace new challenges and I see new ways of doing things as an opportunity to grow.",
    },
    {
        name: "Act Now",
        content: "I take accountability and manage risks accordingly, always keeping things simple.",
    },
    {
        name: "Move Together",
        content: "I seek opportunities to promote collaboration and work together to achieve common goals.",
    },
    {
        name: "Speak Up",
        content: "I feel free to raise any idea, ask any question or escalate any issues or risks, building an environment of respect and trust. I am comfortable sharing and receiving feedback.",
    },
]);

const ourCultureExtended = ref({
    orientation: 'image-right',
    heading: 'Our <span class="text-brand-primary">Culture</span>',
    subheading: 'Creating the Best <span class="text-brand-primary">Employee Experience</span>',
    image: 'https://img.freepik.com/free-photo/handsome-african-guy-black-jeans-holding-laptop-showing-co-workers-presentation-indoor-portrait-asian-man-glasses-embracing-blonde-woman-posing-with-other-employees_197531-3775.jpg',
    link: '/',
    content: 'The Acentria Way unites us through collaboration and innovation, empowering individuals to thrive.<br><br>\
    <span>\
        • <b>Purpose-Driven:</b> We empower dreams, ignite imagination, and propel prosperity.<br><br>\
        • <b>Employee Experience:</b> We foster a culture where employees feel valued and supported.<br><br>\
        • <b>Impactful Leadership:</b> Our leaders inspire with transparency, integrity, and empathy.\
    </span>'
});

const lessIsMore = ref({
    orientation: 'image-left',
    heading: 'Less <span class="text-brand-primary">is More</span>',
    subheading: 'Leveraging Technology for Smarter Solutions',
    image: 'https://img.freepik.com/free-photo/business-executive-using-virtual-reality-headset-working-laptop_107420-65761.jpg',
    link: '/',
    content: 'We embrace technology to streamline processes, enhance efficiency, and make smarter decisions.<br><br>\
    <span>\
        • <b>Agility Through Technology:</b> We stay ahead by using tech to improve and adapt quickly.<br><br>\
        • <b>Innovation at Our Core:</b> We simplify challenges and integrate solutions for client satisfaction.<br><br>\
        • <b>Driving Change:</b> We lead through digital evolution and operational efficiency.\
    </span>'
});

const createBalance = ref({
    orientation: 'image-right',
    heading: 'Create <span class="text-brand-primary">Balance</span>',
    subheading: 'Shifting from Labor Force to Talent',
    image: 'https://img.freepik.com/free-vector/alternative-medicine-libra-balance-concept_1284-39224.jpg',
    link: '/',
    content: 'We focus on nurturing talent and empowering growth through empathetic leadership.<br><br>\
    <span>\
        • <b>Talent Over Labor:</b> We attract and nurture talent that drives progress.<br><br>\
        • <b>Holistic Development:</b> We support personal and professional growth.<br><br>\
        • <b>Empathic Leadership:</b> We lead with empathy, ensuring a balanced, collaborative culture.\
    </span>'
});

</script>

<template>
    <section class="min-h-screen font-sans bg-white">
        <BannerMain :content="bannerContent" />

        <div class="container">

            <div class="py-5">
                <h1 class="pb-5 section-heading">
                    The <span class="text-brand-primary">Acentria Way</span>
                </h1>
                <p class="content">
                    The Acentria Way defines how we work, collaborate, and innovate. It’s a culture built on
                    empowerment, innovation, and shared prosperity. We focus not only on the work we do but
                    on how we do it and the values guiding our interactions.
                </p>
            </div>

            
            
            
            
            
            <ContentPic :content="ourCultureExtended" />
            <ContentPic :content="lessIsMore" />
            <ContentPic :content="createBalance" />
        </div>

        <div class="container py-5">
            <h1 class="pb-5 section-heading">Our Commitment <span class="text-brand-primary">to
                    Culture</span></h1>
            <div
                class="flex items-center bg-cover text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                <div class="flex flex-col gap-6 mx-auto items-center justify-center text-left">
                    <div>
                        <p class="content pb-5">
                            The Acentria Way shapes our work, collaboration, and innovation. We are committed to
                            empowering our people, embracing technology, and fostering growth, ensuring a positive
                            impact on our future and the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <Accordion :faqs="faqs" />
    </section>
</template>

<style scoped></style>
