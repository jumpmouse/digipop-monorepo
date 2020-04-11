export interface ContentMetaData {
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
}
export interface Skripta {
  naslov: string;
  podnaslov: string;
  opis_ukratko: string;
  opis: string;
  predmeti?: { [key: string]: Predmet };
}

export interface Predmet {
  id: string;
  naziv: string;
  link: string;
  opis: string;
  kratki_opis: string;
  URL_slike?: string;
  redosled: number;
  oblasti: { [key: string]: Oblast };
}

export interface Oblast {
  id: string;
  naziv: string;
  opis: string;
  link: string;
  URL_slike?: string;
  redosled: number;
  redosled_programskih_celina?: string[];
  programske_celine?: { [key: string]: ProgramskaCelina };
}

export interface ProgramskaCelina {
  id: string;
  naziv: string;
  link: string;
  tekst?: string;
  URL_slike?: string;
  redna_oznaka: string;
}

export interface PredmetForEditing {
  id: string;
  naziv: string;
  opis: string;
  kratki_opis: string;
  URL_slike?: string;
  redosled?: number;
}

export interface OblastForEditing {
  naziv: string;
  opis: string;
  URL_slike?: string;
  programske_celine?: { [key: string]: ProgramskaCelinaForEditing };
  redosled_programskih_celina?: string[];
  redosled?: number;
}

export interface ProgramskaCelinaForEditing {
  naziv: string;
  tekst?: string;
  URL_slike?: string;
  redna_oznaka?: string;
}

export interface SkriptaForEditing {
  naslov: string;
  podnaslov: string;
  opis_ukratko: string;
  opis: string;
}
