import { Component } from "react";


class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ERROR capturado:", error);
    console.error("ERRORINFO capturado:", errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <section className="w-screen min-h-screen flex flex-col justify-center items-center ">

            <h1 className="text-center text-2xl font-bold text-red-500 dark:text-red-300">
              Ups!😱 Algo salió mal.
            </h1>

            <h4 className="text-center text-base mt-4 text-gray-600 dark:text-gray-300">
              {this.state.error?.toString()}
            </h4>
            <pre className="mx-50 mt-8 mb-8 text-base bg-gray-100 dark:bg-gray-800 p-2 rounded max-h-60 overflow-auto">
              {this.state.errorInfo?.componentStack}
            </pre>
          </section>
        </>

      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;