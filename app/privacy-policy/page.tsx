export default function PrivacyPolicy() {
    return (
        <section className="bg-gray-900 text-gray-200 min-h-screen py-12 px-8 md:px-20 flex flex-col items-center">
            <header className="text-center mb-12">
                <h1 className="text-6xl mb-4 text-white">Privacy Policy</h1>
                <p className="text-2xl max-w-3xl">
                    Your privacy is very important to us. This Privacy Policy outlines how we handle your data and the rules to follow when interacting with our platform.
                </p>
            </header>

            <div className="w-full max-w-4xl bg-gray-800 rounded-lg p-8 shadow-lg">
                <section className="mb-8">
                    <h2 className="text-4xl mb-4 text-purple-400">1. Information We Collect</h2>
                    <p className="text-gray-300 text-2xl">
                        To create an account on our platform, we only require your <span className="text-white">email address</span>. This is used solely for account registration and communication related to your account. <span className="text-white">We do not share your email address</span> with any third parties.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl mb-4 text-purple-400">2. User Content and Privacy</h2>
                    <p className="text-gray-300 text-2xl mb-4">
                        You have the freedom to share content on our platform, but please be cautious about sharing <span className="text-white">personal information</span>. Avoid including any sensitive data, as content you post may be visible to others. We cannot guarantee the security of any personal information you choose to share publicly.
                    </p>
                    <p className="text-gray-300 text-2xl">
                        <span className="text-white">Note:</span> Any posts or comments you make are your responsibility. Please keep your content respectful and appropriate, as outlined in our guidelines below.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl mb-4 text-purple-400">3. Community Guidelines</h2>
                    <p className="text-gray-300 text-2xl mb-4">
                        To maintain a safe and enjoyable environment, we require all users to adhere to the following guidelines:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 text-2xl space-y-2">
                        <li>Do not post any <span className="text-white">hateful, offensive, or discriminatory messages</span>.</li>
                        <li>Avoid sharing any <span className="text-white">personal information</span> that could be misused by others.</li>
                        <li>Respect the <span className="text-white">privacy and safety</span> of other users.</li>
                        <li>Refrain from spamming or sharing repetitive content.</li>
                    </ul>
                    <p className="text-gray-300 text-2xl mt-4">
                        Any content that violates these guidelines may be removed, and users who repeatedly breach the rules may face account suspension.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl mb-4 text-purple-400">4. Data Security</h2>
                    <p className="text-gray-300 text-2xl">
                        We are committed to protecting your information. Although we only collect minimal data (email), we have implemented security measures to protect it. However, please be aware that no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-4xl mb-4 text-purple-400">5. Changes to Our Privacy Policy</h2>
                    <p className="text-gray-300 text-2xl">
                        We may update this Privacy Policy occasionally to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically for the latest information on our privacy practices.
                    </p>
                </section>

                <section>
                    <h2 className="text-4xl mb-4 text-purple-400">6. Contact Us</h2>
                    <p className="text-gray-300 text-2xl">
                        If you have any questions about this Privacy Policy or your data, please contact us at:
                        <a href="mailto:support@yourapp.com" className="text-purple-500 underline ml-2">support@yourapp.com</a>
                    </p>
                </section>
            </div>
        </section>
    );
}
