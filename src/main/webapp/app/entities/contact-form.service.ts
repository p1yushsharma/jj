import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ContactForm } from './contact-form.model';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  private resourceUrl = environment.apiUrl + '/api/contact-forms'; // Replace with actual URL if needed

  constructor(private http: HttpClient) {}

  /**
   * Create a new ContactForm
   * @param contactForm the ContactForm to create
   * @returns Observable of the created ContactForm
   */
  create(contactForm: ContactForm): Observable<ContactForm> {
    return this.http.post<ContactForm>(this.resourceUrl, contactForm);
  }

  /**
   * Update an existing ContactForm
   * @param id the id of the ContactForm to update
   * @param contactForm the ContactForm to update
   * @returns Observable of the updated ContactForm
   */
  update(id: number, contactForm: ContactForm): Observable<ContactForm> {
    return this.http.put<ContactForm>(`${this.resourceUrl}/${id}`, contactForm);
  }

  /**
   * Partially update an existing ContactForm
   * @param id the id of the ContactForm to update
   * @param contactForm the ContactForm with fields to update
   * @returns Observable of the updated ContactForm
   */
  partialUpdate(id: number, contactForm: ContactForm): Observable<ContactForm> {
    return this.http.patch<ContactForm>(`${this.resourceUrl}/${id}`, contactForm);
  }

  /**
   * Get all ContactForms
   * @returns Observable list of ContactForms
   */
  query(): Observable<ContactForm[]> {
    return this.http.get<ContactForm[]>(this.resourceUrl);
  }

  /**
   * Get a specific ContactForm by ID
   * @param id the id of the ContactForm to retrieve
   * @returns Observable of the ContactForm
   */
  find(id: number): Observable<ContactForm> {
    return this.http.get<ContactForm>(`${this.resourceUrl}/${id}`);
  }

  /**
   * Delete a ContactForm by ID
   * @param id the id of the ContactForm to delete
   * @returns Observable for deletion result
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.resourceUrl}/${id}`);
  }
}
