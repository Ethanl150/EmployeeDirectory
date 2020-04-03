import React from "react";
import axios from "axios";
import TableRow from "../TableRow/TableRow.js"
import Search from "../Search/Search.js"
import Container from "../Container/Container.js"
import "./Main.css"

class Main extends React.Component {
    state = {
        search: "",
        employees: [],
        AZ: ""
    }

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=100').then(response => {
            console.log(response.data.results)
            this.setState({ employees: response.data.results })
        })
    }

    inputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase()
        this.setState({
            search: searchTerm
        }, () => {
            console.log(this.state.search)
        })
    }

    handleClick = () => {
        if (!this.state.AZ) {
            this.setState({
                AZ: true
            })
            console.log(this.state.employees)
            this.state.employees.sort((a, b) => a.name.first.localeCompare(b.name.first));
        } else {
            this.setState({
                AZ: false
            })
            console.log(this.state.employees)
            this.state.employees.sort((a, b) => b.name.first.localeCompare(a.name.first));
        }
    }

    render() {
        return (
            <>
                <Search search={this.state.search} inputChange={this.inputChange} />
                <Container>
                    <table className="text-center">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th onClick={this.handleClick}><div className="name"><span>Name</span> <span class="AZ">{this.state.AZ === false ? `(Z-A)` : `(A-Z)`}</span></div></th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map(employee => (
                                employee.name.first.toLowerCase().includes(this.state.search) ?
                                    <TableRow
                                        key={employee.login.uuid}
                                        image={employee.picture.medium}
                                        name={`${employee.name.first} ${employee.name.last}`}
                                        number={employee.cell}
                                        email={employee.email}
                                        dob={employee.dob.date.substring(0, 10)}
                                    /> : null
                            ))}
                        </tbody>
                    </table>
                </Container>
            </>
        )
    }
}

export default Main;