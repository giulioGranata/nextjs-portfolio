// app/contact/page.tsx

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto p-12 space-y-16">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        Contact.
      </h1>

      <p className="text-gray-600 dark:text-gray-300">
        Get in touch or shoot me an email directly on{" "}
        <a href="mailto: ggiulio89@gmail.com" className="font-semibold">
          ggiulio89@gmail.com.
        </a>
      </p>

      {/* Contact Form */}
      <section className="max-w-2xl">
        <form className="space-y-6 py-2 rounded-xl shadow-md">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Links */}
      <section className="text-center">
        <div className="flex justify-center space-x-6 mt-4 text-gray-600 dark:text-gray-300">
          <a
            href="https://linkedin.com"
            className="hover:text-green-500 dark:hover:text-green-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com"
            className="hover:text-green-500 dark:hover:text-green-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="hover:text-green-500 dark:hover:text-green-400"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
