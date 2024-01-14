export const Botton = ({ children, className, ...props }) => {
    return (
        <button
            className={`flex justify-center items-center w-36 text-white hover:scale-105 
            font-semibold mr-10 bg-orange-700 py-3 rounded-full ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
