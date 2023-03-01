import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Email tiene que ser un email valido')
        .required('Campo obligatorio'),
})