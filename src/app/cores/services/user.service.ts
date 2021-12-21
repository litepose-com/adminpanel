import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url : string = "user"
  constructor(
    private apiService: ApiService
  ) { }

  creat(formData: any) {

    const requestBody = {
      acc_name: formData.acc_name,
      acc_email: formData.acc_email,
      acc_phone: formData.acc_phone,
      acc_password: formData.acc_password,
      is_delivery: formData.is_delivery,
      acc_type_id: formData.acc_type_id,
      delivery_company_id: formData.delivery_company_id
    }

    return this.apiService.post(this.url, requestBody).subscribe((response: any) => {
      console.log(response);
    })
  }

  del(id: string | number) {
    return this.apiService.delete(`${this.url}/${id}`).subscribe((response: any) => {
      console.log(response)
    })
  }

  update(id: string | number , formData: any) {

    const requestBody = {
      acc_name: formData.acc_name,
      acc_email: formData.acc_email,
      acc_phone: formData.acc_phone,
      acc_password: formData.acc_password,
      is_delivery: formData.is_delivery,
      acc_type_id: formData.acc_type_id,
      delivery_company_id: formData.delivery_company_id
    }

    return this.apiService.put(`${this.url}/${id}`, requestBody).subscribe((response: any)=>{
      console.log(response)
    })
  }

  getAll() {
    return this.apiService.get(this.url).subscribe((response: any) => {
      console.log(response);
    })
  }

}
