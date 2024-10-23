import React, { useEffect, useRef, memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function TradingViewWidget() {

    const container = useRef<HTMLDivElement>(null);
    const { theme } = useSelector((state: RootState) => state.ui)
    const [rerender, setRerender] = useState(0)

    const widgetOptions = {
        theme,
        style: "1",
        locale: "en",
        interval: "1",
        autosize: true,
        calendar: false,
        timezone: "Asia/Tehran",
        withdateranges: true,
        allow_symbol_change: false,
        symbol: "BTCUSDT",
        support_host: "https://www.tradingview.com"
    }

    const createWidget = async () => {
        // check container's items number for prevent appending extra charts 
        if (container.current && container.current.children.length < 3) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.id = "TradingView-Chart"
            script.innerHTML = JSON.stringify(widgetOptions);

            script.onerror = () => {
                console.error("TradingView script failed to load.");
            };
            container.current.appendChild(script);
        }
    }

    useEffect(() => {
        createWidget()
    }, []);

    return (
        <div className="tradingview-widget-container !h-[85vh] !w-11/12 mx-auto mt-9" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
        </div>
    );
}

export default memo(TradingViewWidget);
