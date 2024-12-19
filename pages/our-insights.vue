<script setup>
const bannerContent = ref({
    subtitle: 'Acentria Group',
    title: 'Our Brand',
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

const joinAsMembers = ref([
    {
        name: 'Trust as a Foundation',
        icon: 'fas fa-handshake',
        description: 'Trust is the cornerstone of our brand. We prioritize transparency, ethical practices, and accountability, ensuring that every engagement with Acentria inspires confidence.'
    },
    {
        name: 'Commitment to Innovation',
        icon: 'fas fa-lightbulb',
        description: 'Our brand reflects our passion for innovation—creating solutions that address today’s challenges while preparing our clients and partners for the opportunities of tomorrow.'
    },
    {
        name: 'Dedication to Excellence',
        icon: 'fas fa-award',
        description: 'Excellence isn’t just a goal; it’s a standard. From the way we strategize and execute to the outcomes we deliver, excellence is ingrained in everything we do.'
    },
])
</script>

<template>
    <section class="min-h-screen font-sans">
        <BannerMain :content="bannerContent" />

        
    </section>
</template>

<style scoped></style>
