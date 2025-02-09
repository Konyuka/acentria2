<script setup>
const bannerContent = ref({
    subtitle: 'Awards &',
    title: 'Recognitions',
    image: 'https://img.freepik.com/free-photo/hands-holding-up-victory-trophy_91128-3869.jpg?t=st=1739130255~exp=1739133855~hmac=1e05c31174c53683cdc8ebc31dec3da4b315be854f76a8e0d2fda886ddcd9073&w=1380'
})

const featuredTestimonial = {
    body: 'Good customer relations and prompt response from the team, including the Managing Director',
}

const featuredTestimonial2 = {
    body: 'The options were well explained and the customer experience was excellent.',
}

const testimonials = [
    [
        [
            {
                body: 'The proficient and readily available team at Acentria is easy to work with and they go out of their way in providing fantastic solutions',
            },
        ],
        [
            {
                body: 'Willingness to offer solutions tirelessly',
            },
        ],
    ],
    [
        [
            {
                body: 'Excellent customer service and very informative',
            },
        ],
        [
            {
                body: 'Timely response and generally incredible service',
            },
        ],
    ],
]

const testimonials2 = [
    [
        [
            {
                body: 'Wonderful experience with timely notification for policy renewals and fair premium rates',
            },
        ],
        [
            {
                body: 'Very energetic team, always ready to listen and share solutions',
            },
        ],

    ],
    [
        [
            {
                body: 'Follow up to ensure all risks are adequately placed and on time',
            },
        ],
        [
            {
                body: 'Phone call follow ups, facilitation of vehicle valuation, and timely delivery of documents',
            },
        ],
    ],
]

</script>

<template>
    <section class="bg-white min-h-screen font-sans">

        <!-- <BannerMain :content="bannerContent" /> -->

        <div class="container py-5 mt-20">
            <Awards class="" />
        </div>

    </section>
</template>

<style scoped></style>
