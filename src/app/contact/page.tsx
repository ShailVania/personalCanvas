import { ContactForm } from './contact-form';

export default function Contact() {
  return (
    <div className="flex w-full max-w-3xl flex-col items-center rounded-2xl p-8 shadow-2xl shadow-primary/20 transition-shadow duration-300 hover:shadow-primary/40 md:p-12">
      <div className="w-full text-center">
        <h1 className="font-headline text-5xl font-bold md:text-6xl">Contact Me</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
