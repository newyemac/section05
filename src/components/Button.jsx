const Button = ({text,color,children}) => {
    const onclickButton = (e) => {
        console.log(e)
        console.log(text)
    }
    return (
    <button 
        onClick={onclickButton}
        //onMouseEnter={onclickButton}
        style={{ color: color}}
    >
        {text} - {color.toUpperCase()}
        {children}
    </button>
    ) 
}

Button.defaultProps = {
    color: "black"
} 
export default Button;