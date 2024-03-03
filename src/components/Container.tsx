import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from "react";

// type ContainerProps = {
//   as: ElementType;
//   children: ReactNode;
// };

type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  // as: Component,
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || "div";

  return <Component {...props}>{children}</Component>;
}
