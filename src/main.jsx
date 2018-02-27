import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

import Photo from './photo.jsx';

document.addEventListener('DOMContentLoaded', function(){


    class Main extends React.Component {


     constructor(props){

        super(props);
        this.state = {

        textpage: 'xxx',

        }

    }


	render(){

            return  <main>
                      <div className="background-start-page"></div>
                        <div className="content">

                              {this.props.children}

                        </div>
                    </main>



}

}


    class App extends React.Component {

        render(){

            return <Router history={hashHistory}>
                        <Route path='/' component={Main} >
                          <IndexRoute component={Photo} />
                        </Route>
                   </Router>;

        }


    }

	ReactDOM.render(

	<App />,
	document.getElementById('app')


	);

});
