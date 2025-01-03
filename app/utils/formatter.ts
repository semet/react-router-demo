export const currencyFormatter = (
  amount: number,
  options?: Intl.NumberFormatOptions,
  isTruncated: boolean = false
) => {
  if (!options) {
    options = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }
  }

  if (isTruncated) {
    const factor = Math.pow(10, options.maximumFractionDigits || 2)

    amount = Math.floor(amount * factor) / factor
  }
  return amount?.toLocaleString('en-US', options)
}
