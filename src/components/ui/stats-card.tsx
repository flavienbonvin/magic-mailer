interface StatCardProps {
  name: string;
  stats: string;
}

const StatCard = ({ name, stats }: StatCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-card px-4 py-5 text-card-foreground shadow-sm">
      <dt className="truncate text-sm">{name}</dt>
      <dd className="mt-1 text-3xl font-semibold leading-none tracking-tight">{stats}</dd>
    </div>
  );
};

export default StatCard;
