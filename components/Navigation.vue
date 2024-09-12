<script setup>
const isScrolled = ref(false);
const bottomBarClass = computed(() => {
    return isScrolled.value ? 'sticky' : '';
});


const currentRoute = computed(() => {
    const route = useRoute();
    return route.path;
})

const openMobileMenu = ref(false);
const isInsuranceDropdownVisible = ref(false);
const isActuarialDropdownVisible = ref(false);
const isITDropdownVisible = ref(false);
const isReinsuranceDropdownVisible = ref(false);


let hideTimeout = null;

const personalCover = ref({
    name: 'Personal Cover',
    items: [
        {
            name: 'My Health',
            description: 'My Health content',
            link: '/insurance/health-insurance',
        },
        {
            name: 'My Life',
            link: '/insurance/life-insurance',
        },
        {
            name: 'My Home',
            link: '/insurance/home-insurance',
        },
        {
            name: 'My Car',
            link: '/insurance/motor-insurance',
        },
        {
            name: 'My Travel',
            link: '/insurance/travel-insurance',
        },
    ]
});
const corpCover = ref({
    name: 'Corporate Cover',
    items: [
        {
            name: 'Staff Health Cover',
            link: '/insurance/staff-health-cover',
        },
        {
            name: 'Staff Travel Cover',
            link: '/insurance/staff-travel-cover',
        },
        {
            name: 'Office Content Cover',
            link: '/insurance/office-content-cover',
        },
        {
            name: 'Cyber Liability Cover',
            link: '/insurance/cyber-liability-cover',
        },
        {
            name: 'Credit Risk Cover',
            link: '/insurance/credit-risk-cover',
        },
    ]
});
const bizCover = ref({
    name: 'Business Cover',
    items: [
        {
            name: 'Biashara Cover',
            link: '/insurance/biashara-cover',
        },
        {
            name: 'General Liability Insurance',
            link: '/insurance/general-liability-insurance',
        },
        {
            name: 'Product Liability Insurance',
            link: '/insurance/product-liability-insurance',
        },
        {
            name: 'Commercial Property Insurance',
            link: '/insurance/commercial-property-insurance',
        },
        {
            name: 'Crops and Livestock',
            link: '/insurance/crops-and-livestock',
        },
    ]
});

const reServices = ref([
    {
        name: 'Reinsurance Optimization',
        link: '/reinsurance/reinsurance-optimization',
    },
    {
        name: 'Treaty Administration',
        link: '/reinsurance/treaty-administration',
    },
    {
        name: 'Claims Management',
        link: '/reinsurance/claims-management',
    },
    {
        name: 'Value Addition',
        link: '/reinsurance/value-addition',
    },
]);
const reSolutions = ref([
    {
        name: 'Facultative Solutions',
        link: '/reinsurance/facultative-solution',
    },
    {
        name: 'Treaty Solutions',
        link: '/reinsurance/treaty-solutions',
    },
    {
        name: 'Special Lines Solutions',
        link: '/reinsurance/special-lines',
    },
]);
const reData = ref([
    {
        name: 'Reinsurance Data Analytics Tool',
        link: '/reinsurance/reinsurance-data-analytics-tool',
    },
    {
        name: 'Acentre Reinsurance Solution',
        link: '/reinsurance/acentre-reinsurance-solution',
    },
    {
        name: 'Catastrophic Modelling',
        link: '/reinsurance/catastrophic-modelling',
    },
    {
        name: 'Return On Risk Adjusted Capital',
        link: '/reinsurance/return-on-risk-adjusted-capital',
    },
]);

const acServices = ref([
    {
        name: 'Financial Services',
        link: '/actuarial/financial-services',
    },
    {
        name: 'Insurance Consulting',
        link: '/actuarial/insurance-consulting',
    },
    {
        name: 'Reinsurance Consulting',
        link: '/actuarial/reinsurance-consulting',
    },
]);
const acOther = ref([
    {
        name: 'IFRS 17 Implementation',
        link: '/actuarial/ifrs-17-implementation',
    },
    {
        name: 'Innovation and Digitization',
        link: '/actuarial/innovation-and-digitization',
    },
    {
        name: 'Retirement and Employee Benefits',
        link: '/actuarial/retirement-and-employee-benefits',
    },
]);
const acProducts = ref([
    {
        name: 'AcentRe',
        link: '/reinsurance/acentre-reinsurance-solution',
    },
    {
        name: 'Data Analysis Tool',
        link: '/reinsurance/reinsurance-data-analytics-tool',
    },
]);

