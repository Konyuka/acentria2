<script setup>
import axios from 'axios';
import moment from 'moment';

const blogs = ref(null);

const formatDate = (date) => {
    return moment(date).format('lll');
}

const getUrl = (title, id) => {
    const lowerCaseTitle = title.toLowerCase();
    const cleanedTitle = lowerCaseTitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');
    const words = cleanedTitle.split(' ');
    const hyphenatedTitle = words.join('-');
    // Return the URL with the blog ID
    return `/blog/${hyphenatedTitle}-${id}`;
}

onMounted(async () => {
    try {
        const response = await axios.get('https://admin.acentriagroup.com/api/get-published-blogs', {
        });

        blogs.value = response.data
        // console.log(response.data);
    } catch (error) {
        console.error('Error making POST request:', error);
    }
})
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

                            <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">

                                <NuxtLink :to="getUrl(blog.title, blog.id)" v-for="blog in blogs"
                                    class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                    <a class="w-full" href="#">
                                        <div class="relative w-full"><img alt="" loading="lazy" width="300" height="200"
                                                decoding="async" data-nimg="1"
                                                class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                                sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                                :src="blog.cover"
                                                style="color: transparent;">
                                            <div
                                                class="className='flex absolute inset-0 flex-col items-start justify-between  rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                                            </div>
                                        </div>
                                        <div class="max-w-full">
                                            <div class="font-sans mt-8 flex items-center gap-x-2 text-xs">
                                                <time datetime="August 20, 2024"
                                                    class="text-gray-500 font-semibold">
                                                    {{ formatDate(blog.created_at) }}
                                                </time>
                                                <div class="text-gray-500">•</div>
                                                <div class="text-brand-primary font-semibold">{{ blog.categories.name }}
                                                </div>
                                            </div>
                                            <div class="font-sans group relative">
                                                <h3
                                                    class="mt-3 line-clamp-2 text-lg font-semibold leading-6 text-brand-dim transition-colors group-hover:text-brand-primary">
                                                    <span class="absolute inset-0"></span>
                                                    {{ blog.title }}
                                                </h3>
                                                <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                                    {{ blog.excerpt }}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </NuxtLink>
                            </div>

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