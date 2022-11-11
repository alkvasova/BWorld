export interface CustomerDto {
    id: number;
    firstName: string;
    patronymic: string;
    surName: string;
    phone: string;
}

export interface MasterDto {
    id: number;
    fullName: string;
}

export interface ServiceDto {
    id: number;
    name: string;
}

export interface OrderDto {
    id: number;
    visitDate: string;
    customer: CustomerDto;
    master: MasterDto;
    service: ServiceDto; 
}