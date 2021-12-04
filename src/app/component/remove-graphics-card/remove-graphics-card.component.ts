import { Component, OnInit } from '@angular/core';
import {GraphicsCard} from "../../model/graphics-card";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GraphicsCardService} from "../../service/graphics-card.service";

@Component({
  selector: 'app-remove-graphics-card',
  templateUrl: './remove-graphics-card.component.html',
  styleUrls: ['./remove-graphics-card.component.css']
})
export class RemoveGraphicsCardComponent implements OnInit {

  graphicsCards: GraphicsCard[] = [];
  // @ts-ignore
  graphicsCardToRemove: GraphicsCard;
  // @ts-ignore
  removeGraphicsCardFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private graphicsCardService: GraphicsCardService) { }

  ngOnInit(): void {
    this.graphicsCardService.getGraphicsCardsList().subscribe(this.graphicsCardList());
    this.removeGraphicsCardFormGroup = this.formBuilder.group({
      graphicsCard: ['', Validators.required]
    })
  }

  onSubmit() {
    this.graphicsCardToRemove = this.removeGraphicsCardFormGroup.get('graphicsCard')?.value;
    this.graphicsCardService.removeGraphicsCard(this.graphicsCardToRemove.cardId);
  }

  graphicsCardList() {
    // @ts-ignore
    return data => {
      this.graphicsCards = data;
    }
  }

}
