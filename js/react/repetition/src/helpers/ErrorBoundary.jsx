import React from 'react';
import { ThemeContext } from '../context/Theme.contex';

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasErrors: false };
   }

   static getDerivedStateFromError(error) {
      return { hasErrors: true };
   }

   componentDidCatch(error, errorInfo) {
      console.log(`Error ==> ${error}`, `\n\nError message ==> ${errorInfo}`);
   }

   render() {
      console.log(this.context);
      if (this.state.hasErrors) {
         return <h1 style={{ color: this.context[0].color }}>Code related error</h1>;
      }
      return this.props.children
   }
}

ErrorBoundary.contextType = ThemeContext;

export default ErrorBoundary;