import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'The password does not fit. Try again!')
    .required('Password is required'),
});

export const validationAuthSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 6 characters')
    .required('Password is required'),
  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('First name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Last name is required'),
});

export const validationUpdateSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('New password is required'),
  oldPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Old password is required'),
  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('First name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Last name is required'),
});

export const validationSupportSchema = Yup.object({
  email: Yup.string()
    .email('Email is invalid. Try again!')
    .required('Email is required'),

  firstName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('First name is required'),
  lastName: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .min(3, 'Too short')
    .required('Last name is required'),
  country: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .required('Country is required'),
  jobTitle: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .required('Job Title is required'),
  company: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .required('Company is required'),
  text: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/, 'Only letters are allowed')
    .required('Message is required')
    .min(10, 'Too short'),
});
