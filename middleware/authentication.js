import jwt from 'jsonwebtoken';

import { SECRET_KEY } from '../config';

export const authenticate = (req, res, next) => {
  let token = req.headers['authorization'];

  console.log(token);
  console.log('authentication middleware...');

  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, SECRET_KEY, (err, decodedData) => {
    if (err)
      return res.status(401).send({ auth: false, message: 'Invalid Access.' });

    console.log('decoded token: ', decodedData);
    next();
  });
};
