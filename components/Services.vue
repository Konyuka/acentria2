<template>
    <div class="grid grid-cols-5 gap-3">
        <HighlightCard :item="feature" v-for="feature in features" :key="feature.name" />
    </div>
</template>

<script setup>
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
        url: '/lines-of-business',
    },
    {
        icon: 'fas fa-money-bill-wave-sign',
        title: 'Investment',
        description: 'Protecting Your Assets, Empowering Your Future',
        url: '/acentria-group-investment',
    },

]
</script>