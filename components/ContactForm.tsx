"use client";

import Button from "./Button";

interface ContactFormProps {
    dict: {
        title: string;
        name_label: string;
        name_placeholder: string;
        email_label: string;
        email_placeholder: string;
        message_label: string;
        message_placeholder: string;
        submit: string;
    };
}

export default function ContactForm({ dict }: ContactFormProps) {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {dict.name_label}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none bg-gray-50 focus:bg-white"
                    placeholder={dict.name_placeholder}
                    required
                    aria-required="true"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {dict.email_label}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none bg-gray-50 focus:bg-white"
                    placeholder={dict.email_placeholder}
                    required
                    aria-required="true"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    {dict.message_label}
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow outline-none bg-gray-50 focus:bg-white resize-none"
                    placeholder={dict.message_placeholder}
                    required
                    aria-required="true"
                ></textarea>
            </div>

            <div className="pt-2">
                <Button type="submit" className="w-full py-4 text-lg">
                    {dict.submit}
                </Button>
            </div>
        </form>
    );
}
