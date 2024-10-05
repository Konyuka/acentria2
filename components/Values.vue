<template>
    <div>
        <ul role="list" class="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
            <li v-for="project in projects" :key="project.name" class="col-span-1 flex rounded-md shadow-sm">
                <div
                    :class="['bg-brand-primary flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white']">
                    <i class="fas fa-user"></i>
                </div>
                <div
                    class="flex  items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                    <div class=" truncate px-4 py-2 text-sm">
                        <a :href="project.href" class="font-medium text-gray-900 hover:text-gray-600">{{ project.name
                            }}
                        </a>
                        <p class="text-gray-500">{{ project.members }} Members</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
// import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

const projects = [
    {
        name: 'Integrity', initials: 'GA', href: '#',
        members: 'We do the right thing, through honoring our commitments to our clients.', bgColor: 'bg-pink-600'
    },
    {
        name: 'Excellence', initials: 'CD', href: '#',
        members: 'We strive to deliver the highest levels of service and product excellence.', bgColor: 'bg-purple-600'
    },
    {
        name: 'Innovative', initials: 'T', href: '#',
        members: 'Acentria Group seek to use unique and creative solutions in solving problems affecting our clients.', bgColor: 'bg-yellow-500'
    },
    {
        name: 'Teamwork', initials: 'RC', href: '#',
        members: 'Acentria Group continuously promote team spirit among its staff and stakeholders to attain its goals.', bgColor: 'bg-green-500'
    },
    {
        name: 'Relationships', initials: 'RC', href: '#',
        members: 'We value the relationships built with our clients and partners.', bgColor: 'bg-green-500'
    },
    {
        name: 'Growth &amp; Prosperity', initials: 'RC', href: '#',
        members: 'We embrace opportunities to learn and improve.', bgColor: 'bg-green-500'
    },
]
</script>