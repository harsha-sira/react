import React, {Component} from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {

    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (counterId) => {
        console.log('Delete: ' + counterId);
        const arr = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters: arr});
    };

    handleIncrement = (counter) => {
        console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters: counters});
    };

    reset = () => {
        this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: this.state.counters});
    };

    render() {
        return (
            <React.Fragment>
                <Navbar noOfCounters = {this.state.counters.filter(c => c.value > 0).length} />
                <main className="container">
                    <Counters
                        counters = {this.state.counters}
                        handleDelete  = {this.handleDelete}
                        handleIncrement  = {this.handleIncrement}
                        reset = {this.reset}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
