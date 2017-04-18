import react from 'react';
import ReactDOM from 'react-dom';

import KeyValueList from '../src/react-kv-list';

class KeyValueListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };

    this.onTagChange = this.onTagChange.bind(this);
  }
   onTagChange(tags) {
     this.setState({ tags });
     console.log(tags)
   }

  render() {
    <div>
      <label>Tags</label>
      <KeyList items={this.state.tags} onItemChanged={this.onTagChange}/>
    </div>
  }
}


ReactDOM.render(<KeyValueListExample/>, document.getElementById('list-example'));
