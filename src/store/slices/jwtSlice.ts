import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialJwtState: any = {
    accessToken: null,
    refreshToken: null
}

const jwtSlice = createSlice({
    name: "jwt",
    initialState: initialJwtState,
    reducers: {
        // setJwt(state, action: PayloadAction<jwtObj>) {
        //     return state = action.payload
        // },
        // removeJwt(state) {
        //     return state = initialJwtState
        // }
    }
})

export const { } = jwtSlice.actions
export default jwtSlice.reducer