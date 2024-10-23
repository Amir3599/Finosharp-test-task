import React from 'react'
import { ErrorBoundary as ReactErrorBounary } from "react-error-boundary"

const ErrorFallback = () => {
    return (<div />)
}

const ErrorBounary = ({ children }: any) => {
    return (
        <ReactErrorBounary FallbackComponent={ErrorFallback}>{children}</ReactErrorBounary>
    )
}

export default ErrorBounary