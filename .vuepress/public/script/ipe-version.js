!(function () {
  var devVer = '14.0.0-insider';
  var stableVer = '2.13.4-6';


  var ipeCheckVersion = (ver) => {
    switch (ver) {
      case 'd':
      case 'dev':
      case 'develop':
        return devVer;
      case 's':
      case 'stable':
      case 'normal':
        return stableVer;
      default:
        return null;
    }
  }
})();