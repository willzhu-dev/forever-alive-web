export default function FeaturesSection() {
  return (
    <section className="section bg-pink-50/40">
      <div className="container">

        <div className="section-header">
          <h2 className="text-4xl font-bold">
            Everything you need to preserve your legacy
          </h2>

          <p className="mt-4 text-lg text-gray-500">
            Beautifully designed to help you leave love, not regrets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}