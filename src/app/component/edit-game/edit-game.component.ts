import { Component, OnInit } from '@angular/core';
import {Game} from "../../model/game";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GameService} from "../../service/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  games: Game[] = [];
  gameToEdit: Game = new Game();
  editGameForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
              private gameService: GameService,
              private router: Router) { }

  ngOnInit(): void {
    this.gameService.getGamesList().subscribe(data => {
      this.games = data.content.games;
    });
    this.editGameForm = this.formBuilder.group({
      game: ['', Validators.required]
    });
  }

  onSubmit() {
    this.gameToEdit = this.editGameForm.get('game')?.value;
    this.router.navigateByUrl(`admin/edit-game/${this.gameToEdit.id}`);
  }


}
