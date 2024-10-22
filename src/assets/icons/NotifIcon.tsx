import { IconProps } from 'common/types'
import React, { FC } from 'react'

const NotifIcon: FC<IconProps> = ({ svgProps = { className: "dark:fill-app-white fill-black dark:hover:fill-app-yellow hover:fill-app-yellow" }, color }) => {
    return (
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07178 0.945435C4.20579 0.945435 1.07178 4.07944 1.07178 7.94543V10.9454L0.0717773 11.9454V13.9454H1.07178H15.0718H16.0718V11.9454L15.0718 10.9454V7.94543C15.0718 4.07944 11.9378 0.945435 8.07178 0.945435ZM8.07178 18.9454C6.02143 18.9454 4.25935 17.7113 3.4878 15.9454H12.6557C11.8842 17.7113 10.1221 18.9454 8.07178 18.9454Z" />
        </svg >
    )
}

export default NotifIcon