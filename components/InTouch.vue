<script setup>

const route = useRoute();
const currentRoute = computed(() => route.path);

const companyMail = computed(() => {
    if (currentRoute.value == '/acentria-group-insurance') {
        return 'marketing@acentriagroup.com'
        // return 'marketing@acentriagroup.com <br/> <span class="ml-5">claims@acentriagroup.com</span>  <br/> <span class="ml-5">underwriting@acentriagroup.com</span> '
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
        <div class="container mx-auto">
            <div class="">
              
                <div class="font-sans flex flex-col">
                    <div class="grid grid-cols-4 gap-5 w-full">

                        <div>
                            <h2 class="heading-class text-[20px] font-semibold">
                                Contact <span class="text-brand-primary">Us</span>
                            </h2>
                            <p class="leading-6 text-black text-xs">
                                <i class="fas fa-building text-brand-primary"></i> +254 705 200 222 <br>
                                <i class="fas fa-road text-brand-primary"></i> <span v-html="companyMail"></span><br />
                                <i class="fas fa-map-marker-alt text-brand-primary"></i> P.O Box
                                5864-00100 Nairobi, Kenya
                            </p>
                        </div>

                        <div>
                            <h2 class="heading-class text-[20px] font-semibold">
                                Visit <span class="text-brand-primary">Us</span>
                            </h2>
                            <p class="leading-6 text-black text-xs">
                                <i class="fas fa-building text-brand-primary"></i> West Park Towers, 9th floor <br>
                                <i class="fas fa-road text-brand-primary"></i> Muthithi Road, Mpesi Lane <br />
                                <i class="fas fa-map-marker-alt text-brand-primary"></i> Westlands, Nairobi Kenya
                            </p>
                        </div>

                        <div>
                            <h2 class="heading-class text-[20px] font-semibold">
                                Follow <span class="text-brand-primary">Us On</span>
                            </h2>
                            <p class="leading-6 text-black font-medium text-xs grid grid-cols-2">
                                
                                <span>
                                    <i class="fab fa-linkedin text-brand-primary"></i> Linkedin <br>
                                </span>
                                <span>
                                    <i class="fab fa-x-twitter text-brand-primary"></i> Twitter <br>
                                </span>
                                <span>
                                    <i class="fab fa-facebook text-brand-primary"></i> Facebook <br>
                                </span>
                                <span>
                                    <i class="fab fa-instagram text-brand-primary"></i>  Instagram <br>
                                </span>
                                <span>
                                    <i class="fab fa-tiktok text-brand-primary"></i> Tiktok <br>
                                </span>
                            </p>
                        </div>

                        <div>
                            <h2 class="heading-class text-[20px] font-semibold">
                                Working <span class="text-brand-primary">Hours</span>
                            </h2>
                            <p class="leading-6 text-black font-medium text-xs">
                                <i class="fas fa-calendar-day text-brand-primary"></i> Monday to Friday <br>
                                <i class="fas fa-clock text-brand-primary"></i> 8:00 AM to 5:00 PM <br />
                            </p>
                        </div>

                    </div>

                    <div class="py-5">
                        <div class="relative w-full h-72">
                            <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false" tabindex="0">
                            </iframe>
                        </div>
                    </div>
                </div>

                <!-- <div class="mx-auto mb-5 font-sans">
                    <p class="mt-2 heading-class text-black text-2xl font-semibold">
                        Follow <span class="text-brand-primary">us on</span>
                    </p>
                </div>

                <Socials2 /> -->
            </div>
        </div>
    </div>
</template>

<style scoped></style>