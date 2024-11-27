"use client";

import { sendEmail } from "@/app/lib/actions";
import { FormState } from "@/app/lib/definitions";
import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const initialState: FormState = {
  message: "",
  success: undefined,
  timeStamp: 0,
};

const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

  useEffect(() => {
    if (state.success === true) {
      toast.success("Success!", {
        description: state.message,
        duration: 3000,
        position: "top-center",
      });
    }

    if (state.success === false) {
      toast.error("Error!", {
        description: state.message,
        duration: 3000,
        position: "top-center",
      });
    }
  }, [state]);

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
        <Button disabled={isPending} type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
