<script setup>
import { computed } from 'vue';
import { ref } from "vue";

const currentYear = computed(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
})

const menuItem = ref([
    {
        name: 'Company',
        items: [
            {
                name: 'Home',
                link: '',
            },
            {
                name: 'About',
                link: '',
            },
            {
                name: 'Blogs',
                link: '',
            },
            {
                name: 'Careers',
                link: '',
            },
            {
                name: 'Gallery',
                link: '',
            },
        ]
    },
    {
        name: 'Services',
        items: [
            {
                name: 'Reinsurance',
                link: '',
            },
            {
                name: 'Insurance',
                link: '',
            },
            {
                name: 'Actuarial',
                link: '',
            },
            {
                name: 'Investment',
                link: '',
            },
            {
                name: 'Tech',
                link: '',
            },
        ]
    },
    {
        name: 'Help Center',
        items: [
            {
                name: 'File a Claim',
                link: '',
            },
            {
                name: 'Contact Support',
                link: '',
            },
            {
                name: 'Procurement',
                link: '',
            },
            {
                name: 'Form & Downloads',
                link: '',
            },
        ]
    },
    {
        name: 'Legal',
        items: [
            {
                name: 'Privacy Policy',
                link: '',
            },
            {
                name: 'Cookie Policy',
                link: '',
            },
            {
                name: 'Terms & Conditions',
                link: '',
            },
            {
                name: 'Ethics & Compliance',
                link: '',
            },
        ]
    },

])

</script>

