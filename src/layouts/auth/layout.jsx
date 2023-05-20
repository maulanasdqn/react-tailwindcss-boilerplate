export const AuthLayout = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col justify-center gap-y-3 h-auto p-8 bg-white shadow-md rounded-lg md:w-1/2 w-full">
      <div className="flex flex-col">
        <h1 className="text-blue-400 text-3xl font-medium">{props.title}</h1>
        <p className="text-sm text-gray-600">{props.subtitle}</p>
      </div>
      {props.children}
    </form>
  )
}
