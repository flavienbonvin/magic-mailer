interface StepTitleProps {
  stepNumber: number;
  children: React.ReactNode;
}

// TODO improve stepNumber and extact it from the path
const StepTitle = ({ stepNumber, children }: StepTitleProps) => {
  return (
    <div className="flex justify-between">
      <h1 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Etape numéro {stepNumber}
      </h1>
      {children}
    </div>
  );
};

export default StepTitle;
