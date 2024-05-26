import * as React from 'react'
import { Icons } from './ui/icons'

interface IncrementInputProps extends React.HTMLAttributes<HTMLInputElement> {
  defaultValue?: number
  onValueChange?: (value: number) => void
}

export const IncrementInput = ({
  defaultValue = 1,
  onValueChange,
  ...props
}: IncrementInputProps) => {
  const [value, setValue] = React.useState<number>(defaultValue)

  React.useEffect(() => {
    onValueChange?.(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const handleValidateNumberInput = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value
    const isValid = /^\d+$/.test(value)
    isValid && setValue(parseInt(value))
  }

  const handleIncrement = () => setValue((prev) => prev + 1)
  const handleDecrement = () => setValue((prev) => Math.max(1, prev - 1))

  return (
    <div className="relative w-20">
      <button
        className="btn btn-square btn-xs absolute left-0 top-0 rounded-r-none"
        onClick={handleDecrement}
      >
        <Icons.Minus className="!size-3.5" />
      </button>
      <input
        type="text"
        className="input input-xs input-bordered w-full px-4 text-center text-sm"
        value={value}
        {...props}
        onChange={handleValidateNumberInput}
      />
      <button
        className="btn btn-square btn-xs absolute right-0 top-0 rounded-l-none"
        onClick={handleIncrement}
      >
        <Icons.Plus className="!size-3.5" />
      </button>
    </div>
  )
}
