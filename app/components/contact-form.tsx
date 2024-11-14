// app/components/ContactForm.tsx

const ContactForm = () => (
  <form className="space-y-6 py-2 rounded-xl">
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
    <div className="flex w-full justify-center lg:justify-end">
      <button
        type="submit"
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-200"
      >
        Send Message
      </button>
    </div>
  </form>
);

export default ContactForm;
