<template>
    <div class="bg-black/40 p-5 font-sans rounded-lg">
        <div class="container mx-auto max-w-6xl px-4">
            <div class="mx-auto mt-1 max-w-2xl lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-10 lg:max-w-none lg:grid-cols-5">
                    <div v-for="feature in features" :key="feature.name"
                        class="flex flex-col border-b-2 py-4 border-white">
                        <dt class="text-md font-semibold text-white">
                            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary">
                                <i :class="feature.icon" class="text-white" aria-hidden="true"></i>
                            </div>
                            {{ feature.title }}
                        </dt>
                        <dd class="mt-1 flex flex-auto flex-col text-xs text-white">
                            <p class="flex-auto text-[12px]">{{ feature.description }}</p>
                            <p class="mt-1">
                                <NuxtLink :to="feature.url"
                                    class="transform transition hover:!scale-90 duration-700 text-sm font-semibold leading-6 text-brand-primary">
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
        url: '/lines-of-business',
    },
    {
        icon: 'fas fa-shield-virus', 
        title: 'Reinsurance',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/lines-of-business',
    },
    {
        icon: 'fas fa-calculator', 
        title: 'Actuarial',
        description: 'Empowering Decisions, Simplifying Complexity',
        url: '/lines-of-business',
    },
    {
        icon: 'fas fa-laptop-code', 
        title: 'Technology',
        description: 'Building prosperity, Securing Futures',
        url: '/lines-of-business',
    },
    {
        icon: 'fas fa-dollar-sign', 
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/lines-of-business',
    },

]
</script>