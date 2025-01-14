import { Component, OnInit } from '@angular/core';
import { ContactFormService } from 'entities/contact-form.service';
import { ContactForm } from 'entities/contact-form.model'; 

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactForm: ContactForm = {
    id: null,
    name: '',
    message: '',
    email: '',
  };

  constructor(private contactFormService: ContactFormService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.id) {
      this.contactFormService.update(this.contactForm.id, this.contactForm).subscribe({
        next(response) {
          // Handle success
        },
        error(error) {
          // Handle error
        },
      });
    } else {
      this.contactFormService.create(this.contactForm).subscribe({
        next(response) {
          // Handle success
        },
        error(error) {
          // Handle error
        },
      });
    }
  }
}
