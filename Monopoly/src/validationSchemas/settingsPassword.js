import * as yup from 'yup'

export const settingsPasswordValidationSchema = yup.object().shape({

    oldpassword: yup
    .string()
    .required('Campo obligatorio'),

    newpassword: yup
    .string()
    .min(8,'La contraseña tiene que tener al menos 8 caracteres')
    .max(1000, 'La contraseña tiene que tener menos de 1000 caracteres')
    .required('Campo obligatorio'),

    confirm_password: yup
    .string()
    .oneOf([yup.ref('newpassword'), null], 'Las contraseñas no coinciden')
    .required('Campo obligatorio'),
})