import React from 'react';

export default function Contact() {
    return (
        <section className="bg-gradient-to-br from-[#1a1a2e] via-[#1a1a2e] to-[#3f0d3d] text-white min-h-screen py-12 px-6 flex flex-col items-center">
            
            <header className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl mb-4">Get in Touch</h1>
                <p className="text-2xl max-w-lg mx-auto">
                    Have questions or feedback? We're here to help! Send us a message, and our team will get back to you as soon as possible.
                </p>
            </header>

            
            <div className="w-full max-w-lg bg-white bg-opacity-10 rounded-lg p-8 shadow-lg">
                <form>
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-2xl font-medium text-gray-200 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-gray-400 text-white"
                            placeholder="Your full name"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="email" className="block text-2xl font-medium text-gray-200 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-gray-400 text-white"
                            placeholder="Your email address"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="subject" className="block text-2xl font-medium text-gray-200 mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-gray-400 text-white"
                            placeholder="Message subject"
                        />
                    </div>

                    <div className="mb-8">
                        <label htmlFor="message" className="block text-2xl font-medium text-gray-200 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full px-4 py-2 bg-white bg-opacity-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-800 placeholder-gray-400 text-white"
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-[#C31432] to-purple-800 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="mt-12 text-center text-gray-400 max-w-lg text-xl">
                <p className="mb-2">Or reach out to us at:</p>
                <p>Email: <a href="mailto:support@yourapp.com" className="text-purple-400">support@yourapp.com</a></p>
                <p className="mt-2">Phone: <a href="tel:+123456789" className="text-purple-400">+1 (234) 567-89</a></p>
            </div>
        </section>
    );
}
