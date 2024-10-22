import { IconProps } from 'common/types'
import React, { FC } from 'react'

const DepositIcon: FC<IconProps> = ({ svgProps, color }) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6031 0.945435H7.60315V7.89504L7.30015 7.89238L3.14124 7.93322L9.11605 13.908L15.091 7.93322L10.9146 7.92413L10.6031 7.9214V0.945435ZM0.603149 11.9454H3.60315V15.9454H14.6031V11.9454H17.6031V15.9454V18.9454H0.603149V15.9454V11.9454Z" fill={color ?? "#181A20"} />
        </svg>
    )
}

export default DepositIcon