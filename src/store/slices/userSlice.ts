import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialUserState: any = {
    id: 0,
    role: 'general',
    username: 'no-user',
    email: undefined,
    headline: undefined,
    currency: "USD"
}

const userSlice = createSlice({
    name: "user",
    initialState: { ...initialUserState },
    reducers: {
        setUser(state, action: PayloadAction<any>) {
            return state = action.payload
        },
        // removeUser(state) {
        //     return state = initialUserState
        // }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer