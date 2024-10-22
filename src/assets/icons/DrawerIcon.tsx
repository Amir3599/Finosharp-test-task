import { IconProps } from 'common/types'
import React, { FC } from 'react'

const DrawerIcon: FC<IconProps> = ({ svgProps, color }) => {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.931274 0.945435H4.93127V4.94543H0.931274V0.945435ZM0.931274 6.94543H4.93127V10.9454H0.931274V6.94543ZM4.93127 12.9454H0.931274V16.9454H4.93127V12.9454ZM6.93127 0.945435H10.9313V4.94543H6.93127V0.945435ZM10.9313 6.94543H6.93127V10.9454H10.9313V6.94543ZM6.93127 12.9454H10.9313V16.9454H6.93127V12.9454ZM16.9313 0.945435H12.9313V4.94543H16.9313V0.945435ZM12.9313 6.94543H16.9313V10.9454H12.9313V6.94543ZM16.9313 12.9454H12.9313V16.9454H16.9313V12.9454Z" fill={color ?? "#EAECEF"} />
        </svg>
    )
}

export default DrawerIcon