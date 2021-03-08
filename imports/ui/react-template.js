import ReactContainer from './recat-components/ReactContainer.jsx';
import './react-template.html';

Template.ReactContainer.helpers({
    reactContainer: function () {
      return ReactContainer;
    },
});