type PropsType = {
    children: JSX.Element | string
    classes?: string
    handleClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = ({ children, classes, handleClick }: PropsType) => {
    return (
        <button className={classes} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
