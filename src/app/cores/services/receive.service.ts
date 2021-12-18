import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ReceiveService {

  url : string = 'receive'
  constructor(
    private apiService: ApiService
  ) { }

  create(formData: any) {

    const requestBody = {
      client_id: formData.client_id,
      name: formData.name,
      phone: formData.phone,
      township: formData.township,
      address: formData.address,
      pickup_id: formData.pickup_id,
      item_name: formData.item_name,
      item_weight_id: formData.item_weight_id,
      size_id: formData.size_id,
      service_type_id : formData.service_type_id,
      payment_type_id : formData.payment_type_id
    }

    return this.apiService.post(this.url, requestBody).subscribe((response: any) => {
      console.log(response);
    })
  }

  del(id: string | number) {
    return this.apiService.delete(`${this.url}/${id}`).subscribe((resposne: any) => {
      console.log(resposne);
    })
  }

  update(id: string | number, formData: any) {

    const requestBody = {
      client_id: formData.client_id,
      name: formData.name,
      phone: formData.phone,
      township: formData.township,
      address: formData.address,
      pickup_id: formData.pickup_id,
      item_name: formData.item_name,
      item_weight_id: formData.item_weight_id,
      size_id: formData.size_id,
      service_type_id : formData.service_type_id,
      payment_type_id : formData.payment_type_id
    }

    return this.apiService.put(`${this.url}/${id}`, requestBody).subscribe((response: any) => {
      console.log(response);
    })
  }

  getAll() {
    return this.apiService.get(this.url).subscribe((response: any) => {
      console.log(response);
    })
  }
}
