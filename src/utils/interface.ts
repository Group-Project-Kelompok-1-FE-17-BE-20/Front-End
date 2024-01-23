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

export interface CartType {
  product_id: string;
  nama_produk: string;
  jumlah: number;
  harga_satuan: number;
  total_harga: number;
}

export interface CartState {
  items: CartType[];
  total: number;
}
export interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  content: JSX.Element;
  svg: JSX.Element;
}

export interface Product {
  id: string;
  nama: string;
  merek: string;
  jumlah_barang: number;
  harga_satuan: number;
  deskripsi_barang: string;
  username: string;
  gambar_barang: string;
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
