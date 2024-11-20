<script setup>
const bannerContent = ref({
    subtitle: 'Our Commitment',
    title: 'To Our Communities',
    image: 'https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const cardContent = ref([
    {
        name: 'Individuals & Families',
        icon: 'fas fa-home',
        description: 'We offer a wide range of insurance products and services to help individuals and families protect what matters most to them. From auto and home insurance to life and health insurance, we have you covered.',
    },
    {
        name: 'Businesses & Organizations',
        icon: 'fas fa-building',
        description: 'We provide insurance solutions for businesses and organizations of all sizes. Whether you are a small business owner or a large corporation, we can help you find the right coverage for your needs.',
    },
    {
        name: 'Nonprofit Organizations',
        icon: 'fas fa-hands-helping',
        description: 'We understand the unique needs of nonprofit organizations and offer specialized insurance products to help protect your mission and your volunteers. Let us help you find the right coverage for your organization.',
    },
    {
        name: 'Government Agencies',
        icon: 'fas fa-landmark',
        description: 'We work with government agencies at the local, state, and federal levels to provide insurance solutions that meet their unique needs. Our team of experts can help you navigate the complex world of government insurance.',
    },
    {
        name: 'Educational Institutions',
        icon: 'fas fa-school',
        description: 'We offer insurance products and services for educational institutions, including schools, colleges, and universities. Our team of experts can help you find the right coverage for your institution.',
    },
    {
        name: 'Healthcare Providers',
        icon: 'fas fa-hospital',
        description: 'We provide insurance solutions for healthcare providers, including hospitals, clinics, and medical practices. Our team of experts can help you find the right coverage to protect your patients and your practice.',
    },
    {
        name: 'Financial Institutions',
        icon: 'fas fa-university',
        description: 'We offer insurance products and services for financial institutions, including banks, credit unions, and investment firms. Our team of experts can help you find the right coverage to protect your assets and your clients.',
    },
    {
        name: 'Manufacturers & Distributors',
        icon: 'fas fa-industry',
        description: 'We provide insurance solutions for manufacturers and distributors of all sizes. Whether you are a small manufacturer or a large distributor, we can help you find the right coverage for your needs.',
    }
])

</script>

<template>
    <section>

        <BannerMain :content="bannerContent" />

        <div class="bg-white">
            <Cards2 :data="cardContent" />
        </div>

        <ContactForm />

        <InTouch />

    </section>
</template>

<style scoped></style>