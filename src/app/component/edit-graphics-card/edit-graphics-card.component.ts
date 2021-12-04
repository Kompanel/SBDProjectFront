import { Component, OnInit } from '@angular/core';
import {GraphicsCard} from "../../model/graphics-card";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GraphicsCardService} from "../../service/graphics-card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-graphics-card',
  templateUrl: './edit-graphics-card.component.html',
  styleUrls: ['./edit-graphics-card.component.css']
})
export class EditGraphicsCardComponent implements OnInit {

  graphicsCards: GraphicsCard[] = [];
  // @ts-ignore
  graphicsCardToEdit: GraphicsCard;
  // @ts-ignore
  editGraphicsCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private graphicsCardService: GraphicsCardService,
              private router: Router) { }

  ngOnInit(): void {
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.graphicsCardList());
    this.editGraphicsCardForm = this.formBuilder.group({
      graphicsCard: ['', Validators.required]
    });
  }

  onSubmit() {
    this.graphicsCardToEdit = this.editGraphicsCardForm.get('graphicsCard')?.value;
    console.log(`admin/edit-graphics-card/${this.graphicsCardToEdit.cardId}`)
    this.router.navigateByUrl(`admin/edit-graphics-card/${this.graphicsCardToEdit.cardId}`);
  }

  graphicsCardList() {
    // @ts-ignore
    return data => {
      this.graphicsCards = data;
    }
  }

}
