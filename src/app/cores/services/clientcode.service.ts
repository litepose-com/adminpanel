import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientcodeService {

  url: string = "clientcode"
  constructor(
    private apiService: ApiService
  ) { }

  creat( formData : any) {

    const requestBody = {
      client_id: formData.client_id,
      client_code: formData.client_code,
      is_used: formData.is_used
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
      acc_id: formData.acc_id,
      user_code: formData.user_code,
      is_used: formData.is_used,
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
