<script setup>
import { computed } from 'vue';
import { ref } from "vue";

const currentYear = computed(() => {
    const currentDate = new Date();
    return currentDate.getFullYear();
})

const menuItem = ref([
    {
        name: 'Links',
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
                name: 'Terms of Use',
                link: '',
            },
            {
                name: 'Ethics & Compliance',
                link: '',
            },
        ]
    },
    {
        name: 'Explore',
        items: [
            {
                name: 'News',
                link: '',
            },
            {
                name: 'Careers',
                link: '',
            },
            {
                name: 'Help',
                link: '',
            },
            {
                name: 'CSR',
                link: '',
            },
        ]
    },
    {
        name: 'Company',
        items: [
            {
                name: 'Services',
                link: '',
            },
            {
                name: 'About',
                link: '',
            },
            {
                name: 'Contact',
                link: '',
            },
            {
                name: 'Blogs',
                link: '',
            },
        ]
    },
])

</script>

<template>
    <div>


        <div class="w-full border-t-8 border-brand-primary bg-brand-dim px-4 py-16">
            <div class="container mx-auto">
                <div class="mb-24 flex flex-col justify-between text-dark-content lg:flex-row lg:text-base">
                    <div class="col-span-2 mb-8 lg:col-span-1 lg:mb-0">
                        <!-- <img alt="Diligent" loading="lazy" width="151" height="42" decoding="async" data-nimg="1"
                  style="color: transparent" src="_next/image0be8.svg" /> -->
                    </div>
                    <div class="grid grid-cols-1 gap-4 text-sm lg:grid-cols-footer-layout lg:gap-16">
                        <div
                            class="pointer-events-auto relative z-10 overflow-hidden border-b-[1px] border-brand-gray-6 lg:border-0">
                            <h3 class="mb-1 flex items-center justify-between text-base font-semibold lg:text-xl">
                                <span class="hidden">Solutions</span><button
                                    class="relative z-20 m-0 flex w-full cursor-pointer select-none items-center justify-between py-2 font-normal text-dark-title">
                                    <span>Solutions</span><span class="lg:hidden">
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
                                class="left-0 top-full -z-10 flex w-full list-none flex-col gap-5 overflow-hidden pb-4 pt-3 will-change-transform lg:mb-0 invisible absolute -translate-y-24 opacity-0 lg:visible lg:static lg:transform-none lg:opacity-100 lg:transition-none">
                                <li class="mb-2 text-dark-content">
                                    <a href="solutions/board-and-leadership-collaboration.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Board
                                        Management</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="solutions/enterprise-risk-management.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Enterprise
                                        Risk Management</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="solutions/audit-management.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Audit
                                        Management</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="solutions/market-intelligence.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Market
                                        Intelligence</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="pointer-events-auto relative z-10 overflow-hidden border-b-[1px] border-brand-gray-6 lg:border-0">
                            <h3 class="mb-1 flex items-center justify-between text-base font-semibold lg:text-xl">
                                <span class="hidden">Resources</span><button
                                    class="relative z-20 m-0 flex w-full cursor-pointer select-none items-center justify-between py-2 font-normal text-dark-title">
                                    <span>Resources</span><span class="lg:hidden">
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
                                class="left-0 top-full -z-10 flex w-full list-none flex-col gap-5 overflow-hidden pb-4 pt-3 will-change-transform lg:mb-0 invisible absolute -translate-y-24 opacity-0 lg:visible lg:static lg:transform-none lg:opacity-100 lg:transition-none">
                                <li class="mb-2 text-dark-content">
                                    <a href="resources/blog.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Blog</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="resources/research.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Research
                                        &amp; Reports</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="resources/podcasts.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Podcasts</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="resources/guides.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            class="pointer-events-auto relative z-10 overflow-hidden border-b-[1px] border-brand-gray-6 lg:border-0">
                            <h3 class="mb-1 flex items-center justify-between text-base font-semibold lg:text-xl">
                                <span class="hidden">Company</span><button
                                    class="relative z-20 m-0 flex w-full cursor-pointer select-none items-center justify-between py-2 font-normal text-dark-title">
                                    <span>Company</span><span class="lg:hidden">
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
                                class="left-0 top-full -z-10 flex w-full list-none flex-col gap-5 overflow-hidden pb-4 pt-3 will-change-transform lg:mb-0 invisible absolute -translate-y-24 opacity-0 lg:visible lg:static lg:transform-none lg:opacity-100 lg:transition-none">
                                <li class="mb-2 text-dark-content">
                                    <a href="company/about-us.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">About
                                        Us</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="company/careers.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Careers</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="support.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Support</a>
                                </li>
                                <li class="mb-2 text-dark-content">
                                    <a href="company/partners.html"
                                        class="cursor-pointer font-normal text-dark-title hover:text-dark-title hover:underline text-base relative flex items-center">Partners</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="mb-8 rounded bg-[#141B26] px-6 py-8 text-dark-content">
                    <div class="grid grid-cols-2 gap-16">
                        <div class="col-span-2 flex flex-col lg:col-span-1">
                            <div class="mb-6 flex items-center gap-1">
                                <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
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
                                <a class="hover:text-brand-primary" href="legal/privacy.html">Privacy
                                    Policy</a><a class="hover:text-brand-primary" href="legal/terms-of-use.html">Terms
                                    of use</a><a class="hover:text-brand-primary" href="legal/cookie-policy.html">Cookie
                                    Policy</a><a class="hover:text-brand-primary"
                                    href="legal/digital-services-act.html">Digital
                                    Services Act</a>
                            </div>
                            <div class="col-span-2 flex flex-col justify-center gap-5 lg:col-span-1">
                                <a href="https://diligentlegal.results.highbond.com/survey_responses/9Wrc_yiuertX-uLJ4bJA/edit"
                                    target="_blank" rel="noreferrer" class="hover:text-brand-primary">Your
                                    Privacy Choices</a><a href="trust.html" target="_blank" rel="noreferrer"
                                    class="hover:text-brand-primary">Trust
                                    Center</a><a class="hover:text-brand-primary"
                                    href="vulnerability-disclosure-program.html">Vulnerability
                                    Disclosure Program</a><a class="hover:text-brand-primary"
                                    href="legal/modern-slavery.html">Modern
                                    Slavery Statement</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="h-0.25 bg-brand-divider mb-4" />
                <div class="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                    <div class="flex gap-2 brightness-75">
                        <a href="https://www.linkedin.com/company/diligent-board-member-services/" target="_blank"
                            rel="noreferrer"><svg viewBox="0 0 64 64" width="24" height="24">
                                <circle cx="32" cy="32" r="31" fill="#007fb1"></circle>
                                <path
                                    d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                                    fill="white"></path>
                            </svg></a><a href="https://twitter.com/diligenthq" target="_blank" rel="noreferrer"><svg
                                viewBox="0 0 64 64" width="24" height="24">
                                <circle cx="32" cy="32" r="31" fill="#000000"></circle>
                                <path
                                    d="M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
                                    fill="white"></path>
                            </svg></a><a href="https://www.facebook.com/DiligentCorporation" target="_blank"
                            rel="noreferrer"><svg viewBox="0 0 64 64" width="24" height="24">
                                <circle cx="32" cy="32" r="31" fill="#3b5998"></circle>
                                <path
                                    d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                                    fill="white"></path>
                            </svg></a>
                    </div>
                    <div class="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-2 md:gap-y-0">
                        <div class="text-sm text-dark-content">
                            ©
                            2024
                            Diligent Corporation. All rights reserved.
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