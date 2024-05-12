import classnames from "classnames";

export default function Badge({ children, startIcon, stopIcon, size, className, color, shape, ...rest }) {
  let colorClass = color && `badge-${color}`;
  let shapeClass = shape && `badge-${shape}`;
  let sizeClass = size && `badge-${size}`
  const allClasses = classnames(colorClass, sizeClass, shapeClass, className, "badge");

  return (
    <div className={allClasses} {...rest}>
      { startIcon ? startIcon:null}
      {children}
      { stopIcon ? stopIcon:null}
    </div>
  );
}
