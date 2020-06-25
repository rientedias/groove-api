import { Controller, Get, Post, Param, Body, Headers } from '@nestjs/common';
import { Customers } from '../../class/customers';
import { CustomersService } from '../../services/customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customerService: CustomersService) { }

    @Get(':id')
    public async getById(@Param('id') id: number): Promise<any> {

        try {

            const key = await this.customerService.getById(id);
            return {
                sucess: true,
                key: key
            }

        }
        catch (error) {

            return error
        }


    }

    @Post()
    public async createCustomer(

        @Body() customer: Customers,
        
        
    ): Promise<Customers> {

        const customers = await this.customerService.createCustomer(customer);

        return customers;
    }



}
