import React, { PureComponent} from 'react';
import ClientTable from './ClientsTable'
import ClientAddForm from './ClientAddForm'

class ClientsContairer extends PureComponent{
    // constructor(props){
    //     super(props);
    // }
    render(){
        // const {clients,onDelClick,img}=this.props;
        return(
           <div>
               <ClientTable {...this.props}/>
               <ClientAddForm {...this.props}/>
           <div/>
       )
    }
}