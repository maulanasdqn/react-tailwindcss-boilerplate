import clsx from "clsx"

export const TextField = (props) => {
  const size = clsx({
    "py-2 placeholder:text-sm ": props.size === "sm",
    "py-4 placeholder:text-md ": props.size === "md",
    "py-6 placeholder:text-lg ": props.size === "lg"
  })

  const status = clsx("border border-2 ",{
    "bg-gray-100 border-gray-300 text-gray-900 placeholder:text-gray-500 ": props.status === "none",
    "bg-red-100 border-red-500 text-red-900 placeholder:text-red-500 ": props.size === "error",
  })

  const inputClassName = [...status, ...size].join("")

  return (
    <section className="flex flex-col gap-y-2">
      <input className={inputClassName} {...props} />
    </section>
  )
}
