<template>
    <div class="bg-white py-5 font-sans">
        <div class="mx-auto px-6 max-w-7xl lg:px-8">
            <p class="mt-2 max-w-lg text-pretty text-2xl font-semibold tracking-tight text-gray-950">
                Photos & Videos
            </p>
            <div class="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                <div class="relative lg:col-span-3">
                    <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                    <div
                        class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left" src="/img/team.jpeg" alt="" />
                        <div class="p-10 pt-4">
                            <p class="mt-2 text-sm font-medium tracking-tight text-gray-950">Team Building</p>
                            <p class="mt-2 max-w-lg text-xs text-gray-600">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.
                            </p>
                        </div>
                    </div>
                    <div
                        class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
                </div>
                <div class="relative lg:col-span-3">
                    <div class="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
                    <div
                        class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left lg:object-right" src="/img/journey.jpg" alt="" />
                        <div class="p-10 pt-4">
                            <p class="mt-2 text-sm font-medium tracking-tight text-gray-950">Acentria Cycle Challenge</p>
                            <p class="mt-2 max-w-lg text-xs text-gray-600">Curabitur auctor, ex quis auctor venenatis,
                                eros arcu rhoncus massa, laoreet dapibus ex elit vitae odio.</p>
                        </div>
                    </div>
                    <div
                        class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
                    <div
                        class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-left" src="/img/simo-office.jpg" alt="" />
                        <div class="p-10 pt-4">
                            <p class="mt-2 text-sm font-medium tracking-tight text-gray-950">Office Shoot</p>
                            <p class="mt-2 max-w-lg text-xs text-gray-600">Sed congue eros non finibus molestie.
                                Vestibulum euismod augue.</p>
                        </div>
                    </div>
                    <div
                        class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white" />
                    <div
                        class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                        <img class="h-80 object-cover object-center" src="/img/what.jpg" alt="" />
                        <div class="p-10 pt-4">
                            <p class="mt-2 text-sm font-medium tracking-tight text-gray-950">Business Development
                            </p>
                            <p class="mt-2 max-w-lg text-xs text-gray-600">Maecenas at augue sed elit dictum
                                vulputate, in nisi aliquam maximus arcu.</p>
                        </div>
                    </div>
                    <div class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
                </div>
                <div class="relative lg:col-span-2">
                    <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                    <div
                        class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                        <img class="h-80 object-cover object-center" src="/img/award.jpg" alt="" />
                        <div class="p-10 pt-4">
                            <p class="mt-2 text-sm font-medium tracking-tight text-gray-950">Awards
                            </p>
                            <p class="mt-2 max-w-lg text-xs text-gray-600">Aenean vulputate justo commodo auctor
                                vehicula in malesuada semper.</p>
                        </div>
                    </div>
                    <div
                        class="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
                </div>
            </div>
        </div>
    </div>
</template>
