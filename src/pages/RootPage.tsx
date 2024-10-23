import { TradingViewWidget } from 'components'
import React from 'react'


const RootPage = () => {

    // useEffect(() => {
    //     getKilnesApi({ symbol: "BTCUSDT", interval: IntervalEnum.Minutes1 })
    //         .then((res) => console.log('-----====>:', res))
    // }, [])

    return (
        <div className='min-h-[calc(100vh-100px)]'>
            <TradingViewWidget />
        </div>
    )
}

export default RootPage