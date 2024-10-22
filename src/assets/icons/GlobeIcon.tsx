import { IconProps } from 'common/types'
import React, { FC } from 'react'

const GlobeIcon: FC<IconProps> = ({ svgProps = { className: "dark:fill-app-white fill-black dark:hover:fill-app-yellow hover:fill-app-yellow" }, color }) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3025 17.3481C15.3034 16.1935 17.5295 13.4775 17.9855 10.1954H14.0436C13.8966 13.0556 13.2509 15.5834 12.3025 17.3481ZM11.5448 10.1954C11.367 14.2972 10.3274 17.4454 9.07158 17.4454C7.81577 17.4454 6.77625 14.2972 6.59845 10.1954H11.5448ZM11.5448 7.69543H6.59845C6.77625 3.59364 7.81577 0.445435 9.07158 0.445435C10.3274 0.445435 11.367 3.59364 11.5448 7.69543ZM14.0436 7.69543H17.9855C17.5295 4.41329 15.3034 1.69734 12.3025 0.542745C13.2509 2.30741 13.8966 4.83522 14.0436 7.69543ZM4.10743 7.69543C4.25459 4.83317 4.90105 2.30379 5.85059 0.538965C2.84469 1.69141 0.614265 4.4097 0.157715 7.69543H4.10743ZM4.10743 10.1954H0.157715C0.614265 13.4811 2.84469 16.1994 5.85059 17.3519C4.90105 15.587 4.25459 13.0577 4.10743 10.1954Z" />
        </svg >
    )
}

export default GlobeIcon