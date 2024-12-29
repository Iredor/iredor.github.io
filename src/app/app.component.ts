import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PUNISHMENT';
  chose: string = 'home';
  tot: number = 0;
  totHard: number = 0;

  // Nuove variabili per gestire le immagini
  drink = ['Drink a shot','Drink two shots','Drink in one gulp','Blowjob shot','Drink from the bottle','Drink from his body'];
  soft = ['Kiss on the lips', 'Touch the ass',  'Show ass','Show them','Show boobs','Sexy striptease',
                    'Find honey on her body while blindfolded','Whisper your erotic fantasy in his ear'];
  hard = ['Doggy style', 'Seated scissors', 'Spork sex','See saw sex', 'Crazy starfish','Ass fingering', 'Lap dance sex', 
                    'Sex on a bar stool', 'Anal sex','Double penetration with sex toy','Oral sex with ass fingering'];
  medium = ['Oral sex', 'Standing oral sex',  'Chair blowjob' ,'Masturbate','Have fun with a sex toy',
                      'Nipples licking', 'Masturbate him', '69', 'Ass licking',
                      'Oral sex while masturbating','Masturbate each other','Bondage', 'Guess 3 ingredients from her private parts'];

  randomElement: string = 'home';

  // Aggiungi array per tenere traccia delle immagini già mostrate
  shownImages: Set<string> = new Set();

  // Funzione per cambiare la sezione
  showThreeButtons(choosing: string) {
    this.chose = choosing;
  }

  // Funzione per aggiornare il conteggio
  updateCount(section: string) {
    if (section === 'medium') {
      this.tot++;
    } else if (section === 'hard') {
      this.totHard++;
    }
  }

   // Funzione per ottenere un'immagine casuale che non sia stata già mostrata
   getImgUrl(list: string[]): string {

    // Verifica se tutte le immagini sono state mostrate
    if (this.shownImages.size === list.length) {
      // Se tutte le immagini sono state mostrate, resetta l'elenco delle immagini mostrate
      this.shownImages.clear();
    }

    // Ciclo fino a trovare un'immagine non mostrata
    do {
      this.randomElement = list[Math.floor(Math.random() * list.length)];
    } while (this.shownImages.has(this.randomElement));

    // Aggiungi l'immagine all'elenco delle immagini già mostrate
    this.shownImages.add(this.randomElement);

    return `../assets/img/${this.randomElement}.png`;
  }

  // Funzione per ottenere un'immagine casuale
  /*getImgUrl(list: string[]) {    
    this.randomElement = list[Math.floor(Math.random() * list.length)];
    return `../assets/img/${this.randomElement}.png`;
  }*/
}
