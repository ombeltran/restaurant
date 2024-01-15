export const CardInfo = ({children}) => {
  return (
    <div className="lg:w-[27%] lg:h-[85%] md:w-[50%] md:h-[80%] min-w-[180px] h-[350px]
     px-4 pt-11 rounded-2xl hover:scale-105 shadow-xl shadow-black">
        {children}
    </div>
  )
}
