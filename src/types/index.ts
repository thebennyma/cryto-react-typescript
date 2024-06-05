import { z } from "zod"
import { CurrencySchema, CryptoCurrencyResponseShema, PairShema, CryptoPriceShema } from "../schema/crypto-shema";

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseShema>
export type Pair = z.infer<typeof PairShema>
export type CryptoPrice = z.infer<typeof CryptoPriceShema>