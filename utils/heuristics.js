function isAlreadyDark() {
    const bg = getComputedStyle(document.body).backgroundColor;
    return bg && bg.match(/rgb\((\d+), (\d+), (\d+)\)/)?.[1] < 100;
  }
  