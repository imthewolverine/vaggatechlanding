import React from 'react';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="admin-layout">
            <aside className="admin-sidebar">
                <nav>
                    <ul>
                        <li><a href="/admin">Dashboard</a></li>
                        <li><a href="/admin/users">Users</a></li>
                        <li><a href="/admin/settings">Settings</a></li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-content">
                {children}
            </main>
        </div>
    );
}