<div class="space-y-1 px-2">
    <!-- Dashboard -->
    <a href="{{ route('dashboard') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('dashboard') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('dashboard') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        Dashboard
    </a>

    <!-- Broker Profiles -->
    <a href="{{ route('brokers.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('brokers.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('brokers.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
        Broker Profiles
    </a>

    <!-- Leads -->
    <a href="{{ route('leads.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('leads.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('leads.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        Leads
    </a>

    <!-- Property Listings -->
    <a href="{{ route('properties.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('properties.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('properties.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V9.75a.75.75 0 01.75-.75h2.625c.621 0 1.125.504 1.125 1.125V21H8.25zM2.25 10.5h20.25" />
        </svg>
        Property Listings
    </a>

    <!-- Broker Wall -->
    <a href="{{ route('broker-wall.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('broker-wall.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('broker-wall.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v4.5H6v-4.5z" />
        </svg>
        Broker Wall
    </a>

    <!-- QR Business Cards -->
    <a href="{{ route('qr-cards.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('qr-cards.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('qr-cards.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75H16.5v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75H16.5v-.75z" />
        </svg>
        QR Business Cards
    </a>

    <!-- Reviews -->
    <a href="{{ route('reviews.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('reviews.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('reviews.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        Reviews
    </a>

    <!-- Analytics -->
    <a href="{{ route('analytics.index') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('analytics.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
        <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('analytics.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
        Analytics
    </a>
</div>

@can('access admin')
<div class="mt-8">
    <h3 class="px-3 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
        Admin
    </h3>
    <div class="mt-1 space-y-1 px-2">
        <a href="{{ route('admin.dashboard') }}" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md {{ request()->routeIs('admin.*') ? 'bg-primary-100 text-primary-700' : 'text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900' }}">
            <svg class="mr-3 flex-shrink-0 h-6 w-6 {{ request()->routeIs('admin.*') ? 'text-primary-500' : 'text-secondary-400 group-hover:text-secondary-500' }}" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Admin Panel
        </a>
    </div>
</div>
@endcan