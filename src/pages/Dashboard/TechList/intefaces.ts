export interface ITechData {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IRenderTech {
  techData: ITechData;
  index?: number;
}
