import AxiosInstance from "../../axios/AxiosInstance"

export enum IntervalEnum {
    Seconds1 = "1s",
    Minutes1 = "1m",
    Minutes3 = "3m",
    Minutes5 = "5m",
    Minutes15 = "15m",
    Minutes30 = "30m",
    Hours1 = "1h",
    Hours2 = "2h",
    Hours4 = "4h",
    Hours6 = "6h",
    Hours8 = "8h",
    Hours12 = "12h",
    Days1 = "1d",
    Days3 = "3d",
    Weeks1 = "1w",
    Months1 = "1M"
}

export type GetKilnesApiParamsType = {
    symbol: string
    interval: IntervalEnum
    startTime?: string
    endTime?: string
    timeZone?: string
    limit?: number //Default 500; max 1000.
}

export const getKilnesApi = (params: GetKilnesApiParamsType) =>
    AxiosInstance.get("klines", { params })
        .then((res) => res.data)
        .catch((err) => console.log('kilnes err :', err))