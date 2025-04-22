import Image from "next/image";

export default function Overview(){
    return(
        <section className="bg-white text-gray-800 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang Perusahaan Kami
            </h2>
            <p className="text-lg mb-4">
              Kami adalah perusahaan pengembang solusi digital yang berdedikasi untuk memberikan layanan teknologi terbaik bagi kebutuhan bisnis modern. Sejak awal berdiri, kami berkomitmen untuk menghadirkan produk dan layanan yang inovatif, scalable, dan sesuai dengan perkembangan zaman.
            </p>
            <p className="text-lg">
              Dengan tim profesional berpengalaman, kami membantu klien mewujudkan ide digital mereka menjadi kenyataan — dari perencanaan, desain, pengembangan hingga implementasi.
            </p>
          </div>
  
          {/* Image Section */}
          <div>
            <Image
              src="/comp-overview.png"
              alt="Company Overview"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>
    )
}