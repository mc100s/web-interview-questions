import React, { useState, useEffect } from 'react'
import itw from '../itw.md'
import MarkdownGithub from 'react-markdown-github'
import hooks from '../hooks'

function parseInterviewQuestionsFromMarkdown(text) {
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
    if (
      i === lines.length - 1 ||
      (lines[i + 1].startsWith('## ') && curTitle)
    ) {
      result.push({
        category: curCategory,
        title: curTitle,
        answer: curAnswer,
        level: curLevel,
      })
      curTitle = ''
      curAnswer = ''
      curLevel = 0
    }
  }
  return result
  console.log(text.split('\n'))
  return [
    {
      category: 'General',
      title: 'What is a class? What is an object?',
      answer: 'Lorem ipsum 1\n\n\n\ndfsd',
      level: 1,
    },
    {
      category: 'General',
      title: 'What is a OOO?',
      answer: 'Lorem ipsum 2',
      level: 1,
    },
    {
      category: 'DOM Manipulation',
      title: 'What is a ...?',
      answer: 'Lorem ipsum 3',
      level: 2,
    },
  ]
  // return [
  //   {
  //     category: 'General',
  //     questions: [
  //       {
  //         title: 'What is a class? What is an object?',
  //         answer: `Many people get confused by the difference between class and object. The difference is simple and conceptual. A class is a template for objects, it let's you creating objects. For example the class could be a factory and the objects the cars created by that factory, that can have different properties (colors, engine, ...).

  // \`\`\`js
  // // Class
  // class Car {
  //   constructor(color) {
  //     this.color = color
  //     this.kmCounter = 0
  //   }
  //   drive(km) {
  //     this.kmCounter += km
  //   }
  // }

  // // Objects
  // let c1 = new Car("red")
  // let c2 = new Car("blue")

  // c1.drive(42)
  // c1.drive(50)

  // console.log(c1)
  // \`\`\``,
  //       },
  //       {
  //         title: 'What is Object Oriented Programming?',
  //         answer: `Lorem `,
  //       },
  //     ],
  //   },
  // ]
}

function App() {
  const text = hooks.useText(itw)
  const questions = parseInterviewQuestionsFromMarkdown(text)

  const [areQuestionsVisible, setAreQuestionsVisible] = useState([])
  useEffect(() => {
    setAreQuestionsVisible(questions.map(_ => false))
  }, [JSON.stringify(questions)])

  function toggleAnswerVisibilty(iQuestionToToggle) {
    setAreQuestionsVisible(
      areQuestionsVisible.map((isVisible, i) => {
        if (i !== iQuestionToToggle) return isVisible
        return !isVisible
      })
    )
  }
  function getAnswerHeight(iQuestion) {
    if (!areQuestionsVisible[iQuestion]) return 0
    return document.querySelector(`#answer-${iQuestion}`).scrollHeight
  }

  return (
    <div className="App">
      <nav className="nav">
        <h1 className="nav__title">Web Interview Questions</h1>
      </nav>
      {/* {text} */}
      {/* <pre>{JSON.stringify(questions, null, 2)}</pre> */}
      <div className="container">
        {questions.map((question, iQuestion) => (
          <div key={iQuestion}>
            {(iQuestion === 0 ||
              questions[iQuestion].category !==
                questions[iQuestion - 1].category) && (
              <h2>{question.category}</h2>
            )}

            <div key={iQuestion} className="question">
              <p className="question__title">
                <strong>{question.title} </strong>
                (level {question.level})
              </p>

              <div
                id={`answer-${iQuestion}`}
                className="question__answer"
                style={{ height: getAnswerHeight(iQuestion) }}
              >
                <MarkdownGithub
                  className="markdown-body"
                  source={question.answer}
                />
              </div>
              <button
                className="btn"
                onClick={() => toggleAnswerVisibilty(iQuestion)}
              >
                {question.isAnswerVisible ? 'Hide' : 'Display'} answer
              </button>
            </div>
          </div>
        ))}
        {/* {questions.map((group, iGroup) => (
          <div key={iGroup}>
            <h2>
              {iGroup + 1}. {group.category}
            </h2>
            {group.questions.map((question, iQuestion) => (
              <div key={iQuestion} className="question">
                <p className="question__title">
                  <strong>
                    {iGroup + 1}.{iQuestion + 1}. {question.title}{' '}
                  </strong>
                  (level 1)
                </p>

                <div
                  id={`answer-${iGroup}-${iQuestion}`}
                  className="question__answer"
                  style={{ height: getAnswerHeight(iGroup, iQuestion) }}
                >
                  <MarkdownGithub
                    className="markdown-body"
                    source={question.answer}
                  />
                </div>
                <button
                  className="btn"
                  onClick={() => toggleAnswerVisibilty(iGroup, iQuestion)}
                >
                  {question.isAnswerVisible ? 'Hide' : 'Display'} answer
                </button>
              </div>
            ))}
          </div>
        ))} */}
        {/* <pre>{JSON.stringify(questions, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default App
