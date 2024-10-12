<script setup>
const isScrolled = ref(false);
const bottomBarClass = computed(() => {
    return isScrolled.value ? 'sticky' : 'sticky';
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
const isAboutDropdownVisible = ref(false);

watch(currentRoute, (newValue) => {
    if (newValue) {
        openMobileMenu.value = false
        isInsuranceDropdownVisible.value = false
        isActuarialDropdownVisible.value = false
        isITDropdownVisible.value = false
        isReinsuranceDropdownVisible.value = false
        isAboutDropdownVisible.value = false
    }
})

const toggleMenu = () => {
    openMobileMenu.value = true
}
const closeMenu = () => {
    openMobileMenu.value = false
}


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
            link: '/insurance/biasahara-cover',
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
        isAboutDropdownVisible.value = false;

        isInsuranceDropdownVisible.value = true;
    } else if (menu == 'actuarial') {
        isInsuranceDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;
        isAboutDropdownVisible.value = false;

        isActuarialDropdownVisible.value = true;
    } else if (menu == 'it') {
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;
        isAboutDropdownVisible.value = false;

        isITDropdownVisible.value = true;
    } else if (menu == 'reinsurance') {
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isAboutDropdownVisible.value = false;

        isReinsuranceDropdownVisible.value = true;
    } else if (menu == 'about'){
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isAboutDropdownVisible.value = true;
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
        }else if (menu == 'about') {
            isAboutDropdownVisible.value = false;
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

    <div :class="bottomBarClass">
        <div class="relative z-50 mx-auto hidden w-full px-8 py-1 lg:block bg-brand-gray">
            <div class="font-sans container mx-auto flex flex-row items-center justify-between">
                <!-- socials -->
                <div class="flex items-center justify-end md:justify-end md:col-span-1">
                    <div class="flex gap-6">
                        <a href="https://www.linkedin.com/company/acentria-groupltd/" target="_blank">
                            <div
                                class="bg-white w-5 h-5 rounded-full flex justify-center items-center button-animation">
                                <i class="!text-xl fab fa-linkedin icon-style text-black hover:text-brand-primary"></i>
                            </div>
                        </a>
                        <a href="https://x.com/acentriagroup?lang=en" target="_blank">
                            <div
                                class="bg-white w-5 h-5 rounded-full flex justify-center items-center button-animation">
                                <i class="!text-xl fab fa-x-twitter icon-style text-black hover:text-brand-primary"></i>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/commercialkitchensconsultants/" target="_blank">
                            <div
                                class="bg-white w-5 h-5 rounded-full flex justify-center items-center button-animation">
                                <i class="!text-xl fab fa-facebook icon-style text-black hover:text-brand-primary"></i>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/acentriagroup/" target="_blank">
                            <div
                                class="bg-white w-5 h-5 rounded-full flex justify-center items-center button-animation">
                                <i class="!text-xl fab fa-instagram icon-style text-black hover:text-brand-primary"></i>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@acentria.group" target="_blank">
                            <div
                                class="bg-white w-5 h-5 rounded-full flex justify-center items-center button-animation">
                                <i class="!text-xl fab fa-tiktok icon-style text-black hover:text-brand-primary"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Top Links -->
                <div class="flex flex-row items-center justify-end text-xs text-black">
                    <NuxtLink to="/" :class="currentRoute === '/' ? 'text-brand-primary font-semibold scale-105' : ''"
                        class=" relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation font-medium">
                        Home
                    </NuxtLink>
                    <!-- <NuxtLink to="/about-acentria-group"
                        :class="currentRoute === '/about-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                        class=" relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation">
                        About
                    </NuxtLink> -->
                    <NuxtLink to="/acentria-news-and-blogs"
                        :class="currentRoute === '/acentria-news-and-blogs' ? 'text-brand-primary font-semibold scale-105' : ''"
                        class=" relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation font-medium">
                        News & Updates
                    </NuxtLink>
                    <NuxtLink to="/acentria-group-careers"
                        :class="currentRoute === '/acentria-group-careers' ? 'text-brand-primary font-semibold scale-105' : ''"
                        class=" relative mr-2 border-r border-brand-divider px-2 py-1.5 hover:text-brand-primary button-animation font-medium">
                        Careers
                    </NuxtLink>
                    <NuxtLink to="/contact-acentria-group"
                        :class="currentRoute === '/contact-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                        class=" relative px-2 py-1.5 hover:text-brand-primary button-animation font-medium">
                        Contacts Us
                    </NuxtLink>
                </div>
            </div>
        </div>

        <div
            class="top-1 z-50 mx-auto hidden w-full bottom-0 justify-between px-4 py-1 transition-all duration-200 lg:flex false bg-white false">
            <div class="container mx-auto items-center justify-between lg:flex">
                <div class="flex font-sans mb-0">

                    <NuxtLink to="/"><img alt="Acentria" fetchPriority="high" width="240" height="50" decoding="async"
                            data-nimg="1" class="mr-8" style="color: transparent" src="/img/logo.png" />
                    </NuxtLink>



                </div>
                <div class="flex font-sans mr-16">

                    <div class="z-50 content-center">
                        <div class="relative flex flex-col px-4 hover:cursor-default">
                            <NuxtLink to="/about-acentria-group" @mouseenter="showDropdown('about')"
                                @mouseleave="hideDropdown('about')"
                                :class="[isAboutDropdownVisible ? '!text-brand-primary !font-bold' : 'font-semibold', currentRoute === '/about-us/who-we-are' ? '!text-brand-primary scale-105 !font-bold' : '']"
                                class="mt-5 flex pb-5 pt-4 text-md  font-medium  hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                About Us
                            </NuxtLink>

                            <AboutDropDown v-show="isAboutDropdownVisible" @mouseenter="showDropdown('about')"
                                @mouseleave="hideDropdown('about')" class="" />



                        </div>
                    </div>

                    <div class="z-50 content-center">
                        <div class="relative flex flex-col px-4 hover:cursor-default">
                            <NuxtLink to="/acentria-group-insurance" @mouseenter="showDropdown('insurance')"
                                @mouseleave="hideDropdown('insurance')"
                                :class="[isInsuranceDropdownVisible ? '!text-brand-primary !font-bold' : 'font-semibold', currentRoute === '/acentria-group-insurance' ? '!text-brand-primary scale-105' : '']"
                                class="mt-5 flex pb-5 pt-4 text-md  font-medium  hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                Insurance
                            </NuxtLink>


                            <InsuranceDropDown v-show="isInsuranceDropdownVisible"
                                @mouseenter="showDropdown('insurance')" @mouseleave="hideDropdown('insurance')"
                                class="" />

                        </div>
                    </div>

                    <div class="z-50 content-center">
                        <div class="z-50">
                            <div class="relative flex flex-col px-4 hover:cursor-default">
                                <NuxtLink to="/acentria-group-reinsurance" @mouseenter="showDropdown('reinsurance')"
                                    @mouseleave="hideDropdown('reinsurance')"
                                    :class="[isReinsuranceDropdownVisible ? '!text-brand-primary' : 'font-semibold', currentRoute === '/acentria-group-reinsurance' ? '!text-brand-primary scale-105' : '']"
                                    class="mt-5 flex pb-5 pt-4 text-md  font-medium  hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                    Reinsurance
                                </NuxtLink>

                                <ReinsuranceDropDown v-show="isReinsuranceDropdownVisible"
                                    @mouseenter="showDropdown('reinsurance')" @mouseleave="hideDropdown('reinsurance')"
                                    class="" />
                            </div>
                        </div>
                    </div>

                    <div class="z-50 content-center">
                        <div class="z-50">
                            <div class="relative flex flex-col px-4 hover:cursor-default">
                                <NuxtLink to="/acentria-group-actuarial" @mouseenter="showDropdown('actuarial')"
                                    @mouseleave="hideDropdown('actuarial')"
                                    :class="[isActuarialDropdownVisible ? '!text-brand-primary !font-medium' : 'font-semibold', currentRoute === '/acentria-group-actuarial' ? '!text-brand-primary scale-105' : '']"
                                    class="mt-5 flex pb-5 pt-4 text-md    hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                    Actuarial
                                </NuxtLink>

                                <ActuarialDropDown v-show="isActuarialDropdownVisible"
                                    @mouseenter="showDropdown('actuarial')" @mouseleave="hideDropdown('actuarial')"
                                    class="" />
                            </div>
                        </div>
                    </div>

                    <div class="z-50 content-center">
                        <div class="z-50">
                            <a href="https://tech.acentriagroup.com/" target="_blank"
                                class="relative flex flex-col px-4 hover:cursor-default">
                                <div
                                    class="mt-5 flex pb-5 pt-4 text-md  font-semibold  hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                    Technologies
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="z-50 content-center">
                        <div class="z-50">
                            <div class="relative flex flex-col px-4 hover:cursor-default">
                                <NuxtLink to="/acentria-group-investment"
                                    :class="[currentRoute === '/acentria-group-investment' ? '!text-brand-primary scale-105' : 'font-semibold']"
                                    class="mt-5 flex pb-5 pt-4 text-md  font-medium  hover:font-bold text-light-title hover:text-brand-primary relative after:absolute after:bottom-0 after:w-0 after:bg-brand-primary after:h-1 after:transition-width after:duration-500 group-hover:w-full after:hover:w-full after:content[&quot;&quot;] false">
                                    Investments
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                </div>

                <div></div>

            </div>
        </div>

        <div class="flex w-full flex-row justify-between bg-white lg:hidden">

            <div class="flex w-full justify-between px-4 py-4 shadow">
                <a href="#"><img alt="Acentria Group" loading="lazy" width="180" height="29" decoding="async"
                        data-nimg="1" style="color: transparent" src="/img/logo.png" />
                </a>
                <div @click="toggleMenu()" class="translate-y-2.5 cursor-pointer">
                    <div
                        class="w-8 h-0.5 bg-light-icon before:content-[&quot;&quot;] before:absolute before:w-8 before:h-0.5 before:bg-light-icon before:translate-y-2.5 transition-all">
                    </div>
                </div>
            </div>

            <div :class="[openMobileMenu ? 'translate-x-0' : '']"
                class="fixed left-0 top-0 z-[100] h-screen w-screen overflow-y-scroll bg-white transition-all null -translate-x-full">
                <div class="mb-4 flex w-full justify-between px-4 py-4 shadow">
                    <a href="#"><img alt="Diligent" loading="lazy" width="180" height="29" decoding="async"
                            data-nimg="1" style="color: transparent" src="/img/logo.png" /></a>
                    <div @click="closeMenu()"
                        class="w-8 h-0.5 bg-light-icon rotate-45 before:content-[&quot;&quot;] before:absolute before:rotate-90 before:w-8 before:h-0.5 before:bg-light-icon translate-y-3">
                    </div>
                </div>
                <div class="px-4">
                    <div class="rounded-sm bg-brand-gray px-3 py-3">
                        <div
                            class="mb-6 flex flex-row items-center justify-center text-sm font-semibold text-light-content">
                            <NuxtLink to="/"
                                :class="currentRoute === '/' ? 'text-brand-primary font-semibold scale-105' : ''"
                                class="border-r border-brand-divider px-2 py-1.5">
                                Home
                            </NuxtLink>
                            <NuxtLink to="/about-acentria-group"
                                :class="currentRoute === '/about-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                                class="border-r border-brand-divider px-2 py-1.5">
                                About
                            </NuxtLink>
                            <NuxtLink to="/acentria-news-and-blogs"
                                :class="currentRoute === '/acentria-news-and-blogs' ? 'text-brand-primary font-semibold scale-105' : ''"
                                class="border-r border-brand-divider px-2 py-1.5">
                                News
                            </NuxtLink>
                            <NuxtLink to="/acentria-group-careers"
                                :class="currentRoute === '/acentria-group-careers' ? 'text-brand-primary font-semibold scale-105' : ''"
                                class="border-r border-brand-divider px-2 py-1.5">
                                Careers
                            </NuxtLink>
                            <NuxtLink to="/contact-acentria-group"
                                :class="currentRoute === '/contact-acentria-group' ? 'text-brand-primary font-semibold scale-105' : ''"
                                class="px-2 py-1.5" href="#">
                                Contacts
                            </NuxtLink>
                        </div>
                    </div>


                    <div class="border-b border-brand-divider">
                        <NuxtLink to="/acentria-group-insurance"
                            :class="[currentRoute === '/acentria-group-insurance' ? '!text-brand-primary scale-105' : 'text-light-title']"
                            class="flex flex-row justify-between py-3">
                            <div class="text-base font-semibold">
                                Insurance
                            </div>
                            <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                translate="no">chevron_right</i>
                        </NuxtLink>
                    </div>
                    <div class="border-b border-brand-divider">
                        <NuxtLink to="/acentria-group-reinsurance"
                            :class="[currentRoute === '/acentria-group-reinsurance' ? '!text-brand-primary scale-105' : 'text-light-title']"
                            class="flex flex-row justify-between py-3">
                            <div class="text-base font-semibold">
                                Reinsurance
                            </div>
                            <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                translate="no">chevron_right</i>
                        </NuxtLink>
                    </div>
                    <div class="border-b border-brand-divider">
                        <NuxtLink to="/acentria-group-actuarial"
                            :class="[currentRoute === '/acentria-group-actuarial' ? '!text-brand-primary scale-105' : 'text-light-title']"
                            class="flex flex-row justify-between py-3">
                            <div class="text-base font-semibold">
                                Actuarial
                            </div>
                            <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                translate="no">chevron_right</i>
                        </NuxtLink>
                    </div>
                    <div class="border-b border-brand-divider">
                        <a href="https://tech.acentriagroup.com/" target="_blank"
                            class="flex flex-row justify-between py-3">
                            <div class="text-base font-semibold text-light-title">
                                Technologies
                            </div>
                            <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                translate="no">chevron_right</i>
                        </a>
                    </div>
                    <div class="border-b border-brand-divider">
                        <NuxtLink to="/acentria-group-investment"
                            :class="[currentRoute === '/acentria-group-investment' ? '!text-brand-primary scale-105' : 'text-light-title']"
                            class="flex flex-row justify-between py-3">
                            <div class="text-base font-semibold">
                                Investments
                            </div>
                            <i class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                translate="no">chevron_right</i>
                        </NuxtLink>
                    </div>

                </div>
            </div>
            <div
                class="fixed left-0 top-0 z-[999] h-full w-screen -translate-x-full overflow-scroll bg-white transition-[transform] duration-300 null">
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

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    /* Adjust the z-index if necessary */
}
</style>
