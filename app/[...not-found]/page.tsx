'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                Page not found
            </p>
            <Link href="/" style={{ color: '#0070f3', textDecoration: 'none' }}>
                Go back home
            </Link>
        </div>
    );
}