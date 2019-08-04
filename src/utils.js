export function parseInterviewQuestionsFromMarkdown(text) {
  let lines = text.split('\n')
  let curCategory = ''
  let curTitle = ''
  let curAnswer = ''
  let curLevel = 0
  let result = []
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('# ')) {
      curCategory = lines[i].substr(2)
      console.log('DEBUG curCategory', curCategory)
    } else if (lines[i].startsWith('## ')) {
      curTitle = lines[i].substr(3)

      console.log('DEBUG curTitle', curTitle)
    } else if (lines[i].startsWith('- level: ')) {
      curLevel = Number(lines[i].substr('- level: '.length).trim())
      console.log('DEBUG curLevel', curLevel)
    } else {
      curAnswer += lines[i] + '\n'
    }

    // First, push the previous question
    if (i === lines.length - 1 || (lines[i + 1].startsWith('#') && curTitle)) {
      result.push({
        category: curCategory.trim(),
        title: curTitle.trim(),
        answer: curAnswer.trim(),
        level: curLevel,
      })
      curTitle = ''
      curAnswer = ''
      curLevel = 0
    }
  }
  return result
}
