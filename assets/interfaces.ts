interface IssueArray {
  pdfSrc?: string;
  name: string;
  number: number;
  coverSrc?: string;
  cardCoverSrc?: string;
}

interface Issue {
  pdfSrc: string;
  name: string;
  coverSrc: string;
  cardCoverSrc: string;
}
interface LinkTo {
  icon: string;
  title: string;
  to: string;
}

interface Layout {
  clipped: boolean;
  drawer: boolean;
  fixed: boolean;
  items: Array<LinkTo>;
  title: string;
}

interface Store {
  layout: Layout;
  issues: Array<Issue>;
}

declare global {
  interface JQuery {
    flipBook(arg: any): JQuery;
  }
}

export {
  IssueArray,
  LinkTo,
  Issue,
  Layout,
  Store,
}
