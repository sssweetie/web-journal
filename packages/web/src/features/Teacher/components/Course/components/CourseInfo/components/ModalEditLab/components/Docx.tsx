import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  AlignmentType,
  UnderlineType,
} from 'docx';
import { saveAs } from 'file-saver';
// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section

const tableHeader = [
  '№',
  'Фамилия, имя, отчество',
  'Номер зачетной книжки',
  'Баллы семестра (до 60 баллов)',
  'Рейтинговая оценка по дисциплине с учетом баллов семестра и зачета (61-100)',
  'Отметка о зачете (Отлично, Хорошо, Удовл., Неуд.)',
  'Подпись преподавателя',
];

const th: any = tableHeader.map(
  (item: string) =>
    new TableCell({
      children: [
        new Paragraph({ text: item, alignment: AlignmentType.CENTER }),
      ],
    })
);

export const Docx = () => {
  const table = new Table({
    rows: [
      new TableRow({
        children: th,
      }),
    ],
  });
  const doc = new Document({
    compatibility: {
      spaceForUnderline: true,
    },
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun('Факультет   '),
              new TextRun({
                text: ' ФЭВТ\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('   Группа    '),
              new TextRun({
                text: ' ИВТ-465\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Дисциплина   '),
              new TextRun({
                text: ' Производственная практика\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Преподаватель   '),
              new TextRun({
                text: ' Кизим Алексей Владимирович\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Дата зачета   '),
              new TextRun({
                text: '\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('   Кол-во часов   '),
              new TextRun({
                text: ' 36\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('   Кол-во ЗЕТ   '),
              new TextRun({
                text: ' 1\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          table,
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Декан факультета   '),
              new TextRun({
                text: '\t\t\t\t\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Число студентов на экзамене (зачете)   '),
              new TextRun({
                text: '\t\t\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph({
            children: [new TextRun('Из них получивших итоговую оценку')],
          }),
          new Paragraph({
            children: [
              new TextRun('\tотлично'),
              new TextRun({
                text: '\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('хорошо'),
              new TextRun({
                text: '\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('удовлетворительно'),
              new TextRun({
                text: '\t',
                underline: { type: UnderlineType.SINGLE },
              }),
              new TextRun('неудовлетворительно'),
              new TextRun({
                text: '\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                'Число студентов, не явившихся на экзамен (зачет)   '
              ),
              new TextRun({
                text: '\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                'Число студентов, не допущенных к экзамену (зачету)   '
              ),
              new TextRun({
                text: '\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun(
                'Число студентов, не аттестованных на экзамене (зачете)   '
              ),
              new TextRun({
                text: '\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun('Подпись преподавателя   '),
              new TextRun({
                text: '\t\t\t\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
          new Paragraph(''),
          new Paragraph({
            children: [
              new TextRun('Подпись преподавателя   '),
              new TextRun({
                text: '\t\t\t\t\t\t\t\t\t\t',
                underline: { type: UnderlineType.SINGLE },
              }),
            ],
          }),
        ],
      },
    ],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, 'example.docx');
  });
};

// Used to export the file into a .docx file
