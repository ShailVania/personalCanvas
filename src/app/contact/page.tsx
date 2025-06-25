import { ContactForm } from './contact-form';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl text-center">
        <h1 className="font-headline text-5xl font-bold md:text-6xl">Contact Me</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
