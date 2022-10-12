import { data } from 'autoprefixer';
import { defaultInstance, authInstance } from '../utils';

export const getPost = async selectChannel => {
  try {
    const { data } = await defaultInstance.get(``);
    return data;
  } catch (err) {
    console.log(err);
  }
};
