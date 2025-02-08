<template>
    <div class=" relative isolate overflow-hidden bg-black/5 py-5 font-sans">
        <NuxtImg format="webp"  src="/img/tornado.png"
            alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />

        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="container relative mx-auto max-w-6xl px-6 lg:px-8">
        
            <div>
                <!-- <div class="container mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <p class="mt-2 text-pretty text-3xl font-semibold tracking-tight text-white">
                        Contact us on:
                    </p>
                </div> -->
                <dl
                    class="pl-10 mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-4 text-white sm:grid-cols-2  lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div v-for="(feature, index) in contacts" :key="feature.name" class="flex flex-col">
                        <dt class="subsection-heading text-white">
                            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                <i :class="feature.icon" class=" text-white" aria-hidden="true" />
                            </div>
                            {{ feature.title }}
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-[14px] leading-normal text-white">
                            <p class="flex-auto" v-html="feature.description"></p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>

const contacts = ref([
    {
        icon: 'fas fa-shield-alt',
        title: 'Email Address',
        description: 'info@acentriagroup.com <br> support@acentriagroup.com',
    },
    {
        icon: 'fas fa-shield-virus',
        title: 'Phone number',
        description: '+254 705 200 222 <br> +254 705 200 222',
    },
    {
        icon: 'fas fa-laptop-code',
        title: 'WhatsApp',
        description: '+254 705 200 222 <br> +254 705 200 222',
    },
    {
        icon: 'fas fa-calculator',
        title: 'Box Office',
        description: 'P.O Box 5864-00100 <br> Nairobi, Kenya',
    },
]
)
</script>