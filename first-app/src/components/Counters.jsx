import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {

    render() {

        const {reset, counters, handleDelete, handleIncrement} = this.props;
        return (<div>
            <button style={{fontSize: 20}} className="badge badge-primary btn-sm " onClick={reset}>Reset
            </button>
            {counters.map(counter =>
                <Counter key={counter.id}
                         counter={counter}
                         onDelete={handleDelete}
                         handleIncrement={handleIncrement}
                />)}
        </div>);
    }
}

export default Counters;