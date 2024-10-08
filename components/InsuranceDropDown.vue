<script setup>

const personalCover = ref({
    name: 'Personal Cover',
    items: [
        {
            name: 'My Health',
            description: 'Comprehensive health coverage tailored to your needs, ensuring peace of mind and access to quality healthcare services.',
            link: '/insurance/health-insurance',
        },
        {
            name: 'My Life',
            description: 'Secure your family\'s future with our flexible life insurance plans, providing financial stability and peace of mind.',
            link: '/insurance/life-insurance',
        },
        {
            name: 'My Home',
            description: 'Protect your home and belongings with our comprehensive home insurance plans, offering peace of mind and financial security.',
            link: '/insurance/home-insurance',
        },
        {
            name: 'My Car',
            description: 'Drive with confidence knowing your vehicle is protected with our comprehensive car insurance plans.',
            link: '/insurance/motor-insurance',
        },
        {
            name: 'My Travel',
            description: 'Explore the world worry-free with our travel insurance, offering coverage for unexpected events and emergencies.',
            link: '/insurance/travel-insurance',
        },
    ]
});
const corpCover = ref({
    name: 'Corporate Cover',
    items: [
        {
            name: 'Staff Health Cover',
            description: 'Ensure the well-being of your employees with our comprehensive health cover, providing access to quality healthcare services.',
            link: '/insurance/staff-health-cover',
        },
        {
            name: 'Staff Travel Cover',
            description: 'Protect your staff during business trips with our travel cover, offering coverage for unexpected events and emergencies.',
            link: '/insurance/staff-travel-cover',
        },
        {
            name: 'Office Content Cover',
            description: 'Safeguard your office assets with our office content cover, providing protection against damage or loss.',
            link: '/insurance/office-content-cover',
        },
        {
            name: 'Cyber Liability Cover',
            description: 'Protect your business from cyber threats with our cyber liability cover, offering financial protection against data breaches and cyber attacks.',
            link: '/insurance/cyber-liability-cover',
        },
        {
            name: 'Credit Risk Cover',
            description: 'Mitigate financial risks with our credit risk cover, ensuring your business is protected against customer defaults and insolvencies.',
            link: '/insurance/credit-risk-cover',
        },
    ]
});
const bizCover = ref({
    name: 'Business Cover',
    items: [
        {
            name: 'Biashara Cover',
            description: 'Comprehensive business insurance solutions tailored to protect your enterprise from various risks and uncertainties.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'General Liability Insurance',
            description: 'Shield your business from legal claims with our general liability insurance, covering bodily injury, property damage, and more.',
            link: '/insurance/general-liability-insurance',
        },
        {
            name: 'Product Liability Insurance',
            description: 'Protect your business against claims related to product defects with our product liability insurance, ensuring financial security.',
            link: '/insurance/product-liability-insurance',
        },
        {
            name: 'Commercial Property Insurance',
            description: 'Safeguard your commercial property with our insurance plans, offering coverage against damage, theft, and other risks.',
            link: '/insurance/commercial-property-insurance',
        },
        {
            name: 'Crops and Livestock',
            description: 'Ensure the protection of your agricultural investments with our crops and livestock insurance, covering a range of farming risks.',
            link: '/insurance/crops-and-livestock',
        },
    ]
});

const industrialCover = ref({
    name: 'Industrial, Manufacturing & Engineering',
    items: [
        {
            name: 'Industrial all risk cover',
            description: 'Comprehensive coverage for all industrial risks, ensuring your business operations are protected.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Public Liability',
            description: 'Protection against claims of personal injury or property damage caused by your business activities.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Staff Personal accident',
            description: 'Coverage for accidents that occur to your staff during the course of their employment.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Staff Work Benefit Injury Act (WIBA)',
            description: 'Compliance with the Work Injury Benefits Act, providing compensation for work-related injuries.',
            link: '/insurance/biasahara-cover',
        },
    ]
});

const contractorCover = ref({
    name: 'Contractors & Developers',
    items: [
        {
            name: 'Contractors all Risk',
            description: 'Comprehensive insurance for contractors, covering a wide range of risks associated with construction projects.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Public Liability',
            description: 'Protection against legal liabilities arising from third-party injuries or property damage.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Staff Personal accident',
            description: 'Insurance coverage for personal accidents that may occur to your staff on the job.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Staff Work Benefit Injury Act (WIBA)',
            description: 'Ensuring compliance with WIBA, providing benefits for work-related injuries to your staff.',
            link: '/insurance/biasahara-cover',
        },
    ]
});

const careerCover = ref({
    name: 'Career / Professional covers',
    items: [
        {
            name: 'Doctors Professional Indemnity',
            description: 'Protection for medical professionals against claims of malpractice or professional negligence.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Lawyers Professional Indemnity',
            description: 'Coverage for legal professionals against claims of errors, omissions, or negligence in their practice.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Pilots Professional Indemnity',
            description: 'Insurance for pilots, covering liabilities arising from professional errors or negligence.',
            link: '/insurance/biasahara-cover',
        },
    ]
});

