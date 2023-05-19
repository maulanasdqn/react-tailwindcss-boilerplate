export const RegisterModuleSkeleton = () => {
  return (
    <section className="flex items-center bg-gradient-to-l from-slate-300 via-sky-500 to-blue-300 justify-center h-screen w-full px-6">
      <div className="flex flex-col justify-center gap-y-3 h-auto p-8 bg-white shadow-md rounded-lg md:w-1/2 w-full">
        <div className="flex flex-col gap-y-2">
          <div className="bg-gray-200 h-[40px] w-[80%] rounded-lg"/>
          <div className="bg-gray-200 h-[10px] w-[70%] rounded-lg"/>
        </div>
        <div className="flex flex-col my-[10px] gap-y-6">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="rounded-lg bg-gray-200 w-1/4 h-[10px] animate-pulse"/>
              <div className="rounded-lg bg-gray-200 w-full p-4 h-[60px] animate-pulse"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="rounded-lg bg-gray-200 w-1/4 h-[10px] animate-pulse"/>
              <div className="rounded-lg bg-gray-200 w-full p-4 h-[60px] animate-pulse"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="rounded-lg bg-gray-200 w-1/4 h-[10px] animate-pulse"/>
              <div className="rounded-lg bg-gray-200 w-full p-4 h-[60px] animate-pulse"/>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="rounded-lg bg-gray-200 w-1/4 h-[10px] animate-pulse"/>
              <div className="rounded-lg bg-gray-200 w-full p-4 h-[60px] animate-pulse"/>
            </div>
          </div>
         <div className="rounded-lg bg-gray-200 w-full p-4 h-[60px] animate-pulse"/>
        </div>
      </div>
    </section>
  )
}
