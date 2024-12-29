import { AnimatePresence } from 'framer-motion'
import { type ChangeEvent, useId } from 'react'
import {
  Controller,
  type FieldError,
  get,
  useFormContext
} from 'react-hook-form'
import ReactSelect from 'react-select'
import { twMerge } from 'tailwind-merge'

import { FormError } from '@/components/forms'

import { CustomOption } from './custom-option'
import { type AdvanceSelectProps } from './type'

export const AdvanceSelect = <T extends Record<string, unknown>>(
  props: AdvanceSelectProps<T>
) => {
  const {
    name,
    id,
    label,
    onChange,
    containerClassName,
    required,
    isSearchable = false,
    isMulti,
    size = 'md',
    ...rest
  } = props
  const generatedId = useId()

  const {
    control,
    formState: { errors }
  } = useFormContext()

  const error: FieldError = get(errors, name)
  return (
    <div
      className={twMerge([
        'relative flex w-full flex-col gap-1',
        containerClassName
      ])}
    >
      {label && (
        <label
          htmlFor={id ?? generatedId}
          className={twMerge([
            'text-slate-600',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-lg'
          ])}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <ReactSelect
              isMulti={isMulti}
              instanceId={id ?? generatedId}
              components={{ Option: CustomOption }}
              onChange={(newValue, actionMeta) => {
                if (onChange) {
                  onChange(
                    newValue as ChangeEvent<HTMLInputElement>,
                    actionMeta
                  )
                  return
                }
                field.onChange(newValue)
              }}
              value={field.value}
              isSearchable={isSearchable}
              className={twMerge([
                '',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                size === 'lg' && 'text-lg'
              ])}
              styles={{
                control: (base, { isFocused }) => ({
                  ...base,
                  borderRadius: '0.25rem',
                  boxShadow: 'none',
                  borderColor: error
                    ? '#f06548'
                    : isFocused
                      ? '#299cdb'
                      : '#cbd5e1',
                  height: isMulti
                    ? 'auto'
                    : size === 'sm'
                      ? '32px'
                      : size === 'md'
                        ? '43px'
                        : '48px',
                  minHeight:
                    size === 'sm' ? '32px' : size === 'md' ? '43px' : '48px',
                  fontSize:
                    size === 'sm'
                      ? '0.75rem'
                      : size === 'md'
                        ? '0.875rem'
                        : '1.125rem',
                  color: '#475569'
                }),
                menu: (base) => ({
                  ...base,
                  fontSize:
                    size === 'sm'
                      ? '0.75rem'
                      : size === 'md'
                        ? '0.875rem'
                        : '1.125rem'
                }),
                indicatorSeparator: () => ({
                  display: 'none'
                }),
                option: (base, state) => ({
                  ...base,
                  color: state.isSelected ? '#0ab39c' : '#475569',
                  backgroundColor: state.isSelected
                    ? 'white'
                    : state.isFocused
                      ? '#f3f4f6'
                      : 'white'
                }),
                singleValue: (base) => ({
                  ...base,
                  color: '#475569',
                  marginLeft: '.25rem'
                }),
                placeholder: (base) => ({
                  ...base,
                  color: '#475569',
                  marginLeft: '.25rem'
                }),
                input: (base) => ({
                  ...base,
                  '[type="text"]': {
                    boxShadow: 'none !important'
                  }
                })
              }}
              {...rest}
            />
          )
        }}
      />

      <AnimatePresence>
        {error && (
          <FormError
            key={error.message}
            error={error}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
