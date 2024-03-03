import { Component } from '@angular/core';
import { AppService } from '../../services/back.service';
import { User } from '../../services/User';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogRenterComponent } from '../dialog-renter/dialog-renter.component';

@Component({
  selector: 'app-space-details',
  templateUrl: './space-details.component.html',
  styleUrl: './space-details.component.scss'
})
export class SpaceDetailsComponent {
  public all!: Observable<User[]>
  public id!: number
  public user!: User ;
  
  constructor(
    private route: ActivatedRoute,
    private backService: AppService,
    public dialog: MatDialog
    ) {}
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.id = +params['id']
    })
    this.all = this.backService.findUsers()

    this.all.subscribe(users => {
      this.user = users[this.id - 1]
    })
  }

  openDialog(user: User): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.user

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((data) => {
      
    })

  }

  openDialogRenter(user: User): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = this.user

    const dialogRef = this.dialog.open(DialogRenterComponent, dialogConfig)
    dialogRef.afterClosed().subscribe((data) => {
      
    })

  }


}

