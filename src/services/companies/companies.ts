import { api } from '../apiClient';
import { ApiResponse } from 'apisauce';
import { CompanyDTO } from './companies.dto';

/**
 * Service responsible for performing a GET request to the /api/companies
 * route of the BE REST API.
 *
 * @returns {Promise<ApiErrorResponse<CompanyDTO[]> | ApiOkResponse<CompanyDTO[]>>}
 */
export const getCompaniesService = async () => {
  const companiesResponse: ApiResponse<CompanyDTO[]> = await api.get('/companies');

  return companiesResponse;
};