const schoolsCover = ref({
    name: 'Schools & Institutions covers',
    items: [
        {
            name: 'Student attachment',
            description: 'Insurance coverage for students during their attachment or internship programs.',
            link: '/insurance/biasahara-cover',
        }
    ]
});

const agriculturalCover = ref({
    name: 'Agriculture Insurance',
    items: [
        {
            name: 'Agro insurance',
            description: 'Comprehensive coverage for agricultural activities, protecting against a variety of risks.',
            link: '/insurance/biasahara-cover',
        },
    ]
});



const claims = ref({
    name: 'Claims ',
    items: [
        {
            name: 'Claims Overview',
            description: 'Get a comprehensive overview of the claims process, including what to expect and how to get started.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Claims Process',
            description: 'Learn about the step-by-step process for filing a claim and what documentation is required.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: 'Claims FAQ',
            description: 'Find answers to frequently asked questions about the claims process and how to resolve common issues.',
            link: '/insurance/biasahara-cover',
        },
        {
            name: '',
            description: '',
            link: '',
        },
        {
            name: '',
            description: '',
            link: '',
        },
        {
            name: '',
            description: '',
            link: '',
        },
    ]
});

const insuranceProductsMenus = ref([
    {
        name:'Compare Quotes Instantly  Online',
        link:'',
    },
    {
        name: 'Get a Siscount on your Insurances',
        link:'',
    },
    {
        name: 'Get Insured',
        link:'',
    },
])
const insuranceClientMenus = ref([
    {
        name:'Renew your Policy',
        link:'',
    },
    {
        name: 'Report a Claim',
        link:'',
    },
])

let hideTimeout = null;

const isPersonalDropdownVisible = ref(true);
const isCorporateDropdownVisible = ref(false);
const isBusinessDropdownVisible = ref(false);
const isClaimsDropdownVisible = ref(false);
const isIndustrialDropdownVisible = ref(false);
const isContractorDropdownVisible = ref(false);
const isCareerDropdownVisible = ref(false);
const isSchoolsDropdownVisible = ref(false);
const isAgricultureDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'personal') {
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isPersonalDropdownVisible.value = true;
    } else if (menu == 'corporate') {
        isPersonalDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isCorporateDropdownVisible.value = true;
    } else if (menu == 'business') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isBusinessDropdownVisible.value = true;
    } else if (menu == 'claims') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isClaimsDropdownVisible.value = true;
    } else if (menu == 'industrial') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isIndustrialDropdownVisible.value = true;
    } else if (menu == 'contractor') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isContractorDropdownVisible.value = true;
    } else if (menu == 'career') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isCareerDropdownVisible.value = true;
    } else if (menu == 'schools') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isAgricultureDropdownVisible.value = false;

        isSchoolsDropdownVisible.value = true;
    } else if (menu == 'agriculture') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;
        isIndustrialDropdownVisible.value = false;
        isContractorDropdownVisible.value = false;
        isCareerDropdownVisible.value = false;
        isSchoolsDropdownVisible.value = false;

        isAgricultureDropdownVisible.value = true;
    }
};

const hideDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        if (menu == 'personal') {
            isPersonalDropdownVisible.value = false;
        } else if (menu == 'actuarial') {
            isActuarialDropdownVisible.value = false;
        } else if (menu == 'it') {
            isITDropdownVisible.value = false;
        } else if (menu == 'reinsurance') {
            isReinsuranceDropdownVisible.value = false;
        } else if (menu == 'industrial') {
            isIndustrialDropdownVisible.value = false;
        } else if (menu == 'contractor') {
            isContractorDropdownVisible.value = false;
        } else if (menu == 'career') {
            isCareerDropdownVisible.value = false;
        } else if (menu == 'schools') {
            isSchoolsDropdownVisible.value = false;
        } else if (menu == 'agriculture') {
            isAgricultureDropdownVisible.value = false;
        }
    }, 200);
};

onMounted(() => {
    showDropdown('personal')
    isPersonalDropdownVisible.value = true;
})
</script>

