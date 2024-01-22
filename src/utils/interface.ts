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
export interface productDataType {
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
  cekProduk: () => void;
  allData: any;
}

export interface lapData {
  data: [];
}

export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  content: JSX.Element;
  svg: JSX.Element;
}

export interface setDataKu {
  data?: [];
}

export interface typeLaptopDetail {
  storage?: string;
  price?: number;
  ram?: string;
  description?: string;
  model?: string;
  gambar?: string;
  brand?: string;
  processor?: string;
  id: number;
}

export interface typePayment {
  gambar: string;
  value: string;
  onSelection: (value: string) => void;
  name: string;
}

export interface postPayment {
  nama: string;
  alamat: string;
  metode_pembayaran: string;
}
