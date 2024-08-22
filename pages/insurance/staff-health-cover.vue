<script setup>
import { ref } from "vue";

const InsuranceBannerContent = ref({
    subtitle: 'Empower Your Team\'s Well- being',
    title: 'Ensure the Health and Happiness of Your Team.',
    image: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'At Acentria, we know that your employees are the backbone of your organization’s success. When your team is healthy and happy, they bring their A-game to work. With Acentria’s Employee Health Insurance, you’re showing your team that you care, boosting their happiness, and making them want to stick around for long.'
})

const InsuranceCardsContent = ref({
    title: 'Who is this medical insurance for?',
    users: [
        {
            name: 'Myself',
            icon: 'fas fa-user',
            description: 'Stay healthy without the stress. Get medical insurance that\'s got your back',
        },
        {
            name: 'My family',
            icon: 'fas fa-users',
            description: 'Safeguard your family\'s health & wellbeing because their smiles mean everything.',
        },
        {
            name: 'My Parents',
            icon: 'fas fa-users',
            description: 'Give your parents the gift of protection and care. Safeguard their future together.',
        },
    ],
})

const InsuranceFaqsContent = ref({

})

const faqs = ref([
    {
        name: 'Is employee insurance cover mandatory for all employees?',
        content:'In certain regions, specific insurances, such as health insurance, may be compulsory, while others are provided voluntarily by employers. It is highly recommended that employers provide this insurance to their employees as it can greatly alleviate their situations in case of medical emergencies, offering an extra layer of protection alongside government-provided healthcare coverage, such as NHIF. This not only complies with local regulations and country-specific requirements but also promotes employee loyalty and work ethic, as employees appreciate that their health is taken into consideration'
    },
    {
        name: 'How do employees benefit from this cover?',
        content:'Employees benefit from insurance coverage by having access to essential health care, financial protection in case of illness or injury, and peace of mind. It can also provide support to their families in case of disability or death. Contact us today to find out more about the coverage'
    },
    {
        name: 'How are premiums calculated?',
        content:'Premiums for employee insurance cover are often shared between the employer and the employee, with the employer covering a portion of the cost. The specific contribution amounts can vary by company and plan.'
    },
    {
        name: 'How can employees learn more about their insurance coverage and benefits?',
        content: 'Employees can usually obtain detailed information about their insurance coverage and benefits through their employer\'s human resources department or by reviewing the plan documents provided by the employer.They can also contact us directly for inquiries.'
    },
    {
        name: 'How do I claim & How fast is the claim process?',
        content:'Acentria Insurance typically takes between 10 to 14 working days to thoroughly verify and investigate your claim. To claim, email your request to claims@acentriagroup.com, or call us direct. Once the investigation is complete, we will personally get in touch with you either by phone or through one of our agents to provide you with the next steps in the claims process. Your prompt cooperation and timely submission of required documentation can help expedite this process.'
    },
    {
        name: 'How can I get started?',
        content: '<b>1.Compare and Choose:</b> Compare insurance quotes, select a plan that suits your needs, and make the purchase. <br> <b>2.Register and Get Insured:</b> Register for your chosen plan, and you\'ll be insured. <br><br> Our agent will reach out and follow up with you to ensure you have been insured and provide you with all the necessary information, including an insurance card, access to the self- help portal, your insurance certificate, and any other requirements you may need.',
    },
    
])

</script>

<template>

    <div>
        <InsuranceBanner :content="InsuranceBannerContent" />
        <InsuranceFaqs :content="faqs" />
        <div class="overflow-hidden bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">


                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Boost Employee Morale and Loyalty
                            </p>
                            <p class="mt-6 text-lg leading-8 text-gray-600">
                                Healthy and motivated employees aren’t just assets; they’re catalysts for progress. The
                                connection between a strong workforce and an organization’s triumph is undeniable. As
                                your employees embrace their health journey with the support of Acentria’s Employee
                                Health Insurance, their engagement and dedication multiply exponentially. When they feel
                                genuinely valued, their morale reaches new heights, and their loyalty to your company
                                strengthens. This dynamic cycle of care, appreciation, and commitment creates a virtuous
                                loop where both your employees and your organization flourish in harmony. With every
                                step, you’re nurturing a culture that prioritizes well-being, elevating the overall
                                quality of work and paving the way for sustained achievements. At Acentria, we recognize
                                that by investing in your employees’ health, you’re investing in a future that’s
                                brighter, healthier, and more successful for everyone involved. This investment not only
                                boosts productivity but also reduces absenteeism and healthcare costs, creating a more
                                efficient and resilient workforce. By fostering a supportive environment, you empower
                                your employees to reach their full potential, driving innovation and growth within your
                                organization. Together, we can build a healthier, more prosperous future.
                            </p>

                        </div>
                    </div>
                    <img src="https://images.pexels.com/photos/7971229/pexels-photo-7971229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Product screenshot"
                        class="w-full  max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover !lg:h-1/2">
                </div>
            </div>
        </div>
        <InsuranceWhy />
        <InTouch />
    </div>



</template>
