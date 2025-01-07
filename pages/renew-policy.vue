<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Renew Your Policy with Ease',
    subTitle: 'Hassle-Free Policy Renewal Process',
    image: 'https://images.pexels.com/photos/8846404/pexels-photo-8846404.jpeg?auto=compress&cs=tinysrgb&w=600',
})

const faqs = ref([
    {
        name: 'Log In to Your Account',
        content: 'Access your online account using your username and password. If you don\'t have an account, you can easily create one on our website.',
    },
    {
        name: 'Review Your Policy',
        content: 'Once logged in, navigate to the "My Policies" section to review the details of your current policy. Take a moment to ensure that all information is accurate and up-to-date.',
    },
    {
        name: 'Make Necessary Updates',
        content: 'If there are any changes in your personal information, coverage needs, or preferences, you can update them before renewing. This ensures that your policy continues to meet your requirements.',
    },
    {
        name: 'Choose Your Renewal Option',
        content: 'Select the renewal option that suits you best. You can choose to renew for the same coverage or explore additional coverage options that may be beneficial.',
    },
    {
        name: 'Review and Confirm',
        content: 'Carefully review the terms and conditions of your renewed policy. Once satisfied, click the "Confirm Renewal" button to proceed.',
    },
    {
        name: 'Payment',
        content: 'Complete the payment process using our secure payment gateway. We offer various payment methods for your convenience, including credit/debit cards, bank transfers, and online payment platforms.',
    },
    {
        name: 'Receive Confirmation',
        content: 'After successful payment, you will receive a confirmation email with your renewed policy documents. Keep these documents for your records.',
    },
])

const benefits = ref([
    {
        name: 'Convenience',
        icon: 'fas fa-home',
        description: 'Renew your policy from the comfort of your home, anytime and anywhere.',
    },
    {
        name: 'Speed',
        icon: 'fas fa-clock',
        description: 'The online renewal process is quick and efficient, saving you time.',
    },
    {
        name: 'Secure Transactions',
        icon: 'fas fa-lock',
        description: 'Our platform ensures that your personal and payment information is protected.',
    },
    {
        name: '24/7 Access',
        icon: 'fas fa-globe',
        description: 'Access and renew your policy at your convenience, with round-the-clock availability.',
    },
])

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="container text-base leading-normal text-black">


                <h1 class="text-2xl text-black !font-semibold mx-8 mb-6">How to Renew <span
                        class="text-brand-primary">Your
                        Policy</span></h1>
                <p class="mx-8 mt-6 text-xs leading-normal">
                    Renewing your insurance policy is a breeze with our streamlined process. Ensure continuous coverage
                    and peace of mind by following these simple steps:
                </p>

                <Accordion :faqs="faqs" />


                <div class="py-2 px-6">
                    <section class="relative py-1">
                        <div class="container px-4">
                            <h2 class="text-2xl !font-semibold text-black mb-4">
                                Benefits of Renewing <span class="text-brand-primary"> Your Policy Online</span>
                            </h2>
                            <div class="my-5">
                                <p class="text-sm leading-normal">
                                    At Acentria Group, we are guided by a set of core principles that shape everything
                                    we do. These principles ensure we build strong relationships, foster innovation, and
                                    achieve success together.
                                </p>
                            </div>
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
                    </section>
                </div>

                <div class="py-5 px-10 mt-10">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Need <span class="text-brand-primary"> Assitance?</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            If you encounter any issues or have questions about renewing your policy, our dedicated
                            <NuxtLink to="/contact-acentria-group" class="font-semibold italic underline">Customer
                                Support Team
                            </NuxtLink> is here to help. <br>
                            Contact us via phone, email, or live
                            chat for prompt
                            assistance.
                        </p>
                    </div>
                </div>

                <div class="py-3 px-10">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Stay <span class="text-brand-primary"> Protected?</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            Don't let your coverage lapse! <br>
                            Renew your policy today and continue enjoying the peace of
                            mind that comes with comprehensive protection.
                        </p>
                    </div>
                    <div class="my-6">
                        <NuxtLink href="/our-brand"
                            class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                            Log in to start <i class="fas fa-arrow-right text-primary ml-2"></i>
                        </NuxtLink>
                    </div>
                </div>




            </div>
        </div>

        <InTouch />
    </section>
</template>

<style scoped></style>