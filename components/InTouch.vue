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
    <div class="bg-white py-10">
        <div class="container mx-auto md:mx-[5vw] lg:px-8">
            <div class="mx-auto max-w-2xl space-y-8 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                <div class="font-sans grid grid-cols-1 gap-y-10 lg:grid-cols-3">
                    <div>
                        <h2 class="heading-class text-2xl font-semibold">
                            Get in <span class="text-brand-primary">touch</span>
                        </h2>
                        <p class="mt-2 leading-7 text-gray-600">
                            Connect with our experts. <br> Let's explore solutions together.
                        </p>
                    </div>
                    <div class="font-sans grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                        <div class="button-animation rounded-2xl bg-gray-50 p-5 shadow-md">
                            <h3 class="subheading-class text-xl font-semibold">
                                Email
                            </h3>
                            <dl class="space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="text-xs text-brand-primary" href="mailto:collaborate@example.com">
                                            {{ companyMail }}
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="button-animation rounded-2xl bg-gray-50 p-5 shadow-md">
                            <h3 class="subheading-class text-xl font-semibold">
                                Mobile
                            </h3>
                            <dl class="space-y-1 text-sm leading-6 text-gray-600">
                                <div class="mt-1">
                                    <dt class="sr-only">Phone number</dt>
                                    <dd>
                                        <a class="text-xs text-brand-primary" href="tel:+254 705 200 222">
                                            +254 705 200 222
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div class="button-animation rounded-2xl bg-gray-50 p-5 shadow-md">
                            <h3 class="subheading-class text-xl font-semibold">
                                WhatsApp
                            </h3>
                            <dl class="space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="text-xs text-brand-primary" href="mailto:hello@example.com">Say Hi, on
                                            WhatsApp</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div class="button-animation rounded-2xl bg-gray-50 p-5 shadow-md">
                            <h3 class="subheading-class text-xl font-semibold">
                                Box Office
                            </h3>
                            <dl class="space-y-1 text-sm leading-6 text-gray-600">
                                <div>
                                    <dt class="sr-only">Email</dt>
                                    <dd>
                                        <a class="text-xs text-brand-primary" href="mailto:careers@example.com">P.O Box
                                            5864-00100 Nairobi, Kenya</a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="container mt-10 mx-auto font-sans grid grid-cols-3 gap-y-1 py-5 lg:grid-cols-6">
                    <div class="mt-5 col-span-2">
                        <h2 class="heading-class text-[20px] font-semibold">
                            Visit <span class="text-brand-primary">Us</span>
                        </h2>
                        <p class="mt-4 leading-6 text-black text-xs">
                            <i class="fas fa-building text-brand-primary"></i> West Park Towers, 9th floor <br>
                            <i class="fas fa-road text-brand-primary"></i> Muthithi Road, Mpesi Lane <br />
                            <i class="fas fa-map-marker-alt text-brand-primary"></i> Westlands, Nairobi Kenya
                        </p>
                        <h2 class="mt-10 heading-class text-[20px] font-semibold">
                            Working <span class="text-brand-primary">Hours</span>
                        </h2>
                        <p class="mt-4 leading-6 text-black font-medium text-xs">
                            <i class="fas fa-calendar-day text-brand-primary"></i> Monday to Friday <br>
                            <i class="fas fa-clock text-brand-primary"></i> 8:00 AM to 5:00 PM <br />
                        </p>
                    </div>

                    <div class="py-5 col-span-4">
                        <div class="relative w-full h-72 ml-24">
                            <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl px-[5vw]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div class="mx-auto mb-0 font-sans">
                    <p class="mt-2 heading-class text-black text-2xl font-semibold">
                        Follow <span class="text-brand-primary">us on</span>
                    </p>
                </div>

                <Socials2 />
            </div>
        </div>
    </div>
</template>

<style scoped></style>