import { IconProps } from 'common/types'
import React, { FC } from 'react'

const ArrowIcon: FC<IconProps> = ({ svgProps, color }) => {
    return (
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path d="M5.68888 4.94544L1.28888 0.612103L0.35555 1.54544L5.68888 6.87877L11.0222 1.54544L10.0889 0.612103L5.68888 4.94544Z" fill={color ?? "#848E9C"} />
        </svg>
    )
}

export default ArrowIcon