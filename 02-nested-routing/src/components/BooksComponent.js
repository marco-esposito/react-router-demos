import React from 'react';

const Books = ({ match }) => {
    return (
<div>
   <div className="jumbotron">
        <h1 className="display-3">My Books</h1>
   </div>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
          <ul>
            <li><Link to="">HTML</Link></li>
            <li><Link to="">CSS</Link></li>
            <li><Link to="">React</Link></li>
          </ul>
      </div>
      <div className="col-md-9">
               {/* place routes here */}
      </div>
    </div>
   </div>
</div>
    );
}

export default Books;
