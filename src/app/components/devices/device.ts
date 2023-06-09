export interface IDevice{
  id: number;
  name:string;
  ip:string;
  port:number;
  status: string;
  description?:string;
  history?: IDeviceHistory[]
}
export interface IDeviceHistory{
  id: number;
  ts: Date;
  status: string;
}
