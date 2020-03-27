import {
  PredmetForEditing,
  OblastForEditing,
  ProgramskaCelinaForEditing,
  SkriptaForEditing
} from '@app/models/skripta.model';

export const EmptyScriptForEditing: SkriptaForEditing = {
  naslov: 'true',
  podnaslov: 'true',
  opis_ukratko: 'true',
  opis: 'true'
};

export const EmptyCourseForEditing: PredmetForEditing = {
  id: '',
  naziv: 'true',
  kratki_opis: '',
  opis: ''
};

export const EmptySectionForEditing: OblastForEditing = {
  naziv: 'true',
  opis: ''
};

export const EmtySubSectionForEditing: ProgramskaCelinaForEditing = {
  naziv: 'true',
  tekst: '',
  podceline: {}
};
