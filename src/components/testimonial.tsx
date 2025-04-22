import Image from "next/image";

export default function Testimonials(){
    const testimonials = [
        {
          name: "Andi Prasetyo",
          company: "CEO, AlphaTech",
          quote:
            "Layanan yang diberikan sangat profesional dan hasilnya melebihi ekspektasi kami. Komunikasi juga sangat lancar sepanjang proyek.",
          image: "/clients/andi.jpeg",
        },
        {
          name: "Siti Rahma",
          company: "CTO, FinSolusi",
          quote:
            "Tim mereka sangat responsif dan ahli dalam bidangnya. Kami sangat terbantu dalam transformasi digital perusahaan.",
          image: "/clients/siti.jpg",
        },
        {
          name: "Budi Santoso",
          company: "Founder, B-Solution",
          quote:
            "Solusi digital yang mereka tawarkan sangat efektif. Mereka mampu memahami kebutuhan bisnis kami dengan sangat baik.",
          image: "/clients/budi.jpeg",
        },
      ];

    return(
        <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg">
            Testimoni dari para klien kami yang telah merasakan manfaat dari solusi digital yang kami tawarkan.
          </p>
        </div>
  
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </section>
    )
}