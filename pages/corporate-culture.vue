<script setup>
const bannerContent = ref({
    subtitle: 'Our Organizational Culture',
    title: 'Corporate Culture',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const faqs = ref([
    {
        name: "Think Customer",
        content:"I care about our customers so I go the extra mile to earn their trust and loyalty.",
    },
    {
        name: "Embrace Change",
        content:"I embrace new challenges and I see new ways of doing things as an opportunity to grow.",
    },
    {
        name: "Act Now",
        content:"I take accountability and manage risks accordingly, always keeping things simple.",
    },
    {
        name: "Move Together",
        content:"I seek opportunities to promote collaboration and work together to achieve common goals.",
    },
    {
        name: "Speak Up",
        content:"I feel free to raise any idea, ask any question or escalate any issues or risks, building an environment of respect and trust. I am comfortable sharing and receiving feedback.",
    },
]);
</script>

<template>
    <section class="min-h-screen font-sans bg-white">

        <BannerMain :content="bannerContent" />

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
                                    <br><br>
                                    At Acentria Group, we believe in building lasting relationships with our clients,
                                    grounded in trust and mutual respect. Our team of dedicated professionals is
                                    committed to exceeding client expectations, ensuring that every interaction is
                                    marked by integrity, innovation, and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-white" style="background-color: rgb(246, 248, 252);">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Corporate Governance" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Our Governance
                            Framework</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Strong Governance for Sustainable Growth</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                At Acentria Group, we believe that strong corporate governance is the foundation of
                                sustainable growth and long-term success. Our governance framework is designed to ensure
                                transparency, accountability, and ethical conduct in all our operations. We are
                                committed to upholding the highest standards of governance to protect the interests of
                                our stakeholders and build trust with our clients, partners, and communities.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Board of Directors" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Board of
                            Directors</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Leadership and Oversight</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Our Board of Directors plays a crucial role in providing leadership and oversight to the
                                company. Comprising experienced professionals from diverse backgrounds, the Board
                                ensures that Acentria Group adheres to its strategic objectives and operates with
                                integrity and accountability. The Board is committed to fostering a culture of
                                transparency and ethical conduct throughout the organization.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Risk Management" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Risk
                            Management</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Proactive Risk Management</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Effective risk management is integral to our corporate governance framework. At Acentria
                                Group, we proactively identify, assess, and manage risks to ensure the stability and
                                resilience of our operations. Our risk management practices are designed to protect our
                                assets, safeguard our reputation, and ensure compliance with regulatory requirements. We
                                believe that risk management is everyone's responsibility, and we foster a culture of
                                risk awareness across the organization.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col my-8 lg:my-4 lg:gap-16">
                    <div class="relative p-4 lg:basis-1/2"><img alt="Image of Ethical Conduct" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg"></div>
                    <div class="flex flex-col justify-center lg:basis-1/2"><label
                            class="text-xs leading-normal font-regular text-light-highlight font-bold">Ethical
                            Conduct</label>
                        <h2 id="" class="text-xl pb-4 md:pb-5 font-semibold leading-tight text-light-title ">
                            Upholding the Highest Ethical Standards</h2>
                        <div class="text-light-content pb-5 md:pb-6">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                At Acentria Group, we are committed to upholding the highest ethical standards in all
                                our business practices. Our Code of Conduct outlines the principles and guidelines that
                                govern our actions and decisions. We promote a culture of integrity, honesty, and
                                accountability, ensuring that our employees, partners, and stakeholders adhere to these
                                values. By fostering an ethical work environment, we build trust and credibility with
                                our clients and communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>

            <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover px-4 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-5xl">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">

                                    Our culture encompasses corporate behaviours. These behaviours are the hallmark of
                                    our culture and are meant to guide how we work and how we live the Acentria brand.
                                    Companies with a strong internal culture attract and retain talent. They perform
                                    better. Therefore, in order to leverage the progress we have made in recent years,
                                    we have reshaped the behaviours.

                                    These “reshaped” behaviours have been created around a single word: T.E.A.M.S. Each
                                    letter represents a behaviour, so it is easier to understand and memorise all five.
                                    This is what each letter stands for:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Accordion :faqs="faqs" />
        </div>

    </section>
</template>

<style scoped></style>
