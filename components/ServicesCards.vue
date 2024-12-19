<script setup>
const services = ref([
    {
        name: 'Financial <span class="text-brand-primary">Services</span>',
        icon: 'fas fa-chart-line',
        content: 'Financial services in actuarial science encompass a wide range of areas where actuarial expertise is utilized to assess and manage risk, make financial decisions, and provide valuable insights.',
    },
    
    {
        name: 'IFRS17 <span class="text-brand-primary">Implementation</span>',
        icon: 'fas fa-file-invoice-dollar',
        content: 'We strive to help insurance companies navigate the complexities of implementing the International Financial Reporting Standard 17 (Insurance Contracts).',
    },
    {
        name: 'Retirement <span class="text-brand-primary">Employee benefits</span>',
        icon: 'fas fa-user-clock',
        content: 'In the realm of actuarial science, retirement and employee benefits are critical components that demand meticulous analysis and precise calculations.',
    },
    {
        name: 'Insurance <span class="text-brand-primary">Consulting</span>',
        icon: 'fas fa-handshake',
        content: 'We specialize in providing top-notch consulting services tailored to the insurance industry.',
    },
    {
        name: 'Reinsurance <span class="text-brand-primary">Consulting</span>',
        icon: 'fas fa-sync-alt',
        content: 'Our team works with clients to design reinsurance structures that fit their risk management framework.',
    },
    
    {
        name: 'Innovation &<span class="text-brand-primary"> Digitization</span>',
        icon: 'fas fa-lightbulb',
        content: 'Innovation and digitization in actuarial science have led to more agile, data-driven, and customer-focused practices.',
    },
])

</script>

<template>
    <main>
        <div class="flex w-full flex-row px-4 py-4 md:px-16 md:pb-6">
            <div class="container mx-auto flex h-full justify-center gap-0 md:gap-6 md:pb-0">
                <div class="font-sans flex cursor-default flex-col md:flex-row">
                    <div
                        class="border-brand-light-content flex flex-row items-center justify-center gap-2 border-none py-2 md:border-r-2 md:border-solid md:py-6 md:pr-8">
                        <h1 id="" class="pb-5 heading-class md:pb-6  leading-normal text-brand-primary">
                            Quality
                        </h1>
                        <h1 id="" class="pb-5 heading-class md:pb-6  leading-normal text-black">
                            Services
                        </h1>
                    </div>
                    <div class="hidden flex-col py-4 pl-8 sm:flex md:py-6">
                        <p class="text-xs leading-normal text-light-content">
                            Stay ahead of the news and trends impacting GRC for leaders,
                            organizations and the public sector. Find resources and
                            insights covering everything from governance best practices
                            to ESG to strategic risk, compliance and audit management.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">

            <a href="#" v-for="item in services"
                class="relative flex flex-row gap-2 border-2 border-gray-200 p-5 rounded-lg">
                <i :class="item.icon" class="text-4xl text-brand-primary mr-2"></i>
                <div class="relative">
                    <div class="flex justify-between w-full">
                        <h5 v-html="item.name" class="text-md pb-1 font-semibold leading-tight text-black"></h5>
                    </div>
                    <p class="leading-normal font-regular text-black text-[14px]">
                        {{ item.content }}
                    </p>
                    <i class="absolute fas fa-arrow-right text-md right-0 top-1"></i>
                </div>
            </a>

        </div>



        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-0"></div>

    </main>
</template>

<style scoped></style>