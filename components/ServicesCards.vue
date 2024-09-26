<script setup>
const services = ref([
    {
        name:'Insurance Consulting',
        image:'https://images.pexels.com/photos/5699447/pexels-photo-5699447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content:'We specialize in providing top-notch consulting services tailored to the insurance industry. With an experienced team, we offer comprehensive solutions to meet the unique needs and challenges of insurance companies, reinsurers. We provide both longterm and short-term insurance consulting services.',
    },
    {
        name:'IFRS17 Implementation',
        image:'https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content:'We strive to help insurance companies navigate the complexities of implementing the International Financial Reporting Standard 17 (Insurance Contracts). With a team of experts well-versed in accounting, actuarial science, and regulatory compliance, we offer comprehensive solutions to ensure a smooth and successful transition to this new accounting standard.',
    },
    {
        name:'Retirement and Employee benefits',
        image:'https://images.pexels.com/photos/33786/hands-walking-stick-elderly-old-person.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content:'In the realm of actuarial science, retirement and employee benefits are critical components that demand meticulous analysis and precise calculations. Actuaries play a pivotal role in designing, managing, and evaluating retirement plans and employee benefit programs to ensure their sustainability and effectiveness',
    },
    {
        name:'Reinsurance Consulting',
        image:'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content:'Our team works with clients to design reinsurance structures that fit their risk management framework. This involves designing structures that target optimal volatility transfer, while ensuring cover is placed with reinsurers who have high credit standing.',
    },
    {
        name:'Financial Services',
        image:'https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        content:'Financial services in actuarial science encompass a wide range of areas where actuarial expertise is utilized to assess and manage risk, make financial decisions, and provide valuable insights. Actuarial science plays a crucial role in managing risk and uncertainty insurance and pension industries',
    },
    {
        name:'Innovation and Digitization',
        image:'https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg?auto=compress&cs=tinysrgb&w=600',
        content:'Innovation and digitization in actuarial science have led to more agile, data-driven, and customer-focused practices. At Acentria our actuaries embrace these technological advancements and are better equipped to tackle complex challenges.',
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
                        <h1 id=""
                            class="pb-5 text-3xl font-semibold leading-tight md:pb-6 md:text-4xl xl:text-5xl xl:leading-tight text-brand-primary !pb-0 xl:!text-4xl">
                            Quality
                        </h1>
                        <h1 id=""
                            class="pb-5 text-3xl font-semibold leading-tight md:pb-6 md:text-4xl xl:text-5xl xl:leading-tight text-light-title !pb-0 xl:!text-4xl">
                            Services
                        </h1>
                    </div>
                    <div class="hidden flex-col py-4 pl-8 sm:flex md:py-6">
                        <p class="text-base leading-normal font-regular text-light-content">
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

            <article v-for="service in services" class="group flex flex-col items-start justify-between">
                <a class="w-full" href="#">
                    <div class="relative w-full"><img alt="" loading="lazy" width="300" height="200" decoding="async"
                            data-nimg="1"
                            class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                            :src="service.image"
                            style="color: transparent;">
                        <div
                            class="className='flex absolute inset-0 flex-col items-start justify-between  rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                        </div>
                    </div>
                    <div class="max-w-full">
                        
                        <div class="font-sans group relative">
                            <h3
                                class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                <span class="absolute inset-0"></span>
                                {{ service.name }}
                            </h3>
                            <p class="mt-5 text-sm leading-6 text-gray-600">
                                {{ service.content }}
                            </p>
                        </div>
                    </div>
                </a>
            </article>

        </div>



        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-0"></div>

    </main>
</template>

<style scoped></style>