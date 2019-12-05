import React from 'react';
import ReactToPrint from 'react-to-print';
import ToPrint from '../../components/ToPrint/toprint'

class Print extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <ToPrint ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }

  export default Print