<template>
    <div>
        <!-- <div class="h-8">

        </div> -->
        <div
            class="min-w-[10vw] flex flex-row shadow-4xl absolute bottom-0 left-[-485px] translate-y-full duration-800 z-50">

            <div class="flex flex-col min-w-[30vw]">
                <div class="bg-gray-300  p-5 min-h-screen">
                    <div class="ml-5 mb-5">
                        <h2 class="font-bold text-lg">Explore Products</h2>
                        <div class="flex flex-col gap-3 mt-3">
                            <h2 v-for="menu in insuranceProductsMenus"
                                class="hover:text-brand-primary text-xs font-semibold button-animation">
                                {{ menu.name }}
                                <i class="fas fa-arrow-right mt-1 ml-2"></i>
                            </h2>
                        </div>
                    </div>
                    <div class="ml-5 my-5">
                        <h2 class="font-bold text-lg">Existing Client?</h2>
                        <div class="flex flex-col gap-3 mt-3">
                            <h2 v-for="menu in insuranceClientMenus"
                                class="hover:text-brand-primary text-xs font-semibold button-animation">
                                {{ menu.name }}
                                <i class="fas fa-arrow-right mt-1 ml-2"></i>
                            </h2>
                        </div>
                    </div>
                    <div class=" flex flex-col justify-between">
                        <NuxtLink to="/acentria-group-insurance"
                            class="button-animation mt-0 font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-black text-white hover:bg-brand-primary focus:ring-brand-secondary-dark px-4 py-2 text-xs">
                            Learn More
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4">
                                    </path>
                                </g>
                            </svg>
                        </NuxtLink>

                    </div>
                </div>
            </div>

            <div class="flex flex-col min-w-[25vw] min-h-screen">
                <div class="">
                    <a @mouseenter="showDropdown('personal')" @mouseleave="hideDropdown('personal')" href="#"
                        :class="[isPersonalDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="text-brand-primary mr-2 fas fa-user text-lg undefined mr-5" translate="no"></i>
                        Personal Cover <i
                            :class="[isPersonalDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isPersonalDropdownVisible" @mouseenter="showDropdown('personal')"
                        @mouseleave="hideDropdown('personal')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col bg-white">
                            <NuxtLink :to="item.link" v-for="item in personalCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('corporate')" @mouseleave="hideDropdown('corporate')" href="#"
                        :class="[isCorporateDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-users text-lg undefined mr-5"
                            translate="no"></i>
                        Corporate Cover <i
                            :class="[isCorporateDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isCorporateDropdownVisible" @mouseenter="showDropdown('corporate')"
                        @mouseleave="hideDropdown('corporate')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in corpCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('business')" @mouseleave="hideDropdown('business')" href="#"
                        :class="[isBusinessDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-briefcase text-lg undefined mr-5"
                            translate="no"></i>
                        Business Cover <i
                            :class="[isBusinessDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isBusinessDropdownVisible" @mouseenter="showDropdown('business')"
                        @mouseleave="hideDropdown('business')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in bizCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('industrial')" @mouseleave="hideDropdown('industrial')" href="#"
                        :class="[isIndustrialDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-briefcase text-lg undefined mr-5"
                            translate="no"></i>
                        Industrial, Manufucturing & Engineering <i
                            :class="[isIndustrialDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isIndustrialDropdownVisible" @mouseenter="showDropdown('industrial')"
                        @mouseleave="hideDropdown('business')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in industrialCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('contractor')" @mouseleave="hideDropdown('contractor')" href="#"
                        :class="[isContractorDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-hard-hat text-lg undefined mr-5"
                            translate="no"></i>
                        Contractors & Developers <i
                            :class="[isContractorDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isContractorDropdownVisible" @mouseenter="showDropdown('contractor')"
                        @mouseleave="hideDropdown('contractor')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in contractorCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('career')" @mouseleave="hideDropdown('career')" href="#"
                        :class="[isCareerDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-briefcase text-lg undefined mr-5"
                            translate="no"></i>
                        Career / Professional Covers <i
                            :class="[isCareerDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isCareerDropdownVisible" @mouseenter="showDropdown('career')"
                        @mouseleave="hideDropdown('career')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in careerCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('schools')" @mouseleave="hideDropdown('schools')" href="#"
                        :class="[isSchoolsDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-school text-lg undefined mr-5"
                            translate="no"></i>
                        Schools & Institutions Covers <i
                            :class="[isSchoolsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isSchoolsDropdownVisible" @mouseenter="showDropdown('schools')"
                        @mouseleave="hideDropdown('schools')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in schoolsCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="">
                    <a @mouseenter="showDropdown('agriculture')" @mouseleave="hideDropdown('agriculture')" href="#"
                        :class="[isAgricultureDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-seedling text-lg undefined mr-5"
                            translate="no"></i>
                        Agriculture Insurance <i
                            :class="[isAgricultureDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isAgricultureDropdownVisible" @mouseenter="showDropdown('agriculture')"
                        @mouseleave="hideDropdown('agriculture')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in agriculturalCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>



                <div class="">
                    <a @mouseenter="showDropdown('claims')" @mouseleave="hideDropdown('claims')" href="#"
                        :class="[isClaimsDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-file-alt text-lg undefined mr-5"
                            translate="no"></i>
                        Claims <i
                            :class="[isClaimsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isClaimsDropdownVisible" @mouseenter="showDropdown('claims')"
                        @mouseleave="hideDropdown('claims')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in claims.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-xs font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-black">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class=" bg-white">

                    <div class="flex justify-center">
                        <a href="/insurance.acentriagroup.com" target="_blank"
                            class=" button-animation mt-10 font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-black text-white hover:bg-brand-primary focus:ring-brand-secondary-dark px-4 py-2 text-xs">
                            Compare Quotes Online
                        </a>
                    </div>





                </div>

                <div class="flex h-screen flex-col bg-white px-8 py-4"></div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
