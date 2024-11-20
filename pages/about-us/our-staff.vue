<script setup>
const bannerContent = ref({
    subtitle: 'Our Commitment',
    title: 'To Our Staff',
    image: '/img/team.jpeg'
})


</script>

<template>
    <section>

        <BannerMain :content="bannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="mx-auto max-w-5xl text-base leading-7 text-gray-700">
                <p class="mt-6 text-xs leading-normal">
                    We’re committed to creating an environment where everyone can perform and be at their best.

                    We don’t just encourage our people to shape our culture, we depend on it. We know that it’s the
                    contribution of every individual that helps us to achieve so much more. And our peoples’ dedication
                    enhances our collective capabilities, builds our spirit, and lets us work with passion for our
                    customers and partners.

                    To provide the best working environment, we are dedicated to investing in our employees’ health and
                    wellbeing.
                </p>

                <figure class="mt-16">
                    <img class="aspect-video rounded-xl bg-gray-50 object-cover" src="/img/team2.jpeg" alt="">
                    <figcaption class="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <svg class="mt-0.5 h-5 w-5 flex-none text-gray-300" viewBox="0 0 20 20" fill="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                                clip-rule="evenodd" />
                        </svg>
                        Team Building 2024
                    </figcaption>
                </figure>

                <h1 class="mt-5 heading-class text-gray-900">
                    How we support our people
                </h1>

                <div class="mt-5 max-w-5xl">

                    <h4 class="font-bold text-brand-primary">Training and Development</h4>
                    <p class="text-xs leading-normal">
                        We have a range of different programs to support the development of our peoples' capabilities
                        with continuous delivery at it's core. Along with enterprise wide training, we've also partnered
                        with LinkedIn Learning to give all permanent TAL people access to on-demand courses
                    </p>

                    <h4 class="mt-5 font-bold text-brand-primary">Health and wellness</h4>
                    <p class="text-xs leading-normal">
                        We want to support everyone's health and wellbeing to create an environment where everyone can
                        perform and be at their best.
                        <br><br>
                        Our dedicated Health and Wellbeing Committee is focused on supporting the physical, mental and
                        financial health of our people. It's run by employees to ensure everyone has a role in improving
                        health and that the health support is practical, relevant and meaningful.
                        <br><br>
                        The committee runs a program of educational initiatives internally including educational
                        seminars, expo days, providing health and wellbeing tips and tricks, and highlighting days of
                        importance such as R U OK Day.
                    </p>

                    <h4 class="mt-5 font-bold text-brand-primary">Progressive employment practices</h4>
                    <p class="text-xs leading-normal">
                        Our Active employee action group helps ensure that we are an industry leader when it comes to
                        looking after our people. We offer a range of benefits including:
                    </p>

                    <ul role="list" class="mt-3 max-w-xl space-y-2 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900 text-sm">Flexible working hours</strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900 text-sm">Gym facilities and group exercise
                                    programs</strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900 text-sm">Annual flu shots</strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900 text-sm">Parental leave benefits, & an
                                    Employee Assistance Program.</strong>
                            </span>
                        </li>

                    </ul>

                    <h4 class="mt-5 font-bold text-brand-primary">An inclusive workplace </h4>
                    <p class="text-xs leading-normal">
                        We're proud of the rich diversity amongst our people at Acentria. We believe that understanding
                        and
                        embracing diversity helps us create an inclusive culture that promotes fairness and equity,
                        leading to greater outcomes for our customers, partners, people and business.
                        <br /><br />
                        Our Diversity, Equity and Inclusion (DE&I) strategy focuses on three broad priority areas:
                        Inclusion & Accessibility; Education & Awareness; and Leadership & Accountability. To support
                        these priority areas, we take actions to advance gender equality, LGBTIQ+ and disability
                        inclusion, and contribute to First Nations reconciliation.
                        <br /><br />
                        We have a long-standing commitment to gender equality in the workplace. Acentria welcomes and
                        supports recent legislative reforms to help accelerate action to close the gender pay gap. For
                        information, please read our Employer Statement.
                    </p>

                </div>
            </div>
        </div>


        <ContactForm />

        <InTouch />

    </section>
</template>

<style scoped></style>