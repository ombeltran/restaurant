export const Section = ({children, className}) => {
    return (
        <section className={`px-4 py-6 ${className}`}>
            { children }
        </section>
    )
}
