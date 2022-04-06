import { useState, useEffect } from 'react';

export const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = `${documentTitle} | Focus Store`;
  }, [documentTitle]);

  return { documentTitle, setDocumentTitle };
};
