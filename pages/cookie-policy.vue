<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Cookie Policy',
    subTitle: 'Our Policies',
    image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section>
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 py-10 lg:px-8 font-sans">
            <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">

                <p class="mt-6 text-xl leading-8">
                    Welcome to the Acentria Insurance website. Our website uses cookies. By using our website, you
                    consent to the use of cookies in accordance with this Cookie Policy.
                </p>


                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">What are Cookies?</p>
                    <p class="mt-8">
                        Cookies are small text files that are stored on your device when you visit a website. They are
                        widely used to make websites work more efficiently and to provide information to website owners.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">How We Use Cookies</p>
                    <p class="mt-8">
                        Acentria Insurance uses cookies for the following purposes:
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
                                    Essential Cookies: These cookies are necessary for the website to function properly.
                                    They enable you to navigate the website and use its features.
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
                                    Analytics Cookies: These cookies help us understand how visitors interact with our
                                    website by collecting and reporting information anonymously. We use Google Analytics
                                    for this purpose.
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
                                    Preference Cookies: These cookies allow the website to remember choices you make,
                                    such as language preferences and settings.
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
                                    Marketing Cookies: We may use marketing cookies to display personalized
                                    advertisements based on your interests.
                                </strong>
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">Types of Cookies We Use</p>
                    <p class="mt-8">
                        <strong>Session Cookies:</strong> These are temporary cookies that are deleted when you close
                        your browser.
                    </p>
                    <p class="mt-4">
                        <strong>Persistent Cookies:</strong> These cookies remain on your device for a set period or
                        until you delete them manually.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">How to Control Cookies</p>
                    <p class="mt-8">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already
                        on your computer, and you can set most browsers to prevent them from being placed. If you do
                        this, however, you may have to manually adjust some preferences every time you visit a site, and
                        some services and functionalities may not work.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">Third-Party Cookies</p>
                    <p class="mt-8">
                        We may also use third-party cookies on our website for various purposes, including but not
                        limited to, understanding site usage, serving advertisements, and providing social media
                        features.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">Changes to This Cookie Policy</p>
                    <p class="mt-8">
                        We may update our Cookie Policy from time to time. Any changes will be posted on this page with
                        the revised date.
                    </p>
                </div>



            </div>
        </div>

        <InTouch />
    </section>
</template>

<style scoped></style>