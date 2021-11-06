import React, {useContext} from "react";
import TodoContext from '../../context/TodoContext';


export default function DetailsItem() {
    const { idItem } = useContext(TodoContext);

    return (
        <div>
            {console.log(idItem)}

        </div>
    );
}