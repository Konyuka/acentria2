<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Online Customer Portal',
    subTitle: 'Find The Right Policy',
    image: 'https://images.pexels.com/photos/8846404/pexels-photo-8846404.jpeg?auto=compress&cs=tinysrgb&w=600',
})

const faqs = ref([
    {
        name: 'Register',
        content: 'If you\'re a new user, click on the <a href="#" class="text-brand-primary">Register</a> button to create your account. Provide your policy number, email address, and other required information to complete the registration process.',
    },
    {
        name: 'Log In',
        content: 'If you already have an account, simply log in using your username and password. If you\'ve forgotten your password, click on <a href="/forgot-password" class="text-brand-primary">Forgot Password</a> to reset it.',
    },
    {
        name: 'Explore the Portal',
        content: 'Once logged in, explore the various features and tools available to you. Navigate through the portal using the intuitive menu and discover how it can simplify managing your insurance policies.',
    },
])

const benefits = ref([
    {
        name: 'Policy Overview',
        icon: 'fas fa-file-alt',
        description: 'Get a comprehensive view of all your active insurance policies in one place. Easily check policy details, coverage amounts, and expiration dates.',
    },
    {
        name: 'Renew Your Policy',
        icon: 'fas fa-sync-alt',
        description: 'Simplify the renewal process by renewing your policies online. Ensure continuous coverage and avoid lapses with our hassle-free renewal options.',
    },
    {
        name: 'File a Claim',
        icon: 'fas fa-file-signature',
        description: 'Report and track your claims effortlessly through our portal. Submit required documents, check claim status, and receive updates in real-time.',
    },
    {
        name: 'Make Payments',
        icon: 'fas fa-credit-card',
        description: 'Conveniently pay your premiums online using various payment methods. Set up automatic payments to ensure timely payments and avoid late fees.',
    },
    {
        name: 'Update Personal Information',
        icon: 'fas fa-user-edit',
        description: 'Keep your contact details, mailing address, and other personal information up-to-date to ensure accurate and prompt communication.',
    },
    {
        name: 'Access Documents',
        icon: 'fas fa-folder-open',
        description: 'View, download, and print your policy documents, claim forms, and payment receipts at your convenience.',
    },
    {
        name: '24/7 Assistance',
        icon: 'fas fa-headset',
        description: 'Access our customer support team anytime through the portal for assistance with any questions or issues you may have. Use the live chat feature for instant support.',
    },
    {
        name: 'Notifications and Alerts',
        icon: 'fas fa-bell',
        description: 'Stay informed with notifications and alerts about policy renewals, claim status updates, and important reminders. Customize your preferences to receive notifications via email or SMS.',
    },
    {
        name: 'Customizable Dashboard',
        icon: 'fas fa-tachometer-alt',
        description: 'Personalize your dashboard to display the information that matters most to you. Arrange widgets and shortcuts for quick access to frequently used features.',
    },
])
</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="container text-base leading-normal text-black">


                <h1 class="text-2xl text-black !font-semibold mx-8 mb-6">Manage Policies <span
                        class="text-brand-primary">with Ease</span></h1>
                <p class="mx-8 mt-6 text-xs leading-normal">
                    Our online customer portal is designed to provide you with a seamless and convenient way to manage
                    your insurance policies. Whether you're at home, at work, or on the go, you can access all your
                    insurance information with just a few clicks. Here's what you can do:
                </p>

                <div class="py-10 px-6">
                    <section class="relative py-1">
                        <div class="container px-4">
                            <h2 class="text-2xl !font-semibold text-black mb-4">
                                Key <span class="text-brand-primary"> Features</span>
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

                <div class="py-5 px-10 ">
                    <h2 class="text-2xl !font-semibold text-black">
                        How To <span class="text-brand-primary"> Get Started</span>
                    </h2>
                    <Accordion :faqs="faqs" />
                </div>


                <div class="py-5 px-10">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Need <span class="text-brand-primary"> Assitance?</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            Our dedicated customer support team is here to assist you. If you have any questions or
                            encounter any issues while using the portal, feel free to reach out to us via phone, email,
                            or live chat. We're committed to providing you with the best service and support.
                        </p>
                    </div>
                </div>

                <div class="py-3 px-10">
                    <h2 class="text-2xl !font-semibold text-black mb-4">
                        Stay <span class="text-brand-primary"> Connected</span>
                    </h2>
                    <div class="my-5">
                        <p class="text-sm leading-normal">
                            Keep your insurance information at your fingertips with our online customer portal. Sign in
                            today and experience the convenience of managing your policies online.
                        </p>
                    </div>
                    <div class="my-6">
                        <NuxtLink to="/our-brand"
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