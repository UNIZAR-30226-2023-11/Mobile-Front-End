import * as yup from 'yup'

export const settingsUserValidationSchema = yup.object().shape({

    nuevoUsuario: yup
    .string()
    .required('Campo obligatorio'),

})