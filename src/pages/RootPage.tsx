import React from 'react'
import { TradingViewWidget } from 'components';

const RootPage = () => {
    // useEffect(() => {
    //     getKilnesApi({ symbol: "BTCUSDT", interval: IntervalEnum.Minutes1 })
    //         .then((res) => console.log('-----====>:', res))
    // }, [])

    return (
        <div>
            <div className='h-[80vh] md:p-6 p-2 pb-0'>
                <TradingViewWidget />
                {/* <AdvancedRealTimeChart
                    allow_symbol_change={false}
                    symbol='BTCUSDT'
                    theme={theme}
                    autosize
                /> */}
            </div>
        </div>
    )
}

export default RootPage