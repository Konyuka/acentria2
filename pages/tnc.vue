<script setup>
const ReinsuranceBannerContent = ref({
    title: 'Terms & Conditions',
    subTitle: 'T & C\'s',
    image: 'https://images.pexels.com/photos/357514/pexels-photo-357514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})

</script>

<template>
    <section class="bg-white">
        <ReinsuranceBanner :content="ReinsuranceBannerContent" />

        <div class="bg-white px-6 lg:px-8 font-sans">
            <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">

                <p class="mt-6 text-xl leading-8">
                    These terms and conditions (the “Agreement”) govern the use of insurance services provided by
                    Acentria Insurance (the “Company”). By accessing or using our services, you agree to be bound by
                    this Agreement.
                </p>



                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">2. Coverage</p>
                    <p class="mt-8">
                        The insurance coverage provided by Acentria Insurance is outlined in the individual insurance
                        policy issued to the policyholder. The terms, conditions, and limitations of coverage are
                        specified in the policy document.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">3. Premiums and Payments</p>
                    <p class="mt-8">
                        Policyholders are responsible for timely payment of premiums as outlined in the insurance
                        policy. Failure to make payments may result in the cancellation of coverage.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">4. Claims Process</p>
                    <p class="mt-8">
                        In the event of a covered loss, policyholders must promptly notify Acentria Insurance and follow
                        the claims process outlined in the policy. Acentria Insurance will assess and process claims in
                        accordance with the terms and conditions of the policy.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">5. Policy Renewal</p>
                    <p class="mt-8">
                        Policyholders have the option to renew their insurance policy upon expiration, subject to the
                        terms and conditions set forth by Acentria Insurance. Premium adjustments and changes in
                        coverage may apply upon renewal.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">6. Cancellation and Termination</p>
                    <p class="mt-8">
                        Acentria Insurance reserves the right to cancel or terminate a policy in accordance with the
                        terms and conditions outlined in the policy document. Policyholders may also have the right to
                        cancel their policy, subject to applicable fees and conditions.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">7. Privacy and Data Security</p>
                    <p class="mt-8">
                        Acentria Insurance is committed to protecting the privacy and security of policyholder
                        information. Acentria Insurance’s privacy policy outlines how personal information is collected,
                        used, and safeguarded.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">8. Governing Law</p>
                    <p class="mt-8">
                        This Agreement is governed by the laws of Kenya. Any disputes arising from or in connection with
                        this Agreement shall be resolved through arbitration in accordance with the rules of AKI.
                    </p>
                </div>

                <div class="mt-10 max-w-2xl">
                    <p class="font-bold text-2xl">9. Changes to Terms and Conditions</p>
                    <p class="mt-8">
                        Acentria Insurance reserves the right to modify these terms and conditions at any time.
                        Policyholders will be notified of any changes, and continued use of the services constitutes
                        acceptance of the updated terms.
                    </p>
                </div>




            </div>
        </div>

        <InTouch />
    </section>
</template>

<style scoped></style>