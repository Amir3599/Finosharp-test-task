import React, { useEffect, useRef, memo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

function TradingViewWidget() {
    const { theme } = useSelector((state: RootState) => state.ui)
    const container = useRef<HTMLDivElement | null>(null);

    const createWidget = async () => {
        try {
            if (container.current) {
                const script = document.createElement("script");
                script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
                script.type = "text/javascript";
                script.async = true;
                script.innerHTML = JSON.stringify({
                    autosize: true,
                    symbol: "BTCUSDT",
                    interval: "1",
                    timezone: "Asia/Tehran",
                    theme: theme,
                    style: "1",
                    locale: "en",
                    gridColor: "rgba(242, 242, 242, 0.06)",
                    withdateranges: true,
                    allow_symbol_change: true,
                    calendar: false,
                    support_host: "https://www.tradingview.com"
                })

                if (container.current.innerHTML.startsWith("<script")) {
                    if (container.current.children.length < 1) {
                        container.current.appendChild(script);
                        return
                    }
                } else {
                    container.current.innerHTML = ""
                    container.current.appendChild(script);
                }
            }
        } catch (error) {
            console.log("error on create chart ", error)
        }
    }

    useEffect(() => {
        createWidget()
    }, [theme]);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
        </div>
    );
}

export default memo(TradingViewWidget);
