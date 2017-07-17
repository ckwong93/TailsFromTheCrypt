import React, {Component} from 'react';
import sr from './scrollReveal.js'

export default class Cover extends Component {
  props: Props;

    componentDidMount = () => {
      const config_title = {
        origin: 'top',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      };
      const config_slogan = {
        origin: 'right',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
      const config_arr = {
        origin: 'bottom',
        duration: 1000,
        delay: 150,
        distance: '500px',
        scale: 1,
        easing: 'ease',
      }
// scrollreveal function to animate about section + columns
      sr.reveal('.title', config_title)
      sr.reveal('.slogan', config_slogan)
      // sr.reveal('.bottom-arr', config_arr)


}
    render() {
        return (
            <div>
                  <div className="main-title-container">
                        <div className="grid-row-item-row title-row">
                            <div className="grid-item title "><center>Tails from the Crypt</center></div>
                            <div className="grid-item slogan "><center>Unlimited Potential&nbsp;&nbsp;- &nbsp;&nbsp;Unparalleled Growth</center></div>
                            <div className="arr-body">
                                {/* <a id="#about" onClick={this.animateAndScroll}>
                                    <span className="bottom-arr"></span>
                                </a> */}
                            </div>
                        </div>
                  </div>
            </div>

        )
    }
}

// w3-animate-zoom
// w3-animate-opacity
