// tslint:disable: max-line-length
import { Skripta } from '@app/models/skripta.model';

export const SadrzajSkripte: Skripta = {
  naslov: 'E-SKRIPTA',
  podnaslov: 'iz predmeta Opšta ekologija životinja i Populaciona ekologija životinja',
  opis_ukratko:
    'Kratki opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  opis:
    'Opširan opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  predmeti: {
    I: {
      id: 'I',
      naziv: 'Populaciona ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'I_populaciona-ekologija-zivotinja',
      URL_slike: '',
      oblasti: {
        'I-1': {
          id: 'I-1',
          naziv: 'Demografija',
          opis: 'opis oblasti',
          link: 'I-1_demografija',
          URL_slike: '',
          programske_celine: {
            'I-1-1': {
              id: 'I-1-1',
              naziv: 'Uvod',
              link: 'I-1-1_uvod',
              URL_slike: '',
              tekst: 'uvodni tekst ovde',
              podceline: {}
            },
            'I-1-2': {
              id: 'I-1-2',
              naziv: 'Demografske tablice',
              link: 'I-1-2_demografske-tablice',
              URL_slike: '',
              tekst: 'tekst demografskih tablica',
              podceline: {}
            },
            'I-1-3': {
              id: 'I-1-3',
              naziv: 'Mortalitet',
              link: 'I-1-3_mortalitet',
              URL_slike: '',
              tekst: 'tekst o mortalitetu',
              podceline: {
                'I-1-3-1': {
                  id: 'I-1-3-1',
                  naziv: 'Tipovi preživljavanja',
                  link: 'I-1-3-1_tipovi-prezivljavanja',
                  URL_slike: '',
                  tekst: 'tekst o tipovima prezivljavanja',
                  podceline: {}
                }
              }
            },
            'I-1-4': {
              id: 'I-1-4',
              naziv: 'Natalitet',
              link: 'I-1-4_natalitet',
              URL_slike: '',
              tekst: 'natalitet tekst',
              podceline: {}
            },
            'I-1-5': {
              id: 'I-1-5',
              naziv: 'Uzrasna struktura',
              link: 'I-1-5_uzrasna-struktura',
              URL_slike: '',
              tekst: 'tekst o uzrasnoj strukturi',
              podceline: {
                'I-1-5-1': {
                  id: 'I-1-5-1',
                  naziv: 'Dostizanje stabilne uzrasne strukture',
                  link: 'I-1-5-1_dostizanje-stabilne-uzrasne-strukture',
                  URL_slike: '',
                  tekst: 'tekst o tome kako se dostize stabilna uzrasna struktura',
                  podceline: {}
                }
              }
            }
          }
        }
      }
    },
    II: {
      id: 'II',
      naziv: 'Opšta ekologija životinja',
      kratki_opis: 'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'II_opsta-ekologija-zivotinja',
      URL_slike: '',
      oblasti: {}
    }
  }
};
