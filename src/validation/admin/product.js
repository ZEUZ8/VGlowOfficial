import * as yup from "yup";

export const productValidation = yup.object().shape({
    productName: yup
        .string()
        .required("Required"),
    productDescription: yup
        .string()
        .min(50, 'Description must be at least 50 characters')
        .max(1000, 'Description can\'t exceed 500 characters')
        .required('Product description is required')
        .trim(), // Ensures no extra spaces before or after the descripti
    mainCategory: yup
        .string()
        .required("Please Select Category"),
    subCategory: yup
        .string()
        .required("Please Select Sub Category"),
    basePricing: yup
        .number()
        .typeError("Must be a Number")
        .required("Base price is required"),
    stock: yup
        .number()
        .typeError("Must be a Number")
        .required("stock quantity is required"),
    discount: yup
        .number()
        .typeError("Must be a Number")
        .nullable(),
    discountType: yup
        .string()
        .nullable()
        .test(
            'discount-type-required',
            'Discount type is required when a discount is applied',
            function (value) {
              const { discount } = this.parent;
              return !discount || !!value; // Discount type is only required if discount exists
            }
        ),
    sizes: yup
        .array()
        .of(yup.number().required('Each size must be number'))
        .min(1,'size required')
        .required('size required')
        .default([50, 70, 30]),
})
