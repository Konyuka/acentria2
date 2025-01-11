<template>
    <div class="container relative mx-auto max-w-6xl">

        <div>
            <dl
                class="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-2 text-black sm:grid-cols-2  lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <a href="#" v-for="(feature, index) in socials" :key="feature.name" class="hover:shadow-2xl rounded-md p-3 button-primary flex flex-col">
                    <dt class="subheading-class text-black flex gap-3">
                        <div class="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary">
                            <i :class="feature.icon" class=" text-white" aria-hidden="true" />
                        </div>
                        <div>
                            {{ feature.title }}
                            <dd class="mt-1 flex flex-auto flex-col text-[13px]  text-black">
                                <p class="flex-auto" v-html="feature.description"></p>
                            </dd>
                        </div>
                    </dt>
                </a>
            </dl>
        </div>
    </div>
</template>

<script setup>
const socials = ref([
    {
        icon: 'fab fa-linkedin',
        title: 'Linkedin',
        description: '@acentria-groupltd',
    },
    {
        icon: 'fab fa-x-twitter',
        title: 'X / Twitter',
        description: '@acentriagroup',
    },
    {
        icon: 'fab fa-facebook',
        title: 'Facebook',
        description: '@acentriagroup',
    },
    {
        icon: 'fab fa-instagram',
        title: 'Instagram',
        description: '@acentriagroup',
    },
    {
        icon: 'fab fa-tiktok',
        title: 'Tiktok',
        description: '@acentria.group',
    },
]
)

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