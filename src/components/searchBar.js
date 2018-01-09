import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    };
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Enter your todo" />
        <input type="button" value="Add to list!" />
      </form>
    );
  }
}

export default SearchBar;