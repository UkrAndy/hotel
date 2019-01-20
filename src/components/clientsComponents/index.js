import React, {PureComponent} from 'react';
import ClientTable from './ClientsTable'
import ClientAddForm from './ClientAddForm'

class ClientsContainer extends PureComponent {
    render() {
        return (
            <div>
                <ClientTable {...this.props}/>
                <ClientAddForm {...this.props}/>
            </div>
        )
    }
}
export default ClientsContainer;