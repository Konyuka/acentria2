<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Our Partners',
    description: 'We\'re able to help more Australians through the strong partnerships we have with advisers, super funds and employers.',
    image: 'https://img.freepik.com/free-vector/v915-red_53876-174930.jpg?t=st=1728266840~exp=1728270440~hmac=e94c9d586c21dc1e57888d5e3b499c5109a624670b07a4c6188be1f6b9a5686b&w=826',
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
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="mx-auto max-w-5xl text-base leading-7 text-gray-700">
                <h1 class="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    We're a business built on partnerships
                </h1>

                <p class="mt-6 text-lg">
                    Many of our proudest achievements come through our strong partnerships across the industry and
                    community. These partnerships help us to raise the standard of the protection we provide and allow
                    us to take a leading role in promoting the importance of life insurance across communities in
                    Australia.
                    <br><br>
                    The values we share with all of our partners leads to enduring partnerships and better access to
                    protection for more Australians.
                </p>

                <h1 class="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Our Partners
                </h1>


                <div class="grid grid-cols-4 my-10">
                    <div v-for="partner in partners" class="flex flex-row gap-2">
                        <i :class="partner.icon" class="text-xl text-brand-primary mr-4">
                        </i>
                        <div>
                            <h5 v-html="partner.name"
                                class="text-sm pb-3 md:pb-4 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title !text-base font-semibold md:!pb-3 md:!text-xl">
                            </h5>
                            <p class="text-base leading-normal font-regular text-light-content">
                                {{ partner.description }}
                            </p>
                        </div>
                    </div>

                </div>






            </div>
        </div>


        <Cta2 />


        <Cta />

    </section>
</template>

<style scoped></style>