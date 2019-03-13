import { NgModule } from '@angular/core';
import {
    MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule,
    MatInputModule, MatNativeDateModule, MatDatepickerModule, MatSidenavModule,
    MatToolbarModule, MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule
} from '@angular/material';
@NgModule({
    imports: [MatIconModule, MatButtonModule, MatCheckboxModule,
        MatFormFieldModule, MatInputModule, MatNativeDateModule,
        MatDatepickerModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule,MatProgressSpinnerModule,MatDialogModule],
    exports: [MatIconModule, MatButtonModule, MatCheckboxModule,
        MatFormFieldModule, MatInputModule, MatNativeDateModule,
        MatDatepickerModule, MatToolbarModule, MatSidenavModule,
        MatListModule, MatTabsModule, MatCardModule,
        MatSelectModule,MatProgressSpinnerModule,MatDialogModule
    ],

})

export class MaterialModule { }