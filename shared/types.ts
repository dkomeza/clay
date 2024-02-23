export interface User {
  id: string;
  email: string;
  username: string;
}

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  emailOrUsername: string;
  password: string;
  rememberMe?: boolean;
}
