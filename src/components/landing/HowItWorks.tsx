export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Create & Verify',
      description: 'Sign up and complete the verification process with your license and credentials.',
    },
    {
      step: '02', 
      title: 'Build Profile',
      description: 'Create your professional profile with listings, media, and service areas.',
    },
    {
      step: '03',
      title: 'Capture Leads',
      description: 'Start receiving qualified leads and grow your real estate business.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-fluid">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-xl text-gray-600">Get started in minutes with our simple process</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}