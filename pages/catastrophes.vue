<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Ensure Robust Risk Management Strategies',
    subTitle: 'Protecting Against Catastrophes',
    image: 'https://images.pexels.com/photos/1264438/pexels-photo-1264438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
const ReinsuranceFeatureContent = ref({
    title: 'Catastrophe Management',
    image: 'https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: 'In an increasingly risky world, insurers and reinsurers require sophisticated tools to quantify and manage the risks they face. At, Acentria, our analytics professionals have developed specialized catastrophe models that assist in impact forecasting, enabling firms to analyze the financial impacts of catastrophic events. This allows for the development of effective reinsurance, underwriting, and exposure management strategies to stabilize an insurer\'s loss experience and reduce the disruptive effects of catastrophes.Our reinsurance solutions provide a vital safety net, helping you: '
})

</script>

<template>

    <div class="bg-white">

        <ReinsuranceBanner :content="ReinsuranceBannerContent" />
        <ReinsuranceFeature :content="ReinsuranceFeatureContent" />

        <div class="container pb-10">
            <div class="grid gap-6 md:grid-cols-4 text-center">
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <div class="flex justify-center mb-4">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                            <i class="fas fa-bolt text-white "></i> <!-- Icon for Absorb Shock -->
                        </span>
                    </div>
                    <h2 class="text-lg font-semibold text-gray-900">Absorb Shock</h2>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700">
                        Transfer the financial burden of catastrophic events to reinsurers, minimizing the impact on
                        your business.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <div class="flex justify-center mb-4">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                            <i class="fas fa-sync text-white "></i> <!-- Icon for Maintain Continuity -->
                        </span>
                    </div>
                    <h2 class="text-lg font-semibold text-gray-900">Maintain Continuity</h2>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700">
                        Ensure business operations continue smoothly, even in the face of significant disruptions.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <div class="flex justify-center mb-4">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                            <i class="fas fa-hand-holding-heart text-white "></i>
                            <!-- Icon for Support Recovery -->
                        </span>
                    </div>
                    <h2 class="text-lg font-semibold text-gray-900">Support Recovery</h2>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700">
                        Accelerate your recovery process with efficient claims management and support.
                    </p>
                </div>
                <div class="rounded-xl p-6 ring-1 ring-brand-primary shadow-xl">
                    <div class="flex justify-center mb-4">
                        <span class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-red-500">
                            <i class="fas fa-building-shield text-white "></i>
                            <!-- Icon for Build Resilience -->
                        </span>
                    </div>
                    <h2 class="text-lg font-semibold text-gray-900">Build Resilience</h2>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700">
                        Develop a robust risk management framework that fortifies your company against future risks.
                    </p>
                </div>
            </div>

        </div>



        <ContactForm />
    </div>



</template>
