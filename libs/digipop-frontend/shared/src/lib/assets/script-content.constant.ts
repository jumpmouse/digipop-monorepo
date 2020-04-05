// tslint:disable: max-line-length
import { Skripta } from '@digipop/models';

export const SadrzajSkripte: Skripta = {
  naslov: 'E-SKRIPTA',
  podnaslov:
    'iz predmeta Opšta ekologija životinja i Populaciona ekologija životinja',
  opis_ukratko:
    'Kratki opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  opis:
    'Opširan opis skripte. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  predmeti: {
    pez: {
      id: 'pez',
      naziv: 'Populaciona ekologija životinja',
      kratki_opis:
        'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'pez_populaciona-ekologija-zivotinja',
      URL_slike: '',
      oblasti: {
        'pez-I': {
          id: 'pez-I',
          naziv: 'Demografija',
          opis: 'opis oblasti',
          link: 'pez-I_demografija',
          URL_slike: '',
          programske_celine: {
            'pez-I-1': {
              id: 'pez-I-1',
              naziv: 'Uvod',
              link: 'pez-I-1_uvod',
              URL_slike: '',
              tekst: 'uvodni tekst ovde',
              redosled: '1'
            },
            'pez-I-2': {
              id: 'pez-I-2',
              naziv: 'Demografske tablice',
              link: 'pez-I-2_demografske-tablice',
              URL_slike: '',
              tekst: 'tekst demografskih tablica',
              redosled: '2'
            },
            'pez-I-3': {
              id: 'pez-I-3',
              naziv: 'Mortalitet',
              link: 'pez-I-3_mortalitet',
              URL_slike: '',
              tekst: 'tekst o mortalitetu',
              redosled: '3'
            },
            'pez-I-4': {
              id: 'pez-I-4',
              naziv: 'Tipovi preživljavanja',
              link: 'pez-I-4_tipovi-prezivljavanja',
              URL_slike: '',
              tekst: 'tekst o tipovima prezivljavanja',
              redosled: '3.1'
            },
            'pez-I-5': {
              id: 'pez-I-5',
              naziv: 'Natalitet',
              link: 'pez-I-5_natalitet',
              URL_slike: '',
              tekst: 'natalitet tekst',
              redosled: '4'
            },
            'pez-I-6': {
              id: 'pez-I-6',
              naziv: 'Uzrasna struktura',
              link: 'pez-I-6_uzrasna-struktura',
              URL_slike: '',
              tekst: 'tekst o uzrasnoj strukturi',
              redosled: '5'
            },
            'pez-I-7': {
              id: 'pez-I-7',
              naziv: 'Dostizanje stabilne uzrasne strukture',
              link: 'pez-I-7_dostizanje-stabilne-uzrasne-strukture',
              URL_slike: '',
              tekst: 'tekst o tome kako se dostize stabilna uzrasna struktura',
              redosled: '5.1'
            }
          }
        }
      }
    },
    oez: {
      id: 'oez',
      naziv: 'Opšta ekologija životinja',
      kratki_opis:
        'Kratki opis predmeta. U dva reda, na primer. Mozda moze i u tri reda.',
      opis:
        'Dugacki opis predmeta. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
      link: 'oez_opsta-ekologija-zivotinja',
      URL_slike: '',
      oblasti: {}
    }
  }
};
