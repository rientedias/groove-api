import { Controller, Get, Post } from '@nestjs/common';

@Controller('customers')
export class CustomersController {

@Get(':id')
public async getById(): Promise<any[]>{

    return 
}

@Post()

public async createCustomer():Promise<any[]>{
    return
}



}
