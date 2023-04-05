import * as yup from 'yup'

export const settingsUserValidationSchema = yup.object().shape({

    newusername: yup
    .string()
    .min(5, 'El username tiene que tener al menos 5 caracteres')
    .required('Campo obligatorio'),

})