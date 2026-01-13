export default function NotFoundLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="text-center">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}