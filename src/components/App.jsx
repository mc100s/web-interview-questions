import React, { useState, useEffect } from 'react'
import itw from '../itw.md'
import MarkdownGithub from 'react-markdown-github'
import hooks from '../hooks'
import { parseInterviewQuestionsFromMarkdown } from '../utils'

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
                {question.level ? <>(level {question.level})</> : ''}
              </p>

              {question.answer && (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
