// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen bg-gray-100">
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4">Learn about our history, mission, and team.</p>
          </div>
        </section>
  
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Our History</h2>
            <p className="mt-4">Founded in 2020, we have grown to become leaders in the industry.</p>
          </div>
        </section>
  
        <section className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Our Team</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p>CEO & Founder</p>
              </div>
              {/* Repeat for other team members */}
            </div>
          </div>
        </section>
      </div>
    );
  }
  