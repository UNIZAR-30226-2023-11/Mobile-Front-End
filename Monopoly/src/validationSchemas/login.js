import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Campo obligatorio'),
    password: yup
        .string()
        .required('Campo obligatorio'),
})