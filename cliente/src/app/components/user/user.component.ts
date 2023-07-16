import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  usersList: User[] = []
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.obtenerUsers();
  }

    obtenerUsers() {
      this._userService.getUsers().subscribe(data => {
        console.log(data)
        this.usersList = data;
        console.log(this.usersList)
      }, error => {
        console.log(error)
      })
    }

    eliminarUsers(id: any) {
      this._userService.eliminarUsers(id).subscribe(data => {
        alert('El usuario fue eliminado con exito');
        this.obtenerUsers()
      }
      )
    }
}

