<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Corporate Governance',
    image: 'https://img.freepik.com/free-photo/people-office-work-day_23-2150690130.jpg?t=st=1728396028~exp=1728399628~hmac=de0c3ce074f833a8874a6a27f73b5fa3de52dbc1c5d68dc05ff476db4eb5a85d&w=740',
})

</script>

<template>
    <section>

        <div class="relative isolate overflow-hidden bg-white py-20 mt-40">

            <NuxtImg :src="ReinsuranceBannerContent.image" alt="Success Team Hands Up"
                class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />

            <div class="absolute inset-0 bg-black opacity-40"></div>

            <div class="relative z-50 mx-auto max-w-6xl px-6 lg:px-8 font-sans">
                <div class="grid grid-cols-10 -gap-10">
                    <div class="text-white col-span-1">
                        <div class="w-20 h-1 bg-white mt-3">

                        </div>
                    </div>
                    <div class="col-span-9 ml-20 max-w-6xl lg:mx-0 text-center">
                        <h2 class="text-left text-xl font-bold tracking-tight text-white sm:text-6xl font-sans mb-4">
                            Corp Governance
                        </h2>
                        <h2 class="text-left text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
                            {{ ReinsuranceBannerContent.title }}
                        </h2>
                        <p class="text-white text-left max-w-2xl mt-7">
                            At Acentria, we understand the profound impact businesses can have on the world. That’s why
                            we are dedicated to integrating Environmental, Social, and Governance (ESG) principles into
                            our core business practices. Our commitment goes beyond financial success, focusing on
                            sustainable and responsible business operations that contribute positively to the well-being
                            of our planet and society.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="bg-white min-h-screen">

        </div>
        
    </section>
</template>

<style scoped></style>