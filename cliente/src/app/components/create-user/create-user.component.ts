import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  titulo = "Crear Usuario";
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private _userService: UserService,
              private aRouter: ActivatedRoute ) {
    this.userForm = this.fb.group({
      userId: [""],
      name: ["", Validators.required],
    })
    this.userForm.controls['userId'].disable()
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit():void {
    this.esEditar();
  }

  crearUsuario() {
    console.log(this.userForm)
    console.log(this.userForm.get("user")?.value); 

    const USER: User = {
      name: this.userForm.get("name")?.value,
      userId: this.userForm.get("userId")?.value,
    }

    if(USER.userId == '') {
      this._userService.guardarUsers(USER).subscribe(data => {
      console.log(USER)
      this.router.navigate(['/']);
      alert("¡El usuario fue registrado con éxito!")
    }, error => 
      console.log(error));
      this.userForm.reset()
  } else {
    this._userService.actualizarUsers(USER.userId, USER.name).subscribe(data => {
      this.router.navigate(['/']);
      alert("¡El usuario ha sido actualizado con éxito!")
    })
  } }
esEditar() {
    if(this.id !== null) {
      this.titulo = "Editar usuario";
      this._userService.obtenerUser(this.id).subscribe(data => {
        this.userForm.setValue({
          userId: data.userId,
          name: data.name
        })
      })
    }
  }
}

