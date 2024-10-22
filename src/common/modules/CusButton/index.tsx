import { Button, ButtonProps } from 'flowbite-react'
import React, { FC } from 'react'

const CusButton: FC<ButtonProps> = ({ children, ...rest }) => {
    return (
        <Button {...rest}>{children}</Button>
    )
}

export default CusButton