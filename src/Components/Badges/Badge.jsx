import classnames from "classnames";

export default function Badge({ children, className, color, shape, ...rest }) {
    let colorClass = color && `badge-${color}`;
    let shapeClass = shape && `badge-${shape}`;
    const allClasses = classnames(colorClass, shapeClass, className, 'badge' );

  return <div className={allClasses} {...rest}>
        {children}
  </div>;
}
