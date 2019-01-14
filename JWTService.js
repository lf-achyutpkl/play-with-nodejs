import jwt from 'jsonwebtoken';

import { SECRET_KEY } from './config';

export const generateToken = () => {
  return jwt.sign({ id: 1, name: 'Hari' }, SECRET_KEY, { expiresIn: 600 });
};

// NEVER DO THIS
export const decodeToken = token => {
  return jwt.decode(token, SECRET_KEY);
};
