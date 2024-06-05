import axios from "axios"
import { CryptoCurrenciesResponseShema, CryptoPriceShema } from "../schema/crypto-shema"
import { Pair } from "../types"

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CryptoCurrenciesResponseShema.safeParse(Data)

    if (result.success) {
        return result.data
    }
}

export async function fetchCurrenCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)
    const result = CryptoPriceShema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])

    if (result.success)
        return result.data

}