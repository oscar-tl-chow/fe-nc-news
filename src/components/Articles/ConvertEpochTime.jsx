import

function convertEpoch(value) {
    if (!value) {
      return ''
    }
    const time = new Date(Number(value));
    if (isNaN(time.valueOf())) {
      return '';
    }
    return time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
  }