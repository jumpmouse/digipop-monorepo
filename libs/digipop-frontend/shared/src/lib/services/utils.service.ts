import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  private romanKey = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM',
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC',
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
  ];
  private replaceStringRegex = /[čćđžšČĆĐŽŠ._]/g;
  private replaceStrings = {
    č: 'c',
    ć: 'c',
    đ: 'd',
    ž: 'z',
    š: 's',
    Č: 'C',
    Ć: 'C',
    Đ: 'D',
    Ž: 'Z',
    Š: 'S',
    '.': ' ',
    _: '-'
  };

  romanize(num: number): string {
    if (isNaN(num) || num === 0) {
      return '';
    }
    const digits = String(+num).split('');
    let roman = '';
    let i = 3;
    while (i--) {
      roman = (this.romanKey[+digits.pop() + i * 10] || '') + roman;
    }
    return Array(+digits.join('') + 1).join('M') + roman;
  }

  sanitizeFileName(courseName: string) {
    const nameArray = courseName.split(' ');
    let fileName = '';
    for (let i = 0; i < nameArray.length; i++) {
      if (i !== 0) {
        fileName += '-';
      }

      fileName += this.sanitizeString(nameArray[i]);
    }
    return fileName;
  }

  public downloadDocument(filename: string, text: string): void {
    const downloadElement = document.createElement('a');
    downloadElement.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    downloadElement.setAttribute('download', filename);

    if (document.createEvent) {
      const event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      downloadElement.dispatchEvent(event);
    } else {
      downloadElement.click();
    }
  }

  private sanitizeString(
    s: string,
    customRegex?: RegExp,
    customLettersObj?: { [key: string]: string }
  ) {
    const regex = customRegex || this.replaceStringRegex;
    const lettersObj = customLettersObj || this.replaceStrings;
    const string = s
      .replace(regex, (match: string) => {
        return lettersObj[match];
      })
      .replace(/[^\w\s_-]/gi, '');

    return string.toLowerCase();
  }
}
