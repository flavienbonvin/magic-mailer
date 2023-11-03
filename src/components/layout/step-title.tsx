interface StepTitleProps {
  stepNumber: number;
}

const StepTitle = ({ stepNumber }: StepTitleProps) => {
  return (
    <div className="flex justify-between">
      <h1 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Etape numéro {stepNumber}
      </h1>
    </div>
  );
};

export default StepTitle;
