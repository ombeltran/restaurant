export const Botton = ({ children, className, ...props }) => {
    return (
        <button
            className={`flex justify-center items-center text-white hover:scale-105 
            font-semibold bg-red-700 py-3 rounded-full ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
