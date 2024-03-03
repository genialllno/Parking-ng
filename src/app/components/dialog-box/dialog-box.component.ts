import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../../services/back.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss'
})
export class DialogBoxComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private backService: AppService
  ) {}

  myFormOwner: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    OwnerFullName: new FormControl(this.data?.OwnerFullName ?? ''),
    OwnerCarBrand: new FormControl(this.data?.OwnerCarBrand ?? ''),
    OwnerCarYear: new FormControl(this.data?.OwnerCarYear ?? ''),
    OwnerLicensePlate: new FormControl(this.data?.OwnerLicensePlate ?? ''),
    OwnerTechPassportNumber: new FormControl(this.data?.OwnerTechPassportNumber ?? ''),
    OwnerBodyNumber: new FormControl(this.data?.OwnerBodyNumber ?? ''),
    OwnerCarColor: new FormControl(this.data?.OwnerCarColor ?? ''),
    OwnerPhoneNumber: new FormControl(this.data?.OwnerPhoneNumber ?? ''),
    OwnerAddress: new FormControl(this.data?.OwnerAddress ?? ''),
    OwnerDateAt: new FormControl(this.data?.OwnerDateAt ?? ''),
  })


  onNoClick(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    const formData = this.myFormOwner.value

    this.backService.updateUser(formData).subscribe(updatedUser => updatedUser)

    this.dialogRef.close()
  }
  
}
