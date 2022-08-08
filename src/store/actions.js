// https://github.com/academind/react-complete-guide-code/blob/19-advanced-redux/code/06-finished/src/App.js
// https://github.com/academind/react-complete-guide-code/blob/19-advanced-redux/code/06-finished/src/store/cart-actions.js

export const fetchCart = () => {
    return (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-basics-faa3f-default-rtdb.firebaseio.com/"
            );

            if (!response.ok) {
                throw new Error("cannot fetch");
            }

            const data = await response.json();

            return data;
        };

        try {
            const data = await fetchData()
            // dispatch ....
            // dispatch functions here
        } catch (error) {
            console.log("error");
        }
    };
};
