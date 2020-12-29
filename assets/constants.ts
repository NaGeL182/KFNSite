import { PdfArray } from './interfaces'
const KFN: string = "Kiara Family News"

const ISSUES: Array<PdfArray> = [
  {
    name : '1st Issue',
    coversrc : '~/assets/Issues/001/cover.png',
    pdfscr : '~/assets/Issues/001/KFN001.pdf'
  },
  {
    name : '2st Issue',
    coversrc : '~/assets/Issues/002/cover.png',
    pdfscr : '~/assets/Issues/002/KFN002.pdf'
  },
  {
    name : '3st Issue',
    coversrc : '~/assets/Issues/003/cover.png',
    pdfscr : '~/assets/Issues/003/KFN003.pdf'
  },
  {
    name : '4st Issue',
    coversrc : '~/assets/Issues/004/cover.png',
    pdfscr : '~/assets/Issues/004/KFN004.pdf'
  },
]



export {
  KFN,
  ISSUES
}
