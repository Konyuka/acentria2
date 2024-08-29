<script setup>
import axios from 'axios';

const config = useRuntimeConfig()
const route = useRoute();
const blog = ref(null);

onMounted(async () => {
    const slug = route.params.slug;
    try {
        const url = `${config.public.API_BASE_URL}/blog/${slug}`
        const response = await axios.get(url);
        console.log(response)
        blog.value = response.data;
    } catch (error) {
        console.error(error);
    }
});
</script>

<template>
    <div v-if="blog">

        <div>

            <div class="bg-white">
                <div aria-hidden="true" class="relative">
                    <img :src="blog.cover" alt="" class="h-[50vh] w-full object-cover object-center">
                    <div class="absolute inset-0 bg-gradient-to-t from-white"></div>
                </div>

                <div class="font-sans relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    <div class="mx-auto max-w-6xl text-center">
                        <p class=" font-semibold mb-4 text-2xl capitalize text-brand-primary">{{ blog.categories.name }}</p>
                        <h2 class=" text-4xl font-bold tracking-tight text-primary sm:text-4xl capitalize">
                            {{ blog.title }}
                        </h2>
                    </div>

                </div>
            </div>


            <div class="bg-white mb-20">
                <div class="mx-auto max-w-6xl px-4 py-2 sm:py-2 lg:max-w-8xl">

                    <div class="bg-white px-6">
                        <div class="flex content-center mx-auto max-w-6xl text-base leading-7 text-gray-700">
                            <div class="mt-2 max-w-5xl font-sans" v-html="blog.content">
                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>

    </div>
</template>

<style scoped></style>