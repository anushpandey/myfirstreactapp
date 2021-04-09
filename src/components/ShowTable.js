import React, { Component}from 'react'
import ReactTable from "react-table-6"  
import "react-table-6/react-table.css"

class ShowTable extends Component {
    state = {
        data : [],
        isLoading: false,
    }
    componentDidMount () {
        this.setState({isLoading: true})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({data: json, isLoading: false}))
    }
    render(){
        const columns = [
            {
                Header: 'UserId',
                accessor: 'userId',
            },
            {
                Header: 'ID',
                accessor: 'id',
            },
            {
                Header: 'Title',
                accessor: 'title',
            },
            {
                Header: 'Description',
                accessor: 'Description',
            },
        ]
        let showTable = true
        if (!this.state.data.length) {
            showTable = false
        }
        return(
            <div>
                {showTable && (
                    <ReactTable
                        data={this.state.data}
                        columns={columns}
                        loading={this.state.isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            
            </div>
        )
    }
}

export default ShowTable;