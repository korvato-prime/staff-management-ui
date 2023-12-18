import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'dialog-box.component',
  templateUrl: 'dialog-box.component.html',
  styleUrls: ['dialog-box.component.css']
})

export class ConfirmDialog{

  constructor(public dialogRef: MatDialogRef<ConfirmDialog>, public dialog: MatDialog) {dialogRef.disableClose = true;}

  onNoClick(): void {
    this.dialogRef.close();
  }

  Confirm(): void {
    this.dialogRef.close(true);
  }
}