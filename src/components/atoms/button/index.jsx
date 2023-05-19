import clsx from "clsx"

export const Button = (props) => {

  const buttonSize = clsx("w-full h-auto hover:opacity-75",{
    "p-2 text-sm": props.size === "sm",
    "p-4 text-md": props.size === "md",
    "p-6 text-lg": props.size === "lg",
  })

  const buttonVariant = clsx("rounded-lg font-medium disabled:bg-gray-400 disabled:text-gray-50 disabled:border-gray-400",{
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
