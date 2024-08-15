<script setup>

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


const isInsuranceDropdownVisible = ref(false);
const isActuarialDropdownVisible = ref(false);
const isITDropdownVisible = ref(false);
const isReinsuranceDropdownVisible = ref(false);


let hideTimeout = null;

const isPersonalDropdownVisible = ref(false);
const isCorporateDropdownVisible = ref(false);


const showDropdown = (menu) => {
    if (hideTimeout) {
        clearTimeout(hideTimeout);
    }
    if (menu == 'personal') {
        isCorporateDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isPersonalDropdownVisible.value = true;
    } else if (menu == 'corporate') {
        isPersonalDropdownVisible.value = false;
        isITDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isCorporateDropdownVisible.value = true;
    } else if (menu == 'it') {
        isInsuranceDropdownVisible.value = false;
        isActuarialDropdownVisible.value = false;
        isReinsuranceDropdownVisible.value = false;

        isITDropdownVisible.value = true;
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
</script>

<template>
    <div>
        <div class="shadow-4xl absolute bottom-0 left-[-150px] translate-y-full">
            <div class="flex flex-col">

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('personal')" @mouseleave="hideDropdown('personal')"
                        href="/solutions/boards-and-governance"
                        :class="[isPersonalDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-light-title hover:text-brand-primary hover:cursor-pointer false">
                        <i class="material-symbols-outlined text-lg undefined" translate="no">assured_workload</i>
                        Personal Cover
                    </a>

                    <div v-show="isPersonalDropdownVisible" @mouseenter="showDropdown('personal')"
                        @mouseleave="hideDropdown('personal')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink to="/"
                            v-for="item in personalCover.items"
                            >
                                <div
                                    class="font-sans group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary/10">
                                    <div
                                        class="text-sm font-semibold text-light-content group-hover:text-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-light-content">
                                        {{ item.description }}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <div class="border-r border-brand-divider">
                    <a @mouseenter="showDropdown('corporate')" @mouseleave="hideDropdown('corporate')"
                        href="/solutions/boards-and-governance"
                        :class="[isCorporateDropdownVisible ? '!text-brand-primary' : '']"
                        class="flex w-full flex-row items-center gap-2 whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-light-title hover:text-brand-primary hover:cursor-pointer false">
                        <i class="material-symbols-outlined text-lg undefined" translate="no">assured_workload</i>
                        Corporate Cover
                    </a>

                    <div v-show="isCorporateDropdownVisible" @mouseenter="showDropdown('corporate')"
                        @mouseleave="hideDropdown('corporate')"
                        class="shadow-4xl absolute right-0 top-0 translate-x-full">
                        <div class="flex h-auto flex-col rounded-br-xl bg-white">
                            <NuxtLink to="/"
                            v-for="item in corpCover.items"
                            >
                                <div
                                    class="font-sans group flex w-96 flex-col bg-white px-6 py-4 transition-all hover:bg-brand-primary/10">
                                    <div
                                        class="text-sm font-semibold text-light-content group-hover:text-brand-primary">
                                        {{ item.name }}
                                    </div>
                                    <div class="text-xs font-normal text-light-content">
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
