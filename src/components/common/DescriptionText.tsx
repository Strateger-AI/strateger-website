import clsx from "clsx";

interface DescriptionTextProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode;
}

const DescriptionText: React.FC<DescriptionTextProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p className={clsx("text-center md:text-xl  ", className)} {...props}>
      {children}
    </p>
  );
};

export default DescriptionText;
