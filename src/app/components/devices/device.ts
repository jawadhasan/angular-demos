export interface IDevice{
  id: number;
  name:string;
  ip:string;
  port:number;
  status: string;
  description?:string;
  protocol?:protocol;
  history?: IDeviceHistory[]
}
export interface IDeviceHistory{
  id: number;
  ts: Date;
  status: string;
}

export enum protocol{
  Serial = 1,
  Modbus = 2,
  Http = 3
}
