import classnames from "classnames";

export default function Button({
  children,
  className,
  size,
  variant,
  ...rest
}) {
  let sizeClass = size && `btn-${size}`;
  let variantClass = variant && `btn-${variant}`;
  const allClasses = classnames(sizeClass, variantClass, className);

  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
