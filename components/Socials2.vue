<template>
    <div class="container relative mx-auto">
        <div>
            <dl
                class="mx-auto mt-5 grid gap-2 text-black grid-cols-5">
                <a :href="feature.link" target="_blank" v-for="(feature, index) in socials" :key="index" class="hover:shadow-2xl rounded-md p-3 button-primary flex flex-col">
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
        link:'https://www.linkedin.com/company/acentria-groupltd',
    },
    {
        icon: 'fab fa-x-twitter',
        title: 'X / Twitter',
        description: '@acentriagroup',
        link:'https://x.com/acentriagroup?lang=en'
    },
    {
        icon: 'fab fa-facebook',
        title: 'Facebook',
        description: '@acentriagroup',
        link:'https://www.facebook.com/Acentriagroup'
    },
    {
        icon: 'fab fa-instagram',
        title: 'Instagram',
        description: '@acentriagroup',
        link:'https://www.instagram.com/acentriagroup/'
    },
    {
        icon: 'fab fa-tiktok',
        title: 'Tiktok',
        description: '@acentria.group',
        link:'https://www.tiktok.com/@acentria.group'
    },
]
)


</script>