<template>
    <div>


        <div class="font-sans w-full border-t-8 border-brand-primary bg-brand-dim px-4 py-20">
            <div class="container mx-auto">
                <div class="mb-14 flex flex-col justify-between text-dark-content lg:flex-row lg:text-base">

                    <!-- Logo -->
                    <div class="col-span-2 mb-8 lg:col-span-1 lg:mb-0">
                        <img alt="Diligent" loading="lazy" width="400" height="42" decoding="async" data-nimg="1" class="w-[18vw]"
                            style="color: transparent" src="/img/LogoW.png" />
                    </div>

                    <!-- Links -->
                    <div class="grid grid-cols-1 gap-4 text-sm lg:grid-cols-footer-layout lg:gap-16">

                        <div v-for="item in menuItem"
                            class="pointer-events-auto relative z-10 overflow-hidden border-b-[1px] border-brand-gray-6 lg:border-0">
                            <h3 class="mb-1 flex items-center justify-between text-base font-semibold lg:text-xl">
                                <span class="hidden">{{ item.name }}</span><button
                                    class="relative z-20 m-0 flex w-full cursor-pointer select-none items-center justify-between py-2 font-normal text-dark-title">
                                    <span>{{ item.name }}</span><span class="lg:hidden">
                                        <div class="block">
                                            <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"
                                                preserveAspectRatio="xMidYMid" stroke-width="10" stroke-linecap="round"
                                                class="h-4 w-4 transform stroke-dark-title transition-transform duration-300 undefined">
                                                <g class="chevron__container transition-transform -translate-y-3">
                                                    <line stroke-width="10" stroke-linecap="round"
                                                        class="origin-[50px_50px] transform transition-transform duration-300 undefined rotate-[40deg]"
                                                        x1="10" y1="50" x2="50" y2="50"></line>
                                                    <line stroke-width="10" stroke-linecap="round"
                                                        class="origin-[50px_50px] transform transition-transform duration-300 undefined -rotate-[40deg]"
                                                        x1="90" y1="50" x2="50" y2="50"></line>
                                                </g>
                                            </svg>
                                        </div>
                                    </span>
                                </button>
                            </h3>

                            <ul
                                class="left-0 top-full -z-10 flex w-full list-none flex-col gap-0 overflow-hidden pt-3 will-change-transform lg:mb-0 invisible absolute -translate-y-24 opacity-0 lg:visible lg:static lg:transform-none lg:opacity-100 lg:transition-none">
                                <li v-for="link in item.items" class="button-animation mb-2 text-dark-content">
                                    <a href="solutions/board-and-leadership-collaboration.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <!-- Section Two -->
                <!-- <div class="mb-8 rounded bg-black px-6 py-8 text-dark-content">
                    <div class="grid grid-cols-2 gap-16">
                        <div class="col-span-2 flex flex-col lg:col-span-1">
                            <div class="mb-6 flex items-center gap-1">
                                <i class="material-symbols-outlined text-brand-primary text-2xl undefined"
                                    translate="no">security</i>
                                <h4 class="text-2xl text-dark-title">Your
                                    Data Matters</h4>
                            </div>
                            <div class="text-sm">
                                At our core, transparency is key. We
                                prioritize your privacy
                                by providing clear information about
                                your rights and
                                facilitating their exercise. You&#x27;re
                                in control, with
                                the option to manage your preferences
                                and the extent of
                                information shared with us and our
                                partners.
                            </div>
                        </div>
                        <div class="col-span-2 grid grid-cols-[1fr_2fr] items-start gap-4 lg:col-span-1">
                            <div class="col-span-2 mb-8 flex flex-col justify-center gap-5 lg:col-span-1 lg:mb-0">
                                <a class="button-animation hover:text-brand-primary" href="legal/privacy.html">Privacy
                                    Policy</a>
                                <a class="button-animation hover:text-brand-primary"
                                    href="legal/terms-of-use.html">Terms
                                    of use</a>
                                <a class="button-animation hover:text-brand-primary"
                                    href="legal/cookie-policy.html">Cookie
                                    Policy</a>
                                <a class="button-animation hover:text-brand-primary"
                                    href="legal/digital-services-act.html">Digital
                                    Services Act</a>
                            </div>
                            <div class="col-span-2 flex flex-col justify-center gap-5 lg:col-span-1">
                                <a href="https://diligentlegal.results.highbond.com/survey_responses/9Wrc_yiuertX-uLJ4bJA/edit"
                                    target="_blank" rel="noreferrer"
                                    class="button-animation hover:text-brand-primary">Your
                                    Privacy Choices</a>
                                <a href="trust.html" target="_blank" rel="noreferrer"
                                    class="button-animation hover:text-brand-primary">Trust
                                    Center</a>
                                <a class="button-animation hover:text-brand-primary"
                                    href="vulnerability-disclosure-program.html">Vulnerability
                                    Disclosure Program</a>
                                <a class="button-animation hover:text-brand-primary"
                                    href="legal/modern-slavery.html">Ethics &
                                    Compliance</a>
                            </div>
                        </div>
                    </div>
                </div> -->

                <hr class="h-0.25 bg-brand-divider mb-4" />
                <div class="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                    <!-- socials -->
                    <div class="flex items-center justify-end md:justify-end md:col-span-1">
                        <div class="flex gap-6">
                            <a href="https://www.linkedin.com/company/acentria-groupltd/" target="_blank">
                                <div
                                    class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                                    <i
                                        class="!text-xl fab fa-linkedin icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://x.com/acentriagroup?lang=en" target="_blank">
                                <div
                                    class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                                    <i
                                        class="!text-xl fab fa-x-twitter icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                                <div
                                    class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                                    <i
                                        class="!text-xl fab fa-facebook icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.instagram.com/acentriagroup/" target="_blank">
                                <div
                                    class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                                    <i
                                        class="!text-xl fab fa-instagram icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                            <a href="https://www.tiktok.com/@acentria.group" target="_blank">
                                <div
                                    class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                                    <i
                                        class="!text-xl fab fa-tiktok icon-style text-black hover:text-brand-primary"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                        <div class="text-sm text-dark-content">
                            ©
                            {{ currentYear }}
                            Acentria Group. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped>
.force_white {
    color: white !important;
}

.force_white:hover {
    color: #ed1c24 !important;
}
</style>