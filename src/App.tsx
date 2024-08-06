import UsersList from "./UsersList.tsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./actions.ts";
import {Action, ThunkDispatch} from "@reduxjs/toolkit";
import {RootState} from "./types.ts";
import {useRef} from "react";

const USERS_NUM = 1000;

export default function App() {
    const isLoading = useSelector((state: RootState) => state.users.isLoading);
    const dispatch = useDispatch<ThunkDispatch<RootState, unknown, Action>>();

    const fakePromise = {
        abort() {
            console.log("Fake promise aborted");
        }
    };

    const promiseRef = useRef(fakePromise);

    const loadUsers = () => promiseRef.current = dispatch(fetchUsers(USERS_NUM));
    const cancelAction = () => promiseRef.current.abort();

    return <>
        <button disabled={isLoading} onClick={loadUsers}>Load users</button>
        <button disabled={!isLoading} onClick={cancelAction}>Cancel</button>
        <UsersList/>
    </>;
}
