export interface LoginState {
  email: string;
  password: string;
  passwordVisible: boolean;
}

export interface registerType {
  fullName: string;
  username: string;
  password: string | number;
  showPassword: boolean;
  gender: string;
  email: string;
  phoneNumber: string;
}
export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  content: JSX.Element;
  svg: JSX.Element;
}
