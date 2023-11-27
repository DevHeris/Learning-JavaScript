let d;

d = new Date(); //Gives current time and date

d = new Date(2023, 0); //Time of 12am(00:00:00) and the 0 means January
d = new Date(2023, 1); // 00:00:00, Feb 1, 2023
// (Months are zero based)
d = new Date(2023, 1, 14); // 00:00:00, Feb 14, 2023

d = new Date(2023, 1, 14, 13); // 13:00:00, Feb 14, 2023

d = new Date(2023, 1, 14, 13, 30); // 13:30:00, Feb 14, 2023

d = new Date(2023, 1, 14, 13, 30, 5); // 3:30:05, Feb 14, 2023

console.log(d); //formatted Gregorian date with TZ(Time Zone)
console.log(d.valueOf()); //Returns the timestamp of a sprcific date in milliseconds since Unix Epoch and this time stamp in this case is for 3:30:05, Feb 14, 2023



//NOTE: I haven't studied this next section yet

/* // creates dates from Unix Epoch timestamps
new Date(0); // 12:00 A.M., Jan 1, 1970 UTC
new Date(1000); // 12:00:01 A.M., Jan 1, 1970 UTC
new Date(1463443200000); // 5:00 P.M., May 16, 2016 UTC

// use negative dates to get dates prior to the Unix Epoch
new Date(-365 * 24 * 60 * 60 * 1000); // 12:00 A.M., Jan 1, 1969 UTC

// parsing date strings (defaults to local time)
new Date('June 14, 1903'); // 12:00 A.M., Jun 14, 1903 local time
new Date('June 14, 1903 GMT-0000'); // 12:00 A.M., Jun 14, 1903 UTC */

//Section ends


// YT video begins
d = new Date();

d = d.toString(); //Converts the date object into a string

d = new Date(2023, 6, 10, 12, 30, 0); //July 10 2023, 12:30:00
// If you dont want to use the one above you can pass in a string instead like this:
d = new Date('2023-03-12'); //We actually get the month of march here and not April //March 12, 2023

d = new Date('2023-03-12T02:23'); // Mar 12 2023 02:23:00
// or
d = new Date('03/12/2023 02:23'); // Mar 12 2023 02:23:00


// Time Stamps
//How to get the time stamp
d = Date.now(); //1694725811083

// To get the time stamp of a specific date
d = new Date(2022, 6, 10, 12, 30); //Jul 10 2022 12:30:00
d = d.getTime();//Gets the time stamp at that particular date you wrote above.1657445400000 
// or
d = d.valueOf(); //1657445400000 

//Getting Date object from a time stamp
d = new Date(1657445400000); //Gives the date and time information from that time stamp. Jul 10 2022 12:30:00

//If you want to get the time stamp in seconds and not milliseconds
d = Math.floor(Date.now() / 1000);

console.log(d, typeof d); 