export const EditorConfig = {
  toolbar: {
    items: [
      'undo',
      'redo',
      '|',
      'heading',
      '|',
      'fontSize',
      'fontFamily',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'subscript',
      'superscript',
      '|',
      'highlight',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'numberedList',
      'bulletedList',
      '|',
      'alignment',
      'indent',
      'outdent',
      '|',
      'link',
      'imageUpload',
      'insertTable',
      'mediaEmbed'
    ]
  },
  language: 'sr',
  image: {
    toolbar: ['imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight'],
    // toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side']
    styles: [
      // This option is equal to a situation where no style is applied.
      'full',

      // This represents an image aligned to the left.
      'alignLeft',

      // This represents an image aligned to the right.
      'alignRight'
    ]
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableCellProperties', 'tableProperties']
  }
};
