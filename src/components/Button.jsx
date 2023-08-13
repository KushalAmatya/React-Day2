function Button({type,label,handleclick}){
    // let a=1;
    const clickgo=()=>{
        const color = {label};
        const backchange = document.getElementById('bg');
        backchange.style.backgroundColor=color;

    }
    return(
        <>
        <button type={type} onClick={clickgo}>{label}</button>
        <div id="bg" style={{ width: '200px', height: '200px', border: '1px solid black', backgroundColor }}>
        </div>

        </>
    )
}

export default Button;



