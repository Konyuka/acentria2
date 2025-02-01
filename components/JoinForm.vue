
<template>
    <form>
        <div class="font-sans space-y-12">
            <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                <div>
                    <h2 class="subsection-heading text-black">Member <span class="text-brand-primary">Categories</span>
                    </h2>
                    <p class="mt-1 text-xs text-gray-600">
                        Please select your desired category.
                    </p>
                </div>

                <div class="max-w-2xl space-y-10 md:col-span-2">
                    <fieldset>
                        <div class=" space-y-6">
                            <div class="flex items-center gap-x-3">
                                <input id="push-everything" name="push-notifications" type="radio"
                                    class="size-4 border-gray-300 text-brand-primary focus:ring-brand-primary" />
                                <label for="push-everything" class="block text-sm/6 font-medium text-gray-900">Join as a
                                    Customer</label>
                            </div>
                            <div class="flex items-center gap-x-3">
                                <input id="push-email" name="push-notifications" type="radio"
                                    class="size-4 border-gray-300 text-brand-primary focus:ring-brand-primary" />
                                <label for="push-email" class="block text-sm/6 font-medium text-gray-900">
                                    Join as a Supplier
                                </label>
                            </div>

                        </div>
                    </fieldset>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                <div>
                    <h2 class="subsection-heading text-gray-900">Personal <span
                            class="text-brand-primary">Information</span></h2>
                    <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
                </div>

                <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                    <div class="sm:col-span-3">
                        <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First name</label>
                        <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm/6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last name</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm/6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Email Address</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm/6" />
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Phone Number</label>
                        <div class="mt-2">
                            <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm/6" />
                        </div>
                    </div>

                </div>
            </div>


        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
            <button type="submit"
                class="rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                Submit
            </button>
        </div>
    </form>
</template>

<script setup>
import { PhotoIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
</script>