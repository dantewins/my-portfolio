import Division from "@/components/division"

const Journal = () => {
    return (
        <div className="px-4 sm:px-12 sm:mx-auto sm:max-w-7xl">
            <div className="mb-4">
                <Division text="Journal" />
            </div>
            <div className="mb-32">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                    <div className="h-96 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-96 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-96 bg-gray-400 flex items-center justify-center rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default Journal