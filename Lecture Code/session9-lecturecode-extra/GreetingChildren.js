const Greeting =(props)=>{
    return(
        <>
        {props.children}
        </>
    )
}

function GreetingChildren () {
    return (
        <Greeting test="test">
            <p>hello</p>
            <p>world</p>
        </Greeting>
    )

}
export default GreetingChildren;