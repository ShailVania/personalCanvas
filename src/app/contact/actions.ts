"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // In a real application, this is where you would integrate with an email service
  // like Resend, SendGrid, or your own backend API to send the email.
  // For this portfolio scaffold, we'll log the data to the server console and simulate a response.
  
  console.log("New contact form submission received:");
  console.log("Name:", values.name);
  console.log("Email:", values.email);
  console.log("Message:", values.message);

  // Simulate network delay to mimic a real API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // This is a placeholder for actual success/error handling.
  // In a real-world scenario, you would check the response from your email service.
  const success = Math.random() > 0.1; // Simulate a 90% success rate for demonstration

  if (success) {
    return { success: true };
  } else {
    return { success: false, message: "Failed to send message due to a simulated server error. Please try again later." };
  }
}
