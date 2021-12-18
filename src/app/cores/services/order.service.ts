import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url: string = 'order'
  constructor(
    private apiService: ApiService
  ) { }
  
  create(formData  : any) {
    const requestBody = {
      client_id: formData.client_id,
      pickup_id: formData.pickup_id,
      order_date: formData.order_date,
      order_status: formData.order_status,
      pickup_date: formData.pickup_date,
      pickup_status_id: formData.pickup_status_id,
      pickup_by_user_id : formData.pickup_by_user_id,
      delivery_date: formData.delivery_date,
      delivery_status_id: formData.delivery_status_id,
      delivery_by_user_id: formData.delivery_by_user_id
    }

    return this.apiService.post(this.url , requestBody).subscribe((response: any) =>{
      return response
    })
  }

  del(id: string | number) {
    return this.apiService.delete(`${this.url}/${id}`).subscribe((response: any) => {
      return response
    })
  }

  update(id: string | number , formData : any) {

      const requestBody  = {
      client_id: formData.client_id,
      pickup_id: formData.pickup_id,
      order_date: formData.order_date,
      order_status: formData.order_status,
      pickup_date: formData.pickup_date,
      pickup_status_id: formData.pickup_status_id,
      pickup_by_user_id : formData.pickup_by_user_id,
      delivery_date: formData.delivery_date,
      delivery_status_id: formData.delivery_status_id,
      delivery_by_user_id: formData.delivery_by_user_id
    }

    return this.apiService.put(`${this.url}/${id}`, requestBody) .subscribe ((response: any) => {
      return response
    })
  }

  getAll() {
    return this.apiService.get(this.url).subscribe((response: any) => {
      return response
    })
  }
}
