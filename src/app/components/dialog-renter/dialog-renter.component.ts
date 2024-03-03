import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppService } from '../../services/back.service';

@Component({
  selector: 'app-dialog-renter',
  templateUrl: './dialog-renter.component.html',
  styleUrl: './dialog-renter.component.scss'
})
export class DialogRenterComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogRenterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private backService: AppService
  ) {}

  myFormRenter: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    RenterFullName: new FormControl(this.data?.RenterFullName ?? ''),
    RenterCarBrand: new FormControl(this.data?.RenterCarBrand ?? ''),
    RenterCarYear: new FormControl(this.data?.RenterCarYear ?? ''),
    RenterLicensePlate: new FormControl(this.data?.RenterLicensePlate ?? ''),
    RenterTechPassportNumber: new FormControl(this.data?.RenterTechPassportNumber ?? ''),
    RenterBodyNumber: new FormControl(this.data?.RenterBodyNumber ?? ''),
    RenterCarColor: new FormControl(this.data?.RenterCarColor ?? ''),
    RenterPhoneNumber: new FormControl(this.data?.RenterPhoneNumber ?? ''),
    RenterAddress: new FormControl(this.data?.RenterAddress ?? ''),
    RenterDateAt: new FormControl(this.data?.RenterDateAt ?? ''),
  })
  


  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const formData = this.myFormRenter.value

    this.backService.updateUser(formData).subscribe(updatedUser => updatedUser)

    this.dialogRef.close()
  }
  
}