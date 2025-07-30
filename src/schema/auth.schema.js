import * as yup from 'yup'

export const loginSchema = yup.object({
    email:yup.string().required('email is required').email('invalid email format'),
    password:yup.string().required('password is required')
})

export const registerSchema = yup.object({
    email:yup.string()
    .required('email is required')
    .email('invalid email format'),
    full_name:yup.string()
    .required('Full Name is required'),
    password:yup.string()
    .required('password is required')
    .min(6,'at least 6 char long password.')

})