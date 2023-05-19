import clsx from "clsx"
import { useController } from "react-hook-form"

export const TextField = (props) => {

  const { field } = useController({...props, rules:{
    required: props.required
  }})

  const inputSize = clsx({
    "p-2 placeholder:text-sm text-sm": props.size === "sm",
    "p-4 placeholder:text-md text-md": props.size === "md",
    "p-6 placeholder:text-lg text-lg": props.size === "lg"
  })

  const inputStatus = clsx("border rounded-lg focus:ring-none focus:outline-none appearence-none",{
    "bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-500 ": props.status === "none" || !props.status,
    "bg-green-50 border-green-300 text-green-900 placeholder:text-green-500 ": props.status === "success",
    "bg-red-50 border-red-500 text-red-900 placeholder:text-red-500 ": props.status === "error",
    "bg-orange-50 border-orange-500 text-orange-900 placeholder:text-orange-500 ": props.status === "warning",
  })

  const messageSize = clsx("font-regular ",{
    "text-xs ": props.size === "sm" || !props.size,
    "text-sm ": props.size === "md",
    "text-md ": props.size === "lg"
  })

  const labelClassName = clsx("font-medium ",{
    "text-sm ": props.size === "sm" || !props.size,
    "text-md ": props.size === "md",
    "text-lg ": props.size === "lg"
  })

  const messageStatus = clsx({
    "hidden": props.status === "none" || !props.status,
    "block text-red-500 ": props.status === "error",
    "block text-green-500 ": props.status === "success",
    "block text-orange-500 ": props.status === "warning",
  })

  const inputClassName = [...inputStatus, ...inputSize].join("")

  const messageClassName = [...messageStatus, messageSize].join("")

  return (
    <section className="flex flex-col gap-y-2">
      <div className="flex gap-x-1">
        <label className={labelClassName} htmlFor={props.name}>
          {props.label}
        </label>
        {props.required && (
          <strong className="text-red-600">*</strong>
        )}
      </div>
      <div className="flex flex-col gap-y-1">
        <input className={inputClassName} {...{...props, ...field}} />
        <span className={messageClassName}>{props.message}</span>
      </div>
    </section>
  )
}
