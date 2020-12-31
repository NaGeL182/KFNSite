import { KFN } from 'assets/constants'
import { IssueArray, LinkTo, Issue, Store } from 'assets/interfaces'

const ISSUES: Array<IssueArray> = [
  {
    name: '1st Issue',
    number: 1
  },
  {
    name : '2st Issue',
    number: 2
  },
  {
    name : '3st Issue',
    number: 3
  },
  {
    name : '4st Issue',
    number: 4,
  },
]

function convertIssueArrayToIssues(IssueArray: Array<IssueArray>): Array<Issue> {
  const returnArray: Array<Issue> = [];
  for (const item of ISSUES) {
    const issue: Issue = {
      name: '',
      coverSrc: '',
      pdfSrc: '',
      cardCoverSrc: ''
    }
    issue.name = item.name
    const numString: string = ("000" + item.number).slice(-3)
    issue.coverSrc = `Issues/${numString}/${item.coverSrc ? item.coverSrc : 'cover.png'}`
    issue.cardCoverSrc = `Issues/${numString}/${item.cardCoverSrc ? item.cardCoverSrc : 'card_cover.png'}`
    issue.pdfSrc = `Issues/${numString}/${item.pdfSrc ? item.pdfSrc : 'KFN' + numString + '.pdf'}`
    returnArray.push(issue)
  }
  return returnArray;
}

const LINKS: Array<LinkTo> = [
  {
    icon: 'mdi-home',
    title: 'Welcome',
    to: '/'
  }
]



export const state = (): Store => ({
  layout: {
    clipped: true,
    drawer: false,
    fixed: true,
    items: LINKS,
    title: KFN
  },
  issues: convertIssueArrayToIssues(ISSUES)
})

export const mutations = {
  drawerToggle(state: Store) {
    state.layout.drawer = !state.layout.drawer
  }
}
