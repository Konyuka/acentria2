<script setup>
const bannerContent = ref({
    subtitle: 'Our Commitment',
    title: 'To Our Partners',
    image: 'https://images.pexels.com/photos/3182784/pexels-photo-3182784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const partners = ref([
    {
        name: 'Financial &amp; <br/> <span class="text-brand-primary">Advisors</span>',
        icon: 'fas fa-chart-line', // Financial Advisors
        description: 'We\'re committed to building strong prosperous relationships with financial advisers to help protect the lifestyles of more Australians.',
    },
    {
        name: 'Super &amp; <br/> <span class="text-brand-primary">Funds</span>',
        icon: 'fas fa-piggy-bank', // Super Funds
        description: 'We partner with some of Australia\'s leading super funds and employers to protect the lifestyles of their members and employees.',
    },
    {
        name: 'Health &amp; <br/> <span class="text-brand-primary">Experts</span>',
        icon: 'fas fa-stethoscope', // Health Experts
        description: 'We don\'t have all the answers, that\'s why we partner with those that do, so you have access to the experts.',
    },
    {
        name: 'Community &amp; <br/> <span class="text-brand-primary">Partners</span>',
        icon: 'fas fa-hand-holding-heart', // Community Partners
        description: 'We\'re proud to contribute to the Australian community by funding initiatives through our TAL Community Foundation.',
    },
])
</script>

<template>
    <section>

        <BannerMain :content="bannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="mx-auto max-w-5xl text-base leading-7 text-gray-700">
                <h1 class="mt-5 heading-class">
                    We're a business built on partnerships
                </h1>

                <p class="mt-6 text-xs leading-normal">
                    Many of our proudest achievements come through our strong partnerships across the industry and
                    community. These partnerships help us to raise the standard of the protection we provide and allow
                    us to take a leading role in promoting the importance of life insurance across communities in
                    Australia.
                    <br><br>
                    The values we share with all of our partners leads to enduring partnerships and better access to
                    protection for more Australians.
                </p>

                <h1 class="mt-10 heading-class">
                    Our Partners
                </h1>


                <div class="grid grid-cols-4 my-10">
                    <div v-for="partner in partners" class="flex flex-row gap-2">
                        <i :class="partner.icon" class="text-xl text-brand-primary mr-4">
                        </i>
                        <div>
                            <h5 v-html="partner.name"
                                class="subheading-class pb-3 leading-normal">
                            </h5>
                            <p class="text-xs leading-normal text-light-content">
                                {{ partner.description }}
                            </p>
                        </div>
                    </div>

                </div>






            </div>
        </div>


        <ContactForm />

        <InTouch />

    </section>
</template>

<style scoped></style>