<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Report a Claim Quickly and Easily',
    subTitle: 'Claim Reports ',
    image: 'https://images.pexels.com/photos/8846404/pexels-photo-8846404.jpeg?auto=compress&cs=tinysrgb&w=600',
})

const onlineClaimSteps = ref([
    {
        name: 'Log In to Your Account',
        content: 'Access your online account using your username and password. If you don\'t have an account, you can create one on our website.',
    },
    {
        name: 'Navigate to Claims',
        content: 'Go to the "Claims" section in your account dashboard to start the claims process.',
    },
    {
        name: 'Select Claim Type',
        content: 'Choose the type of claim you want to report (e.g., motor, home, health, travel). This helps us route your claim to the appropriate department for quicker processing.',
    },
    {
        name: 'Provide Incident Details',
        content: 'Fill out the claim form with details of the incident, including the date, time, location, and a brief description of what happened. Be as accurate and detailed as possible to help us assess your claim.',
    },
    {
        name: 'Upload Supporting Documents',
        content: 'Attach any relevant documents, such as photos of the damage, police reports, medical bills, or receipts. This will help expedite the review process.',
    },
    {
        name: 'Review and Submit',
        content: 'Review the information you provided to ensure accuracy. Once you\'re satisfied, click the "Submit Claim" button.',
    },
    {
        name: 'Receive Confirmation',
        content: 'After submitting your claim, you will receive a confirmation email with a reference number. Keep this reference number handy for future correspondence.',
    },
    {
        name: 'Claims Review',
        content: 'Our claims team will review your submission and may contact you for additional information or clarification. We aim to process all claims promptly and keep you informed throughout the process.',
    },
    {
        name: 'Claim Resolution',
        content: 'Once your claim is approved, you will receive information on the next steps, including any payouts or repairs. Our goal is to resolve your claim as quickly and efficiently as possible.',
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


const currentMenu = ref('online')
const setMenu = (menu) => {
    currentMenu.value = menu
}
const setMobileMenu = (event) => {
    const selectedValue = event.target.value;
    currentMenu.value = selectedValue
}

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="container text-base leading-normal text-black">


                <h1 class="text-2xl text-black !font-semibold mx-8 mb-6">Need to Report <span
                        class="text-brand-primary">a Claim?</span></h1>
                <p class="mx-8 mt-6 text-xs leading-normal">
                    We understand that accidents and unexpected events can be stressful. That's why we've made it simple
                    and convenient for you to report a claim. Follow these straightforward steps to ensure a smooth and
                    efficient claims process.
                </p>

                <div class="container bg-white mx-auto px-6 py-10">
                    <!-- <div class="sm:hidden px-4">
                        <label for="tabs" class="sr-only">Select a tab</label>
                        <select @change="setMobileMenu($event)" id="tabs" name="tabs"
                            class="block w-full rounded-md border-gray-300 focus:border-brand-primary focus:ring-brand-primary py-2 font-semibold">
                            <option selected value="blogs">Blogs</option>
                            <option value="event">Events</option>
                        </select>
                    </div> -->
                    <div class="hidden sm:block font-sans">
                        <div class="divide-x divide-gray-200">
                            <nav class="flex font-sans gap-20" aria-label="Tabs">
                                <button @click="setMenu('online')"
                                    :class="[currentMenu == 'online' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                                    class="w-1/2 px-1 py-4 text-center text-xl font-semibold hover:text-brand-primary">
                                    <i class="fas fa-images mr-2"></i> Access Your Online Account
                                </button>
                                <button @click="setMenu('file')"
                                    :class="[currentMenu == 'file' ? 'border-b-4 border-brand-primary text-black' : 'border-transparent text-black']"
                                    class="w-1/2 px-1 py-4 text-center text-xl font-semibold hover:text-brand-primary">
                                    <i class="fas fa-blog mr-2"></i> File a Claim From Here
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>

                <div v-if="currentMenu == 'online'">
                    <h1 class="text-xl text-black !font-semibold mx-8 mt-4">How to Report <span
                            class="text-brand-primary">a Claim</span></h1>

                    <Accordion :faqs="onlineClaimSteps" />

                    <div class="py-5 px-10 mt-10">
                        <h2 class="text-2xl !font-semibold text-black mb-4">
                            Need <span class="text-brand-primary"> Assitance?</span>
                        </h2>
                        <div class="my-5">
                            <p class="text-sm leading-normal">
                                If you encounter any issues or have questions about reporting a claim, our dedicated
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
                            Stay <span class="text-brand-primary"> Informed</span>
                        </h2>
                        <div class="my-5">
                            <p class="text-sm leading-normal">
                                Keep track of your claim status by logging into your account and visiting the "Claims"
                                section. We are committed to providing timely updates and support throughout the claims
                                process.
                            </p>
                        </div>
                        <div class="my-6">
                            <NuxtLink to="/"
                                class="button-animation bg-black !hover:bg-brand-primary text-white font-medium py-1 px-12 text-sm rounded-sm mt-10">
                                Log in to start <i class="fas fa-arrow-right text-primary ml-2"></i>
                            </NuxtLink>

                            
                        </div>
                    </div>
                </div>

                <div v-if="currentMenu == 'file'">
                    <FileClaim />
                </div>



            </div>
        </div>

        <InTouch />
    </section>
</template>

