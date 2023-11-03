interface MutedProps {
  children: string;
}

const Muted = ({ children }: MutedProps) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export default Muted;
