export enum Status {
  ENABLE = "0",
  DISABLE = "1",
}
export enum MethodAPI {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}



export interface Admin {
  id: number;
  fullname: string;
  email: string;
  roles: IRoles[];
  password: string;
  status: Status;
  otp_code: string;
  last_iat: number;
  created_by: Admin;
  updated_by: Admin;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export type ErrorObj<T extends object> = {
  [key in keyof T]: string;
};

export interface ResponseAPI<T = any> {
  errors?: T extends object ? ErrorObj<T> : any;
  code: number;
  message: string;
  data: T;
  timestamp: string;
}
export interface IBase64 {
  base64File: string;
}
export interface IRow<T> {
  row: T;
}

export interface Pagination<T> {
  current_page: number;
  has_next_page: boolean;
  has_previous_page: boolean;
  next_page: number;
  prev_page: number | null;
  rows: T;
  limit: number;
  total_data: number;
  total_page: number;
}

// JSON Placeholder Request and Response Type
export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ILoginRequest {
  username: string;
  password: string;
  timestamp?: string;
}
export interface IResetEmail {
  email: string;
  timestamp?: string;
}
export interface INewPassword {
  password?: string;
  state: string;
  timestamp?: string;
}
export interface ICategories {
  created_at: string;
  deleted_at: string | null;
  description: string;
  description_ID: string;
  ico_path: string | null;
  id: number;
  modified_at: string;
  name: string;
  name_ID: string;
  status: string;
}
export interface IChannels {
  created_at: string;
  deleted_at: string | null;
  description: string;
  description_ID: string;
  ico_path: string | null;
  id: number;
  modified_at: string;
  name: string;
  status: string;
}
export interface IBank {
  id: number;
  bank_code: string;
  bank_name: string;
  bank_string_code: string;
  created_at: string;
  modified_at: string;
}
export interface IInformationBankShop {
  id: number;
  bank_account_name: string;
  bank_account_number: string;
  bank_branch_name: string;
  created_at: string;
  modified_at: string;
  bank: IBank
}
export interface IShops {
  created_at: string;
  deleted_at?: string | null;
  description: string;
  description_ID: string;
  ico_path: string | null;
  id: number;
  modified_at: string;
  name: string;
  phone: string;
  status: string;
  id_channels?: Partial<IShops>;
  shop_details?: Partial<IShopsDetails> | null;
}
export interface IShopsDetails {
  id: number;
  address: string;
  created_at: string;
  postal_code: number;
  phone: string;
  country: Partial<IShopsDetailsData>;
  province: Partial<IShopsDetailsData>;
  city: Partial<IShopsDetailsData>;
  is_custom_logistic: string | null;
  latitude: string | null;
  longitude: string | null;
}
export interface IShopsDetailsData {
  id: number;
  name: string;
  created_at: string;
}
export interface IProductsTotal {
  all: number;
  publish: number;
  unPublish: number;
}
export interface IImage {
  image: string;
}
export interface ITags {
  id: number;
  name: string;
  status?: string;
  created_at: string;
}
export interface IProducts {
  id: number;
  name: string;
  description: string;
  status: string;
  sku_id: string;
  price: string;
  stock: number;
  weigth: number | null;
  rating?: string | null;
  created_at: string;
  modified_at: string | null;
  image: IImage[];
  weight: number | null;
  categories?: Partial<ICategories>;
  shop?: Partial<IShops>;
  tags?: Array<ITags>;
  // variants?:
}
export interface IModules {
  id: number;
  name: string;
  descriptions: string;
  status: string;
  created_at: string;
  modified_at: string;
}
export interface IEventColor {
  id: number;
  color: string;
  status: string;
  created_at: string;
  modified_at: string;
}
export interface IEventType {
  id: number;
  name: string;
  name_id: string;
  icon: string | null;
  background: string | null;
  status: string;
  created_at: string;
  modified_at: string;
}
export interface IReligion {
  id: number;
  religion_id: string;
  religion_en: string;
  status: string;
  created_at: string;
  modified_at: string | null;
}
export interface IEvent {
  id: number;
  title: string;
  description: string;
  color: string;
  recurring: string;
  contacts: IListContact | null;
  religion: IReligion | null;
  time: string;
  status: string;
  created_at: string;
  created_by: string;
  modified_at: string;
  EventType: IEventType | null;
  admin: IIdAdmin | null;
  users: IUser | null;
  categories: ICategories | null;
  tags: ITags[];
}
export interface IEventRecuring {
  name: string;
  value: string;
}
export interface IStaticPages {
  id: number;
  title_id: string;
  title_en: string;
  content_id: string;
  content_en: string;
  slug_identifier: string;
  status: string;
  created_at: string;
  modified_at: string;
  admin: IIdAdmin;
}
export interface IFAQ {
  id: number;
  question_id: string;
  question_en: string;
  answer_id: string;
  answer_en: string;
  sorting_number: number;
  status: string;
  created_at: string;
  modified_at: string;
}
export interface IBannerPromo {
  id: number;
  title_id: string;
  title_en: string;
  content_id: string;
  content_en: string;
  banner_id: string;
  banner_en: string;
  start_date: string;
  end_date: string;
  status: string;
  created_at: string;
  modified_at: string;
}
export interface IListPreregister {
  brief_explanation: string | null;
  categories: Array<ICategories>;
  created_at: string;
  deleted_at: string | null;
  email: string;
  first_name: string;
  last_name: string | null;
  shop_name: string | null;
  gender: string;
  id: number;
  modified_at: string;
  personal_butler: string;
  phone: string;
  type: string;
}
export interface ICostumer {
  id: number;
  firebase_auth_uid: string | null;
  fullname: string | null;
  email: string;
  phone: string | null;
  profile_photo: string | null;
  password: string;
  status: string;
  googleId: string;
  last_signin: string | null;
  last_logout: string | null;
  created_at: string;
  modified_at: string;
  addresses: [];
}
export interface IContactCreatedBy {
  id: number;
  firebase_auth_uid: string | null;
  fullname: string;
  email: string;
  phone: string;
  profile_photo: string | null;
  googleId: string;
  last_signin: string | null;
  last_logout: string | null;
  created_at: string;
  modified_at: string;
}
export interface IListContact {
  id: number;
  fullname: string;
  phone: null | string;
  place_of_birth: string;
  date_of_birth: string;
  profile_photo: string | null;
  email: string | null;
  gender: string | null;
  status: string;
  company: string | null;
  occupation: string | null;
  address: string | null;
  postal_code: string | null;
  latitude: string | null;
  longitude: string | null;
  contact_remarks: string | null;
  instagram: string | null;
  twitter: string | null;
  facebook: string | null;
  linkedin: string | null;
  created_at: string;
  modified_at: string;
  created_by: IContactCreatedBy;
  interest: ITags[] | null;
  country: ICountries;
  province: ICountries;
  city: ICountries;
}
export interface IRoles {
  id: number;
  name: string;
  descriptions: string;
  status: string;
  created_at: string;
  deleted_at?: string | null;
  modified_at: string;
}
export interface IRolesRel {
  id?: number;
  create: string;
  update: string;
  delete: string;
  read_all: string;
  read_role: string;
  read_id: string;
  status: string;
  id_modules: Partial<IModules>;
}
export interface IAdmin {
  id: number;
  fullname: string;
  email: string;
  status: string;
  last_signin: string | null;
  updated_at: string | null;
  created_at: string;
  roles: Array<IRoles>;
  shops: Array<IShops>;
}
export interface IIdAdmin {
  fullname: string;
  id: number;
  last_logout: string | null;
  updated_at: string;
}
export interface ILogs {
  id: number;
  name: string;
  descriptions: string;
  ip_address: string;
  module: string;
  created_at: string;
  idAdmin: Partial<IIdAdmin> | undefined;
}
export interface ICountry {
  id: number;
  name: string;
  code: string;
  status: string;
  created_at: string;
  modified_at: string | null;
  total_provinces?: number | null;
  total_cities?: number | null;
}
export interface ICountries {
  id: number;
  name: string;
  code: string;
  status: string;
  created_at: string;
  modified_at?: string | null;
}

// Logistic and Shipment
// Shipment History
export interface IShipmentHistory {
  id: number;
  note: string;
  status: string;
  shipment_update: string;
  created_at: string;
}
// Shipment
export interface IShipment {
  id: number;
  cost: string;
  discount: string;
  sender_name: string;
  sender_phone: string;
  sender_address: string;
  reciever_name: string;
  reciever_notes: string;
  reciever_phone: string;
  address_reciever: string;
  issurance_cost: string;
  tracking_code: string;
  logistic_id: string;
  logistic_code: string;
  logistic_type: string;
  remark: string | null;
  status: string;
  created_at: string;
  updated_at?: string | null;
  shipment_histories: IShipmentHistory[] | [];
}
export interface ILogisticDetails {
  id: number;
  name: string;
  type_name: string;
  volumetric: number;
  min_kg: number;
  max_kg: number;
  status: string;
  created_at: string;
  value_checklist: number;
}
export interface ILogistic {
  id: number;
  name: string;
  logo: string;
  code: string;
  status: string;
  created_at: string;
  logistic_details: Array<ILogisticDetails> | null;
}

// Users Buyer
export interface IUser {
  id: number;
  firebase_auth_uid: string;
  fullname: string;
  email: string;
  phone: string | null;
  profile_photo: string | null;
  password: string;
  status: string;
  googleId: string;
  last_signin: string | null;
  last_logout: string | null;
  created_at: string;
  updated_at?: string | null;
}

// Finance
// Order or Transaction
export interface ITransactionProductDetails {
  id: number;
  name: string;
  price: string;
  qty: string;
  total_price: string;
  currency: string;
  status: string;
  created_at: string;
  updated_at?: string | null;
  products: Partial<IProducts> | null;
  image: string;
}
export interface ITransaction {
  id: number;
  status: string;
  created_at: string;
  updated_at?: string | null;
  users: IUser;
}
export interface IOrder {
  id: number;
  total_price_products: string;
  shipping_price: string;
  total_price: string;
  currency: string;
  status: string;
  created_at: string;
  updated_at?: string | null;
  transaction: ITransaction | null;
  shipment: IShipment | null;
  shops: IShops | null;
  transaction_product_details: Array<ITransactionProductDetails> | null;
}
export interface IHistoryWithdraw {
  id: number;
  requested_amount: string;
  withdrawal_fee: string;
  tax_fee: string;
  net_amount: string;
  bank_code: string;
  bank_string_code: string;
  bank_name: string;
  bank_account_name: string;
  bank_account_number: string;
  bank_branch_name: string;
  withdrawal_number: string;
  reference_no: string | null;
  notes: string | null;
  otp_code: string | null;
  proof_of_transfer: string | null;
  type: string | null;
  status: string;
  created_at: string;
  modified_at?: string | null;
  shop: IShops;
}
