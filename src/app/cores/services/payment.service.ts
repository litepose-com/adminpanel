import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url:string = 'payment'
  constructor(
    private apiService: ApiService
  ) { }

  create(formData :any) {
    const requestBody = { 
      order_id: formData.order_id,
      total_amount: formData.total_amount,
      total_transaction: formData.total_transaction,
    }

    return this.apiService.post(this.url, requestBody).subscribe((response: any) => {
      return response
    })
  }

  del(id: string | number) {
    return this.apiService.delete(`${this.url}/${id}`).subscribe((response: any)=> {
      return response
    })
  }

  update(id:string | number, formData: any) {
    const requestBody = {
      order_id: formData.order_id,
      total_amount: formData.total_amount,
      total_transaction: formData.total_transaction,
    }
    
    return this.apiService.put(`${this.url}/${id}`, requestBody).subscribe((response: any) => {
      return response
    })
  }

  getAll() {
    return this.apiService.get(this.url).subscribe((response: any) => {
      return response
    })
  }
}
