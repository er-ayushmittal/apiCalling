import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  form: FormGroup;
  headers: any;
  res: any;
  entries: any;
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      mobilenumber:['9856985698'],
      firstname:['DILBAHAR'],
      middlename:['SINGH'],
      lastname:['ARORA'],
      pan:['AZEPD6246N'],
      fathername:['Subrahmanya Sharma'],
      dob:['01-06-2001'],
      email:['ramashankar.darivemula@jocata.com'],
      gender:['M'],
      pincode:['500043'],
      city:['HYDERABAD'],
      state:['Telangana']
     

    });
   }

  ngOnInit(): void {
  }
  submitForm() {
    var formData: any = new FormData();
    formData.append('mobilenumber', this.form.get('mobilenumber').value);
    formData.append('firstname', this.form.get('firstname').value);
    formData.append('middlename', this.form.get('middlename').value);
    formData.append('lastname', this.form.get('lastname').value);
    formData.append('pan', this.form.get('pan').value);
    formData.append('fathername', this.form.get('fathername').value);
    formData.append('dob', this.form.get('dob').value);
    formData.append('email', this.form.get('email').value);
    formData.append('gender', this.form.get('gender').value);
    formData.append('pincode', this.form.get('pincode').value);
    formData.append('city', this.form.get('city').value);
    formData.append('state', this.form.get('state').value);


    var object = {};
    formData.forEach(function(value: String, key: string){
    object[key] = value;
});
    var json = JSON.stringify(object);

     this.http
      .post('http://localhost:8081/tclpl/customer/saveCustomerDetails', json ,{headers: { 'Content-Type': 'application/json'},})
      .subscribe({
        next: (response) => this.res = response,
        // next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
   
}
