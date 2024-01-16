import clsx from "clsx";
import localFont from "next/font/local";
import Image from "next/image";

const Satoshi = localFont({ src: "./Satoshi.woff2" });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={clsx("flex h-screen w-screen justify-center bg-black", Satoshi.className)}>
      <section className="absolute mx-auto">
        <Image
          src="/images/experience-visual.png"
          alt="Création représentation"
          width={600}
          height={500}
        />
        <Image
          className="mx-auto mb-10 px-6"
          src="/images/experience-logo.jpg"
          alt="Création représentation"
          width={500}
          height={500}
        />
        <div className="container">{children}</div>
      </section>
    </main>
  );
}
