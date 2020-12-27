import {Component} from 'react';

export default class ErrorBoundary extends Component {
   constructor(props) {
     super(props);
     this.state = { hasError: false };
   }
 
   static getDerivedStateFromError(error) {
     // Update state so the next render will show the fallback UI.
     return { hasError: true };
   }
 
   componentDidCatch(error, errorInfo) {
   }
 
   render() {
     if (this.state.hasError) {
       // You can render any custom fallback UI
       return <h1 style={{color:'tomato'}}>Something went wrong.</h1>;
     }
 
     return this.props.children; 
   }
 }