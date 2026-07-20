interface AuthCardProps {
  badge: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthCard({
  badge,
  title,
  description,
  children,
}: AuthCardProps) {
  return (
    <main className="bg-gradient-to-b from-pink-50 via-white to-white">
      <section className="page-container flex min-h-[80vh] items-center justify-center py-24">
        <div className="w-full max-w-lg rounded-[32px] border border-pink-100 bg-white p-8 shadow-[0_18px_50px_rgba(31,41,55,0.08)] backdrop-blur-sm sm:p-10">
          <div className="text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              {badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>

            <p className="mt-4 leading-8 text-gray-500">
              {description}
            </p>
          </div>

          <div className="mt-10">
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}