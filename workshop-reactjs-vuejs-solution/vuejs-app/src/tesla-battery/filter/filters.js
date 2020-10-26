
export default {

    km(value) {
        return Math.round(value * 1.609344);
    },

    lowerCase(val) {
      if (typeof val === "string") {
        return val.toLowerCase();
      }
      return val;
    }
}