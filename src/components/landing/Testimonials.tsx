export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Senior Real Estate Broker',
      content: 'BrokerConnect transformed my business. The verified profiles and lead quality are outstanding.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      title: 'Property Specialist',
      content: 'The analytics dashboard helps me track my performance and optimize my marketing efforts.',
      rating: 5,
      avatar: '/avatars/michael.jpg',
    },
    {
      name: 'Emma Williams',
      title: 'Independent Broker',
      content: 'Professional platform that builds trust with clients. My conversion rate increased by 40%.',
      rating: 5,
      avatar: '/avatars/emma.jpg',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Trusted by <span className="text-gradient-primary">Top Brokers</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-soft">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4" />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}