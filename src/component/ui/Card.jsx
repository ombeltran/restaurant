
export const Card = ({children, className}) => {
  return (
    <div className={`flex flex-col justify-between bg-red-600 border-4 shadow-lg shadow-black w-[45%] 
    md:w-[23%] min-h-[37%] md:min-h-[62%] sm:w-[35%] sm:min-h-[42%]
    md:scale-[85%] 2xl:scale-[65%] rounded-3xl text-white font-bold hover:scale-90 
    2xl:hover:scale-75 ${className}`}>
        {children}
    </div>
  )
}
