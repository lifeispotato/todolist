import React from "react";

const TodoItem = (props) =>{
    return(
        <div>
            {props.item}
            <button>삭제하기</button>
        </div>
    )
};

export default TodoItem;