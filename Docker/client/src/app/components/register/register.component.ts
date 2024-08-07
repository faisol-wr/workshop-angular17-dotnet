import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix } from '@angular/material/form-field';
import { MatCard, MatCardImage, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card'
import { Meta } from '@angular/platform-browser'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    standalone: true,
    imports: [
        MatCard,
        MatCardImage,
        MatCardHeader,
        MatCardTitle,
        FormsModule,
        ReactiveFormsModule,
        MatCardContent,
        MatFormField,
        MatLabel,
        MatInput,
        MatIcon,
        MatSuffix,
        MatIconButton,
        MatCardActions,
        MatButton,
    ],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  submitted: boolean = false

  // Variables สำหรับรับค่าจากฟอร์ม
  userData = {
    username: '',
    email: '',
    password: '',
  }

  // สำหรับซ่อนแสดง password
  hide = true

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    // กำหนด Meta Tag description
    this.meta.addTag({ name: 'description', content: 'Login page for Stock Management' })

    // Validate form
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  // ฟังก์ชัน Submit สำหรับ Register
  submitRegister() {
    this.submitted = true
    if (this.registerForm.invalid) {
      return
    } else {
      this.userData.username = this.registerForm.value.username
      this.userData.email = this.registerForm.value.email
      this.userData.password = this.registerForm.value.password

      console.log(this.userData)
     
    }
  }

  onClickCancel() {
    this.router.navigate(['/login'])
  }
}