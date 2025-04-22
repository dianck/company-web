
export default function Services(){
    const products = [
        {
          title: "Web Application Development",
          description: "Kami membangun aplikasi web yang scalable, aman, dan user-friendly untuk mendukung transformasi digital bisnis Anda.",
          icon: "🌐",
        },
        {
          title: "Mobile App Development",
          description: "Solusi mobile native dan hybrid untuk Android dan iOS dengan performa tinggi dan pengalaman pengguna terbaik.",
          icon: "📱",
        },
        {
          title: "UI/UX Design",
          description: "Desain antarmuka dan pengalaman pengguna yang estetis, intuitif, dan berbasis riset.",
          icon: "🎨",
        },
        {
          title: "System Integration",
          description: "Kami mengintegrasikan berbagai sistem dan teknologi untuk efisiensi operasional dan konsistensi data.",
          icon: "🔗",
        },
        {
          title: "Digital Consultation",
          description: "Layanan konsultasi teknologi untuk membantu bisnis Anda dalam pengambilan keputusan strategis berbasis digital.",
          icon: "💼",
        },
      ];

    return(
        <div className="py-25">
            <section className="bg-gray-100 text-gray-800 py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products & Services</h2>
                    <p className="text-lg text-gray-600">
                    Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda tumbuh dan berinovasi di era teknologi.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {products.map((product, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="text-4xl mb-4">{product.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                    </div>
                    ))}
                </div>
            </section>         
        </div>
    )
}