import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function Resume() {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <h1 className="font-headline text-4xl font-bold">My Resume</h1>
                <p className="mt-2 text-lg text-muted-foreground">Here's a summary of my experience and skills.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Download Resume</CardTitle>
                    <CardDescription>Click the button below to download a PDF version of my resume.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button asChild>
                        <a href="/resume.pdf" download="YourName_Resume.pdf">
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                        </a>
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <h3 className="text-xl font-semibold">Senior Developer - Tech Corp</h3>
                        <p className="text-sm text-muted-foreground">Jan 2021 - Present</p>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                            <li>Led development of a major e-commerce platform.</li>
                            <li>Mentored junior developers and conducted code reviews.</li>
                            <li>Improved application performance by 30%.</li>
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

             <Card>
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
