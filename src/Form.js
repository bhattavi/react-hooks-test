import React, {useRef} from 'react'

function Form({input, setInput, todo, setTodo}) {

    const inputRef = useRef();
    const handleClick = (e) => {
        e.preventDefault();

        setTodo([...todo, input])

    }
    const handleChange = () => {
       

        setInput(inputRef.current.value);

       

    }
    return (
        <div>
            <form>
                <input ref={inputRef} onChange={handleChange} type="text"/>
                <button onClick={handleClick}>Click me</button>
            </form>
        </div>
    )
}
export default Form;
