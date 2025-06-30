import moment from 'moment';
export default {
  getFormattedTimeDifference(date1, date2) {
    const duration = moment.duration(moment(date2).diff(moment(date1))); // Get time difference

    const hours = Math.floor(duration.asHours()); // Extract total hours
    const minutes = duration.minutes(); // Extract remaining minutes

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`; // Format as hh:mm
  }
};
