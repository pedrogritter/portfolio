export class Utils {

public static isDesktop() {
    return window.innerWidth >= 1024;
  }

  public static isMobile() {
    return window.innerWidth <= 1024;
  }

public static isSmallMobile() {
    return window.innerWidth <= 768;
  }


  public static BlockDocumentScroll = () => {
    // <body> for chrome and others
    document.body.classList.add('no-scroll');
    // <html> for firefox and safari
    document.documentElement.classList.add('no-scroll');
  }
  
  public static ReleaseDocumentScroll = () =>  {
    // <body> for chrome and others
    document.body.classList.remove('no-scroll');
    // <html> for firefox and safari
    document.documentElement.classList.remove('no-scroll');
  }
  

}