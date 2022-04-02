import { api } from '../apiClient';
import { ApiResponse } from 'apisauce';
import { CompanyDTO } from './companies.dto';

export const getCompaniesService = async () => {
  const companiesResponse: ApiResponse<CompanyDTO[]> = await api.get('/companies');

  return companiesResponse;
};
