<script setup>

const bannerContent = ref({
    subtitle: 'Team Acentria',
    title: 'Benefits of working with us',
    image: 'https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const benefits = ref([
    {
        name: 'Health & <span class="text-brand-primary"> Wellness </span>',
        icon: 'fas fa-heart',
        description: 'You take care of our customers, We take care of you. All Acentria team members receive comprehensive health care cover, access to wellness programs, subsidized gym memberships and health care management programs.'
    },
    {
        name: 'Competitive Staff <span class="text-brand-primary"> Benefits </span>',
        icon: 'fas fa-calendar-check',
        description: 'We provide workplace safety insurance covers, sufficient retirement benefits, staff loan facilities and adequate time off to cater for personal development and rejuvenation.'
    },
    {
        name: 'Personal &amp; Professional <span class="text-brand-primary"> Development </span>',
        icon: 'fas fa-piggy-bank',
        description: 'We create development plans for our staff and have a robust education support programme that boosts skills and academic qualifications and prepares our high potential employees for their next big challenges!'
    },
    {
        name: 'Skills Development <span class="text-brand-primary"> program </span>',
        icon: 'fas fa-user-friends',
        description: 'We give back to our future generations through partnerships with mentorship associations, provide capacity building platforms and programs for our partners and have internship programs to boost our talent pipeline.'
    },
    {
        name: '<span class="text-brand-primary"> Diversity, Equity & </span> Inclusion',
        icon: 'fas fa-dumbbell',
        description: 'Our workforce represents the face of the jurisdictions we dwell in and appreciate contributions from all generations as a means of improving our products, services and corporate culture.'
    },
    {
        name: 'Supportive <span class="text-brand-primary"> parental leave </span>',
        icon: 'fas fa-baby',
        description: 'Raising the next generation takes time. We support parents in taking time to bond with their newest family member.'
    }
]);
</script>

<template>
    <section class="bg-white">

        <BannerMain :content="bannerContent" />

        

        <div>

            <div class="container mx-auto">
                <div class="py-8">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            class="font-sans mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <h2
                                    class="font-sans tracking-normal text-3xl text-brand-primary font-semibold leading-tight lg:leading-tight pb-4 pt-6">
                                    <span
                                        class="font-sans tracking-normal text-gray-900 leading-tight lg:leading-tight">
                                        Why would you <br>
                                    </span>
                                    work for Acentria
                                </h2>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    Working at Acentria is an enriching journey to growth and prosperity. We have
                                    numerous engagement forums, propagate empowerment and job autonomy, nurture a
                                    supportive and inclusive environment and do not have a “Straight-jacket”
                                    approach towards learning and development.
                                    Your contributions will be recognized and rewarded, ensuring a fulfilling, warm
                                    and lasting experience at Acentria.

                                    <br><br>
                                    Here is how you benefit by joining our Team:

                                </p>
                            </div>
                            <div
                                class="font-sans col-span-2 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-gray-600 sm:grid-cols-2">
                                <div v-for="benefit in benefits" class="flex flex-row gap-2">
                                    <i :class="benefit.icon" class="text-xl text-brand-primary mr-4"></i>
                                    <div>
                                        <h5 v-html="benefit.name"
                                            class="text-sm pb-3 md:pb-4 font-semibold leading-tight text-light-title">

                                        </h5>
                                        <p class="leading-normal font-regular text-light-content text-xs">
                                            {{ benefit.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section id="" class="relative py-5 bg-white text-left">
                <div class="container px-4">
                    <h2
                        class="text-center font-sans tracking-normal text-3xl text-gray-900 font-semibold leading-tight lg:leading-tight py-2">
                        Our commitment to
                        <span
                            class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">diversity</span>,
                        <span
                            class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">equity</span>
                        and
                        <span
                            class="font-sans tracking-normal text-brand-primary leading-tight lg:leading-tight">inclusion</span>
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mx-auto max-w-5xl">
                        <div class="mx-auto">
                            <img alt="Image of Streamline evaluations and questionnaires " loading="lazy" width="420"
                                height="350" decoding="async" data-nimg="1"
                                style="color: transparent; object-fit: contain" class="rounded-xl"
                                src="/img/simo-office.jpg" />
                        </div>
                        <div class="content-center items-center">
                            <p
                                class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                Acentria is committed to fostering, cultivating and
                                preserving a culture that celebrates and values diversity,
                                equity and inclusion. Our DEI&amp;I plan accelerates
                                progress, with education being a critical component. We
                                offer access to training courses and resources which aim to
                                build a shared vocabulary, develop new skills and foster
                                collaboration in service to creating an even more inclusive
                                organization. We also encourage open dialogue and continuous
                                feedback to ensure that every voice is heard and valued,
                                promoting a sense of belonging and mutual respect among all
                                employees.
                            </p>
                            <br>
                            <p
                                class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                Acentria also supports several Employee Resource Groups
                                (ERGs) including Generational,
                                Multicultural, Parenting &amp; Care Giving, Mental Health and Women in Tech. These
                                groups
                                fast-track DEI&amp;I education and create a safe place for
                                growth, understanding, compassion and empathy.
                            </p>
                            <br>
                            <p
                                class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                We believe that diverse leadership is an essential part of
                                modern governance and remain committed to exploring new
                                opportunities to diversify our C-suite.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>



    </section>
</template>

<style scoped></style>