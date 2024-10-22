import { IconProps } from 'common/types'
import React, { FC } from 'react'

const UserIcon: FC<IconProps> = ({ svgProps = { className: "dark:fill-app-white fill-black dark:hover:fill-app-yellow hover:fill-app-yellow" }, color }) => {
    return (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.07178 0.945435C14.0424 0.945435 18.0718 4.97487 18.0718 9.94543C18.0718 14.916 14.0424 18.9454 9.07178 18.9454C4.10122 18.9454 0.0717773 14.916 0.0717773 9.94543C0.0717773 4.97487 4.10122 0.945435 9.07178 0.945435ZM11.5718 7.44543C11.5718 8.82613 10.4525 9.94543 9.07178 9.94543C7.69108 9.94543 6.57178 8.82613 6.57178 7.44543C6.57178 6.06472 7.69108 4.94543 9.07178 4.94543C10.4525 4.94543 11.5718 6.06472 11.5718 7.44543ZM9.07178 11.9415H5.7384C5.04293 11.9415 4.44696 12.7115 4.19715 13.4615C4.8043 14.4088 6.53009 15.9257 9.07178 15.9477C11.6134 15.9697 13.3779 14.307 13.9463 13.4615C13.6965 12.7115 13.1006 11.9415 12.4051 11.9415H9.07178Z" />
        </svg>
    )
}

export default UserIcon