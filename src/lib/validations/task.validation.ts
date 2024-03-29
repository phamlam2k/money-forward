import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .max(128, 'Title should not exceed 138 characters'),
  hours: Yup.number()
    .required('Hours is required')
    .min(1, 'Hours should be greater than 0')
    .max(24, 'Hours should not exceed 24')
});

export default taskSchema;
