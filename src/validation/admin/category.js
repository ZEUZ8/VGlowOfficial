import * as yup from 'yup'

export const categoryValidation = yup.object().shape({
    name: yup
        .string()
        .required('Category Name Required'),
    Description: yup
        .string(),
    parent:yup
        .string()
        .required("Parent Required "),
    isActice: yup
        .boolean()
        .required("Category Status")
})