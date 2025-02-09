import Division from "@/components/division"

const Works = () => {
    return (
        <div className="px-4 sm:px-12 sm:mx-auto sm:max-w-7xl">
            <div className="mt-32 mb-4">
                <Division text="Works" />
            </div>
            <div className="mt-4 mb-4">
                <div className="grid gap-4 grid-cols-1 grid-rows-4 lg:grid-cols-2">
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                    <div className="h-64 bg-gray-400 flex items-center justify-center rounded"></div>
                </div>
            </div>
            <div className="mt-4 mb-32">
                <div className="h-16 bg-gray-400 flex items-center justify-center rounded"></div>
            </div>
        </div>
    )
}

export default Works