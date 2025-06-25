import { ContactForm } from './contact-form';

export default function Contact() {
  return (
    <div className="relative flex min-h-[calc(100vh-10rem)] items-center justify-center overflow-hidden rounded-2xl bg-white/20 dark:bg-black/20 backdrop-blur-xl glass-border">
      <div className="relative z-10 w-full max-w-lg p-4">
        <div className="space-y-4 text-center">
            <h1 className="font-headline text-4xl font-bold">Contact Me</h1>
            <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to say hi? Send me a message.
            </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
