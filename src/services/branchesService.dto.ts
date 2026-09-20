export interface BranchDto {
  id: string;
  name: string;
  city?: string;
  area?: string;
}

export interface GetRestaurantBranchesResponse {
  branches: BranchDto[];
}