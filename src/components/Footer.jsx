import React from 'react';

// Footer component with social media links
export default function Footer() {
    return (
        <footer className="border-t mt-12">
            <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
                <div>© {new Date().getFullYear()} Adewale Ibrahim</div>
                <div className="flex gap-3 mt-3 md:mt-0">
                    <a href="#" className="hover:underline">GitHub</a>
                    <a href="#" className="hover:underline">LinkedIn</a>
                    <a href="#" className="hover:underline">Twitter</a>
                </div>
            </div>
        </footer>
    );
}