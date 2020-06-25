import { Injectable, HttpService, Headers } from '@nestjs/common';
import { Customers } from '../class/customers';
import redis from 'redis';
import { v4 as uuidv4 } from 'uuid';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { config } from 'dotenv';





//const client = redis.createCliente();

@Injectable()
export class CustomersService {

    data: any;
    base_url = process.env.BASE_URL;

    constructor(private httpService: HttpService) { }


    getById(id: number) {

        return
    }

    private login() {

        console.log("ENV", process.env.USER_NAME)

        const loginClient = {
            "username": process.env.USER_NAME,
            "password": process.env.PASSWORD
        }
        const data = this.httpService.post(this.base_url + '/auth/login', loginClient);
       
        return data;
    }

    private sign(client, token): Observable<AxiosResponse<any>> {

        const res = this.httpService.post(this.base_url + '/sign', client, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return res
    }
    public async createCustomer(customer: Customers) {

        //Gerando ID
        customer.id = uuidv4();

        //Objeto enviado, para gerar assinatura do cliente.
        const creatingSignature = {

            "entity": {

                "costumer_key": customer.costumer_key,
                "costomer_name": customer.costumer_name
            }


        }
        this.login().subscribe(res => {
            this.data = res.data;
            this.sign(creatingSignature, this.data.token).subscribe(response => {
                console.log("RES", response.data)
            })
        });

        return customer;
    }

    updataCustomer(id: number) {

        return id;
    }



}
