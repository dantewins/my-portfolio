import Division from "@/components/division"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'

const works = [
    {
        title: "FireFly",
        image: "https://framerusercontent.com/images/NIZVyUxsAfTXib8VDzl1QuAdlUg.png",
    },
    {
        title: "Prola",
        image: "https://framerusercontent.com/images/IwQGpm16IrG3DUIAqlXEFJefk.png?scale-down-to=1024",
    },
    {
        title: "Kozmo",
        image: "https://framerusercontent.com/images/VSuH84MNgmwVbJxtGujcvYqTOIg.png?scale-down-to=1024",
    },
    {
        title: "Slate AI",
        image: "https://framerusercontent.com/images/gnqxx4ffUgrD3uvgo2zKbUeLtk.png?scale-down-to=1024",
    },
    {
        title: "Go Jarvis",
        image: "https://framerusercontent.com/images/SO8PdMYTO2GQIYvbslUHHJmaUQ.png?scale-down-to=1024",
    },
    {
        title: "Trinity",
        image: "https://framerusercontent.com/images/JZTFz167pysdqtJV4zXShLQQ.png?scale-down-to=1024",
    }
];

const Works = () => {
    return (
        <div className="px-4 sm:px-12 sm:mx-auto sm:max-w-7xl">
            <div className="mt-32 mb-4">
                <Division text="Works" />
            </div>
            <div className="mt-4 mb-4 grid gap-8 grid-cols-1 grid-rows-3 lg:grid-cols-2">
                {works.map((x, i) => (
                    <div key={i} className="h-[73vh] flex items-center justify-center">
                        <Card className="w-full h-full rounded-3xl border-none bg-[#f9fafb] cursor-pointer shadow-none">
                            <CardContent className="p-0">
                                <div className="relative h-[60vh] overflow-hidden">
                                    {x.image && (
                                        <Image
                                            src={x.image}
                                            alt={x.title}
                                            fill
                                            quality={100}
                                            className="object-cover transform ease-in-out duration-300 hover:scale-105"
                                        />
                                    )}
                                </div>
                            </CardContent>

                            <CardFooter className="flex flex-col items-start text-left">
                                <h3 className="font-semibold text-3xl">{x.title}</h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["UI/UX", "Branding", "Motion"].map((item) => (
                                        <Badge
                                            key={item}
                                            variant="outline"
                                            className="border-black rounded-full text-sm px-2 py-1 hover:text-white hover:bg-black cursor-pointer"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
            <div className="mt-4 mb-32">
                <div className="h-16 flex items-center justify-center rounded">
                    <Button
                        variant="outline"
                        className="group w-full h-full text-black border-black border-2 rounded-full text-lg px-2 py-1 transition ease-in-out duration-500 hover:text-white hover:bg-black cursor-pointer"
                    >
                        All case studies{" "}
                        <ArrowRight
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            className="transition-transform duration-1000 ease-in-out transform group-hover:rotate-[360deg]"
                        />
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Works