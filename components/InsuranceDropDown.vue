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



let hideTimeout = null;

const isPersonalDropdownVisible = ref(true);
const isCorporateDropdownVisible = ref(false);
const isBusinessDropdownVisible = ref(false);
const isClaimsDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'personal') {
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;

        isPersonalDropdownVisible.value = true;
    } else if (menu == 'corporate') {
        isPersonalDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;

        isCorporateDropdownVisible.value = true;
    } else if (menu == 'business') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isClaimsDropdownVisible.value = false;

        isBusinessDropdownVisible.value = true;
    } else if (menu == 'claims') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;

        isClaimsDropdownVisible.value = true;
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
        }
    }, 200);
};

onMounted(() => {
    showDropdown('personal')
    isPersonalDropdownVisible.value = true;
})
</script>

<template>
    <div class="">
        <div class="h-8">

        </div>
        <div
            class=" min-w-[10vw] flex flex-row shadow-4xl absolute bottom-0 left-[-336px] translate-y-full duration-1000 z-50">

            <div class="flex flex-col min-w-[30vw]">
                <div class="bg-gray-300 border-r border-brand-divider p-5 min-h-screen">
                    <NuxtLink to="/acentria-group-insurance"
                        class="group flex w-full flex-row items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-semibold text-black hover:bg-brand-primary hover:text-brand-primary hover:cursor-pointer false">
                        <span class="group-hover:button-animation text-xl mt-3 text-brand-primary">
                            Acentria Insurance Brokers
                        </span>
                    </NuxtLink>
                    <div class="flex">
                        <i class="fas fa-caret-right mr-2 ml-4"></i>
                        <p class="px-2 text-xs">
                            Acentria Insurance Brokers Limited is at the forefront in providing insurance solutions.
                            With a
                            commitment to excellence and a deep understanding of the insurance industry, we offer a wide
                            range of services tailored to meet the unique needs of our clients. Our team of experienced
                            professionals works diligently to ensure that our clients receive the best possible coverage
                            and
                            support.

                        </p>
                    </div>
                    <div class="border-r border-brand-divider flex flex-col justify-between">
                        <NuxtLink to="/acentria-group-insurance"
                            class="button-animation mt-10 font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-black text-white hover:bg-brand-primary focus:ring-brand-secondary-dark px-4 py-2 text-xs">
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
                        <a href="https://insurance.acentriagroup.com/" target="_blank"
                            class="button-animation mt-5 font-sans inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-300 focus:outline-none bg-black text-white hover:bg-brand-primary focus:ring-brand-secondary-dark px-4 py-2 text-xs">
                            Compare Quotes
                            <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                <g fill-rule="evenodd">
                                    <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                    <path class="transition-all duration-75 translate-x-0 transform-none"
                                        d="M1 1l4 4-4 4">
                                    </path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex flex-col min-w-[25vw] min-h-screen">


                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('personal')" @mouseleave="hideDropdown('personal')" href="#"
                        :class="[isPersonalDropdownVisible ? '!text-brand-primary' : '']"
                        class="relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-user text-lg undefined mr-5" translate="no"></i>
                        Personal Cover <i
                            :class="[isPersonalDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isPersonalDropdownVisible" @mouseenter="showDropdown('personal')"
                        @mouseleave="hideDropdown('personal')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full min-w-[35vw]">
                        <div class="flex h-screen flex-col bg-white">
                            <NuxtLink :to="item.link" v-for="item in personalCover.items">
                                <div
                                    class="font-sans group flex w-[40vw] flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
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

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('corporate')" @mouseleave="hideDropdown('corporate')" href="#"
                        :class="[isCorporateDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-users text-lg undefined mr-5" translate="no"></i>
                        Corporate Cover <i
                            :class="[isCorporateDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isCorporateDropdownVisible" @mouseenter="showDropdown('corporate')"
                        @mouseleave="hideDropdown('corporate')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in corpCover.items">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
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

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('business')" @mouseleave="hideDropdown('business')" href="#"
                        :class="[isBusinessDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-briefcase text-lg undefined mr-5" translate="no"></i>
                        Business Cover <i
                            :class="[isBusinessDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isBusinessDropdownVisible" @mouseenter="showDropdown('business')"
                        @mouseleave="hideDropdown('business')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in bizCover.items">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
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

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('claims')" @mouseleave="hideDropdown('claims')" href="#"
                        :class="[isClaimsDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-file-alt text-lg undefined mr-5" translate="no"></i>
                        Claims <i
                            :class="[isClaimsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isClaimsDropdownVisible" @mouseenter="showDropdown('claims')"
                        @mouseleave="hideDropdown('claims')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in claims.items">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-black group-hover:text-brand-primary group-hover:bg-brand-primary">
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

                <div class="flex h-screen flex-col bg-white px-8 py-4 border-r border-brand-divider"></div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
