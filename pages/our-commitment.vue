<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Acentria\'s Commitment',
    subTitle: 'Our Pledge to You',
    image: '/img/COMMITMENT HOME PAGE.jpg',
})

const ourStaff = ref({
    orientation: 'image-right',
    heading: 'To <span class="text-brand-primary">Our Staff</span>',
    subheading: '',
    image: '/img/team.jpeg',
    link: '/',
    content: `Our people are our greatest asset. At Acentria, we create an environment where ambition meets opportunity. We empower our employees by creating a supportive and inclusive workplace where talent is nurtured, ideas are valued, and careers are built.
    <br><br>
    <span>
        • <b>Opportunities for Growth:</b> Continuous learning, training, and development programs to help our team thrive. <br>
        • <b>Inclusive Culture:</b> A commitment to diversity, equity, and gender parity, ensuring every voice is heard. <br>
        • <b>Well-Being & Balance:</b> Initiatives and policies designed to support work-life balance and holistic well-being.
    </span>`
});

const ourCustomers = ref({
    orientation: 'image-left',
    heading: 'To <span class="text-brand-primary">Our Customers</span>',
    subheading: '',
    image: '/img/comitment to our Customers .jpg',
    link: '/',
    content: `Our customers inspire us to continuously innovate. We are committed to delivering solutions that exceed expectations.
    <br><br>
    <span>
        • <b>Personalized Excellence:</b> We take time to understand your needs, crafting solutions that are as unique as you are. <br>
        • <b>Trustworthy Relationships:</b> Transparency and honesty are at the heart of every interaction. <br>
        • <b>Long-Term Impact:</b> Your success is our success, and we are with you every step of the way.
    </span>`
});

const ourPartners = ref({
    orientation: 'image-right',
    heading: 'To <span class="text-brand-primary">Our Partners</span>',
    subheading: '',
    image: '/img/comitment to our partners.jpg',
    link: '/',
    content: `Collaboration powers our progress. At Acentria, we build partnerships grounded in trust and shared purpose.
    <br><br>
    <span>
        • <b>Shared Vision:</b> Together, we co-create strategies that redefine industries and drive collective success. <br>
        • <b>Ethical Collaboration:</b> We uphold the highest standards of fairness and accountability in every partnership. <br>
        • <b>Synergized Solutions:</b> Working together, we achieve more for our customers and stakeholders.
    </span>`
});

const ourCommunities = ref({
    orientation: 'image-left',
    heading: 'To <span class="text-brand-primary">Our Communities</span>',
    subheading: '',
    image: '/img/COMITMENT TO OUR COMMUNITY.jpg',
    link: '/',
    content: `Giving back is a fundamental part of who we are. We are committed to building resilient and thriving communities.
    <br><br>
    <span>
        • <b>Sustainable Initiatives:</b> We actively engage in projects that protect the environment and promote green solutions. <br>
        • <b>Empowering Society:</b> Through education, health, and economic programs, we uplift those around us. <br>
        • <b>Purpose-Driven Leadership:</b> Our actions reflect our dedication to creating a better tomorrow.
    </span>`
});

</script>

<template>
    <section class="font-sans bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container">
            <div class="py-5">
                <h1 class="pb-5 section-heading">
                    Our <span class="text-brand-primary">Commitment</span>
                </h1>
                <p class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal pb-2">
                    At Acentria Group, our success is defined by the relationships we nurture with those
                    who share our journey—our staff, customers, partners, and the communities we serve.
                    This commitment is deeply embedded in our mantra: <b>Empower, Innovate, Prosper</b>.
                </p>
            </div>

            <ContentPic :content="ourStaff" />
            <ContentPic :content="ourCustomers" />
            <ContentPic :content="ourPartners" />
            <ContentPic :content="ourCommunities" />
            
        </div>
    </section>
</template>

<style scoped>
</style>