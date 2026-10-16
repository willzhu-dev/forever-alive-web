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
    <div className="flex min-h-[calc(100svh-8rem)] w-full items-center justify-center bg-gradient-to-b from-pink-50 via-white to-white px-5 py-12 sm:px-8 sm:py-16">
      <section className="mx-auto w-full max-w-2xl rounded-[36px] border border-pink-100 bg-white p-7 shadow-[0_24px_70px_rgba(31,41,55,0.12)] backdrop-blur-sm sm:p-12 lg:p-14">
          <div className="text-center">
            <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              {badge}
            </span>

            <h1 className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>

            <p className="mt-5 text-base leading-8 text-gray-500 sm:text-lg">
              {description}
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            {children}
          </div>
      </section>
    </div>
  );
}
