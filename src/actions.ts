import {RootState, User} from "./types.ts";
import {createAsyncThunk, GetThunkAPI} from "@reduxjs/toolkit";

const USERS_URL = "https://randomuser.me/api/?inc=name,location&results=";

async function fetchData(usersNum: number,
     {signal}: GetThunkAPI<{state: RootState}>): Promise<User[]> {

    const response = await fetch(USERS_URL + usersNum, {signal});

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    return (await response.json()).results;
}

function canFetchData(_usersNum: number,
      thunkApi: GetThunkAPI<{state: RootState}>): boolean {

    const {isLoading} = thunkApi.getState().users;
    const res = !isLoading;

    return res;
}

export const fetchUsers = createAsyncThunk(
    "users/fetch", fetchData, {condition: canFetchData});
