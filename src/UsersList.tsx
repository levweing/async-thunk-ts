import {useSelector} from "react-redux";
import {RootState} from "./types.ts";

export default function UsersList() {
    const users = useSelector((state: RootState) => state.users);

    return <>
        <p style={{color: "red"}}>{users.error}</p>
        {users.isLoading && <p>Loading...</p>}
        {users.isCanceled && <p>Canceled</p>}

        {users.data?.map(({name, location}, i) =>
            <p key={i}>{name.first} {name.last}, {location.country}</p>)
        }
    </>;
}
