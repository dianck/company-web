import Image from "next/image";

export default function Hero(){
    return(
        <div>
            {/* Hero Section */}
            {/* <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto text-center text-white p-16">
                <h1 className="text-5xl font-bold">Welcome to Our Company</h1>
                <p className="mt-4 text-xl">We provide innovative solutions for your business needs</p>
                </div>
            </section>   */}

            <section className="bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20 px-6">
                <div className="max-w-xl space-y-6">
                <h2 className="text-4xl font-extrabold leading-tight">
                    Solusi Digital Andal & Terpercaya untuk Masa Depan Bisnis Anda
                </h2>
                <p className="text-lg">
                    Kami adalah mitra teknologi Anda dalam membangun solusi digital yang inovatif, scalable, dan tepat guna.
                </p>
                <button className="bg-white text-blue-900 px-6 py-3 font-semibold rounded-md hover:bg-gray-200 transition">
                    Hubungi Kami Sekarang
                </button>
                </div>
                <div className="mt-12 md:mt-0 md:ml-10">
                <Image
                    src="/business5.png"
                    alt="Digital Solutions"
                    className="w-full max-w-xl rounded-xl shadow-lg"
                />
                </div>
            </section>

        </div>

    )
}