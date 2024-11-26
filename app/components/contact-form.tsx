"use client";

import { sendEmail } from "@/app/lib/actions";
import { FormState } from "@/app/lib/definitions";
import { toast } from "@/hooks/use-toast";
import { useActionState, useEffect } from "react";

const initialState: FormState = {
  message: "",
  success: undefined,
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

  useEffect(() => {
    if (state.success === true) {
      toast({
        title: "Success!",
        description: "Your message has been sent.",
        duration: 3000,
      });
    }

    if (state.success === false) {
      toast({
        title: "Error!",
        description: state.message,
        duration: 3000,
        variant: "destructive",
      });
    }
  }, [state.success]);

  return (
    <form className="space-y-6 rounded-xl" action={formAction}>
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
    </form>
  );
};

export default ContactForm;
