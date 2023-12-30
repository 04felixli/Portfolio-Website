import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    email: string;
    name: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        name: '',
        message: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here (you can use formData state)
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            email: '',
            name: '',
            message: ''
        });
    };

    return (
        <div className="text-color" id={'Contact'}>
            <h1 className="text-6xl border-b-4 border-color2">Contact</h1>

            <section className="flex flex-row mt-20">
                <section className="flex flex-col justify-between text-2xl whitespace-pre-line">
                    <p>Wanna talk? {'\n'} Got a question? {'\n'} Feel free to send me a message.</p>
                    <p className="text-base">Want to connect another way? Check out my links below!</p>
                </section>

                <section className="bg-color4 ml-36 w-5/12 border border-4 border-color6 rounded-lg">
                    <div className="p-6 max-w-screen-md">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <input
                                type="text"
                                id="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Name"
                            // required
                            />
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                placeholder="Email"
                            // required
                            />
                            <div className="sm:col-span-2">
                                <textarea
                                    id="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="shadow-sm bg-gray-50 border border-color4 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-0 focus:shadow-lg"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-sm text-center rounded-lg bg-color6 focus:ring-0 focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-lg duration-300"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Contact;
