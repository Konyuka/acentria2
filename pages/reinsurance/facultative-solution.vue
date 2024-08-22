<script setup>
import { ref } from "vue";

const ReinsuranceBannerContent = ref({
    title: 'Facultative Solutions',
    image: 'https://images.pexels.com/photos/262438/pexels-photo-262438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Best of Our Facultative Solutions',
    image: 'https://images.pexels.com/photos/957312/chess-checkmated-chess-pieces-black-white-957312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'We assist our clients in increasing their risk capacity by offering alternative and innovative channels for individual risks where treaty capacities are limited. The facultative arrangement is both under proportional and non-proportional forms. Risks under this arrangement are placed with well-rated securities and take into consideration the risk appetite and profile of both the ceding and the securing companies.',
})

</script>

<template>

    <div>

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />
        <ReinsuranceWhy />
        <ContactForm />
    </div>



</template>
