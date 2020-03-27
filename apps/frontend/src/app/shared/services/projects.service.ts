import { Injectable } from '@angular/core';
import { Predmet, Oblast, ProgramskaCelina } from '@app/models/skripta.model';
import { Project, SimpleLinkObject } from '@app/models/project.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  sections: SimpleLinkObject[] = [];

  constructor(private utilsService: UtilsService) {}

  prepareProjectFromPredmet(predmet: Predmet, index: number): Project {
    const sections: SimpleLinkObject[] = Object.entries(predmet.oblasti).map(
      ([id, oblast]: [string, Oblast]) => {
        const key = oblast.id.split('-').join('.') + '.';
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

  prepareProjectFromOblast(oblast: Oblast, parrentLink: string): Project {
    const oblastKey = oblast.id.split('-').join('.') + '.';
    const oblastLink = parrentLink + '/' + oblast.link;
    this.sections = [];

    const programskeCeline = Object.entries(oblast.programske_celine);
    for (let i = 0; i < programskeCeline.length; i++) {
      const programskaCelina = programskeCeline[i][1];

      const key = programskaCelina.id.split('-').join('.') + '.';
      const simpleLinkObject: SimpleLinkObject = {
        key,
        name: programskaCelina.naziv,
        // link: oblastLink + '#' + programskaCelina.link
        link: oblastLink
      };
      this.sections.push(simpleLinkObject);
      if (programskaCelina.podceline) {
        const podceline = Object.values(programskaCelina.podceline);
        if (podceline && podceline.length) {
          this.addSubsectionsRecursively(podceline, oblastLink);
        }
      }
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

  private addSubsectionsRecursively(
    podceline: ProgramskaCelina[],
    parrentLink: string
  ): void {
    for (let i = 0; i < podceline.length; i++) {
      const podcelina = podceline[i];
      const key = podcelina.id.split('-').join('.') + '.';
      const simpleLink = {
        key,
        name: podcelina.naziv,
        // link: parrentLink + '#' + podcelina.link
        link: parrentLink
      };
      this.sections.push(simpleLink);
      if (podcelina.podceline) {
        const subPodceline = Object.values(podcelina.podceline);
        if (subPodceline && subPodceline.length) {
          this.addSubsectionsRecursively(subPodceline, parrentLink);
        }
      }
    }
  }
}
