import ContactForm from "@/app/components/contact-form";

const ContactPage = () => {
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <div className="container mx-auto space-y-16">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-200">
        Contact.
      </h1>

      <p className="text-gray-600 dark:text-gray-300">
        Get in touch or shoot me an email directly on{" "}
        <a href={`mailto: ${email}`} className="font-semibold">
          {email}
        </a>
      </p>

      <section className="max-w-2xl">
        <ContactForm />
      </section>
    </div>
  );
};

export default ContactPage;
