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
        name: 'IFRS 17 Implementation',
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
        name: 'Data Analysis Tool',
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
        <div class="shadow-4xl absolute bottom-0 left-[-150px] translate-y-full">
            <div class="flex flex-col">

                <div class="bg-black border-r border-brand-divider">
                    <a @mouseenter="showDropdown('consulting')" @mouseleave="hideDropdown('consulting')" href="#"
                        :class="[isConsultingDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-calculator text-lg undefined" translate="no"></i>
                        Actuarial Consulting
                    </a>

                    <div v-show="isConsultingDropdownVisible" @mouseenter="showDropdown('consulting')"
                        @mouseleave="hideDropdown('consulting')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in acServices">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-black px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-white group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-white">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('services')" @mouseleave="hideDropdown('services')" href="#"
                        :class="[isServicesDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-briefcase text-lg undefined" translate="no"></i>
                        Actuarial Services
                    </a>

                    <div v-show="isServicesDropdownVisible" @mouseenter="showDropdown('services')"
                        @mouseleave="hideDropdown('services')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in acOther">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-black px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-white group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-white">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('products')" @mouseleave="hideDropdown('products')" href="#"
                        :class="[isProductsDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-box text-lg undefined" translate="no"></i>
                        Actuarial Products
                    </a>

                    <div v-show="isProductsDropdownVisible" @mouseenter="showDropdown('products')"
                        @mouseleave="hideDropdown('products')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in acProducts">
                                <div
                                    class="font-sans group flex w-96 flex-col bg-black px-6 py-4 transition-all hover:bg-brand-primary">
                                    <div
                                        class="text-sm font-semibold text-white group-hover:text-brand-primary group-hover:bg-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-white">
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
