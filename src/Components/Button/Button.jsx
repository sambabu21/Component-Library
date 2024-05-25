import classnames from "classnames";

export default function Button({
  children,
  className,
  size,
  variant = "filled",
  isDisabled,
  runOnClick,
  href,
  color,
  ...rest
}) {
  let sizeClass = size && `btn-${size}`;
  let variantClass = variant && `btn-${variant}`;
  let colorClass = color && `btn-${color}-${variant}`;
  const allClasses = classnames(
    sizeClass,
    variantClass,
    colorClass,
    className,
    "select-none"
  );

  return (
    <button
      className={allClasses}
      {...rest}
      disabled={isDisabled}
      onClick={runOnClick}
      href={href}
    >
      {children}
    </button>
  );
}
