interface FormatCurrencyOptions {
  value: number
  locale?: string
  currency?: string
}

export const formatCurrency = ({
  value,
  locale = 'pt-BR',
  currency = 'BRL',
}: FormatCurrencyOptions) => {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(
    value,
  )
}
