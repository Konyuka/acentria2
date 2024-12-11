<script setup>
const bannerContent = ref({
    subtitle: 'What out customers are saying',
    title: 'Reviews and Testimonials',
    image: 'https://media.istockphoto.com/id/1447969085/photo/business-people-using-smartphone-and-pressing-review-popup-on-visual-screen-customer-review.jpg?s=1024x1024&w=is&k=20&c=Ghbm-TAZNrQbBoo3BBqrRbBuhvQc9bnHV3wuetp-MgM='
})

const featuredTestimonial = {
    body: 'Good customer relations and prompt response from the team, including the Managing Director',
}

const featuredTestimonial2 = {
    body: 'The options were well explained and the customer experience was excellent.',
}

const testimonials = [
    [   
        [
            {
                body: 'The proficient and readily available team at Acentria is easy to work with and they go out of their way in providing fantastic solutions',
            },
        ],
        [
            {
                body: 'Willingness to offer solutions tirelessly',
            },
        ],
    ],
    [
        [
            {
                body: 'Excellent customer service and very informative',
            },
        ],
        [
            {
                body: 'Timely response and generally incredible service',
            },
        ],
    ],
]

const testimonials2 = [
    [
        [
            {
                body: 'Wonderful experience with timely notification for policy renewals and fair premium rates',
            },
        ],
        [
            {
                body: 'Very energetic team, always ready to listen and share solutions',
            },
        ],
        
    ],
    [
        [
            {
                body: 'Follow up to ensure all risks are adequately placed and on time',
            },
        ],
        [
            {
                body: 'Phone call follow ups, facilitation of vehicle valuation, and timely delivery of documents',
            },
        ],
    ],
]

const products = [
    {
        id: 1,
        name: 'Video 1',
        href: '#',
        price: '$13',
        description: 'Ms 1',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-01.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 2,
        name: 'Video 2',
        href: '#',
        price: '$64',
        description: 'Mr 1',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-02.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 3,
        name: 'Video 3',
        href: '#',
        price: '$32',
        description: 'Ms 2',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-01-image-card-03.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    // More products...
]
</script>

<template>
    <section class="min-h-screen font-sans">

        <BannerMain :content="bannerContent" />

        <div class="relative isolate bg-white py-5">
            <div class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                aria-hidden="true">
                <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                aria-hidden="true">
                <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-6xl text-center">
                    <p class="mt-2 text-balance text-2xl font-semibold tracking-tight text-gray-900 ">
                        We have worked with thousands of amazing people
                    </p>
                </div>

                <div
                    class="mx-auto mt-5 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-xs/6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    
                    <figure
                        class="rounded-2xl p-6 bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote class="p-6 text-xs font-semibold tracking-tight text-gray-900 sm:p-12 ">
                            <p>{{ `“${featuredTestimonial.body}”` }}</p>
                        </blockquote>
                    </figure>

                    <div v-for="(columnGroup, columnGroupIdx) in testimonials" :key="columnGroupIdx"
                        class="space-y-8 xl:contents xl:space-y-0">
                        <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx"
                            :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
                            <figure v-for="testimonial in column" :key="testimonial.author.handle"
                                class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                                <blockquote class="text-gray-900">
                                    <p>{{ `“${testimonial.body}”` }}</p>
                                </blockquote>
                            </figure>
                        </div>
                    </div>
                </div>

                <div
                    class="mx-auto mt-5 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-xs/6 text-gray-900 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure
                        class="rounded-2xl p-6 bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                        <blockquote class="p-6 text-xs font-semibold tracking-tight text-gray-900 sm:p-12 ">
                            <p>{{ `“${featuredTestimonial2.body}”` }}</p>
                        </blockquote>
                    </figure>
                    
                    <div v-for="(columnGroup, columnGroupIdx) in testimonials2" :key="columnGroupIdx"
                        class="space-y-8 xl:contents xl:space-y-0">
                        <div v-for="(column, columnIdx) in columnGroup" :key="columnIdx"
                            :class="[(columnGroupIdx === 0 && columnIdx === 0) || (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1) ? 'xl:row-span-2' : 'xl:row-start-1', 'space-y-8']">
                            <figure v-for="testimonial in column" :key="testimonial.author.handle"
                                class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5">
                                <blockquote class="text-gray-900">
                                    <p>{{ `“${testimonial.body}”` }}</p>
                                </blockquote>
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- <div class="bg-white">
            <div class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">

                <div class="mx-auto max-w-6xl text-center mb-5">
                    <p class="mt-2 text-balance text-2xl font-semibold tracking-tight text-gray-900 ">
                        Hear from our clients
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                        <div
                            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                            <NuxtImg :src="product.imageSrc" :alt="product.imageAlt"
                                class="h-full w-full object-cover object-center group-hover:opacity-75" />
                        </div>
                        <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                            <h3>{{ product.name }}</h3>
                            <p>
                                <i class="fas fa-play text-2xl text-brand-primary"></i>    
                            </p>
                        </div>
                        <p class="mt-1 text-sm italic text-gray-500">{{ product.description }}</p>
                    </a>
                </div>
            </div>
        </div> -->

    </section>
</template> 

<style scoped></style>
