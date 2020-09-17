import React from 'react'

export default function Todo(props) {

    const listItem = props.todo.map((item) =>  <li>{item}</li>)
    return (
        <div>
            <ul>{listItem}</ul>
        </div>
    )
}
