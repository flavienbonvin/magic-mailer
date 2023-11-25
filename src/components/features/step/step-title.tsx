import H1 from "@/components/typography/h1";

interface StepTitleProps {
  stepNumber: number;
  children: React.ReactNode;
}

// TODO improve stepNumber and extact it from the path
const StepTitle = ({ stepNumber, children }: StepTitleProps) => {
  return (
    <div className="flex justify-between">
      <H1>Etape numéro {stepNumber}</H1>
      {children}
    </div>
  );
};

export default StepTitle;
