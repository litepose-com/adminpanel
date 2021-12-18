import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PickupStatusService {

  url: string = 'pickup-status'
  constructor(
    private apiService: ApiService
  ) { }

  create(formData: any) {

    const requestBody = {
      label: formData.label,
      is_active: formData.is_active
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
      label:formData.label,
      is_active: formData.is_active
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
