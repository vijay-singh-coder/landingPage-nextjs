import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ContainerProps extends React.ComponentProps<"div"> { }

const ContainerWrapper = ({ children, className, ...props }: ContainerProps) => {
    return (
        <div {...props} className={cn("max-w-5xl mx-auto px-5", className)}>
            {children}
        </div>
    );
};

export default ContainerWrapper;