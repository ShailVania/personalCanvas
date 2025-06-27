import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function Resume() {
    return (
        <div className="w-full max-w-3xl space-y-8">
            <div className="text-center">
                <h1 className="font-headline text-5xl font-bold md:text-6xl">My Resume</h1>
                <p className="mt-4 text-lg text-muted-foreground">Here's a summary of my experience and skills.</p>
            </div>

            <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                <CardHeader>
                    <CardTitle>Download Resume</CardTitle>
                    <CardDescription>Click the button below to download a PDF version of my resume.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <a href="/ResumeShail.pdf" download="ShailVania_Resume.pdf">
                            <Download className="mr-2 h-4 w-4"/>
                            Download PDF
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">Software Engineer - DevTech Solutions</h3>
                        <p className="text-sm text-muted-foreground">June 2024 - July 2024 | Kitchener, ON, Canada (Remote)</p>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                            <li>Technologies: React, Node.js, TailwindCSS, JIRA, Git.</li>
                            <li>Developed and maintained the HYDEX website using React, Node.js, and Tailwind, ensuring global availability on AWS.</li>
                            <li>Engineered advanced NFT functionalities for the HYTOPIA ecosystem, serving over 1000 users.</li>
                            <li>Utilized Git and JIRA to manage project workflows and ensure timely delivery of high-quality features.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Apple Technical Support - Kelly Services (Kelly Connect)</h3>
                        <p className="text-sm text-muted-foreground">Dec 2023 - Mar 2024 | Kitchener, ON, Canada</p>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                            <li>Provided high-level technical support for Apple products (iOS, macOS, hardware, software).</li>
                            <li>Troubleshot and resolved complex software and hardware issues.</li>
                            <li>Maintained high customer satisfaction through effective problem resolution.</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

             <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                <CardHeader>
                    <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                     <div>
                        <h3 className="text-xl font-semibold">B.Sc. in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">University of Technology - 2018</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
