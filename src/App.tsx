import React from 'react';

type State = {
  keyPressed: string | null;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: null,
  };

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyPressed
            ? `The last pressed key is [${keyPressed}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
