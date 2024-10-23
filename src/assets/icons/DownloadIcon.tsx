import { IconProps } from 'common/types'
import React, { FC } from 'react'

const DownloadIcon: FC<IconProps> = ({ svgProps = { className: "dark:fill-app-white fill-black dark:hover:fill-app-yellow hover:fill-app-yellow" }, color }) => {
    return (
        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.57178 3.94543V6.94543H0.571777V0.945435H1.07178H3.57178H12.0718H15.0718V3.94543V6.94543H12.0718V3.94543H3.57178ZM1.07178 18.9454H0.571777V12.9454H3.57178V15.9454H12.0718V12.9454H15.0718V15.9454V18.9454H12.0718H3.57178H1.07178ZM9.58058 9.94783L12.0894 9.95323L8.08058 13.962L4.07178 9.95323L6.58058 9.92863V5.94543H9.58058V9.94783Z" />
        </svg>
    )
}

export default DownloadIcon