const activeMenuData = ref([]);

const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'insurance') {
        isActuarialDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;


        isInsuranceDropdownVisible.value = true;
    } else if (menu == 'actuarial') {
        isInsuranceDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isActuarialDropdownVisible.value = true;
    } else if (menu == 'it') {
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isITDropdownVisible.value = true;
    } else if (menu == 'reinsurance') {
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isITDropdownVisible.value = false;

        isReinsuranceDropdownVisible.value = true;
    }
};

const hideDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        if (menu == 'insurance') {
            isInsuranceDropdownVisible.value = false;
        } else if (menu == 'actuarial') {
            isActuarialDropdownVisible.value = false;
        } else if (menu == 'it') {
            isITDropdownVisible.value = false;
        } else if (menu == 'reinsurance') {
            isReinsuranceDropdownVisible.value = false;
        }
    }, 200);
};

const handleScroll = () => {
    isScrolled.value = window.scrollY > 1;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<template>

    <div class="relative z-50 mx-auto hidden w-full px-8 py-1.5 lg:block bg-brand-gray">
        <div class="font-sans container mx-auto flex flex-row items-center justify-between">
            <!-- socials -->
            <div class="flex items-center justify-end md:justify-end md:col-span-1">
                <div class="flex gap-6">
                    <a href="https://www.linkedin.com/company/acentria-groupltd/" target="_blank">
                        <div class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                            <i class="!text-xl fab fa-linkedin icon-style text-black hover:text-brand-primary"></i>
                        </div>
                    </a>
                    <a href="https://x.com/acentriagroup?lang=en" target="_blank">
                        <div class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                            <i class="!text-xl fab fa-x-twitter icon-style text-black hover:text-brand-primary"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                        <div class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                            <i class="!text-xl fab fa-facebook icon-style text-black hover:text-brand-primary"></i>
                        </div>
                    </a>
                    <a href="https://www.instagram.com/acentriagroup/" target="_blank">
                        <div class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                            <i class="!text-xl fab fa-instagram icon-style text-black hover:text-brand-primary"></i>
                        </div>
                    </a>
                    <a href="https://www.tiktok.com/@acentria.group" target="_blank">
                        <div class="bg-white w-8 h-8 rounded-full flex justify-center items-center button-animation">
                            <i class="!text-xl fab fa-tiktok icon-style text-black hover:text-brand-primary"></i>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Top Links -->
            <div class="flex flex-row items-center justify-end text-sm text-black">
                <NuxtLink to="/" :class="currentRoute === '/' ? 'text-brand-primary font-semibold scale-105' : ''"
                    class="relative border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                    Home
                </NuxtLink>
                <NuxtLink to="/about-acentria-group"
                    :class="currentRoute === '/about-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                    class="relative border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                    About
                </NuxtLink>
                <NuxtLink to="/contact-acentria-group"
                    :class="currentRoute === '/contact-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                    class="relative border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                    Contacts
                </NuxtLink>
                <NuxtLink to="/acentria-news-and-blogs"
                    :class="currentRoute === '/acentria-news-and-blogs' ? 'text-brand-primary font-semibold scale-105' : ''"
                    class="relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                    Blogs
                </NuxtLink>
                <NuxtLink to="/acentria-group-careers"
                    :class="currentRoute === '/acentria-group-careers' ? 'text-brand-primary font-semibold scale-105' : ''"
                    class="relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                    Careers
                </NuxtLink>
            </div>
        </div>
    </div>

    <div :class="bottomBarClass"
        class="top-10 z-50 mx-auto hidden w-full items-center justify-between px-4 py-4 transition-all duration-200 lg:flex false bg-white false">
        <div class="container mx-auto items-center justify-between lg:flex">
            <div class="flex font-sans">
                <NuxtLink to="/"><img alt="Acentria" fetchPriority="high" width="250" height="100" decoding="async"
                        data-nimg="1" class="mr-8" style="color: transparent" src="/img/logo.png" />
                </NuxtLink>


                <div class="z-50 content-center">



                    <div class="relative flex flex-col px-4 hover:cursor-default">
                        <NuxtLink to="/acentria-group-insurance" @mouseenter="showDropdown('insurance')"
                            @mouseleave="hideDropdown('insurance')"
                            :class="[isInsuranceDropdownVisible ? '!text-brand-primary' : '', currentRoute === '/acentria-group-insurance' ? '!text-brand-primary scale-105' : '']"
                            class="flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                            Insurance
                        </NuxtLink>

                        <!-- <div v-if="isInsuranceDropdownVisible" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div> -->


                        <InsuranceDropDown v-show="isInsuranceDropdownVisible" @mouseenter="showDropdown('insurance')"
                            @mouseleave="hideDropdown('insurance')" />

                    </div>
                </div>

                <div class="z-50 content-center">
                    <div class="z-50">
                        <div class="relative flex flex-col px-4 hover:cursor-default">
                            <NuxtLink to="/acentria-group-reinsurance" @mouseenter="showDropdown('reinsurance')"
                                @mouseleave="hideDropdown('reinsurance')"
                                :class="[isReinsuranceDropdownVisible ? '!text-brand-primary' : '', currentRoute === '/acentria-group-reinsurance' ? '!text-brand-primary scale-105' : '']"
                                class="flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                Reinsurance
                            </NuxtLink>

                            <ReinsuranceDropDown v-show="isReinsuranceDropdownVisible"
                                @mouseenter="showDropdown('reinsurance')" @mouseleave="hideDropdown('reinsurance')" />
                        </div>
                    </div>
                </div>

                <div class="z-50 content-center">
                    <div class="z-50">
                        <div class="relative flex flex-col px-4 hover:cursor-default">
                            <NuxtLink to="/acentria-group-actuarial" @mouseenter="showDropdown('actuarial')"
                                @mouseleave="hideDropdown('actuarial')"
                                :class="[isActuarialDropdownVisible ? '!text-brand-primary' : '', currentRoute === '/acentria-group-actuarial' ? '!text-brand-primary scale-105' : '']"
                                class="flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                Actuarial
                            </NuxtLink>

                            <ActuarialDropDown v-show="isActuarialDropdownVisible"
                                @mouseenter="showDropdown('actuarial')" @mouseleave="hideDropdown('actuarial')" />
                        </div>
                    </div>
                </div>

                <div class="z-50 content-center">
                    <div class="z-50">
                        <div class="relative flex flex-col px-4 hover:cursor-default">
                            <NuxtLink to="/acentria-group-investment"
                                :class="[currentRoute === '/acentria-group-investment' ? '!text-brand-primary scale-105' : '']"
                                class="flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                Investments
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="z-50 content-center">
                    <div class="z-50">
                        <a href="https://tech.acentriagroup.com/" target="_blank"
                            class="relative flex flex-col px-4 hover:cursor-default">
                            <div
                                class="flex pb-5 pt-4 text-base font-semibold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                Tech
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <a href="#"
                class="font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-black text-white hover:bg-brand-primary focus:ring-brand-secondary-dark px-4 py-3 text-base">
                Get a Quote
                <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                    <g fill-rule="evenodd">
                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                        <path class="transition-all duration-75 translate-x-0 transform-none" d="M1 1l4 4-4 4"></path>
                    </g>
                </svg>
            </a>
        </div>
    </div>

    <div class="flex w-full flex-row justify-between bg-white lg:hidden">
        <div class="flex w-full justify-between px-4 py-4 shadow">
            <a href="#"><img alt="Diligent" loading="lazy" width="103" height="29" decoding="async" data-nimg="1"
                    style="color: transparent" src="/img/logo.png" /></a>
            <div class="translate-y-2.5 cursor-pointer">
                <div
                    class="w-8 h-0.5 bg-light-icon before:content-[&quot;&quot;] before:absolute before:w-8 before:h-0.5 before:bg-light-icon before:translate-y-2.5 transition-all">
                </div>
            </div>
        </div>
        <div
            class="fixed left-0 top-0 z-[100] h-screen w-screen -translate-x-full overflow-y-scroll bg-white transition-all false null">
            <div class="mb-4 flex w-full justify-between px-4 py-4 shadow">
                <a href="#"><img alt="Diligent" loading="lazy" width="103" height="29" decoding="async" data-nimg="1"
                        style="color: transparent" src="/img/logo.png" /></a>
                <div
                    class="w-8 h-0.5 bg-light-icon rotate-45 before:content-[&quot;&quot;] before:absolute before:rotate-90 before:w-8 before:h-0.5 before:bg-light-icon translate-y-3">
                </div>
            </div>
            <div class="px-4">
                <div class="rounded-sm bg-brand-gray px-3 py-6">
                    <div
                        class="mb-6 flex flex-row items-center justify-center text-sm font-semibold text-light-content">
                        <a class="border-r border-brand-divider px-2 py-1.5" href="#">Partner</a><a
                            class="border-r border-brand-divider px-2 py-1.5" href="#">Company</a><a class="px-2 py-1.5"
                            href="#">Support</a>
                    </div>
                    <div class="mb-4 flex flex-row justify-center gap-4">
                        <button
                            class="inline-flex h-[32px] w-[32px] items-center justify-center rounded-full text-dark-icon outline-none"
                            aria-label="Customise options" type="button" id="radix-:R1hkqdm:" aria-haspopup="menu"
                            aria-expanded="false" data-state="closed">
                            <div class="flex gap-x-1">
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    <path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor"
                                        fill-rule="evenodd" clip-rule="evenodd"></path>
                                    <path
                                        d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                    <path
                                        d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </button><button
                            class="group rounded border-2 border-brand-primary duration-200 px-3 py-2 font-semibold whitespace-nowrap bg-transparent rounded border-brand-primary active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 hover:bg-brand-red-2 hover:text-white text-brand-primary px-5 py-0.5 text-sm"
                            type="button">
                            <div class="flex items-center justify-center">
                                <div class="px-2">
                                    <div class="flex flex-row items-center gap-1">
                                        <i class="material-symbols-outlined text-brand-primary text-lg undefined"
                                            translate="no">login</i>Log
                                        In
                                    </div>
                                </div>
                                <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fill-rule="evenodd">
                                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                        <path class="transition-all duration-75 translate-x-0 transform-none"
                                            d="M1 1l4 4-4 4"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div>
                        <button
                            class="button-animation group rounded border-2 border-brand-primary duration-200 px-3 py-2 font-semibold whitespace-nowrap bg-brand-primary rounded text-brand-white hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 w-full"
                            type="button">
                            <div class="flex items-center justify-center">
                                <div class="px-2">Request a
                                    demo</div>
                                <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fill-rule="evenodd">
                                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                        <path class="transition-all duration-75 translate-x-0 transform-none"
                                            d="M1 1l4 4-4 4"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="border-b border-brand-divider">
                    <div class="flex flex-row justify-between py-6">
                        <div class="text-base font-semibold text-light-title">
                            Solutions
                        </div>
                        <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                            translate="no">chevron_right</i>
                    </div>
                </div>
                <div class="border-b border-brand-divider">
                    <div class="flex flex-row justify-between py-6">
                        <div class="text-base font-semibold text-light-title">
                            Products
                        </div>
                        <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                            translate="no">chevron_right</i>
                    </div>
                </div>
                <div class="border-b border-brand-divider">
                    <div class="flex flex-row justify-between py-6">
                        <div class="text-base font-semibold text-light-title">
                            Industries
                        </div>
                        <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                            translate="no">chevron_right</i>
                    </div>
                </div>
                <div class="border-b border-brand-divider">
                    <div class="flex flex-row justify-between py-6">
                        <div class="text-base font-semibold text-light-title">
                            Resources
                        </div>
                        <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                            translate="no">chevron_right</i>
                    </div>
                </div>
                <div class="my-4 flex flex-col rounded-sm bg-brand-gray px-4 py-4">
                    <div class="mb-4 text-xs font-semibold uppercase text-light-icon">
                        More
                    </div>
                    <a href="#" class="pb-2 text-sm font-semibold text-light-content hover:text-light-link">
                        <div class="flex w-full flex-shrink flex-grow-0 cursor-pointer flex-row items-center gap-1">
                            Diligent Elevate<i class="material-symbols-outlined text-lg undefined"
                                translate="no">open_in_new</i>
                        </div>
                        <div class="text-xs">
                            (formerly Modern Governance Summit)
                        </div>
                    </a><a href="#" class="pb-2 text-sm font-semibold text-light-content hover:text-light-link">
                        <div class="flex w-full flex-shrink flex-grow-0 cursor-pointer flex-row items-center gap-1">
                            Diligent Institute<i class="material-symbols-outlined text-lg undefined"
                                translate="no">open_in_new</i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div
            class="fixed left-0 top-0 z-[999] h-full w-screen -translate-x-full overflow-scroll bg-white transition-[transform] duration-300 null">
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

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    /* Adjust the z-index if necessary */
}
</style>
