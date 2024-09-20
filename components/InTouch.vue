<script setup>

const route = useRoute();
const currentRoute = computed(() => route.path);

const companyMail = computed(() => {
    if (currentRoute.value == '/acentria-group-insurance') {
        return 'insurance@acentriagroup.com'
    } else if (currentRoute.value == '/acentria-group-reinsurance'){
        return 'reinsurance@acentriagroup.com'
        
    } else if (currentRoute.value == '/acentria-group-actuarial'){
        return 'actuarial@acentriagroup.com'
        
    }else{
        return 'info@acentriagroup.com'
    }
})
</script>

<template>
    <div class="bg-white py-8">
        <div class="mx-[5vw] lg:px-8">
            <div class="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                            Get in touch
                        </h2>
                        <p class="mt-4 leading-7 text-gray-600">
                            Connect with our experts. Let's explore solutions together.
                        </p>
                    </div>
                    <div class="font-sans grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                        <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                            <h3 class="text-base font-semibold leading-7 text-gray-900">
                                Email
                            </h3>
                            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="font-semibold !text-brand-primary "
                                            href="mailto:collaborate@example.com">
                                            {{ companyMail }}
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                            <h3 class="text-base font-semibold leading-7 text-gray-900">
                                Mobile
                            </h3>
                            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                <div class="mt-1">
                                    <dt class="sr-only">Phone number</dt>
                                    <dd>
                                        <a class="font-semibold !text-brand-primary  transform transition duration-700 hover:scale-125 "
                                            href="tel:+254 705 200 222">
                                            +254 705 200 222
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                            <h3 class="text-base font-semibold leading-7 text-gray-900">
                                WhatsApp
                            </h3>
                            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="font-semibold !text-brand-primary" href="mailto:hello@example.com">Say
                                            Hi, on WhatsApp</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div class="rounded-2xl bg-gray-50 p-10 shadow-md">
                            <h3 class="text-base font-semibold leading-7 text-gray-900">
                                Box Office
                            </h3>
                            <dl class="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="font-semibold !text-brand-primary"
                                            href="mailto:careers@example.com">P.O Box 5864-00100 Nairobi,
                                            Kenya</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="font-sans grid grid-cols-1 gap-x-8 gap-y-10 pt-7 lg:grid-cols-1 !mb-20">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">
                            Visit Us
                        </h2>
                        <p class="mt-4 leading-7 text-black ">
                            West Park Towers - 9th floor, Mpesi Lane <br />
                            Muthithi Road - Westlands Nairobi Kenya
                        </p>
                    </div>

                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-1 lg:gap-8">
                        <div class="relative w-full h-96 ">
                            <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl px-[5vw]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>