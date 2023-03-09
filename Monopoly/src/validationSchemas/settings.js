import * as yup from 'yup'

export const settingsValidationSchema = yup.object().shape({
    email: yup
    .string()
    .email('Email tiene que ser un email valido'),

    oldpassword: yup
    .string(),

    newpassword: yup
    .string()
    .min(8,'La contraseña tiene que tener al menos 8 caracteres')
    .max(1000, 'La contraseña tiene que tener menos de 1000 caracteres'),

    confirm_password: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Las contraseñas no coinciden')
})