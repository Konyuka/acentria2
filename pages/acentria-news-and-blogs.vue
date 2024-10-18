<script setup>
import axios from 'axios';
import moment from 'moment';

const blogs = ref(null);
const currentMenu = ref('blogs');

const formatDate = (date) => {
    return moment(date).format('lll');
}

const ReinsuranceBannerContent = ref({
    title: 'Acentria\'s Newsroom',
    image: 'https://www.shutterstock.com/shutterstock/photos/1023861067/display_1500/stock-photo-morning-cup-of-coffee-warm-coffee-and-morning-news-concept-on-a-wooden-textured-table-1023861067.jpg',
})

const getUrl = (title, id) => {
    const lowerCaseTitle = title.toLowerCase();
    const cleanedTitle = lowerCaseTitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'"]/g, '');
    const words = cleanedTitle.split(' ');
    const hyphenatedTitle = words.join('-');
    // Return the URL with the blog ID
    return `/blog/${hyphenatedTitle}-${id}`;
}

const setMenu = (menu) => {
    currentMenu.value = menu
}

const setMobileMenu = (event) => {
    const selectedValue = event.target.value;
    currentMenu.value = selectedValue
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
    <div class="relative isolate overflow-hidden bg-white py-10 mt-40">
        <img :src="ReinsuranceBannerContent.image" alt="Success Team Hands Up"
            class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

        <div class="absolute inset-0 bg-black opacity-40"></div>

        <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
            <div class="grid grid-cols-10 -gap-10">
                <div class="text-white col-span-1">
                    <div class="w-20 h-1 bg-white mt-3">

                    </div>
                </div>
                <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                    <h2 class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                        News & Updates
                    </h2>
                    <h2 class="text-left text-3xl font-bold tracking-tight text-white font-sans">
                        {{ ReinsuranceBannerContent.title }}
                    </h2>
                    <p class="text-white text-left max-w-2xl mt-7 text-xs">
                        Stay informed on the latest developments and trends shaping the world of risk, insurance, and
                        financial services. Explore our resources and insights, covering everything from reinsurance
                        strategies and aviation insurance to actuarial analysis and innovative IT solutions for the
                        public and private sectors.

                    </p>
                </div>
            </div>
        </div>

    </div>
    <main class="font-sans mt-5">
        <main>

            <!-- <div class="flex w-full flex-row px-4 py-4 md:px-16 md:pb-6">
                <div class="container mx-auto flex h-full justify-center gap-0 md:gap-6 md:pb-0">
                    <div class="flex cursor-default flex-col md:flex-row">
                        <div
                            class="font-sans border-brand-light-content flex flex-row items-center justify-center gap-2 border-none py-2 md:border-r-2 md:border-solid border-brand-primary md:py-6 md:pr-8">
                            <h1 id=""
                                class="text-3xl font-semibold leading-tight md:pb-6 md:text-3xl xl:leading-tight text-brand-primary !pb-0">
                                Acentria's
                            </h1>
                            <h1 id=""
                                class="text-3xl font-semibold leading-tight md:pb-6 md:text-3xl xl:leading-tight text-light-title !pb-0">
                                Newsroom
                            </h1>
                        </div>
                        <div class="hidden flex-col py-4 pl-8 sm:flex md:py-6">
                            <p class="font-sans text-xs leading-normal font-regular text-light-content">
                                Stay informed on the latest developments and trends shaping the world of risk,
                                insurance, and financial services. Explore our resources and insights, covering
                                everything from reinsurance strategies and aviation insurance to actuarial analysis
                                and innovative IT solutions for the public and private sectors.
                            </p>
                        </div>
                    </div>
                </div>
            </div> -->


            <div class="max-w-6xl mx-auto">
                <div class="sm:hidden px-4">
                    <label for="tabs" class="sr-only">Select a tab</label>
                    <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
                    <select @change="setMobileMenu($event)" id="tabs" name="tabs"
                        class="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary py-2 font-bold">
                        <option selected value="blogs">Blogs</option>
                        <option value="event">Events</option>
                        <option value="media">Media</option>
                    </select>
                </div>
                <div class="hidden sm:block font-sans">
                    <div class="border-2 divide-x divide-gray-200 border-gray-200">
                        <nav class="-mb-px flex font-sans" aria-label="Tabs">
                            <button @click="setMenu('blogs')"
                                :class="[currentMenu == 'blogs' ? 'bg-brand-primary text-white' : 'border-transparent text-gray-500']"
                                class="w-1/3 border-2  px-1 py-4 text-center text-md font-semibold  hover:border-red-600 hover:text-black">
                                <i class="fas fa-blog mr-2"></i> Blogs
                            </button>
                            <button @click="setMenu('event')"
                                :class="[currentMenu == 'event' ? 'bg-brand-primary text-white' : 'border-transparent text-gray-500']"
                                class="w-1/3 border-2 px-1 py-4 text-center text-md font-semibold hover:border-red-600 hover:text-black">
                                <i class="fas fa-calendar-alt mr-2"></i> Events
                            </button>
                            <button @click="setMenu('media')"
                                :class="[currentMenu == 'media' ? 'bg-brand-primary text-white' : 'border-transparent text-gray-500']"
                                class="w-1/3 border-2 px-1 py-4 text-center text-md font-semibold hover:border-red-600 hover:text-black">
                                <i class="fas fa-images mr-2"></i> Media
                            </button>
                        </nav>
                    </div>
                </div>
            </div>


            <div class="bg-white px-4 py-1 md:px-16 md:pb-4 md:pt-0 lg:pb-6">
                <div class="container mx-auto pb-4 lg:pb-16">
                    <div class="mt-5 space-y-5">

                        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-3">

                            <NuxtLink :to="getUrl(blog.title, blog.id)" v-for="blog in blogs"
                                class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                                <a class="w-full" href="#">
                                    <div class="relative w-full"><img alt="" loading="lazy" width="300" height="200"
                                            decoding="async" data-nimg="1"
                                            class="false undefined aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                            sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                            :src="blog.cover" style="color: transparent;">
                                        <div
                                            class="className='flex absolute inset-0 flex-col items-start justify-between  rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                                        </div>
                                    </div>
                                    <div class="max-w-full">
                                        <div class="font-sans mt-8 flex items-center gap-x-2 text-xs">
                                            <time datetime="August 20, 2024" class="text-gray-500 font-semibold">
                                                {{ formatDate(blog.created_at) }}
                                            </time>
                                            <div class="text-gray-500">•</div>
                                            <div class="text-brand-primary font-semibold">{{ blog.categories.name }}
                                            </div>
                                        </div>
                                        <div class="font-sans group relative">
                                            <h3
                                                class="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-black transition-colors group-hover:text-brand-primary">
                                                <span class="absolute inset-0"></span>
                                                {{ blog.title }}
                                            </h3>
                                            <p class="mt-2 line-clamp-3 text-xs leading-6 text-gray-600">
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

            <div class="flex flex-row px-4 py-3 md:px-16 md:pb-4 md:pt-8 lg:pt-10">
                <div class="container mx-auto flex h-full flex-col-reverse gap-6 pb-4 lg:flex-row lg:pb-6">
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
</template>

<style scoped></style>