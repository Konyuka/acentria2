<script setup>
const formModal = ref(false);

const activeContent = ref(null);

const supportContent = ref(
    {
        heading: 'Need Assistance?  <br/><span class="text-brand-primary"> We\'re Here to Help!</span> ',
        description: 'At Acentria, we are dedicated to providing exceptional support to our clients. If you need assistance in claims, policy administration, accounts or other support services, please don\'t hesitate to reach out to us.',
        type: 'support',
    }
)
const businessContent = ref(
    {
        heading: 'Make a Business Inquiry?  <br/><span class="text-brand-primary"> We\'re Here to Help!</span> ',
        description: ' We are excited to assist you with your business needs. To help us serve you better, please provide us with some details about your inquiry.',
        type: 'business',
    }
)
const feedbackContent = ref(
    {
        heading: 'Give us Feebacks & Reviews <br/><span class="text-brand-primary"> We Value Your Feedback!</span> ',
        description: 'At Acentria, we are committed to providing the best possible service to our clients. Your feedback is invaluable to us as it helps us improve and serve you better. We would love to hear about your experience with our services.',
        type: 'feedback',
    }
)


const openFormModal = (type) => {

    if (type == 'support') {
        activeContent.value = supportContent.value;
    }
    if (type == 'business') {
        activeContent.value = businessContent.value;
    }
    if (type == 'feedback') {
        activeContent.value = feedbackContent.value;
    }
    formModal.value = true;
}



</script>

<template>
    <div>
        <div class="bg-white font-sans">

            <div class="py-5 text-left container">
                <h2 class="heading-class text-black">
                    How Can<span class="text-brand-primary"> We Help?</span>
                </h2>

                <div>
                    <div class=" py-10">
                        <div class="grid grid-cols-4 gap-2">

                            <div @click="openFormModal('support')"
                                class="button-animation p-6 border rounded-lg shadow-sm hover:shadow-md ">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-question text-brand-primary text-2xl"></i>
                                    <h3 class="ml-4 text-lg font-semibold text-gray-900">
                                        Request Support <i class="fas fa-arrow-right ml-4"></i>
                                    </h3>
                                </div>
                                <p>
                                    If you need assistance in
                                    claims, policy administration, accounts or other support services, please don&#39;t
                                    hesitate to reach out to us.
                                </p>
                            </div>

                            <div @click="openFormModal('business')"
                                class="button-animation p-6 border rounded-lg shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-building text-brand-primary text-2xl"></i>
                                    <h3 class="ml-4 text-lg font-semibold text-gray-900">
                                        Business Inquiry <i class="fas fa-arrow-right ml-4"></i>
                                    </h3>
                                </div>
                                <p>
                                    We are excited to assist you with your business needs. Our commitment to excellence
                                    ensures that you receive personalized and professional service every step of the
                                    way.
                                </p>
                            </div>

                            <div @click="openFormModal('feedback')"
                                class="button-animation p-6 border rounded-lg shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-comment-dots text-brand-primary text-2xl"></i>
                                    <h3 class="ml-4 text-lg font-semibold text-gray-900">
                                        Give Feedback <i class="fas fa-arrow-right ml-4"></i>
                                    </h3>
                                </div>
                                <p>
                                    Your feedback is invaluable to us & helps us serve you better. We
                                    appreciate your input and are committed to making improvements based on
                                    your suggestions.
                                </p>
                            </div>

                            <NuxtLink to="/whistle-blowing"
                                class="button-animation p-6 border rounded-lg shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-frown text-brand-primary text-2xl"></i>
                                    <h3 class="ml-4 text-lg font-semibold text-gray-900">
                                        Complaints <i class="fas fa-arrow-right ml-4"></i>
                                    </h3>
                                </div>
                                <p>
                                    If you have any complaints or concerns, please let us know. We are committed to
                                    addressing your issues promptly and ensuring your satisfaction.
                                </p>
                            </NuxtLink>

                        </div>
                    </div>

                </div>


                <div v-if="formModal" class="relative z-50" aria-labelledby="slide-over-title" role="dialog"
                    aria-modal="true">
                    <div class="fixed inset-0 bg-black/20"></div>

                    <div class="fixed inset-0 overflow-hidden">
                        <div class="absolute inset-0 overflow-hidden">
                            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-3xl pl-10">

                                <div class="pointer-events-auto w-screen max-w-3xl">
                                    <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">

                                        <div class="px-4 sm:px-6">
                                            <div class="flex items-start justify-between">
                                                <div></div>
                                                <div class="ml-3 flex h-7 items-center">
                                                    <button @click="formModal = false" type="button"
                                                        class="relative rounded-md bg-white text-black hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                                                        <span class="absolute -inset-2.5"></span>
                                                        <span class="sr-only">Close panel</span>
                                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                            data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M6 18 18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="max-w-2xl mx-auto">
                                            <div class="py-2 text-left container">
                                                <h2 v-html="activeContent.heading" class="heading-class text-black">
                                                </h2>
                                                <p class="text-xs mt-2 text-black leading-normal">
                                                    {{ activeContent.description }}
                                                </p>
                                            </div>

                                            <div class="my-2">
                                                <SupportForm v-if="activeContent.type=='support'" />
                                                <BusinessForm v-if="activeContent.type =='business'" />
                                                <FeedbackForm v-if="activeContent.type =='feedback'" />
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
