export default function Hero() {
  return (
    <section className="container min-h-[85vh] flex flex-col lg:flex-row items-center justify-between gap-16">

      {/* Left */}

      <div className="max-w-2xl">

        <p className="text-pink-500 font-semibold tracking-wide mb-5">
          Forever Alive
        </p>

        <h1 className="mb-8">
          让你永远活在
          <br />
          你在意的人心中
        </h1>

        <p className="text-xl leading-9 mb-10 max-w-xl">
          有些话，不应该因为来不及，
          而永远没有机会说出口。
          <br />
          <br />
          当你来不及说再见时，
          Forever Alive 会替你把最后的话，
          送给最重要的人。
        </p>

        <div className="flex gap-5">

          <a
            href="#how-it-works"
            className="btn"
          >
            Start Your Legacy
          </a>

        </div>

      </div>

      {/* Right */}

      <div className="relative flex justify-center">

        {/* Glow */}

        <div className="absolute w-[420px] h-[420px] rounded-full bg-pink-200 blur-[120px] opacity-40"></div>

        {/* Phone */}

        <div className="glass w-[320px] h-[650px] rounded-[50px] p-4">

          <div className="bg-white rounded-[40px] w-full h-full flex items-center justify-center">

            <div className="text-center">

              <div className="text-7xl mb-8">
                🫧
              </div>

              <h2 className="text-3xl mb-4">
                Forever Alive
              </h2>

              <p className="text-base px-8">
                Leave your final words
                for the people
                who matter most.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}