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



let hideTimeout = null;

const isPersonalDropdownVisible = ref(true);
const isCorporateDropdownVisible = ref(false);
const isBusinessDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'personal') {
        isCorporateDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;

        isPersonalDropdownVisible.value = true;
    } else if (menu == 'corporate') {
        isPersonalDropdownVisible.value = false;
        isBusinessDropdownVisible.value = false;

        isCorporateDropdownVisible.value = true;
    } else if (menu == 'business') {
        isPersonalDropdownVisible.value = false;
        isCorporateDropdownVisible.value = false;

        isBusinessDropdownVisible.value = true;
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

onMounted(()=>{
    showDropdown('personal')
    isPersonalDropdownVisible.value = true;
})
</script>

<template>
    <div>

        <div class="shadow-4xl absolute bottom-0 left-[-150px] translate-y-full z-50">
            <div class="flex flex-col">
                <div class="bg-black border-r border-brand-divider">
                    <a @mouseenter="showDropdown('personal')" @mouseleave="hideDropdown('personal')" href="#"
                        :class="[isPersonalDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-user text-lg undefined " translate="no"></i>
                        Personal Cover
                    </a>

                    <div v-show="isPersonalDropdownVisible" @mouseenter="showDropdown('personal')"
                        @mouseleave="hideDropdown('personal')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in personalCover.items">
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
                    <a @mouseenter="showDropdown('corporate')" @mouseleave="hideDropdown('corporate')" href="#"
                        :class="[isCorporateDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-users text-lg undefined" translate="no"></i>
                        Corporate Cover
                    </a>

                    <div v-show="isCorporateDropdownVisible" @mouseenter="showDropdown('corporate')"
                        @mouseleave="hideDropdown('corporate')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in corpCover.items">
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
                    <a @mouseenter="showDropdown('business')" @mouseleave="hideDropdown('business')" href="#"
                        :class="[isBusinessDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-black px-8 py-4 text-sm font-semibold text-white hover:text-brand-primary hover:cursor-pointer false">
                        <i class="fas fa-briefcase text-lg undefined" translate="no"></i>
                        Business Cover
                    </a>

                    <div v-show="isBusinessDropdownVisible" @mouseenter="showDropdown('business')"
                        @mouseleave="hideDropdown('business')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink :to="item.link" v-for="item in bizCover.items">
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
