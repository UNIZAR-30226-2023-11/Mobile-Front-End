import * as yup from 'yup'

export const settingsEmailValidationSchema = yup.object().shape({

    email: yup
    .string()
    .email('Email tiene que ser un email valido')
    .required('Campo obligatorio'),

})