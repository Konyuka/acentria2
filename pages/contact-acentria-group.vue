<script setup>
const bannerContent = ref({
    subtitle: 'Contact Us',
    title: 'Reach Out to Us',
    image: '/img/tele.jpeg'
})

const companyMail = ref('info@acentriagroup.com')

const introContent = ref({
    orientation: 'image-right',
    heading: '<span class="text-brand-primary">Connect with</span> Our Experts',
    subheading: 'We value your trust and are committed to <br> <span class="text-brand-primary">safeguarding your future with precision and excellence.</span> ',
    image: '/img/lady-shake.jpg', // If no new image is provided, keeping the same
    link: '/',
    content: `
    If you have any questions or need assistance, please don't hesitate to
    contact us.
    We are here to help and look forward to hearing from you.
    <br><br>
    We believe in building lasting relationships with our
    clients, grounded in trust and mutual respect.
    Our team of dedicated professionals is always ready to provide you with the
    support and guidance you need.
    Whether you are looking for information about our services, need help with a
    specific issue, or just want to learn more about how we can assist you, we
    are here for you.
    `
});

</script>

<template>
    <div class="bg-white">

        <BannerMain :content="bannerContent" />
        <ContentPic :content="introContent" />

        <div class="container font-sans">
            <div class="container font-sans py-5">
                <p class="section-heading pb-3">
                    Contact <span class="text-brand-primary">us on</span>
                </p>
                <Socials />
            </div>
            <div class="container mx-auto">
                <div class="">

                    <div class="font-sans flex flex-col pb-10">
                        <div class="sm:grid grid-cols-6 gap-5">
                            <div class="col-span-2 flex flex-col justify-center gap-5 w-full">
                                <div class="border-b border-black pb-3">
                                    <h4 class="card-heading">
                                        Contact <span class="text-brand-primary">Us</span>
                                    </h4>
                                    <p class="small-text">
                                        <i class="fas mr-3 text-xl fa-mobile text-brand-primary"></i> +254 705 200 222
                                        <br>
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
                                        <i class="fas mr-3 text-xl fa-building text-brand-primary"></i> West Park
                                        Towers,
                                        9th floor <br>
                                        <i class="fas mr-1 text-xl fa-road text-brand-primary"></i> Muthithi Road, Mpesi
                                        Lane <br />
                                        <i class="fas mr-3 text-xl fa-map-marker-alt text-brand-primary"></i> Westlands,
                                        Nairobi Kenya
                                    </p>
                                </div>
                            </div>

                            <div class="col-span-4">
                                <div class="mt-5 sm:mt-0 relative w-auto h-[350px]">
                                    <iframe class="absolute top-0 left-0 w-full h-full rounded-2xl"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.324532608933!2d36.805693017382765!3d-1.2745878698825375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f176afe68fe1b%3A0xf590c6d95ac4594f!2sWestpark%20Towers!5e0!3m2!1sen!2ske!4v1720091094209!5m2!1sen!2ske"
                                        frameborder="0" style="border: 0" allowfullscreen="" aria-hidden="false"
                                        tabindex="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="container font-sans py-5">
                <p class="section-heading">
                    Follow <span class="text-brand-primary">us on</span>
                </p>
                <Socials2 />
            </div>

            <ContactForm />
        </div>


    </div>
</template>

<style scoped></style>