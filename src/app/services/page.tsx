// pages/services.js
import Head from "next/head";

const services = [
  {
    title: "Pengembangan Aplikasi Web",
    description: "Kami merancang dan mengembangkan aplikasi web yang responsif, cepat, dan scalable menggunakan teknologi modern.",
    price: "Mulai dari Rp25.000.000",
  },
  {
    title: "Transformasi Digital",
    description: "Membantu bisnis Anda beradaptasi dengan era digital melalui strategi transformasi yang efektif dan implementasi teknologi terbaru.",
    price: "Harga disesuaikan dengan kebutuhan",
  },
  {
    title: "Layanan Cloud dan DevOps",
    description: "Kami menyediakan solusi cloud dan DevOps untuk meningkatkan efisiensi, keandalan, dan skalabilitas sistem Anda.",
    price: "Mulai dari Rp10.000.000 / bulan",
  },
];

const testimonials = [
  {
    name: "Eka Prasetya",
    company: "PT Mitra Digital Nusantara",
    feedback: "Layanan dari Digisync Labs sangat profesional dan responsif. Mereka memahami kebutuhan kami dan memberikan solusi yang tepat.",
  },
  {
    name: "Dewi Lestari",
    company: "CV Inovasi Teknologi",
    feedback: "Kami sangat puas dengan hasil kerja tim Digisync. Aplikasi yang mereka kembangkan sangat membantu operasional kami.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Produk & Layanan | Digisync Labs</title>
      </Head>
      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Produk & Layanan</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border rounded-lg shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-600 mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-sm text-gray-500 font-semibold">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Testimoni Pelanggan</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded shadow">
                <p className="italic text-gray-700">“{testimonial.feedback}”</p>
                <p className="text-sm font-semibold mt-2 text-blue-600">
                  — {testimonial.name}, <span className="text-gray-600">{testimonial.company}</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
