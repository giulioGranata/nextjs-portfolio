"use client";

import { sendEmail } from "@/app/lib/actions";
import { FormState } from "@/app/lib/definitions";
import { useActionState } from "react";

const initialState: FormState = {
  message: "",
  success: false,
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

  return (
    <form className="space-y-6 py-2 rounded-xl" action={formAction}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>
      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isPending}
        />
      </div>
      <div className="flex w-full justify-center lg:justify-end">
        <button
          disabled={isPending}
          type="submit"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 transition duration-200"
        >
          Send Message
        </button>
      </div>

      {state.success && (
        <div className="flex w-full justify-center lg:justify-end">
          <p className="text-green-600 dark:text-green-500">{state.message}</p>
        </div>
      )}

      {state.success === false && (
        <div className="flex w-full justify-center lg:justify-end">
          <p className="text-red-600 dark:text-red-500">{state.message}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
