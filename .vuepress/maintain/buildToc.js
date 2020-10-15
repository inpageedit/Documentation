#!/bin/node
var fs = require('fs')

function buildToc(dir) {
  // Read all files
  fs.readdir(dir, function (err, files) {

    // Cache valid files
    var toc = []
    for (let i = 0; i < files.length; i++) {
      var fileName = files[i]
      if (
        fileName.toLowerCase() !== 'readme.md' &&
        fileName.toLowerCase() !== 'latest.md' &&
        fileName.toLowerCase() !== 'next.md' &&
        fileName.split('.').pop().toLowerCase() === 'md'
      ) {
        toc.push(fileName.replace(/\.md/i, ''))
      }
    }

    // Sort version numbers
    function rule(str1, str2) {
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
    }

    toc.sort(rule)

    // Insert special pages
    toc.unshift('', 'next')

    // Save index.json
    fs.writeFile(dir + '/index.json', JSON.stringify(toc), {}, (err, data) => {
      if (err) {
        console.error(err)
      } else {
        console.log('Toc generatted')
      }
    })
  })
}

// Run
buildToc(__dirname + '/../../update')