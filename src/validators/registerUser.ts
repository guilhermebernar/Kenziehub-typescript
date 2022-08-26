import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Deve ser um email').required('Email é obrigatório'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Confirmação deve ser igual a senha'),
  bio: yup.string().min(20, 'No minimo 20 caracteres').required(),
  contact: yup.string().matches(/^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm, 'Insira um número válido.').min(11, 'Insira um número válido.')
});