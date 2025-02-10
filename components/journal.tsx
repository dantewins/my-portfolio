"use client"

import Image from "next/image"
import Division from "@/components/division"

export default function Journal() {
    const articles = [
        {
            id: 1,
            title: "20 psychological principles applied to product design",
            date: "Apr 8, 2022",
            imageUrl:
                "https://framerusercontent.com/images/nrnf6fsUlXbEBhqRsgqVzRKEiF4.jpg?scale-down-to=2048",
            alt: "Abstract shape floating above a podium",
        },
        {
            id: 2,
            title:
                "Level Up Your Coding Skills: Discover the Best Resources to Enhance Your Expertise",
            date: "Apr 8, 2022",
            imageUrl:
                "https://framerusercontent.com/images/W1H8tFK6H8IKNZOBc6gjtpRP1I.jpg?scale-down-to=1024",
            alt: "Black and white repetitive geometric pattern",
        },
        {
            id: 3,
            title: "Resources Galore: A Curated Collection of Top-Notch Coding Resources",
            date: "Apr 8, 2022",
            imageUrl:
                "https://framerusercontent.com/images/ygE08jgxUDqn1kh6jUnQBualh64.jpg?scale-down-to=1024",
            alt: "Sculpture of a metallic woman’s face",
        },
    ]

    return (
        <div className="mx-auto px-4 sm:px-12 sm:max-w-7xl">
            <div className="mb-4">
                <Division text="Journal" />
            </div>
            <div className="mb-32 grid grid-cols-1 gap-10 lg:grid-cols-3">
                {articles.map((article) => (
                    <div key={article.id} className="group flex flex-col cursor-pointer">
                        <div className="relative h-96 w-full rounded-3xl overflow-hidden">
                            <Image
                                src={article.imageUrl}
                                alt={article.alt}
                                fill
                                quality={100}
                                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground transition-opacity duration-300 ease-in-out group-hover:opacity-50">
                            {article.date}
                        </p>
                        <h2 className="mt-1 text-2xl font-semibold leading-snug transition-opacity duration-300 ease-in-out group-hover:opacity-50">
                            {article.title}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}
