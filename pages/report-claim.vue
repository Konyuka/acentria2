<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Privacy Policy',
    subTitle: 'Your Privacy Matters',
    image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="mx-auto max-w-6xl text-base leading-7 text-gray-700">

                <p class="mt-6 text-xs leading-normal">
                    Acentria Insurance (“we,” “us,” or “our”) is committed to protecting the privacy and security of
                    your personal information. This Privacy Policy explains how we collect, use, disclose, and protect
                    your information when you visit our website or use our services.
                </p>
                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">How We Use Your Information</p>
                    <p class="mt-8">
                        We use your information for the following purposes:
                    </p>
                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Providing and managing insurance services
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Processing payments and claims
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Communicating with you about our products and services
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Improving our website and services
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Complying with legal obligations
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">Information we collect</p>
                    <p class="mt-8">
                        We may collect personal information when you interact with us, including but not limited to:
                    </p>
                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Contact information (name, address, email, phone number)
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Policy information
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Payment details
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Claims information
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Website usage data (cookies, IP address, browser type)
                                </strong>
                            </span>
                        </li>

                    </ul>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">How We Use Your Information</p>
                    <p class="mt-8">
                        We use your information for the following purposes:
                    </p>
                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Improving our website and services
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Complying with legal obligations
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <!-- New sections -->
                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">4. Information Sharing</p>
                    <p class="mt-8">
                        We may share your information with third parties, including:
                    </p>
                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Service providers who assist with our operations
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Regulatory authorities to comply with legal requirements
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Business partners for joint marketing efforts (with your consent)
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">5. Your Rights</p>
                    <p class="mt-8">
                        You have the right to:
                    </p>
                    <ul role="list" class="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Access, correct, or delete your personal information
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Object to the processing of your information
                                </strong>
                            </span>
                        </li>
                        <li class="flex gap-x-3">
                            <svg class="mt-1 h-5 w-5 flex-none text-brand-primary" viewBox="0 0 20 20"
                                fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>
                                <strong class="font-semibold text-gray-900">
                                    Withdraw consent (if applicable)
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">6. Data Security</p>
                    <p class="mt-8">
                        We implement reasonable security measures to protect your information from unauthorized access,
                        disclosure, alteration, and destruction.
                    </p>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">7. Cookies and Similar Technologies</p>
                    <p class="mt-8">
                        Our website may use cookies and similar technologies. You can control cookies through your
                        browser settings.
                    </p>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">8. Children’s Privacy</p>
                    <p class="mt-8">
                        Our services are not intended for individuals under the age of 18. We do not knowingly collect
                        personal information from children.
                    </p>
                </div>

                <div class="mt-10 max-w-3xl mx-auto">
                    <p class="heading-class">9. Changes to This Privacy Policy</p>
                    <p class="mt-8">
                        We may update this Privacy Policy from time to time. The latest version will be posted on our
                        website with the updated date.
                    </p>
                </div>


            </div>
        </div>

        <InTouch />
    </section>
</template>

<style scoped></style>