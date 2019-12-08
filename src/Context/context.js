import React, { PureComponent } from 'react';
import store from './store';
import actions from './boundActions';


export const myContext = React.createContext();

export class Context extends PureComponent {
    constructor() {
        super();
        this.state ={
          values: store,
          actions: actions,
        } 
      }

      render() {
          return (
            <myContext.Provider value={this.state}>
                {this.props.children}
            </myContext.Provider>
        )
      }
}

export function WithContext(Component) {
  return function WrapperComponent(props) {

      return (
          <myContext.Consumer>
              {value => <Component {...props} values={value.values} actions={value.actions}/>}
          </myContext.Consumer>
      );
  };
}

