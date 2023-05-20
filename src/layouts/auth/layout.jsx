import { AiFillCloseCircle } from "react-icons/ai"

export const AuthLayout = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col justify-center gap-y-3 h-auto p-8 bg-white shadow-md rounded-lg md:w-1/2 w-full">
      <div className="flex flex-col">
        <h1 className="text-blue-400 text-3xl font-medium">{props.title}</h1>
        <p className="text-sm text-gray-600">{props.subtitle}</p>
        {props.errorMessage && (
          <div className="flex items-center text-red-500 border border-red-500 my-2 justify-between bg-red-50 rounded-lg p-4">
            <h1 className="truncate">{props.errorMessage}</h1>
            <AiFillCloseCircle size={20} />
          </div>
        )}
      </div>
      {props.children}
    </form>
  )
}
