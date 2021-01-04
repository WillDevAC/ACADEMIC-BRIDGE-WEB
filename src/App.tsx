import React from 'react';
import Main from './routes';
import PageLoader from './components/layout/PageLoader';
import { useLoading } from './context/contextMain'


const App: React.FC = () => {
  const { loading } = useLoading();
  if (loading) {
    return <PageLoader />;
  }
  return (
    <>
      <Main />
    </>
  )
}

export default App;