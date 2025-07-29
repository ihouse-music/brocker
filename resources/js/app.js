import './bootstrap';
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import collapse from '@alpinejs/collapse';

// Alpine.js plugins
Alpine.plugin(focus);
Alpine.plugin(collapse);

// Start Alpine
window.Alpine = Alpine;
Alpine.start();