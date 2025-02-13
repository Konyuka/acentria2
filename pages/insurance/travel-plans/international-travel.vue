<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Stay Protected & Legally Compliant',
    subTitle: 'Third Party Car Insurance',
    image: 'https://images.pexels.com/photos/2265634/pexels-photo-2265634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
})

const benefits = ref([
    {
        name: 'Liability Coverage',
        icon: 'fas fa-shield-alt',
        description: 'Covers your legal responsibility if you cause injury or damage to other people or their property while driving, protecting you from significant financial losses.',
    },
    {
        name: 'Bodily Injury',
        icon: 'fas fa-user-injured',
        description: 'Pays for medical expenses, lost wages, and other related costs if you are at fault in an accident that injures or kills another person.',
    },
    {
        name: 'Property Damage',
        icon: 'fas fa-car-crash',
        description: 'Covers repairs or replacement costs if you damage someone else’s vehicle, building, or other structures.',
    },
    {
        name: 'Legal Compliance',
        icon: 'fas fa-balance-scale',
        description: 'Ensures you meet mandatory motor insurance requirements, protecting you from penalties and fines for non-compliance.',
    },
    {
        name: 'Peace of Mind',
        icon: 'fas fa-smile',
        description: 'Provides financial security and allows you to drive without worrying about liability claims, ensuring a stress-free driving experience.',
    },
]);

const considerations = ref([
    {
        name: 'Cost vs. Coverage',
        icon: 'fas fa-balance-scale',
        description: 'Third-party insurance is more affordable than comprehensive insurance, but it does not cover damages to your own car.',
    },
    {
        name: 'Liability Limitations',
        icon: 'fas fa-exclamation-circle',
        description: 'This policy only covers damages or injuries caused to others; it does not include repairs or replacement for your own vehicle.',
    },
    {
        name: 'Compare Car Insurance Quotes',
        icon: 'fas fa-search',
        description: 'Shop around to find the best third-party car insurance rates that fit your budget and provide adequate coverage.',
    },
]);



</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="container mx-auto py-10">
            <h1 class="section-heading pb-5">
                Why Third-Party <br><span class="text-brand-primary"> Insurance</span>
            </h1>
            <p class="content">
            <p>Accidents happen when you least expect them, and having the right coverage is essential.
                <strong>Third-party car insurance</strong> provides financial protection for damages or injuries you
                cause to others while driving. Whether you're navigating busy streets or highways, this policy ensures
                you stay legally compliant and financially secure.
            </p>
            <br>
            <p>With Acentria, you can drive with peace of mind, knowing you're covered against potential liabilities.
                When protection is done smart, it’s done with care.</p>

            </p>
        </div>

        <div class="py-2">
            <section class="relative py-1">
                <div class="container">
                    <h2 class="section-heading pb-5">
                        What’s Covered Under <br> <span class="text-brand-primary"> Third-Party Motor Insurance?</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        <div v-for="principle in benefits"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="card-heading pb-1">{{
                                    principle.name }}</h4>
                                <p class="content">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container my-10">
                    <h2 class="section-heading pb-5">
                        What to Consider Before <br> <span class="text-brand-primary"> Choosing a Car Insurance
                            Policy</span>
                    </h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div v-for="principle in considerations"
                            class="border-t-8 border-solid border-gray-400 shadow-card m-auto flex min-h-fit md:min-h-[200px] rounded-xs bg-white p-5 w-full h-full">
                            <div class="flex flex-col">
                                <i :class="[principle.icon]" class="text-brand-primary text-xl pb-1"></i>
                                <h4 class="card-heading">{{
                                    principle.name }}</h4>
                                <p class="content">{{ principle.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container py-5">
                    <h2 class="section-heading pb-5">
                        Get a Third-Party <br> <span class="text-brand-primary"> Car Insurance Quote Today!</span>
                    </h2>
                    <div class="my-5">
                        <p class="content">
                            Stay Legally Compliant and Financially Protected
                            With our affordable third-party car insurance, you can drive confidently, knowing you're
                            meeting legal requirements while staying protected against liabilities.
                            Compare car insurance plans and get a <strong>free quote</strong> today!

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