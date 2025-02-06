<script setup>
import axios from 'axios';
import moment from 'moment';

const blogs = ref(null);
const currentMenu = ref('blogs');

const formatDate = (date) => {
    return moment(date).format('lll');
}

const bannerContent = ref({
    subtitle: 'News & Updates',
    title: 'Acentria\'s Newsroom',
    image: 'img/NEWS MAIN PAGE.jpg UPDATED.jpg'
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

const loadTwitterWidgets = () => {
    const script = document.createElement('script');
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);
};

onMounted(async () => { 
    loadTwitterWidgets();
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
    <div class="font-sans bg-white">
        <BannerMain :content="bannerContent" />

        <div class="container py-5 font-sans text-black">
            <p class="section-heading pb-5">
                News & <span class="text-brand-primary">Updates</span>
            </p>
          
            <p class="content">
                Welcome to the Acentria Group News & Updates and Blogs page. Here, you will find the latest news,
                insightful articles, and updates about our company, industry trends, and more. Our goal is to keep
                you informed and engaged with valuable content that highlights our commitment to excellence,
                innovation, and customer satisfaction. Whether you are looking for the latest company announcements,
                expert opinions, or in-depth analyses, our blogs and news sections are designed to provide you with
                the information you need. Stay connected with Acentria Group and explore the wealth of knowledge and
                insights we have to offer.
            </p>
        </div>

        <div class="container bg-white">
            <div class="sm:hidden px-4">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select @change="setMobileMenu($event)" id="tabs" name="tabs"
                    class="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary py-2 font-semibold">
                    <option selected value="blogs">Latest News</option>
                    <option value="event">News Feeds</option>
                    <option value="media">Media Kit</option>
                </select>
            </div>
            <div class="hidden sm:block font-sans">
                <div class="divide-x divide-gray-200">
                    <nav class="-mb-px flex font-sans gap-20" aria-label="Tabs">
                        <button @click="setMenu('blogs')"
                            :class="[currentMenu == 'blogs' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4 px-1 py-4 text-center card-heading hover:text-brand-primary">
                            <i class="fas fa-images mr-2"></i> Latest News
                        </button>
                        <button @click="setMenu('event')"
                            :class="[currentMenu == 'event' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4 px-1 py-4 text-center card-heading hover:text-brand-primary">
                            <i class="fas fa-blog mr-2"></i> News Feeds
                        </button>
                        <button @click="setMenu('media')"
                            :class="[currentMenu == 'media' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                            class="w-1/4 px-1 py-4 text-center card-heading hover:text-brand-primary">
                            <i class="fas fa-calendar-alt mr-2"></i> Media Kit
                        </button>
                    </nav>
                </div>
            </div>
        </div>

        <div class="bg-white px-4 py-1 md:px-16 md:pt-0">
            <div class="container mx-auto pb-4 lg:pb-16">
                <div class="mt-5 space-y-5">
                    <div v-if="currentMenu == 'blogs'"
                        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-3">
                        <NuxtLink :to="getUrl(blog.title, blog.id)" v-for="blog in blogs"
                            class="button-animation rounded-xl p-3 shadow-2xl group flex flex-col items-start justify-between">
                            <a class="w-full" href="#">
                                <div class="relative w-full">
                                    <NuxtImg alt="" loading="lazy" width="300" height="200" decoding="async"
                                        data-nimg="1"
                                        class="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover transition-all sm:aspect-[2/1] lg:aspect-[3/2]"
                                        sizes="(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 500px"
                                        :src="blog.cover" style="color: transparent;" />
                                    <div
                                        class="absolute inset-0 flex flex-col items-start justify-between rounded-lg ring-1 ring-inset ring-gray-900/10 transition-all">
                                    </div>
                                </div>
                                <div class="max-w-full">
                                    <div class="font-sans mt-8 flex justify-between gap-x-2 text-xs">
                                        <div class="text-brand-primary font-semibold">{{ blog.categories.name }}</div>
                                        <time datetime="August 20, 2024" class="text-gray-500 text-[12px]">
                                            {{ formatDate(blog.created_at) }}
                                        </time>
                                    </div>
                                    <div class="font-sans group relative">
                                        <h3
                                            class="mt-3 line-clamp-1 card-heading group-hover:text-brand-primary">
                                            <span class="absolute inset-0"></span>
                                            {{ blog.title }}
                                        </h3>
                                        <p class="mt-2 line-clamp-3 content">
                                            {{ blog.excerpt }}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </NuxtLink>
                    </div>

                    <div v-if="currentMenu == 'event'"
                        class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-3">
                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-instagram"></i> Instagram Feeds
                            </h2>
                            <iframe src="https://www.instagram.com/p/DBViY-to-Ea/embed" class="flex-1 w-full"
                                height="100%" frameborder="0" allowtransparency="true" allowfullscreen="true"
                                title="Instagram Post"></iframe>
                        </div>

                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-facebook"></i> Facebook Feeds
                            </h2>
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAcentriagroup%2F&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=993383061651806"
                                class="flex-1 w-full" height="100%" frameborder="0" allowfullscreen="true"
                                title="Facebook Post"></iframe>
                        </div>

                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-x-twitter"></i> Twitter/X Feeds
                            </h2>
                            <iframe src="https://twitter.com/acentriagroup?ref_src=twsrc%5Etfw" class="flex-1 w-full"
                                height="100%" frameborder="0" allowfullscreen="true" title="Twitter Post"></iframe>
                        </div>

                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-linkedin"></i> LinkedIn Feeds
                            </h2>
                            <iframe src="https://www.linkedin.com/company/acentria-groupltd/embed" class="flex-1 w-full"
                                height="100%" frameborder="0" allowfullscreen="true" title="LinkedIn Post"></iframe>
                        </div>

                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-tiktok"></i> Tiktok Feeds
                            </h2>
                            <iframe src="https://www.linkedin.com/company/acentria-groupltd/embed" class="flex-1 w-full"
                                height="100%" frameborder="0" allowfullscreen="true" title="LinkedIn Post"></iframe>
                        </div>

                        <div class="h-[50vh]">
                            <h2 class="text-lg font-semibold leading-6 text-gray-900" id="slide-over-title">
                                <i class="fab fa-youtube"></i> Youtube Feeds
                            </h2>
                            <iframe src="https://www.linkedin.com/company/acentria-groupltd/embed" class="flex-1 w-full"
                                height="100%" frameborder="0" allowfullscreen="true" title="LinkedIn Post"></iframe>
                        </div>
                    </div>

                    <div v-if="currentMenu == 'media'">
                        <Gallery />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white flex flex-row px-4 py-3 md:px-16 md:pb-4 md:pt-8 lg:pt-10">
            <div class="container mx-auto flex h-full flex-col-reverse gap-6 pb-4 lg:flex-row lg:pb-6">
                <nav class="flex w-full items-center justify-center gap-24 border-t border-gray-200 px-4 pb-8 sm:px-0">
                    <div class="-mt-px flex w-0 flex-1"></div>
                    <div class="hidden lg:-mt-px lg:flex">
                        <button
                            class="border-brand-primary text-brand-primary inline-flex items-center border-t-2 px-4 pt-4 text-sm font-semibold">
                            1</button><button
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            2</button><button
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            3</button><span
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500">...</span><button
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            42</button><button
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            43</button><button
                            class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            44
                        </button>
                    </div>
                    <div class="-mt-px flex w-0 flex-1 justify-end">
                        <a
                            class="inline-flex cursor-pointer items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-semibold text-gray-500 hover:border-gray-300 hover:text-gray-700">
                            Next
                            <i class="fas fa-chevron-right text-dark-icon text-md"></i>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>


<style scoped></style>