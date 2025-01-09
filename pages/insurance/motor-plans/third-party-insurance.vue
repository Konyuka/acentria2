<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Protect Yourself with Our Reliable Third-Party Insurance',
    subTitle: 'Third Party Insurance',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

const benefits = ref([
    {
        name: 'Liability Coverage',
        icon: 'fas fa-shield-alt',
        description: 'Our third-party insurance covers your legal liability for causing injury or damage to other people or their property while driving. This ensures that you\'re protected from significant financial losses.',
    },
    {
        name: 'Bodily Injury',
        icon: 'fas fa-user-injured',
        description: 'Receive coverage for medical expenses, lost wages, and other related costs if you are at fault in an accident that causes injury or death to another person.',
    },
    {
        name: 'Property Damage',
        icon: 'fas fa-car-crash',
        description: 'Provides coverage for repair or replacement costs if you cause damage to someone else\'s property, such as their vehicle, buildings, or other structures.',
    },
    {
        name: 'Legal Compliance',
        icon: 'fas fa-balance-scale',
        description: 'Our third-party insurance ensures that you comply with legal requirements, avoiding potential fines and penalties for driving without the necessary coverage.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Drive with confidence knowing that you are covered for potential liabilities, allowing you to focus on the road ahead without worrying about the financial implications of an accident.',
    },
]);

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="text-2xl text-black !font-semibold mb-6">
                Why <span class="text-brand-primary">Third-Party Insurance</span>
            </h1>
            <p class="mt-6 text-xs leading-normal">
                Accidents can happen at any time, and it's essential to have the right protection in place. Our
                third-party insurance provides coverage for damages or injuries you cause to others while driving.
                Ensure you're covered and compliant with legal requirements, providing peace of mind on the road.
            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Key <span class="text-brand-primary"> Benefits</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="font-semibold text-black !text-[16px] pb-1 leading-normal">{{
                                    principle.name }}</h4>
                                <p class="text-sm leading-normal text-black">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-10 mt-5">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Get a <span class="text-brand-primary"> Quote Today</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            Protect yourself and your loved ones with our comprehensive critical illness insurance.
                            Compare Quotes today and take the first step towards financial security and peace of mind.
                        </p>
                    </div>

                    <div class="pt-5">
                        <ContactFormInsurance />
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<style scoped></style>