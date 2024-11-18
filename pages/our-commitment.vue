<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Acentria\'s Commitment',
    image: 'https://images.pexels.com/photos/955395/pexels-photo-955395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="font-sans bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div>
            <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover px-4 py-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-5xl">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    Our global culture, "The Acentria Way", encompasses our purpose “to empower dreams
                                    and ignite imagination”, our aim, “to be the leading provider of innovative
                                    solutions, acting responsibly and earning the trust of our people, clients,
                                    partners, and communities”, our core values of “Integrity, Innovation, and
                                    Excellence”, our risk culture, which emphasizes that risk management is everyone’s
                                    responsibility, and lastly, our behaviours.
                                    At Acentria Group, we are committed to making a positive impact on various groups of
                                    people
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-white" style="background-color: rgb(246, 248, 252);">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Our Customers" loading="lazy" width="500"
                            height="350" decoding="async" data-nimg="1"
                            src="https://media.istockphoto.com/id/1266865934/photo/well-keep-on-winning-as-long-as-we-work-together.jpg?s=2048x2048&w=is&k=20&c=3kcJSyAHsYmLLQUsCdleqvpwyKGVCN1P89gDIW9fZQ4="
                            style="color: transparent; object-fit: contain;" class="rounded-xl"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Our
                            Customers</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Commitment to Our Customers</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                At Acentria Group, our customers are at the heart of everything we do. We are dedicated
                                to providing exceptional service and innovative solutions that meet their unique needs.
                                Our commitment to our customers is reflected in our continuous efforts to enhance their
                                experience, build trust, and deliver value. We listen to their feedback, understand
                                their challenges, and work tirelessly to exceed their expectations.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Our Partners" loading="lazy" width="500"
                            height="350" decoding="async" data-nimg="1"
                            src="https://media.istockphoto.com/id/1152767904/photo/smiling-diverse-couple-listening-to-financial-advisor-or-real-estate-agent.jpg?s=1024x1024&w=is&k=20&c=N-u_uySZHnH-YsdzwmpFoYB_mnhGc8JS3wibufmHB4w="
                            style="color: transparent; object-fit: contain;" class="rounded-xl"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Our
                            Partners</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Commitment to Our Partners</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Our partners play a crucial role in our success. At Acentria Group, we are committed to
                                building strong, collaborative relationships with our partners. We work together to
                                create mutually beneficial opportunities, drive innovation, and achieve shared goals.
                                Our commitment to our partners is grounded in trust, transparency, and a shared vision
                                for success. We value their expertise and contributions, and we strive to foster
                                long-term partnerships that deliver exceptional results.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Our People" loading="lazy" width="500"
                            height="350" decoding="async" data-nimg="1" src="/img/call.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-xl"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Our
                            People</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Commitment to Our People</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Our people are our greatest asset. At Acentria Group, we are committed to creating a
                                supportive and inclusive work environment where our employees can thrive. We invest in
                                their professional development, provide opportunities for growth, and recognize their
                                contributions. Our commitment to our people is reflected in our efforts to foster a
                                culture of respect, collaboration, and continuous improvement. We believe that by
                                empowering our employees, we can achieve greater success together.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Our Communities" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/call.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-xl"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Our
                            Communities</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Commitment to Our Communities</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                At Acentria Group, we are committed to making a positive impact on the communities we
                                serve. We believe in giving back and supporting initiatives that promote social and
                                economic development. Our commitment to our communities is demonstrated through our
                                corporate social responsibility programs, volunteer efforts, and partnerships with local
                                organizations. We strive to create lasting positive change and contribute to the
                                well-being and prosperity of our communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style scoped>
</style>