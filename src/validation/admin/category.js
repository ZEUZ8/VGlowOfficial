import * as yup from 'yup'

export const categoryValidation = yup.object().shape({
    categoryName: yup
        .string()
        .required('Category Name Required'),
    description: yup
        .string(),
    parentId:yup
        .string()
        .required("Parent Required"),
    isActice: yup
        .boolean()
        .default(true)
})