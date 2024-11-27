<script setup>
const bannerContent = ref({
    subtitle: 'Our Organizational Culture',
    title: 'Corporate Culture',
    image: 'https://images.pexels.com/photos/6535346/pexels-photo-6535346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const faqs = ref([
    {
        name: "Think Customer",
        content: "I care about our customers so I go the extra mile to earn their trust and loyalty.",
    },
    {
        name: "Embrace Change",
        content: "I embrace new challenges and I see new ways of doing things as an opportunity to grow.",
    },
    {
        name: "Act Now",
        content: "I take accountability and manage risks accordingly, always keeping things simple.",
    },
    {
        name: "Move Together",
        content: "I seek opportunities to promote collaboration and work together to achieve common goals.",
    },
    {
        name: "Speak Up",
        content: "I feel free to raise any idea, ask any question or escalate any issues or risks, building an environment of respect and trust. I am comfortable sharing and receiving feedback.",
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
                        class="flex items-center bg-cover py-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center">
                            <div>
                                <p class="my-5 heading-class text-black text-left">
                                    The <span class="text-brand-primary">Acentria Way</span>
                                </p>
                                <p
                                    class="text-left font-sans tracking-normal text-xs text-gray-900 leading-normal pb-2">

                                    At Acentria Group, our corporate culture is the driving force behind everything we
                                    do. It is shaped by a clear sense of purpose and guided by our commitment to
                                    fostering a supportive, innovative, and dynamic environment where every employee
                                    thrives.
                                    Our culture isn't just about the work we do—it’s about how we do it and the values
                                    that shape our interactions. We call this <b>The Acentria Way!

                                    </b>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-white">
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col">
                    <!-- <div class="relative p-4 lg:basis-1/2"><img alt="Image of Corporate Governance" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg">
                    </div> -->
                    <div class="flex flex-col justify-center">
                        <label class="heading-class">
                            Our <span class="text-brand-primary">Culture</span>
                        </label>
                        <h2 id="" class="subheading-class leading-normal mb-3 ">
                            Creating the Best Employee Experience and Driving Business with Purpose
                        </h2>
                        <div class="text-light-content pb-2">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                The Acentria Way is more than a set of principles—it’s a culture that unites us across
                                borders, disciplines, and functions. It defines how we collaborate, innovate, and
                                empower one another.
                                <br><br>
                                <span>
                                    • <b>Purpose-Driven:</b> At Acentria, we work with a clear vision to “empower
                                    dreams,
                                    ignite imagination, and propel prosperity.” Every day, we inspire each other to aim
                                    higher, think bolder, and achieve greater success. <br><br>
                                    • <b>Employee Experience:</b> We are committed to creating a workplace where every
                                    employee
                                    feels valued, heard, and supported. From fostering a culture of open communication
                                    to offering continuous development opportunities, we believe in empowering our
                                    people to reach their full potential. <br><br>
                                    • <b>Impactful Leadership:</b> Our leaders set the tone by modelling transparency,
                                    integrity, and empathy, inspiring teams to work with purpose and passion. Through
                                    collaboration and shared values, we collectively drive results that matter.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row flex-col lg:gap-16">
                    <!-- <div class="relative p-4 lg:basis-1/2"><img alt="Image of Corporate Governance" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg">
                    </div> -->
                    <div class="flex flex-col justify-center">
                        <label class="heading-class">
                            Less <span class="text-brand-primary">is more</span>
                        </label>
                        <h2 id="" class="subheading-class leading-normal mb-3 ">
                            Leveraging Technological Advancements to Respond Faster to Market Needs and Innovation to
                            Improve Our Processes
                        </h2>
                        <div class="text-light-content pb-2">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                In an ever-evolving business landscape, less is more means leveraging the power of
                                technology to streamline operations and drive smarter, faster, and more effective
                                decision-making.
                                <br><br>
                                <span>
                                    • <b>Agility Through Technology:</b> We embrace cutting-edge technology to improve
                                    our
                                    processes, reduce inefficiencies, and meet market demands swiftly. Whether it’s
                                    automating routine tasks, or utilizing advanced data analytics, we continuously
                                    explore ways to stay ahead of the curve. <br> <br>
                                    • <b>Innovation at Our Core:</b> We believe innovation is key to staying relevant in
                                    today’s fast-paced world. By simplifying complex processes and integrating tech
                                    solutions, we’re able to move quickly, adapt to changes, and deliver impactful
                                    results to our clients. <br> <br>
                                    • <b>Driving Change:</b> Through constant digital evolution, we ensure that Acentria
                                    remains a leader in delivering the highest quality services with unparalleled
                                    efficiency, ensuring we can meet evolving client needs and exceed market
                                    expectations.

                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container mx-auto flex px-4 lg:flex-row-reverse flex-col lg:gap-16">
                    <!-- <div class="relative p-4 lg:basis-1/2"><img alt="Image of Corporate Governance" loading="lazy"
                            width="500" height="350" decoding="async" data-nimg="1" src="/img/award.jpg"
                            style="color: transparent; object-fit: contain;" class="rounded-lg">
                    </div> -->
                    <div class="flex flex-col justify-center ">
                        <label class="heading-class">
                            Create <span class="text-brand-primary">Balance</span>
                        </label>
                        <h2 id="" class="subheading-class leading-normal mb-3 ">
                            Shifting from Labor Force to Talent, Building Capabilities, Maximizing Potential in a
                            Holistic Manner, and Driving Productivity through Empathic Leadership
                        </h2>
                        <div class="text-light-content pb-2">
                            <p class="text-xs leading-normal font-regular text-light-content mb-4 !text-inherit">
                                Creating a balanced and inclusive environment is essential for driving sustainable
                                growth. At Acentria, we understand that success isn’t just about the work—it’s about how
                                we approach talent, development, and leadership.
                                <br><br>
                                <span>
                                    • <b>Talent Over Labor:</b> We focus on attracting and nurturing talent—not just
                                    filling
                                    positions. This shift allows us to build an empowered, engaged workforce that brings
                                    fresh ideas and a passion for progress. <br><br>
                                    • <b>Holistic Development:</b> We emphasize the importance of professional and
                                    personal
                                    growth, offering opportunities for skill development, emotional intelligence, and
                                    leadership training to ensure our teams are well-rounded and prepared for future
                                    challenges. <br><br>
                                    • <b>Empathic Leadership:</b> We understand that strong leadership goes beyond
                                    decision-making—it’s about inspiring, motivating, and supporting our teams. Our
                                    leaders practice empathy, recognizing the diverse needs of their teams and creating
                                    a work culture that prioritizes well-being, collaboration, and respect. <br><br>
                                    • <b>Maximizing Potential:</b> By aligning personal growth with organizational
                                    goals, we
                                    ensure that our employees are not only productive but also fulfilled in their roles.
                                    We help people discover their strengths, foster creativity, and achieve their
                                    personal best, leading to a more productive, satisfied, and resilient workforce.

                                </span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div>

            <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="background-image: none;">
                <div class="container">
                    <h1 class="mb-3 heading-class text-left">Our Commitment <span class="text-brand-primary">to
                            Culture</span></h1>
                    <div
                        class="flex items-center bg-cover  text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-left">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">

                                    At Acentria, our corporate culture is what makes us unique. It drives the way we
                                    work, collaborate, and innovate. We’re committed to a culture that empowers our
                                    people, embraces technology, and encourages holistic growth. As we continue to
                                    evolve, The Acentria Way will remain at the heart of everything we do—shaping our
                                    future, our success, and our collective impact on the world.
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
