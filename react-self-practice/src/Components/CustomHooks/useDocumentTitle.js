import React, { useEffect } from 'react'

function useDocumentTitle (count) {

  useEffect(() => {
    document.title = ` Cliked ${count} times`
  }, [count])

}

export default useDocumentTitle
