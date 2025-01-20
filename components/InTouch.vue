<script setup>

const route = useRoute();
const currentRoute = computed(() => route.path);

const companyMail = computed(() => {
    if (currentRoute.value == '/acentria-group-insurance') {
        return 'marketing@acentriagroup.com'
        // return 'marketing@acentriagroup.com <br/> <span class="ml-5">claims@acentriagroup.com</span>  <br/> <span class="ml-5">underwriting@acentriagroup.com</span> '
    } else if (currentRoute.value == '/acentria-group-reinsurance') {
        return 'reinsurance@acentriagroup.com'

    } else if (currentRoute.value == '/acentria-group-actuarial') {
        return 'actuarial@acentriagroup.com'

    } else {
        return 'info@acentriagroup.com'
    }
})

const socials = ref([
    {
        icon: 'fab fa-linkedin',
        title: 'Linkedin',
        description: '@acentria-groupltd',
        link: 'https://www.linkedin.com/company/acentria-groupltd',
    },
    {
        icon: 'fab fa-x-twitter',
        title: 'X / Twitter',
        description: '@acentriagroup',
        link: 'https://x.com/acentriagroup?lang=en'
    },
    {
        icon: 'fab fa-facebook',
        title: 'Facebook',
        description: '@acentriagroup',
        link: 'https://www.facebook.com/Acentriagroup'
    },
    {
        icon: 'fab fa-instagram',
        title: 'Instagram',
        description: '@acentriagroup',
        link: 'https://www.instagram.com/acentriagroup/'
    },
    {
        icon: 'fab fa-tiktok',
        title: 'Tiktok',
        description: '@acentria.group',
        link: 'https://www.tiktok.com/@acentria.group'
    },
]
)
</script>

<template>
    <div class="bg-white py-10">
        <div class="container mx-auto">
            <div class="">

                <div class="font-sans flex flex-col pb-10">
                    <div class="grid grid-cols-6 gap-5">
                        <div class="col-span-2 flex flex-col justify-center gap-5 w-full">
                            <div class="border-b border-black pb-3">
                                <h4 class="card-heading">
                                    Contact <span class="text-brand-primary">Us</span>
                                </h4>
                                <p class="small-text">
                                    <i class="fas mr-3 text-xl fa-mobile text-brand-primary"></i> +254 705 200 222 <br>
                                    <i class="fas mr-3 text-xl fa-paper-plane text-brand-primary"></i> <span
                                        v-html="companyMail"></span><br />
                                    <i class="fas mr-3 text-xl fa-envelope text-brand-primary"></i> P.O Box
                                    5864-00100 Nairobi, Kenya
                                </p>
                            </div>

                            <div class=" pb-3">
                                <h4 class="card-heading">
                                    Visit <span class="text-brand-primary">Us</span>
                                </h4>
                                <p class="small-text">
                                    <i class="fas mr-3 text-xl fa-building text-brand-primary"></i> West Park Towers,
                                    9th floor <br>
                                    <i class="fas mr-1 text-xl fa-road text-brand-primary"></i> Muthithi Road, Mpesi
                                    Lane <br />
                                    <i class="fas mr-3 text-xl fa-map-marker-alt text-brand-primary"></i> Westlands,
                                    Nairobi Kenya
                                </p>
                            </div>

                            <!-- <div>
                                <h4 class="card-heading">
                                    Working <span class="text-brand-primary">Hours</span>
                                </h4>
                                <p class="small-text">
                                    <i class="fas mr-3 text-xl fa-calendar-day text-brand-primary"></i> Monday to Friday
                                    <br>
                                </p>
                            </div> -->
                        </div>

                        <div class="col-span-4">
                            <div class="relative w-auto h-[350px]">
                                <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                    frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false"
                                    tabindex="0">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mx-auto py-5 font-sans">
                    <p class="section-heading pb-5">
                        Follow <span class="text-brand-primary">us on</span>
                    </p>
                    <dl class="grid grid-cols-5 gap-3">
                        <a :href="feature.link" target="_blank" v-for="(feature, index) in socials" :key="index"
                            class="shadow-2xl rounded-md p-3 button-animation flex flex-col">
                            <dt class="subheading-class text-black flex gap-3">
                                <div
                                    class="mb-2 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-primary">
                                    <i :class="feature.icon" class=" text-white" aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h4 class="card-heading">
                                        {{ feature.title }}
                                    </h4>
                                    <span class="mt-1 flex flex-auto flex-col small-text !font-semibold text-gray-600">
                                        <p class="flex-auto" v-html="feature.description"></p>
                                    </span>
                                </div>
                            </dt>
                        </a>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>