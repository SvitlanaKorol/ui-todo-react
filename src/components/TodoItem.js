import React, { useState } from "react";
import PropTypes from "prop-types";

function TodoItem({ todo, onToggle }) {
    const [isChecked, setIsChecked] = useState(todo.completed);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onToggle(todo.id);
    };

    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChange}
                />
            </td>
            <td>{todo.title}</td>
        </tr>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        userId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoItem;