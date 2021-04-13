export type ValidatorsType = (value: string) => string | undefined

export const required: ValidatorsType = (value) => value ? undefined : 'Field is required'
export const maxLength = (max: number): ValidatorsType => value => value && value.length > max ? `Must be ${max} characters or less` : undefined
export const minLength = (min: number): ValidatorsType => value => value && value.length < min ? `Must be at least ${min}` : undefined



