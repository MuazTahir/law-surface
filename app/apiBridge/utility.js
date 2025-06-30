import moment from "moment";

export default {
  // Format a time difference from either a date range or a manual string (e.g. "8:20")
  formatTimeDifference(startTime, endTime = null) {
    if (endTime) {
      const start = moment(startTime, "YYYY-MM-DD HH:mm");
      const end = moment(endTime, "YYYY-MM-DD HH:mm");

      if (!start.isValid() || !end.isValid()) return "Invalid Time";

      const duration = moment.duration(end.diff(start));
      const hours = String(duration.hours()).padStart(2, "0");
      const minutes = String(duration.minutes()).padStart(2, "0");

      return `${hours} Hours / ${minutes} minutes`;
    } else {
      if (typeof startTime !== "string" || !startTime.includes(":"))
        return "Invalid Time";

      const [hours, minutes] = startTime
        .split(":")
        .map((num) => String(parseInt(num)).padStart(2, "0"));
      return `${hours} Hours / ${minutes} minutes`;
    }
  },

  // convert data

 

  // Get formatted time difference as "hh:mm" between two dates
  getFormattedTimeDifference(date1, date2) {
    const d1 = moment(date1);
    const d2 = moment(date2);

    if (!d1.isValid() || !d2.isValid()) return "Invalid Time";

    const duration = moment.duration(d2.diff(d1));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  },

  // Format a timestamp into a human-readable full date and time string
  formatDate(timestamp) {
    const date = new Date(timestamp);
    if (isNaN(date.getTime())) return "Invalid Date";

    const options = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("en-US", options).replace(",", "");
  },

  // Convert a 24-hour string (e.g. "13:45") to 12-hour format (e.g. "1:45 PM")
  convertTo12Hour(timeStr) {
    if (typeof timeStr !== "string" || !timeStr.includes(":"))
      return "Invalid Time";

    let [hours, minutes] = timeStr.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) return "Invalid Time";

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
  },
};