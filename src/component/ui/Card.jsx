
export const Card = ({children, className}) => {
  return (
    <div className={`bg-orange-700 border-4 shadow-lg shadow-black w-[45%] 
    md:w-[23%] h-[37%] md:h-[62%] sm:w-[35%] sm:h-[42%]
    md:scale-95 rounded-3xl text-white font-bold hover:scale-95 ${className}`}>
        {children}
    </div>
  )
}
