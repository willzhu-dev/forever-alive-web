import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-pink-200/30 blur-[120px]" />

      {/* Floating Bubble 1 */}
      <div className="absolute -left-8 top-20 h-6 w-6 animate-bounce rounded-full bg-pink-300/60 blur-sm" />

      {/* Floating Bubble 2 */}
      <div
        className="absolute right-0 top-10 h-4 w-4 animate-bounce rounded-full bg-pink-200/80 blur-sm"
        style={{
          animationDelay: "1s",
          animationDuration: "4s",
        }}
      />

      {/* Floating Bubble 3 */}
      <div
        className="absolute bottom-10 left-6 h-8 w-8 animate-bounce rounded-full bg-pink-100/80 blur-sm"
        style={{
          animationDelay: "2s",
          animationDuration: "5s",
        }}
      />

      {/* Phone */}
      <div className="relative transition duration-500 hover:-translate-y-2">
        <Image
          src="/app-home.png"
          alt="Forever Alive App"
          width={520}
          height={1060}
          priority
          className="
            h-auto
            w-[300px]
            sm:w-[340px]
            md:w-[400px]
            lg:w-[460px]
            xl:w-[500px]
            drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]
            select-none
          "
        />
      </div>
    </div>
  );
}