import Image from "next/image";

export default function PhoneMockup() {
  return (
    <div className="relative">
      <Image
        src="/images/app-home.png"
        alt="Forever Alive App"
        width={420}
        height={850}
        priority
        className="drop-shadow-2xl"
      />
    </div>
  );
}