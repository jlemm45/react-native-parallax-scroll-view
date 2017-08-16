const StyleSheet = require('react-native').StyleSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  colorBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent'
  },
  parallaxHeaderContainer: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  parallaxHeader: {
    backgroundColor: 'transparent',
    overflow: 'hidden'
  },
  backgroundImage: {
    position: 'absolute',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    top: 0
  },
  stickyHeader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0
  },
  scrollView: {
    backgroundColor: 'transparent'
  }
});

module.exports = styles;
