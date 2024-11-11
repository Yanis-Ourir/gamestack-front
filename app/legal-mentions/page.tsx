'use client';
import React from 'react';

export default function LegalMentions() {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-12 px-6 md:px-16">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Legal Mentions</h1>

                {/* Section: About the Website */}
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">About This Website</h2>
                    <p className="text-3xl text-gray-300">
                        This website is designed to allow users to create, share, and discover incredible experiences from their favorite video games.
                        The platform uses information provided by users and integrates data sourced from third-party providers like RAWG to deliver a rich
                        experience for gamers.
                    </p>
                </section>

                {/* Section: User Data */}
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">User Data Collection</h2>
                    <p className="text-3xl text-gray-300">
                        We only collect your email address during registration to identify you as a user on our platform. We do not share your email address
                        or any personal data with third parties. However, we recommend that you avoid sharing sensitive personal information when using
                        our platform, as your content may be visible to others. Inappropriate content, including hateful messages or personal data,
                        will be removed.
                    </p>
                </section>

                {/* Section: RAWG API Attribution */}
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Data Attribution</h2>
                    <p className="text-3xl text-gray-300">
                        This website utilizes data from the RAWG API to provide detailed information about video games, such as titles, images, and descriptions.
                    </p>
                    <p className="text-3xl text-gray-300 mt-2">
                        In compliance with RAWG&apos;s <a href="https://rawg.io/apidocs" target="_blank" rel="noopener noreferrer" className="text-red-400 underline">Terms of Service</a>, we:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-300 text-2xl">
                        <li>Attribute RAWG as the source of the data and images used on this website.</li>
                        <li>Include an active hyperlink to RAWG from every page where their data is displayed.</li>
                        <li>Do not redistribute RAWG&apos;s data or make it available for external use beyond this project.</li>
                        <li>Use RAWG&apos;s API within the limits of free commercial use for projects with less than 100,000 monthly active users or 500,000 page views per month.</li>
                    </ul>
                    <p className="text-3xl text-gray-300 mt-4">
                        If you have any questions about the usage of RAWG&apos;s data, feel free to reach out to RAWG at <a href="mailto:api@rawg.io" className="text-red-400 underline">api@rawg.io</a>.
                    </p>
                </section>

                {/* Section: Terms of Use */}
                <section className="mb-12">
                    <h3 className="text-4xl font-semibold mb-4">Terms of Use</h3>
                    <p className="text-3xl text-gray-300">
                        By using this website, you agree to adhere to the following terms:
                    </p>
                    <ul className="list-disc list-inside mt-4 text-gray-300 text-2xl">
                        <li>Respect other users and refrain from posting hateful, harmful, or inappropriate content.</li>
                        <li>Avoid sharing personal or sensitive information in publicly accessible areas of the website.</li>
                        <li>Comply with all applicable laws and regulations when using the platform.</li>
                        <li>Understand that violating these terms may result in the removal of your content or suspension of your account.</li>
                    </ul>
                </section>

                {/* Section: Contact Information */}
                <section className="mb-12">
                    <h2 className="text-4xl font-semibold mb-4">Contact Information</h2>
                    <p className="text-3xl text-gray-300">
                        If you have any questions or concerns regarding these legal mentions or the platform in general, you can reach out to us via email:
                    </p>
                    <p className="text-3xl text-red-400 mt-2">
                        <a href="mailto:support@yourwebsite.com" className="underline">support@yourwebsite.com</a>
                    </p>
                </section>

            </div>
        </div>
    );
}
