import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import Link from 'next/link';
import { ThreeCanvas } from "@/components/three-canvas";

const certifications = [
    { name: 'React Basics - Meta', url: 'https://coursera.org/share/59e830e96267f45347f60af74f350bef' },
    { name: 'Introduction to Front-End Development - Meta', url: 'https://coursera.org/share/96b54a1d36359b53814320170cfd89dd' },
    { name: 'Programming with JavaScript - Meta', url: 'https://coursera.org/share/5e00533200bb8e1f9d9583d0bf30fd11' },
    { name: 'HTML and CSS in depth - Meta', url: 'https://coursera.org/share/a799ecef5061b4344fbf1d71b3a1e5ed' },
    { name: 'Version Control - Meta', url: 'https://coursera.org/share/3550a749c86ca45e3c9bfc4f97fe10ea' },
    { name: 'AWS Cloud Quest: Cloud Practitioner - AWS', url: 'https://www.credly.com/badges/9f1ef6d6-fe75-4a3e-9ee2-2141e0f90ea2' },
    { name: 'AWS Cloud Computing 101 - AWS Training and Education', url: 'https://www.credly.com/badges/b94c4ebb-1938-4fd1-b20f-4ad01c2d5805' },
    { name: 'Ultimate AWS Certified Cloud Practitioner CLF-C02 - Udemy', url: 'https://www.udemy.com/certificate/UC-84487caf-7c90-4af5-972b-16c86b32e188/' },
    { name: 'NextGen CTO - EPICentre (University of Windsor)', url: 'https://ca.badgr.com/public/assertions/rKCqgFMnRu67mNrqKJMI0Q' },
    { name: 'The Joy of Computing Using Python - NPTEL', url: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL20CS35S1PC319722' },
    { name: 'Ethical Hacking - Udemy', url: 'https://www.udemy.com/certificate/UC-09D53AIY/' }
];

export default function Resume() {
    return (
        <div className="relative flex w-full flex-col items-center">
            <ThreeCanvas sceneType="contact" />
            <div className="relative z-10 w-full max-w-3xl space-y-8">
                <div className="text-center">
                    <h1 className="font-headline text-5xl font-semibold italic md:text-6xl">My Resume</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Here's a summary of my experience and skills.</p>
                </div>

                <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                    <CardHeader>
                        <CardTitle>Download Resume</CardTitle>
                        <CardDescription>Click the button below to download a PDF version of my resume.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button asChild>
                            <a href="/ResumeShail.pdf" download="ResumeShail.pdf">
                                <Download className="mr-2 h-4 w-4"/>
                                Download PDF
                            </a>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                    <CardHeader>
                        <CardTitle>Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc space-y-2 pl-5">
                            {certifications.map((cert) => (
                                <li key={cert.name}>
                                    <Link
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <span className="font-semibold italic">{cert.name}</span>
                                        <ExternalLink className="h-4 w-4" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                    <CardHeader>
                        <CardTitle>Work Experience</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h3 className="font-headline text-xl font-semibold italic">Software Engineer</h3>
                            <p className="text-sm text-muted-foreground">June 2024 - July 2024 | Kitchener, ON, Canada (Remote)</p>
                            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                                <li>Technologies: React, Node.js, TailwindCSS, JIRA, Git.</li>
                                <li>Developed and maintained the HYDEX website using React, Node.js, and Tailwind, ensuring global availability on AWS.</li>
                                <li>Engineered advanced NFT functionalities for the HYTOPIA ecosystem, serving over 1000 users.</li>
                                <li>Utilized Git and JIRA to manage project workflows and ensure timely delivery of high-quality features.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold italic">Apple Technical Support Representative</h3>
                            <p className="text-sm text-muted-foreground">Dec 2023 - Mar 2024 | Kitchener, ON, Canada</p>
                            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                                <li>Provided high-level technical support for Apple products (iOS, macOS, hardware, software).</li>
                                <li>Troubleshot and resolved complex software and hardware issues.</li>
                                <li>Maintained high customer satisfaction through effective problem resolution.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold italic">Web Developer</h3>
                            <p className="text-sm text-muted-foreground">Feb 2020 - Feb 2021 | Ahmedabad, GJ, India</p>
                            <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                                <li>Technologies: React, HTML, CSS, Django.</li>
                                <li>Assisted in designing, developing and maintaining websites and web-based applications.</li>
                                <li>Developed rich interfaces using HTML, CSS, and React, leading to a 25% increase in user engagement.</li>
                                <li>Developed and implemented RESTful APIs using Django to support front-end functionalities.</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                 <Card className="transition-all duration-300 transform-gpu hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30">
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <div>
                            <h3 className="font-headline text-xl font-semibold italic">University of Windsor, Master of Applied Computing Science</h3>
                            <p className="text-sm text-muted-foreground">May 2022 - Aug 2023 | Windsor, ON, Canada</p>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-semibold italic">Kadi Sarva Vishwavidyalaya, Bachelor of Engineering in Information Technology</h3>
                            <p className="text-sm text-muted-foreground">May 2017 - May 2021 | Gandhinagar, GJ, India</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
