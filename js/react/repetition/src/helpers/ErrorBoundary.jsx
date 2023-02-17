import React from 'react';

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasErrors: false, isHuesos: false };
   }

   static getDerivedStateFromError(error) {
      return { hasErrors: true, isHuesos: true };
   }

   componentDidCatch(error, errorInfo) {
      console.log(`Error ==> ${error}`, `\n\nError message ==> ${errorInfo}`);
   }

   render() {
      console.log(this.state);
      if (this.state.hasErrors) {
         return <h1>Code related error</h1>;
      }
      return this.props.children
   }
}

export default ErrorBoundary;