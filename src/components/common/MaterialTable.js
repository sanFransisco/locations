import React from 'react';
import Table from 'react-bootstrap/Table';
//represent 
export class MaterialTable extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps() {
        ;
    }
    render() {
        return (<div style={{ maxHeight: '' }}>
            <Table variant="dark" style={{ height: 'inherit' }}>
                <thead>
                    {this.props.thead}
                </thead>
                <tbody>
                    {this.props.trows}
                </tbody>
            </Table>
        </div>)
    }
}

