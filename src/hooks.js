import React, { useState, useEffect } from 'react'

export default {
  useText: function(file) {
    const [text, setText] = useState('')
    function readTextFile(file) {
      var rawFile = new XMLHttpRequest()
      rawFile.open('GET', file, false)
      rawFile.onreadystatechange = () => {
        if (rawFile.readyState === 4) {
          if (rawFile.status === 200 || rawFile.status === 0) {
            var allText = rawFile.responseText
            setText(allText)
          }
        }
      }
      rawFile.send(null)
    }
    useEffect(() => {
      readTextFile(file)
    }, [])
    return text
  },
}
