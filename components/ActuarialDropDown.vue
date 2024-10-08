<script setup>

const acServices = ref([
    {
        name: 'Financial Services',
        description: 'Enhance your financial strategies with our expert actuarial services, providing insights and solutions for optimal financial management.',
        link: '/actuarial/financial-services',
    },
    {
        name: 'Insurance Consulting',
        description: 'Optimize your insurance operations with our consulting services, offering expert advice and innovative solutions.',
        link: '/actuarial/insurance-consulting',
    },
    {
        name: 'Reinsurance Consulting',
        description: 'Strengthen your reinsurance strategies with our consulting services, providing tailored solutions and expert insights.',
        link: '/actuarial/reinsurance-consulting',
    },
]);
const acOther = ref([
    {
        name: 'IFRS17 Implementation',
        description: 'Ensure compliance with IFRS 17 standards with our implementation services, offering expert guidance and support.',
        link: '/actuarial/ifrs-17-implementation',
    },
    {
        name: 'Innovation and Digitization',
        description: 'Transform your business with our innovation and digitization services, leveraging cutting-edge technology and expertise.',
        link: '/actuarial/innovation-and-digitization',
    },
    {
        name: 'Retirement and Employee Benefits',
        description: 'Optimize your retirement and employee benefits programs with our actuarial services, ensuring financial security and employee satisfaction.',
        link: '/actuarial/retirement-and-employee-benefits',
    },
]);
const acProducts = ref([
    {
        name: 'AcentRe',
        description: 'Optimize your reinsurance strategy with AcentRe\'s comprehensive solutions, designed for maximum efficiency and effectiveness.',
        link: '/reinsurance/acentre-reinsurance-solution',
    },
    {
        name: 'Data Analytics Tool',
        description: 'Leverage data-driven insights with our data analysis tool, enhancing decision-making and risk assessment.',
        link: '/reinsurance/reinsurance-data-analytics-tool',
    },
]);

let hideTimeout = null;

const isConsultingDropdownVisible = ref(true);
const isServicesDropdownVisible = ref(false);
const isProductsDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'consulting') {
        isServicesDropdownVisible.value = false;
        isProductsDropdownVisible.value = false;

        isConsultingDropdownVisible.value = true;
    } else if (menu == 'services') {
        isConsultingDropdownVisible.value = false;
        isProductsDropdownVisible.value = false;

        isServicesDropdownVisible.value = true;
    } else if (menu == 'products') {
        isConsultingDropdownVisible.value = false;
        isServicesDropdownVisible.value = false;

        isProductsDropdownVisible.value = true;
    }
};

const hideDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        if (menu == 'consulting') {
            isConsultingDropdownVisible.value = false;
        } else if (menu == 'services') {
            isServicesDropdownVisible.value = false;
        } else if (menu == 'products') {
            isProductsDropdownVisible.value = false;
        }
    }, 200);
};

onMounted(()=>{
    showDropdown('consulting')
    isConsultingDropdownVisible.value = true;
})
</script>

<template>
    <div>
        <!-- <div class="h-8">

        </div> -->
        <div
            class="min-w-[10vw] flex flex-row shadow-4xl absolute bottom-0 left-[-580px] translate-y-full duration-800 z-50">

            <div class="flex flex-col min-w-[25vw]">
                <div class="bg-gray-300  p-5 min-h-screen">
                    <NuxtLink to="/acentria-group-actuarial"
                        class="group flex w-full flex-row items-center gap-2 whitespace-nowrap px-2 py-2 text-sm font-semibold text-black hover:bg-brand-primary hover:text-brand-primary hover:cursor-pointer false">
                        <span class="group-hover:button-animation text-xl mt-3 text-brand-primary">
                            Acentria Actuarial & <br> Financial Services
                        </span>
                    </NuxtLink>
                    <div class="flex">
                        <i class="fas fa-caret-right mr-2 ml-4 text-brand-primary"></i>
                        <p class="px-2 text-xs">
                            Acentria Actuarial and Financial Services, a fully
                            owned subsidiary of Acentria Group, is a world class
                            company that has skills and expertise to offer
                            innovative solutions to clients globally.
                        </p>
                    </div>
                    <div class=" flex flex-col justify-between">
                        <NuxtLink to="/acentria-group-actuarial"
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
                    </div>
                </div>
            </div>

            <div class="flex flex-col min-w-[25vw] min-h-screen">
                <div class="">
                    <a @mouseenter="showDropdown('consulting')" @mouseleave="hideDropdown('consulting')" href="#"
                        :class="[isConsultingDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-calculator text-lg undefined" translate="no"></i>
                        Actuarial Consulting <i
                            :class="[isConsultingDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isConsultingDropdownVisible" @mouseenter="showDropdown('consulting')"
                        @mouseleave="hideDropdown('consulting')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in acServices">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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
                    <a @mouseenter="showDropdown('services')" @mouseleave="hideDropdown('services')" href="#"
                        :class="[isServicesDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-briefcase text-lg undefined" translate="no"></i>
                        Actuarial Services <i
                            :class="[isServicesDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isServicesDropdownVisible" @mouseenter="showDropdown('services')"
                        @mouseleave="hideDropdown('services')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in acOther">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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
                    <a @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')" href="#"
                        :class="[isProductsDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-box text-lg undefined" translate="no"></i>
                        Actuarial Products <i
                            :class="[isProductsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isProductsDropdownVisible" @mouseenter="showDropdown('products')"
                        @mouseleave="hideDropdown('products')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in acProducts">
                                <div
                                    class="font-sans group flex w-[30vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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

                <div class="flex h-screen flex-col bg-white px-8 py-4"></div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
