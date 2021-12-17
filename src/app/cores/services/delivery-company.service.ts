import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryCompanyService {

  url: string = 'delivery-company'
  constructor(
    private apiService: ApiService
  ) { }

  creat( formData : any) {

    const requestBody = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      email: formData.email
    }
    return this.apiService.post(this.url, requestBody).subscribe ((response: any) => {
      console.log(response);
    })
  }

  del(id: string | number) {
    return this.apiService.delete(`${this.url}/${id}`).subscribe ((response: any) => {
      console.log(response);
    })
  }

  update(id: string | number , formData: any) {

    const requestBody = {
      name: formData.name,
      address: formData.address,
      phone: formData.phone,
      email: formData.email
    }

    return this.apiService.put(`${this.url}/${id}`, requestBody).subscribe ((response: any) => {
      console.log(response);
    })
  }

  getAll() {
    return this.apiService.get(this.url).subscribe ((response: any) =>
    console.log(response));
  }
}
