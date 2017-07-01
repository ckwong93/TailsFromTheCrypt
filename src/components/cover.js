import React, {Component} from 'react';

export default class Cover extends Component {


    render() {
        return (
            <div>
                  <div className="main-title-container">
                        <div className="grid-row-item-row title-row">
                            <div className="grid-item title w3-animate-zoom">Tails from the Crypt</div>
                            <div className="grid-item slogan w3-animate-opacity">Unlimited Potential&nbsp;&nbsp;- &nbsp;&nbsp;Unparalleled Growth</div>
                            <div className="arr-body">
                                <a id="#about" onClick={this.animateAndScroll}>
                                    <span className="bottom-arr"></span>
                                </a>
                            </div>
                        </div>
                  </div>
            </div>

        )
    }
}
