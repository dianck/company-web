// pages/about.js
import Head from "next/head";

const teamMembers = [
  {
    name: "Andi Wijaya",
    title: "CEO & Co-Founder",
    description: "Memiliki pengalaman lebih dari 15 tahun di bidang teknologi dan manajemen produk digital.",
  },
  {
    name: "Sinta Maharani",
    title: "CTO",
    description: "Ahli dalam pengembangan sistem terdistribusi dan pemimpin tim teknis Digisync Labs.",
  },
  {
    name: "Budi Santoso",
    title: "Head of Operations",
    description: "Bertanggung jawab atas operasional perusahaan dan manajemen proyek.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Digisync Labs</title>
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Tentang Digisync Labs</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Sejarah Perusahaan</h2>
          <p className="text-gray-700">
            Digisync Labs adalah perusahaan pengembang solusi digital yang berdedikasi untuk memberikan layanan teknologi terbaik bagi kebutuhan bisnis modern. Sejak didirikan, kami telah berkomitmen untuk menghadirkan produk dan layanan yang inovatif, scalable, dan sesuai dengan perkembangan zaman. Dalam perjalanannya, Digisync Labs telah melewati berbagai pencapaian penting, memperluas layanan dan meningkatkan kepercayaan dari berbagai sektor industri.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tim Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="p-4 border rounded shadow hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-blue-600">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.title}</p>
                <p className="mt-2 text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Budaya Perusahaan</h2>
          <p className="text-gray-700">
            Di Digisync Labs, kami percaya bahwa kolaborasi, inovasi, dan pertumbuhan berkelanjutan adalah fondasi dari kesuksesan kami. Kami mendorong budaya kerja yang terbuka, inklusif, dan saling mendukung. Setiap anggota tim diberikan ruang untuk berkembang, bereksperimen, dan menyuarakan ide-ide mereka. Dengan lingkungan kerja yang dinamis dan berorientasi pada masa depan, kami berupaya untuk tidak hanya membangun solusi digital, tetapi juga menciptakan dampak positif bagi masyarakat.
          </p>
        </section>
      </main>
    </>
  );
}
