import * as yup from 'yup'

export const signinValidationSchema = yup.object().shape({
    username: yup
        .string()
        .min(5, 'El username tiene que tener al menos 5 caracteres')
        .required('Campo obligatiorio'),
    email: yup
        .string()
        .email('Email tiene que ser un email valido')
        .required('Campo obligatorio'),
    password: yup
        .string()
        .min(8,'La contraseña tiene que tener al menos 8 caracteres')
        .max(1000, 'La contraseña tiene que tener menos de 1000 caracteres')
        .required('Campo obligatorio'),
    confirm_password: yup
        .string()
        .required('Campo obligatorio')
        .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
})         