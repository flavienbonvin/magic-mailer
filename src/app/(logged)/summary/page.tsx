import StatCard from "@/components/ui/stats-card";
import Image from "next/image";

export default function Page() {
  const stats = [
    { name: "Date de la repésentation", stat: new Date().toLocaleDateString() },
    { name: "Emails envoyés", stat: "223" },
  ];
  return (
    <div className="flex flex-col gap-12">
      <div>
        <h1 className="mb-3 text-xl font-medium first:mt-0">Résumé de la représentation</h1>
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">Opéra de Lausanne</h2>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {stats.map((item) => (
          <StatCard key={item.name} name={item.name} stats={item.stat} />
        ))}
      </div>
      <Image
        className="rounded"
        alt=""
        src="https://images.unsplash.com/photo-1682687220801-eef408f95d71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={500}
        width={384}
      />
    </div>
  );
}
