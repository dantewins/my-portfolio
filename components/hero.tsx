import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="px-4 sm:px-12 sm:mx-auto sm:max-w-7xl">
            <div className="my-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-24 gap-4 items-center">
                    <h1 className="text-6xl lg:text-8xl leading-tight font-bold tracking-[-0.06em]">
                        <span>
                            Danny Kim.
                            <br />
                            Programmer
                        </span>
                    </h1>
                    <div className="flex flex-col gap-6">
                        <p className="text-3xl leading-snug font-semibold tracking-[-0.05em]">
                            I create art that is both aesthetically pleasing and emotionally resonant. I also design user interfaces that are intuitive and user-friendly.
                        </p>
                        <div className="flex gap-2">
                            <Badge
                                variant="outline"
                                className="border-black rounded-full text-sm px-2 py-1 hover:text-white hover:bg-black cursor-pointer"
                            >
                                Github
                            </Badge>
                            <Badge
                                variant="outline"
                                className="border-black rounded-full text-sm px-2 py-1 hover:text-white hover:bg-black cursor-pointer"
                            >
                                LinkedIn
                            </Badge>
                            <Badge
                                variant="outline"
                                className="border-black rounded-full text-sm px-2 py-1 hover:text-white hover:bg-black cursor-pointer"
                            >
                                About Me
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-16 lg:my-24">
                <div className="grid gap-4 grid-cols-1">
                    <div className="grid grid-cols-[10%_1fr] gap-4">
                        <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute w-full h-full object-cover"
                                >
                                    <source src="https://framerusercontent.com/assets/a7oLlvkswlykX0srOqFY3gx1s.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src="https://framerusercontent.com/images/TJNTTWGjUItiBrVQwBNfxZzxNE.png"
                                    alt="Abstract design"
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 768px) 90vw, 33vw"
                                    quality={95}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="https://framerusercontent.com/images/8Fk6RlgtqXHopQpMemxEHY24eI8.png"
                                alt="Colorful stripe pattern"
                                fill
                                className="object-cover w-full h-full"
                                sizes="100vw"
                                quality={95}
                                priority
                            />
                        </div>
                    </div>
                    <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="https://framerusercontent.com/images/YAmzP6ZyEyTjm6BB2QmRLV8XYgE.png"
                                alt="Abstract fluid art"
                                fill
                                className="object-cover w-full h-full"
                                sizes="100vw"
                                quality={95}
                                priority
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-[60%_1fr] gap-4">
                        <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <Image
                                    src="https://framerusercontent.com/images/aZ7rJFO62w29QFKecSIazsAsa5I.png"
                                    alt="Digital pattern"
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="60vw"
                                    quality={95}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="relative h-24 lg:h-32 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute w-full h-full object-cover"
                                >
                                    <source src="https://framerusercontent.com/assets/GBwyoZQ9MSVvWK3MBfzqg5v8NMM.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

