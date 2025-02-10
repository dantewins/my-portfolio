import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Footer = () => {
    return (
        <div className="px-4 sm:px-12 sm:mx-auto sm:max-w-7xl">
            <div className="mb-16">
                <footer className="h-[45rem] bg-[#171616] text-white rounded-[50px] flex flex-col px-4">
                    {/* Main Content (Headline + CTA) */}
                    <div className="mt-10 mx-auto max-w-7xl w-full text-center flex-grow flex flex-col items-center justify-center">
                        <h2 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.05em]">
                            Let’s create your
                            <br />
                            next big idea.
                        </h2>

                        <div className="mt-12">
                            <Button
                                variant="outline"
                                className="group h-full text-black rounded-full text-lg px-5 py-3 transition ease-in-out duration-500 cursor-pointer"
                            >
                                Schedule a call{" "}
                                <ArrowRight
                                    style={{ width: "1.5rem", height: "1.5rem" }}
                                    className="transition-transform duration-1000 ease-in-out transform group-hover:rotate-[360deg]"
                                />
                            </Button>
                        </div>
                    </div>

                    {/* Bottom Nav + Copyright */}
                    <div className="mx-auto max-w-7xl w-full text-center mb-28 font-semibold">
                        <nav className="flex flex-wrap justify-center gap-6 text-md sm:text-lg">
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                Home
                            </a>
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                Case studies
                            </a>
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                About
                            </a>
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                Contact
                            </a>
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                Blog
                            </a>
                            <a href="#" className="transition duration-300 ease-in-out hover:opacity-75">
                                Terms
                            </a>
                        </nav>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
