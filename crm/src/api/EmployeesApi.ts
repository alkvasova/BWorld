import { API_PATH } from "../constants";
import { HttpService } from "../services/HttpService";

export interface StaffDto {
    id: number;
    firstName: string;
    patronymic: string;
    surName: string;
    fullName: string;
    position: string;
    startWorkData: string;
    photo: string;

}

class EmployeesApi extends HttpService {
    constructor () {
        super(`${API_PATH}/staff`);
    }

    getAll(): Promise<StaffDto[]> {
        return this.get('');
    }
}

export default new EmployeesApi();