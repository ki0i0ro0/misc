export const Button: FCX<Props> = ({ color, size, onClick, children, className, type }) => {
  return (
    <button
      className={classnames(
        ButtonRecipe({
          color,
          size,
        }),
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
