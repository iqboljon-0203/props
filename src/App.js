import React,{Component} from  'react';


class App extends Component{
  render(){
    const {data,children}=this.props;
    return(
      <div>
        <h1>{data.id}.{data.name}-{data.age}</h1>
        {children}
      </div>
    )
  }
}

export default App;

