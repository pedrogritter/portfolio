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

}