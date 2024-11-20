<template>
    <div>
        <section class="relative my-5 mx-auto container bg-white">
            <div class="relative w-full bg-cover bg-center bg-no-repeat false" style="background-image: none;">
                <div class="container">
                    <div
                        class="flex items-center bg-cover px-4 py-10 text-center lg:text-left flex-col lg:items-center justify-between flex-no-wrap gap-6 md:gap-12">
                        <div class="flex flex-col gap-6 mx-auto items-center justify-center text-center max-w-5xl">
                            <div>
                                <p
                                    class="font-sans tracking-normal text-xs text-gray-900 leading-tight lg:leading-tight pb-2">
                                    Your confidentiality wishes shall be fully protected. We understand the importance
                                    of privacy and are committed to safeguarding your personal information. Rest assured
                                    that any details you provide will be handled with the utmost care and discretion.
                                    Your feedback is invaluable to us, and we are dedicated to addressing your concerns
                                    in a secure and confidential manner.
                                    <br><br>
                                    Help us serve you better by sharing your experiences and suggestions. Your input
                                    helps us improve our services and ensures that we meet your expectations. We
                                    appreciate your trust and are here to support you every step of the way.
                                    Thank you for your cooperation and for choosing to communicate with us. Your privacy
                                    and satisfaction are our top priorities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="pb-2 text-left">
                    <h2 id="" class="font-sans text-3xl  font-semibold lg:pb-4">
                        Write <span class="text-brand-primary">To Us</span>
                    </h2>
                </div>
                <div class=" grid grid-cols-1 gap-5 lg:grid-cols-form-block">

                    <div class="h-fit rounded-xl bg-brand-primary px-5 md:px-12 py-5 md:py-14 shadow-card">
                        <h5 class="font-sans text-sm text-white leading-tight lg:leading-tight pb-2">
                            Please use this form to tell us about your complaints. Your feedback is important to us, and
                            we are committed to addressing your concerns promptly and effectively. By providing detailed
                            information, you help us understand the issue better and take appropriate action.

                        </h5>
                    </div>

                    <form
                        class="font-sans border-brand-gray-100 rounded-xl border bg-brand-white px-2 md:px-10 py-5 shadow-card">

                        <fieldset class="mb-8">
                            <legend class="text-lg font-semibold text-gray-900">Do you want to be anonymous?</legend>
                            <div class="mt-2 space-y-2 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                <div class="flex items-center">
                                    <input v-model="anonymousYes" id="anonymousYes" name="notification-method"
                                        type="radio"
                                        class="h-4 w-4 border-gray-300 text-brand-primary focus:ring-brand-primary">
                                    <label for="email" class="ml-3 block text-xs font-bold text-gray-900">Stay
                                        anonymous</label>
                                </div>
                                <div class="flex items-center">
                                    <input v-model="anonymousNo" id="anonymousNo" name="notification-method"
                                        type="radio" checked
                                        class="h-4 w-4 border-gray-300 text-brand-primary focus:ring-brand-primary">
                                    <label for="sms" class="ml-3 block text-xs font-bold text-gray-900">
                                        Submit my Contacts
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <div v-show="anonymousNo == 'on'" class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                            <div class="relative pb-2">
                                <label for="FirstName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Your First
                                    name</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="FirstName" id="FirstName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                            <div class="relative pb-2">
                                <label for="LastName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Your Last
                                    name</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="LastName" id="LastName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                            <div class="relative pb-2">
                                <label for="WorkEmail"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">
                                    Your Email address
                                </label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    </div>
                                    <input name="WorkEmail" id="WorkEmail"
                                        class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                            <div class="relative pb-2">
                                <label for="PhoneNumber"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Your Phone
                                    number</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    </div>
                                    <input name="PhoneNumber" id="PhoneNumber"
                                        class="block w-full rounded-md border-0 py-1 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                            <div class="relative pb-2">
                                <label for="FirstName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Name of
                                    Officer/Staff</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="FirstName" id="FirstName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                            <div class="relative pb-2">
                                <label for="LastName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Phone Number of
                                    the Officer/Staff</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="LastName" id="LastName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
                            <div class="relative pb-2">
                                <label for="FirstName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Email of the
                                    Officer/Staff</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="FirstName" id="FirstName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                            <div class="relative pb-2">
                                <label for="LastName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">Estimated Date
                                    the Event occurred</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <input name="LastName" id="LastName"
                                        class="block w-full rounded-md border-0 py-1 pl-4 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined" />
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 false">
                            <div class="relative pb-2">
                                <label for="CompanyName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">
                                    Any other Collaborator? (Please specify with names)
                                </label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <textarea name="CompanyName" id="CompanyName" rows="1"
                                        class="block w-full rounded-md border-0 py-10 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 false">
                            <div class="relative pb-2">
                                <label for="CompanyName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">
                                    Describe the complain</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <textarea name="CompanyName" id="CompanyName" rows="3"
                                        class="block w-full rounded-md border-0 py-10 pl-10 focus:ring-brand-primary text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 undefined"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 false">
                            <div class="col-span-full">
                                <label for="CompanyName"
                                    class="text-light-title block pl-2 text-sm font-semibold leading-6">
                                    Attach any evidence or Supporting Document (s) (if any)
                                </label>
                                <div
                                    class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path fill-rule="evenodd"
                                                d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <div class="mt-4 flex text-sm/6 text-gray-600">
                                            <label for="file-upload"
                                                class="relative cursor-pointer rounded-md bg-white font-semibold text-brand-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                        </div>
                                        <p class="text-xs/5 text-gray-600">PNG, JPG, PDF, DOCX, MP4, MP3, XLSX</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p class="mt-5 leading-normal font-sans text-light-content pl-4 text-xs">
                            All complaints shall be resolved within ten (10) working days from the date of receipt
                            of the complaints. The resolution of the complaints shall be forwarded to the complaint.
                        </p> 
                        <button
                            class="group border-2 border-brand-primary duration-200 px-3 py-1 whitespace-nowrap bg-brand-primary rounded text-brand-white hover:bg-brand-red-2 active:bg-brand-red-1 active:border-brand-red-1 hover:border-brand-red-2 mt-4 flex font-semibold"
                            type="submit">
                            <div class="flex items-center justify-center">
                                <div class="px-2">Let’s talk.</div>
                                <svg class="relative top-[1px] flex h-3 w-3 fill-none stroke-current stroke-[1.5] transition-transform duration-150 ml-[6px] undefined"
                                    fill="none" stroke="currentColor" viewBox="0 0 10 10" aria-hidden="true">
                                    <g fill-rule="evenodd">
                                        <path class="transition-opacity opacity-0" d="M0 5h7"></path>
                                        <path class="transition-all duration-75 translate-x-0 transform-none"
                                            d="M1 1l4 4-4 4"></path>
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const anonymousYes = ref(null)
const anonymousNo = ref('on')
</script>