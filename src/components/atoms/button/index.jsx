import clsx from "clsx"

export const Button = (props) => {

  const buttonSize = clsx("py-2 w-full h-auto hover:opacity-75",{
    "px-2 text-sm": props.size === "sm",
    "px-4 text-md": props.size === "md",
    "px-6 text-lg": props.size === "lg",
  })

  const buttonVariant = clsx("rounded-lg font-medium ",{
    "bg-blue-500 text-white border border-blue-500 ": props.variant === "primary",
    "bg-white text-blue-500 border border-blue-500 ": props.variant === "primary-outline",
    "bg-red-600 text-white border border-red-600 ": props.variant === "error",
    "bg-white text-red-600 border border-red-600 ": props.variant === "error-outline",
    "bg-yellow-600 text-white border border-yellow-600 ": props.variant === "warning",
    "bg-white text-yellow-600 border border-yellow-600 ": props.variant === "warning-outline",
  })

  const className = [...buttonVariant, ...buttonSize].join("")

  props.href && (
    <button {...props} className={className}>
      {props.children}
    </button>
  ) 
  return (
    <a href={props.href}>
      <button {...props} className={className}>
        {props.children}
      </button>
    </a>
  )
}
