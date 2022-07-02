import '../../css/button.css'

function Button(props) {

    const classes = props.className + ' button'

    return (
        <>
            <button className={classes}>{props.children}</button>
        </>
     );
}

export default Button;