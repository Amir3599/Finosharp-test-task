import { IconProps } from 'common/types'
import React, { FC } from 'react'

const AppArrowIcon: FC<IconProps> = ({ svgProps, color }) => {
    return (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path d="M9.1344 0.435661V2.68563L4.6344 7.45563L0.134399 2.68563V0.435661H9.1344Z" fill={color ?? "#848E9C"} />
        </svg>
    )
}

export default AppArrowIcon