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
                        <p className="text-sm text-muted-foreground">Jun 2024 - Jul 2024</p>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                            <li>Technologies: React, Node.js, TailwindCSS, JIRA, Git.</li>
                            <li>Developed and Maintained the HYDEX website, using React for the front end and Node.js for the back end, with TailwindCSS for responsive design, all while ensuring global availability through AWS services.</li>
                            <li>Developed advanced functionalities in NFT, making it possible to create, manage, and trade within the platform, which greatly fueled the development and improvement of the HYTOPIA ecosystem in providing an experience based on over 1000 satisfied users and advanced functionalities for the betterment of the platform.</li>
                            <li>Ensured effective version control using Git and optimized project management with JIRA for a smooth workflow and timely delivery of high-quality features and updates.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Junior Developer - Web Solutions Inc.</h3>
                        <p className="text-sm text-muted-foreground">Jun 2018 - Dec 2020</p>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                            <li>Developed and maintained client websites.</li>
                            <li>Collaborated with designers to implement new features.</li>
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
