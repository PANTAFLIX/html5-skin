/**
 * Enable animation after component mounts
 * Set animate state var 1ms after component mounts
 * animate state var used to add css class to element
 *
 * @mixin AnimateMixin
 * @fires startAnimation()
 * @this component using AnimateMixin
 */

var AnimateMixin = {
  getInitialState: function() {
    return {
      animate: false
    };
  },

  componentDidMount: function () {
    setTimeout(this.startAnimation, 1);
  },

  startAnimation: function () {
    this.setState({
      animate: true
    });
  }
};
module.exports = AnimateMixin;