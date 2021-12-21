import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemWeightService {

  url: string = 'item-weight'

  constructor(
    private apiService: ApiService
  ) { }
  create(formData: any) {

    const requestBody = {
      item_categories_id: formData.item_categories_id,
      label: formData.label,
      max_weight: formData.max_weight,
      min_weight: formData.min_weight,
      price: formData.price,
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
      item_categories_id: formData.item_categories_id,
      label: formData.label,
      max_weight: formData.max_weight,
      min_weight: formData.min_weight,
      price: formData.price,
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
