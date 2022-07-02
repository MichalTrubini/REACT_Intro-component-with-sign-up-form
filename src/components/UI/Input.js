function Input(props) {
    return ( 
        <input id={props.id} value={props.value} placeholder={props.placeholder} ref={props.ref}/>
     );
}

export default Input;