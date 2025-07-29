import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container-fluid text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
          Ready to Transform Your Real Estate Business?
        </h2>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Join thousands of verified brokers who are already growing their business with BrokerConnect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register" className="btn bg-white text-primary-600 hover:bg-gray-50 btn-lg">
            Start Free Today
          </Link>
          <Link href="/demo" className="btn border-white text-white hover:bg-white hover:text-primary-600 btn-lg">
            Book a Demo
          </Link>
        </div>
        <p className="text-primary-200 text-sm mt-6">
          No credit card required • Setup in under 5 minutes
        </p>
      </div>
    </section>
  );
}