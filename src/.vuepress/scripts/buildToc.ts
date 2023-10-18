import { readdirSync } from 'fs'

export function buildToc(dir: string) {
  console.log('BUild version sideBar list for', dir)
  // Read all files
  const files = readdirSync(dir)
  // Cache valid files
  var toc: string[] = []
  for (let fileName of files) {
    console.log(fileName)
    if (
      fileName.toLowerCase() !== 'readme.md' &&
      fileName.toLowerCase() !== 'latest.md' &&
      fileName.toLowerCase() !== 'next.md' &&
      fileName.split('.').pop()!.toLowerCase() === 'md'
    ) {
      toc.push(fileName.replace(/\.md$/i, ''))
    }
  }

  // Sort version numbers
  function rule(str1: string, str2: string) {
    var arr1 = str1.split('.'),
      arr2 = str2.split('.'),
      minLen = Math.min(arr1.length, arr2.length),
      maxLen = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < minLen; i++) {
      if (parseInt(arr1[i]) > parseInt(arr2[i])) {
        return -1
      } else if (parseInt(arr1[i]) < parseInt(arr2[i])) {
        return 1
      }
      if (i + 1 == minLen) {
        if (arr1.length > arr2.length) {
          return -1
        } else {
          return 1
        }
      }
    }
    return 0
  }

  toc.sort(rule)

  // Insert special pages
  toc.unshift('', 'next')

  const tocList = toc.map((i) => `/update/${i}`)
  console.log('Build sideBar', tocList)

  return tocList
}
