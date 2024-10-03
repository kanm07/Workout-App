import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./useWorkoutsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: workoutsDispatch } = useWorkoutsContext();

    const logout = () => {
        //Remove user from local storage
        localStorage.removeItem('user');

        //Dispatch Logout Action
        dispatch({type: 'LOGOUT'});
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null});
    };

    return {logout};
};