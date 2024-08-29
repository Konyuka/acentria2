<script setup>
const teams = ref([
    {
        name: "Moses Musau",
        title: "CEO / Managing Director",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/mose-1.jpg",
    },
    {
        name: "Evelyne Wanjohi",
        title: "General Manager",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/evelyne-1.jpg",
    },
    {
        name: "CPA Winnie Chitai",
        title: "Head of Finance",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/winnie-1.jpg",
    },
    {
        name: "Maureen Wakini",
        title: "Head of People & Culture",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/maureen-1.jpg",
    },
    {
        name: "Symon Gatimu",
        title: "Head of Reinsurance Business",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/symon-1.jpg",
    },
    {
        name: "Donald Were",
        title: "Actuarial & Financial Services",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/donald-1.jpg",
    },
    {
        name: "Kelvin Mwangi",
        title: "Head of Direct Broking Business",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/kelvin-1.jpg",
    },
    {
        name: "Fiona Kinyanjui",
        title: "Marketing & Branding Manager",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/fiona-1.jpg",
    },
    {
        name: "Andrew Mwangi",
        title: "Finance & Credit Control Manager",
        image:
            "https://acentriagroup.com/wp-content/uploads/2024/02/andrew-1.jpg",
    },
],)

</script>

<template>
    <div class="container px-4 py-10">
        <div class="text-center">
            <h2 id=""
                class="font-sans text-2xl pb-4 md:pb-5 font-semibold md:text-3xl xl:text-3xl 2xl:text-4xl leading-tight text-brand-primary pb-4 sm:pb-4 md:!pb-4 lg:!pb-6 xl:!text-4xl 2xl:!text-4xl">
                <span class="text-light-title pb-4 sm:pb-4 md:!pb-4 lg:!pb-6 xl:text-4xl 2xl:text-4xl">Acentria's</span>
                Leadership
            </h2>
        </div>
        <div class="container mx-auto grid grid-cols-1 gap-5 text-center md:grid-cols-3 lg:grid-cols-4">

            <div v-for="member in teams" class="flex shadow-xl button-animation">
                <div class="w-full cursor-pointer rounded-xl bg-white">
                    <img alt="Brian Stafford" loading="lazy" width="400" height="400" decoding="async" data-nimg="1"
                        class="p-5 min-h-[150px] w-full rounded-t-xl object-cover md:min-h-[247px]"
                        style="color: transparent" :src="member.image" />
                    <div class="font-sans flex max-h-[200px] flex-col items-center p-4">
                        <span class="text-xl font-bold text-light-title">
                            {{ member.name }}
                        </span>
                        <span class="mb-4 flex-grow text-base text-light-content">
                            {{ member.title }}
                        </span>
                        <span class="font-bold text-brand-primary">
                            Read Bio
                        </span>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped></style>