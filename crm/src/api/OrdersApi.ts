import { OrderStatus } from "../common/enums/OrderStatus";
import { API_PATH } from "../constants";
import { HttpService } from "../services/HttpService";

class OrdersApi extends HttpService {
    constructor () {
        super(`${API_PATH}/orders`);
    }

    getAll(status: OrderStatus) {
        return this.get(`?status=${status}`);
    }

    create(data: any) {
        return this.post('', {data});
    }

    closeOrder (orderId: number) {
        //return this.patch(`close/${orderId}`);
    }

}

export default new OrdersApi();