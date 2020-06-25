import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [
    AppController, 
    CustomersController
  ],
  providers: [
    AppService, 
    CustomersService
  ],
})
export class AppModule { }
