<template>
    <div class="bg-black/85 py-10 font-sans">
        <div class="mx-auto max-w-6xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:mx-0">
                <h2 class="text-pretty text-3xl font-semibold tracking-tight text-white">
                    Our Lines of Business
                </h2>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-5">
                    <div v-for="feature in features" :key="feature.name" class="flex flex-col border-r-2">
                        <dt class="text-base font-semibold leading-7 text-white">
                            <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                <i :class="feature.icon" class=" text-white" aria-hidden="true" />
                            </div>
                            {{ feature.title }}
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-xs leading-7 text-gray-300">
                            <p class="flex-auto">{{ feature.description }}</p> 
                            <p class="mt-2">
                                <NuxtLink :to="feature.url" class="transform transition hover:!scale-90 duration-700 text-sm font-semibold leading-6 text-brand-primary">
                                    Learn more <span aria-hidden="true">→</span>
                                </NuxtLink>
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/outline'

const features = [
    {
        icon: 'fas fa-shield-alt', 
        title: 'Insurance',
        description: 'Mitigating Risks, Maximizing Opportunities',
        url: '/acentria-group-insurance',
    },
    {
        icon: 'fas fa-shield-virus', 
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-reinsurance',
    },
    {
        icon: 'fas fa-calculator', 
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/acentria-group-actuarial',
    },
    {
        icon: 'fas fa-laptop-code', 
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/contact-acentria-group',
    },
    {
        icon: 'fas fa-dollar-sign', 
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
    },

]
</script>