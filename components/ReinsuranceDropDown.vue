<script setup>

const reServices = ref([
    {
        name: 'Reinsurance Optimization',
        description: 'Maximize your reinsurance efficiency with our optimization services, tailored to enhance your risk management strategies.',
        link: '/reinsurance/reinsurance-optimization',
    },
    {
        name: 'Treaty Administration',
        description: 'Streamline your reinsurance agreements with our comprehensive treaty administration services, ensuring smooth operations.',
        link: '/reinsurance/treaty-administration',
    },
    {
        name: 'Claims Management',
        description: 'Efficiently handle reinsurance claims with our expert management services, providing timely and accurate claim resolutions.',
        link: '/reinsurance/claims-management',
    },
    {
        name: 'Value Addition',
        description: 'Enhance your reinsurance portfolio with our value addition services, offering innovative solutions and expert insights.',
        link: '/reinsurance/value-addition',
    },
]);
const reSolutions = ref([
    {
        name: 'Facultative Solutions',
        description: 'Access tailored reinsurance coverage with our facultative solutions, designed to meet specific risk requirements.',
        link: '/reinsurance/facultative-solution',
    },
    {
        name: 'Treaty Solutions',
        description: 'Secure comprehensive reinsurance protection with our treaty solutions, offering stability and financial security.',
        link: '/reinsurance/treaty-solutions',
    },
    {
        name: 'Special Lines Solutions',
        description: 'Protect unique and high-risk exposures with our special lines solutions, providing specialized reinsurance coverage.',
        link: '/reinsurance/special-lines',
    },
]);
const reData = ref([
    {
        name: 'Reinsurance Data Analytics Tool',
        description: 'Leverage data-driven insights with our reinsurance data analytics tool, enhancing decision-making and risk assessment.',
        link: '/reinsurance/reinsurance-data-analytics-tool',
    },
    {
        name: 'Acentre Reinsurance Solution',
        description: 'Optimize your reinsurance strategy with Acentre\'s comprehensive solutions, designed for maximum efficiency and effectiveness.',
        link: '/reinsurance/acentre-reinsurance-solution',
    },
    {
        name: 'Catastrophic Modelling',
        description: 'Prepare for extreme events with our catastrophic modelling services, providing accurate risk assessments and mitigation strategies.',
        link: '/reinsurance/catastrophic-modelling',
    },
    {
        name: 'Return On Risk Adjusted Capital',
        description: 'Maximize your financial performance with our return on risk-adjusted capital services, ensuring optimal capital allocation.',
        link: '/reinsurance/return-on-risk-adjusted-capital',
    },
]);

const insuranceProductsMenus = ref([
    {
        name: 'Compare Quotes Instantly  Online',
        link: '',
    },
    {
        name: 'Get a Siscount on your Insurances',
        link: '',
    },
    {
        name: 'Get Insured',
        link: '',
    },
])
const insuranceClientMenus = ref([
    {
        name: 'Renew your Policy',
        link: '',
    },
    {
        name: 'Report a Claim',
        link: '',
    },
])



let hideTimeout = null;

const isServicesDropdownVisible = ref(true);
const isSolutionsDropdownVisible = ref(false);
const isDataDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'services') {
        isSolutionsDropdownVisible.value = false;
        isDataDropdownVisible.value = false;

        isServicesDropdownVisible.value = true;
    } else if (menu == 'solutions') {
        isServicesDropdownVisible.value = false;
        isDataDropdownVisible.value = false;

        isSolutionsDropdownVisible.value = true;
    } else if (menu == 'data') {
        isServicesDropdownVisible.value = false;
        isSolutionsDropdownVisible.value = false;

        isDataDropdownVisible.value = true;
    }
};

const hideDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(() => {
        if (menu == 'services') {
            isServicesDropdownVisible.value = false;
        } else if (menu == 'solutions') {
            isSolutionsDropdownVisible.value = false;
        } else if (menu == 'data') {
            isDataDropdownVisible.value = false;
        }
    }, 200);
};

onMounted(() => {
    showDropdown('services')
    isServicesDropdownVisible.value = true;
})

</script>

<template>
    <div>
        <!-- <div class="h-8">

        </div> -->
        <div
            class="min-w-[10vw] flex flex-row shadow-4xl absolute bottom-0 left-[-590px] translate-y-full duration-800 z-50">

            <div class="flex flex-col min-w-[25vw]">
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
                    <a @mouseenter="showDropdown('services')" @mouseleave="hideDropdown('services')" href="#"
                        :class="[isServicesDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-shield text-lg undefined"
                            translate="no"></i>
                        Reinsurance Services <i
                            :class="[isServicesDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isServicesDropdownVisible" @mouseenter="showDropdown('services')"
                        @mouseleave="hideDropdown('services')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in reServices">
                                <div
                                    class="font-sans group flex w-[50vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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
                    <a @mouseenter="showDropdown('solutions')" @mouseleave="hideDropdown('solutions')" href="#"
                        :class="[isSolutionsDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-cogs text-lg undefined"
                            translate="no"></i>
                        Reinsurance Solutions <i
                            :class="[isSolutionsDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isSolutionsDropdownVisible" @mouseenter="showDropdown('solutions')"
                        @mouseleave="hideDropdown('solutions')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in reSolutions">
                                <div
                                    class="font-sans group flex w-[50vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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
                    <a @mouseenter="showDropdown('data')" @mouseleave="hideDropdown('data')" href="#"
                        :class="[isDataDropdownVisible ? '!text-brand-primary' : '']"
                        class="group relative flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-1 text-xs font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="group-hover:text-brand-primary text-gray-400 duration-700 mr-2 fas fa-chart-line text-lg undefined"
                            translate="no"></i>
                        Data and Modelling <i
                            :class="[isDataDropdownVisible ? '!text-brand-primary animate-in slide-in-from-left' : '']"
                            class="absolute fas fa-caret-right !right-5"></i>
                    </a>

                    <div v-show="isDataDropdownVisible" @mouseenter="showDropdown('data')"
                        @mouseleave="hideDropdown('data')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-screen flex-col  bg-white">
                            <NuxtLink :to="item.link" v-for="item in reData">
                                <div
                                    class="font-sans group flex w-[50vw] flex-col bg-white px-6 py-2 transition-all hover:bg-brand-primary">
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
