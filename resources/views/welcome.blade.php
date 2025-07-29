<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BrokerConnect - Connect. Grow. Succeed.</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:300,400,500,600,700" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-full font-sans antialiased">
    <div class="bg-white">
        <!-- Header -->
        <header class="absolute inset-x-0 top-0 z-50">
            <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">BrokerConnect</span>
                        <span class="text-2xl font-bold text-primary-600">BrokerConnect</span>
                    </a>
                </div>
                <div class="hidden lg:flex lg:gap-x-12">
                    <a href="#features" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">Features</a>
                    <a href="#how-it-works" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">How It Works</a>
                    <a href="#pricing" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">Pricing</a>
                </div>
                <div class="flex flex-1 justify-end gap-x-4">
                    @auth
                        <a href="{{ route('dashboard') }}" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">Log in</a>
                        <a href="{{ route('register') }}" class="btn-primary">Get Started</a>
                    @endauth
                </div>
            </nav>
        </header>

        <!-- Hero Section -->
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
            
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
                        Connect. Grow. <span class="text-primary-600">Succeed.</span>
                    </h1>
                    <p class="mt-6 text-lg leading-8 text-secondary-600">
                        The ultimate platform for real estate brokers to showcase verified profiles, capture leads, and build lasting relationships with clients through innovative features and social networking.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        @guest
                            <a href="{{ route('register') }}" class="btn-primary text-lg px-8 py-3">Get Started</a>
                            <a href="#features" class="text-sm font-semibold leading-6 text-secondary-900 hover:text-primary-600">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        @else
                            <a href="{{ route('dashboard') }}" class="btn-primary text-lg px-8 py-3">Go to Dashboard</a>
                        @endguest
                    </div>
                </div>
            </div>
            
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>

        <!-- Features Section -->
        <div id="features" class="py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:text-center">
                    <h2 class="text-base font-semibold leading-7 text-primary-600">Everything you need</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                        Powerful features for modern brokers
                    </p>
                    <p class="mt-6 text-lg leading-8 text-secondary-600">
                        From verified profiles to lead management, BrokerConnect provides all the tools you need to succeed in today's competitive real estate market.
                    </p>
                </div>
                
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-secondary-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Verified Broker Profiles
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-secondary-600">
                                Build trust with verified credentials, professional photos, and comprehensive business information that clients can rely on.
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-secondary-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </div>
                                Smart Lead Capture
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-secondary-600">
                                Convert visitors into leads with intelligent forms, automated follow-ups, and detailed lead tracking and management.
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-secondary-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75H16.5v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75H16.5v-.75z" />
                                    </svg>
                                </div>
                                QR Business Cards
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-secondary-600">
                                Create digital business cards with QR codes for instant networking and seamless contact sharing at events and meetings.
                            </dd>
                        </div>

                        <div class="relative pl-16">
                            <dt class="text-base font-semibold leading-7 text-secondary-900">
                                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                </div>
                                Analytics & Insights
                            </dt>
                            <dd class="mt-2 text-base leading-7 text-secondary-600">
                                Track your performance with detailed analytics, lead conversion rates, and business insights to optimize your strategy.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-primary-600">
            <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to transform your real estate business?
                    </h2>
                    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-200">
                        Join thousands of successful brokers who use BrokerConnect to grow their business and build lasting client relationships.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        @guest
                            <a href="{{ route('register') }}" class="bg-white px-8 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 rounded-lg transition duration-200">
                                Get started
                            </a>
                            <a href="#features" class="text-sm font-semibold leading-6 text-white hover:text-primary-200">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        @else
                            <a href="{{ route('dashboard') }}" class="bg-white px-8 py-3 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 rounded-lg transition duration-200">
                                Go to Dashboard
                            </a>
                        @endguest
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-white">
            <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div class="flex justify-center space-x-6 md:order-2">
                    <p class="text-xs leading-5 text-secondary-500">&copy; 2024 BrokerConnect. All rights reserved.</p>
                </div>
                <div class="mt-8 md:order-1 md:mt-0">
                    <p class="text-center text-xs leading-5 text-secondary-500">
                        Built with ❤️ for real estate professionals
                    </p>
                </div>
            </div>
        </footer>
    </div>
</body>
</html>