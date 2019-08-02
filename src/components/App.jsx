import React, { useState } from 'react'
import interviewQuestionsData from '../interview-questions'
import MarkdownGithub from 'react-markdown-github'

function App() {
  const [interviewQuestions, setInterviewQuestions] = useState(
    interviewQuestionsData.map(group => ({
      ...group,
      questions: group.questions.map(question => ({
        ...question,
        isAnswerVisible: false,
      })),
    }))
  )

  function toggleAnswerVisibilty(iGroup, iQuestion) {
    let copyInterviewQuestions = JSON.parse(JSON.stringify(interviewQuestions))
    copyInterviewQuestions[iGroup].questions[
      iQuestion
    ].isAnswerVisible = !copyInterviewQuestions[iGroup].questions[iQuestion]
      .isAnswerVisible
    setInterviewQuestions(copyInterviewQuestions)
  }
  function getAnswerHeight(iGroup, iQuestion) {
    if (!interviewQuestions[iGroup].questions[iQuestion].isAnswerVisible)
      return 0
    return document.querySelector(`#answer-${iGroup}-${iQuestion}`).scrollHeight
  }
  return (
    <div className="App">
      <nav className="nav">
        <h1 className="nav__title">Web Interview Questions</h1>
      </nav>
      <div className="container">
        {interviewQuestions.map((group, iGroup) => (
          <div key={iGroup}>
            <h2>
              {iGroup + 1}. {group.category}
            </h2>
            {group.questions.map((question, iQuestion) => (
              <div key={iQuestion} className="question">
                <p className="question__title">
                  {iGroup + 1}.{iQuestion + 1}. {question.title}
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
        ))}
        {/* <pre>{JSON.stringify(interviewQuestions, null, 2)}</pre> */}
      </div>
    </div>
  )
}

export default App
