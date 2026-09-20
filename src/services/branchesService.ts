import type { Branch } from "@/types.domain";
import apiClient from "./apiClient"
import type { GetRestaurantBranchesResponse } from "./branchesService.dto"


function toBranchDomainType(response:GetRestaurantBranchesResponse): Branch[] {

  const branches = response.branches;

  return branches.map((b) => ({
    id: b.id,
    name: b.name,
    location: [b.area, b.city].filter(Boolean).join(", "),
  }));
}

export async function getRestaurantBranches(): Promise<Branch[]> {
  const response = await apiClient.get<GetRestaurantBranchesResponse>('branches')

  return toBranchDomainType(response.data)
}