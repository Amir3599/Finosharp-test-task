import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

type props = {
    width?: number
    color?: string
}

const MiniLoading = ({ width, color }: props) => {
    return (
        <RotatingLines width={`${width ? width : '48'}`} strokeColor={color ? color : 'gray'} />
    )
}

export default MiniLoading