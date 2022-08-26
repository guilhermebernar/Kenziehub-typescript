export interface ILoginUser{
  email:string;
  password:string;
}

export interface ITechs{
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export interface IUser{
  avatar_url?: string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs?: ITechs[];
  updated_at: string; 
  works?: [];
}

export interface IResponseAPI {
  user: IUser;
  token: string | null;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
}

export interface ITechRegister {
  title: string;
  status: string;
}

export interface IDeleteTech {
  id: string | null;
}