import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UIsectionType } from 'common/types'

const initialUIState: UIsectionType = {
    loading: false,
    theme: "light"
}

const UISlice = createSlice({
    name: "ui",
    initialState: initialUIState,
    reducers: {
        setUI(state, action: PayloadAction<UIsectionType>) {
            return state = action.payload
        }
    }
})

export const { setUI } = UISlice.actions
export default UISlice.reducer