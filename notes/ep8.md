Class based components

import React from react
class (nameofclass) extends React.Component{

    render(){
        returns (peice of jsx)
    }

}

export default (nameofclass)

<nameofclass name={arnab samanta} />

#Recieving the props in class component

class (nameofclass) extends React.Component{
constructor(props){
super(props);//Recieving the props over here
}

    render(){
        returns( (peice of jsx)
    {this.props.name}//accesing the value of props

    )}}

H.W 1.why do we write super props?

#part 2
creating a usestate in class based components

constructor(props){
super (props);

    this.state={count:0,count2:2};

}

{this.state.count} //using the state varable

this.state is a big object which holds all the state variable.

Modyfing state varable in class cbased components

never directly update state variables in class based class components

this.setState({
count:this.state.count+1
})

this.setState can update two different state varable at once we dont have to redeclare

Part 4
lifecycle(loading) methods

How the class based component is loaded in react

componentDidMount()//it is called like useeffect it will call after the full rendering of full class

componentDidMount() it is used to make ap calls
like in useeffect

In case of two child render

<src link="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">React lifecycle diagram (project.wojtek.com)</src>
