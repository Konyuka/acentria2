<script setup>
const blogs = ref([
    {
        title: 'The Future of Reinsurance: Trends and Opportunities',
        excerpt: 'Discover the emerging trends and opportunities in the reinsurance industry that are shaping the future. From digital transformation to innovative risk management strategies, this blog explores what’s ahead for insurers and reinsurers alike.'
    },
    {
        title: 'Navigating the Complexities of Aviation Insurance',
        excerpt: 'Aviation insurance is a critical component of the aerospace industry, but it comes with its own set of challenges. This article delves into the complexities of aviation insurance and how companies can effectively manage risks in this high-stakes sector.'
    },
    {
        title: 'Actuarial Science: The Backbone of Financial Stability',
        excerpt: 'Actuarial science plays a pivotal role in ensuring financial stability across industries. Learn about the latest advancements in actuarial methods and how they are helping businesses make data-driven decisions to mitigate risk and enhance profitability.'
    },
    {
        title: 'The Role of Technology in Modern Insurance Broking',
        excerpt: 'As technology continues to evolve, it is transforming the insurance broking industry. This blog examines the impact of technological advancements on broking services, including the rise of digital platforms and data analytics in streamlining operations and improving client outcomes.'
    },
    {
        title: 'ESG in Financial Services: A Pathway to Sustainable Growth',
        excerpt: 'Environmental, Social, and Governance (ESG) factors are increasingly influencing business decisions. This post explores how financial services firms are integrating ESG into their strategies to achieve sustainable growth and meet the demands of socially-conscious investors.'
    }
]);


</script>

<template>
    <div id="__next">
        <main class="jsx-2839774277 __className_e3c363 __ptNoRemap font-sans">
            <main>
                <div class="flex w-full flex-row px-4 py-4 md:px-16 md:pb-6 md:pt-16">
                    <div class="container mx-auto flex h-full justify-center gap-0 md:gap-6 md:pb-0">
                        <div class="flex cursor-default flex-col md:flex-row">
                            <div
                                class="font-sans border-brand-light-content flex flex-row items-center justify-center gap-2 border-none py-2 md:border-r-2 md:border-solid border-brand-primary md:py-6 md:pr-8">
                                <h1 id=""
                                    class="pb-5 text-3xl font-semibold leading-tight md:pb-6 md:text-4xl xl:text-5xl xl:leading-tight text-brand-primary !pb-0 xl:!text-4xl">
                                    Acentria's
                                </h1>
                                <h1 id=""
                                    class="pb-5 text-3xl font-semibold leading-tight md:pb-6 md:text-4xl xl:text-5xl xl:leading-tight text-light-title !pb-0 xl:!text-4xl">
                                    Newsroom
                                </h1>
                            </div>
                            <div class="hidden flex-col py-4 pl-8 sm:flex md:py-6">
                                <p class="font-sans text-base leading-normal font-regular text-light-content">
                                    Stay informed on the latest developments and trends shaping the world of risk,
                                    insurance, and financial services. Explore our resources and insights, covering
                                    everything from reinsurance strategies and aviation insurance to actuarial analysis
                                    and innovative IT solutions for the public and private sectors.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white px-4 py-3 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
                    <div class="container mx-auto pb-4 lg:pb-16">
                        <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

                            <article v-for="blog in blogs" class="font-sans relative isolate !mt-8 lg:!mt-10">
                                <div class="w-full">
                                    <div class="flex items-center gap-x-2 pb-3"><span class="text-light-content ">August
                                            6, 2024</span></div>
                                    <div class="group relative">
                                        <h3 id=""
                                            class="text-xl pb-4 md:pb-5 font-semibold md:text-2xl xl:text-2xl 2xl:text-3xl leading-tight text-light-title !pb-0 !text-xl">
                                            <a href="#">
                                                {{ blog.title }}
                                            </a>
                                        </h3>
                                        <p class="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                                            {{ blog.excerpt }}
                                        </p>
                                    </div>
                                    <div class="mt-6 flex border-t border-gray-900/5 pt-3">
                                        <div class="relative flex w-full items-center gap-x-4">
                                            <div class="flex w-full flex-row justify-between">
                                                <div>
                                                    <div
                                                        class="undefined flex-row text-brand-primary hover:text-brand-red-2 active:text-brand-red-3 group flex items-center font-semibold transition duration-300 w-fit text-base">
                                                        <a href="/company/newsroom/diligent-announces-elevate-2024"
                                                            class="">Continue reading</a><i
                                                            class="material-symbols-outlined text-brand-primary text-2xl group-hover:text-brand-red-2 px-1 transition duration-300 group-hover:translate-x-1"
                                                            translate="no">chevron_right</i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>


                        </div>
                    </div>
                </div>

                <div class="flex flex-row px-4 py-3 md:px-16 md:pb-4 md:pt-8 lg:pb-6 lg:pt-10">
                    <div class="container mx-auto flex h-full flex-col-reverse gap-6 pb-4 lg:flex-row lg:pb-16">
                        <nav
                            class="flex w-full items-center justify-center gap-24 border-t border-gray-200 px-4 pb-8 sm:px-0">
                            <div class="-mt-px flex w-0 flex-1"></div>
                            <div class="hidden lg:-mt-px lg:flex">
                                <button
                                    class="border-brand-primary text-brand-primary inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium">
                                    1</button><button
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    2</button><button
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    3</button><span
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span><button
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    42</button><button
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    43</button><button
                                    class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                                    44
                                </button>
                            </div>
                            <div class="-mt-px flex w-0 flex-1 justify-end">
                                <a
                                    class="inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Next<i
                                        class="material-symbols-outlined text-dark-icon text-2xl undefined"
                                        translate="no">chevron_right</i></a>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </main>
    </div>
</template>

<style scoped></style>