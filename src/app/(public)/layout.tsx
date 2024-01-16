import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex h-screen w-screen justify-center bg-black">
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
