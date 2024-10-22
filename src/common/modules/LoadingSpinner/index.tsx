import React from 'react'
import { BaseProps, Watch } from 'react-loader-spinner'


interface WatchProps extends BaseProps {
    radius?: string | number;
}

const defaultProps: WatchProps = {
    height: "80",
    width: "80",
    radius: "48",
    color: "#4fa94d",
    ariaLabel: "watch-loading",
    wrapperStyle: {},
    wrapperClass: '',
    visible: true
}

function LoadingSpinner({ ariaLabel, color, height, radius, visible, width, wrapperClass, wrapperStyle }: WatchProps) {
    return (
        <Watch
            height={height}
            width={width}
            radius={radius}
            color={color}
            ariaLabel={ariaLabel}
            wrapperStyle={wrapperStyle}
            wrapperClass={wrapperClass}
            visible={visible}
        />
    )
}

LoadingSpinner.defaultProps = defaultProps

export default LoadingSpinner