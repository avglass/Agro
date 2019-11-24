import React, { PureComponent } from 'react';
import store from './store';
import actions from './actions';

export const myContext = React.createContext();

export class ContextAppProvider extends PureComponent {
    constructor() {
        super();
        this.state = {
            value: store,
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
              {value => <Component {...props} context={value}/>}
          </myContext.Consumer>
      );
  };
}