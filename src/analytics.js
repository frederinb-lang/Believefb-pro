/**
 * Vercel Web Analytics Integration
 * Initializes Vercel Analytics tracking for the Believefb application
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject();

console.log('Vercel Analytics initialized');
