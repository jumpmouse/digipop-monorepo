import { Injectable } from '@angular/core';
import { Predmet, Oblast } from '@digipop/models';
import { Project, SimpleLinkObject } from '@digipop/models';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  sections: SimpleLinkObject[] = [];

  constructor() {}

  prepareProjectsFromPredmeti(predmeti: { [key: string]: Predmet; }): Project[] {
    const rawPredmeti: Predmet[] = Object.values(predmeti).sort((a, b) => a.redosled - b.redosled);
    return rawPredmeti.map((predmet:Predmet, index: number) =>
      this.prepareProjectFromPredmet(predmet, index)
    );
  }

  prepareProjectFromPredmet(predmet: Predmet, index: number): Project {
    const sections: SimpleLinkObject[] = Object.entries(predmet.oblasti).map(
      ([id, oblast]: [string, Oblast]) => {
        const key = oblast.redosled + '.';
        return {
          key,
          name: oblast.naziv,
          link: `${predmet.link}/${oblast.link}`
        };
      }
    );

    return {
      id: predmet.id,
      key: predmet.id,
      link: predmet.link,
      title: predmet.naziv,
      description: predmet.kratki_opis,
      photoUrl: predmet.URL_slike,
      sections
    };
  }

  prepareProjectsFromOblasti(oblasti: { [key: string]: Oblast; }, parrentLink: string): Project[] {
    const rawOblasti: Oblast[] = Object.values(oblasti).sort((a, b) => a.redosled - b.redosled);
    return rawOblasti.map((oblast: Oblast) =>
      this.prepareProjectFromOblast(oblast, parrentLink)
    );
  }

  prepareProjectFromOblast(oblast: Oblast, parrentLink: string): Project {
    const oblastKey = oblast.id.split('-').join('.') + '.';
    const oblastLink = parrentLink + '/' + oblast.link;
    this.sections = [];

    const programskeCeline = Object.entries(oblast.programske_celine);
    for (let i = 0; i < programskeCeline.length; i++) {
      const programskaCelina = programskeCeline[i][1];

      const key = programskaCelina.redna_oznaka + '.';
      const simpleLinkObject: SimpleLinkObject = {
        key,
        name: programskaCelina.naziv,
        // link: oblastLink + '#' + programskaCelina.link
        link: oblastLink
      };
      this.sections.push(simpleLinkObject);
    }

    return {
      id: oblast.id,
      key: oblastKey,
      link: oblastLink,
      title: oblast.naziv,
      description: oblast.opis,
      photoUrl: oblast.URL_slike,
      sections: this.sections
    };
  }
}
