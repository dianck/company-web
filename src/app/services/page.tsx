// pages/services.js
export default function Services() {
    return (
      <div className="min-h-screen bg-gray-100">
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">Our Services</h1>
            <p className="mt-4">We offer the following services to help your business thrive:</p>
          </div>
        </section>
  
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Service 1</h2>
            <p className="mt-4">Description of service 1.</p>
          </div>
        </section>
  
        {/* Repeat for other services */}
      </div>
    );
  }
  