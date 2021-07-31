import axios from 'axios';
import { addressInfo } from '../types';

export const getAddressInfo = async (zipcode: string): Promise<addressInfo | null> => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);

    return {
      street: response.data.logradouro,
      neighborhood: response.data.bairro,
      city: response.data.localidade,
      state: response.data.uf,
    }

  } catch (error) {
    console.log(error);
    return null;
  }
}

getAddressInfo('61905580')
  .then(addressInfo => console.log(addressInfo))
  .catch(error => console.log(error));