import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };
  }

  /* Todo:
   * - When submit butto is clicked (form on submit event)
   * the input field should be cleared
   * and a new todo item should be added to the to do list!
   * - Remove hard coded todo items
   */

  render() {
    return (
      <form>
        <input type="text" placeholder="Enter your task to do" />
        <input type="button" value="Add to list!" />
      </form>
    );
  }
}

export default SearchBar;