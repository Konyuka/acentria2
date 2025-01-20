<script setup>
const bannerContent = ref({
    subtitle: 'Contact Us',
    title: 'Reach Out to Us',
    image: '/img/tele.jpeg'
})
</script>

<template>
    <div class="bg-white">

        <BannerMain :content="bannerContent" />

        <div class="container font-sans">
            <div class="flex w-full flex-col gap-2 pr-0 sm:pr-10 lg:shrink-0 lg:pr-0 py-10">
                <h1 id="" class="section-heading">
                    <span class="text-brand-primary">Connect with</span> Our Experts
                </h1>
                <p class="content">
                    We value your trust and are committed to safeguarding your future with
                    precision and excellence.
                    If you have any questions or need assistance, please don't hesitate to
                    contact us.
                    We are here to help and look forward to hearing from you.
                    <br> <br>
                    We believe in building lasting relationships with our
                    clients, grounded in trust and mutual respect.
                    Our team of dedicated professionals is always ready to provide you with the
                    support and guidance you need.
                    Whether you are looking for information about our services, need help with a
                    specific issue, or just want to learn more about how we can assist you, we
                    are here for you.
                    <br><br>
                    We understand the importance of timely and accurate communication, and we
                    are committed to responding to your inquiries promptly.
                    Thank you for choosing Acentria Group. We look forward to serving you and
                    helping you achieve your goals.
                </p>
            </div>
            <div class="container font-sans py-5">
                <p class="section-heading pb-3">
                    Contact <span class="text-brand-primary">us on</span>
                </p>
                <Socials />
            </div>
            <div class="container font-sans grid grid-cols-3 items-center gap-5 py-5 lg:grid-cols-5">

                <div class="">
                    <h2 class="text-xl font-semibold">
                        Visit <span class="text-brand-primary">Us</span>
                    </h2>
                    <p class="mt-4 leading-6 text-black text-sm">
                        <i class="fas fa-building text-brand-primary"></i> West Park Towers, 9th floor <br>
                        <i class="fas fa-road text-brand-primary"></i> Muthithi Road, Mpesi Lane <br />
                        <i class="fas fa-map-marker-alt text-brand-primary"></i> Westlands, Nairobi Kenya
                    </p>
                    <h2 class="mt-10 text-xl font-semibold">
                        Working <span class="text-brand-primary">Hours</span>
                    </h2>
                    <p class="mt-4 leading-6 text-black font-medium text-sm">
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