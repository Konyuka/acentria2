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
        <div class="shadow-4xl absolute bottom-0 left-[-150px] translate-y-full">
            <div class="flex flex-col">

                <div class="bg-white border-r border-brand-divider">
                    <NuxtLink to="/acentria-group-reinsurance"
                        class="button-animation group bg-white flex w-full flex-row items-center gap-2 whitespace-nowrap px-8 py-4 text-sm font-semibold text-black hover:bg-brand-primary hover:text-brand-primary hover:cursor-pointer false">
                        <span class="group-hover:button-animation text-2xl">
                            Reinsurance Page
                        </span>
                        <i class="fas fa-arrow-right text-lg undefined " translate="no"></i>
                    </NuxtLink>

                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('services')" @mouseleave="hideDropdown('services')" href="#"
                        :class="[isServicesDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-shield text-lg undefined" translate="no"></i>
                        Reinsurance Services
                    </a>

                    <div v-show="isServicesDropdownVisible" @mouseenter="showDropdown('services')"
                        @mouseleave="hideDropdown('services')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in reServices">
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
                    <a @mouseenter="showDropdown('solutions')" @mouseleave="hideDropdown('solutions')" href="#"
                        :class="[isSolutionsDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-cogs text-lg undefined" translate="no"></i>
                        Reinsurance Solutions
                    </a>

                    <div v-show="isSolutionsDropdownVisible" @mouseenter="showDropdown('solutions')"
                        @mouseleave="hideDropdown('solutions')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in reSolutions">
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
                    <a @mouseenter="showDropdown('data')" @mouseleave="hideDropdown('data')" href="#"
                        :class="[isDataDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-chart-line text-lg undefined" translate="no"></i>
                        Data and Modelling
                    </a>

                    <div v-show="isDataDropdownVisible" @mouseenter="showDropdown('data')"
                        @mouseleave="hideDropdown('data')" class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in reData">
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


                <div class="flex h-[104px] flex-col rounded-bl-xl bg-brand-gray px-8 py-4"></div>
            </div>

        </div>
    </div>
</template>

<style scoped></style>
