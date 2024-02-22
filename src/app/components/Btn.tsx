export default function Btn({btnClass, children,...props} : { btnClass?: string, children?: any} ) {

    return (
        <>
            <button className={`btn ${btnClass}`} {...props}>
                {children}
            </button>
            
        </>
    )
}


