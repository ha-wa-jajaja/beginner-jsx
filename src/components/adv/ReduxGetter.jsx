import React from "react";

// import hooks and the actions of the slice you needed
import { useSelector, useDispatch } from "react-redux";
import { initActions } from "../../store";

const ReduxGetter = () => {
    // activate useDispatch to trigger acitons
    const dispatch = useDispatch();

    // to get redux states, use useSelector()
    const name = useSelector((state) => state.initial.name);
    const age = useSelector((state) => state.initial.age);

    const older = () => {
        dispatch(initActions.add());
    };

    const talk = () => {
        dispatch(initActions.talk("blast"));
    };

    return (
        <div>
            <h3>redux getter</h3>
            <p>
                {name} is {age} years old.
            </p>
            <button onClick={older}>older</button>
            <button onClick={talk}>talk</button>
        </div>
    );
};

export default ReduxGetter;
