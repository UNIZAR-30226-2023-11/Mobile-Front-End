import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Campo obligatorio'),
    password: yup
        .string()
        .min(8,'La contraseña tiene que tener al menos 8 caracteres')
        .max(1000, 'La contraseña tiene que tener menos de 1000 caracteres')
        .required('Campo obligatorio'),
})