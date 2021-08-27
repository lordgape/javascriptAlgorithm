const listOfWorkingHr = {
    monday: [
      {
        type: "close",
        value: 75600,
      },
      {
        type: "open",
        value: 43200,
      },
      {
        type: "close",
        value: 75600,
      },
    ],
    tuesday: [
      {
        type: "open",
        value: 36000,
      },
      {
        type: "close",
        value: 64800,
      },
    ],
    wednesday: [],
    thursday: [
      {
        type: "open",
        value: 36000,
      },
      {
        type: "close",
        value: 64800,
      },
    ],
    friday: [
      {
        type: "open",
        value: 36000,
      },
    ],
    saturday: [
      {
        type: "close",
        value: 3600,
      },
      {
        type: "open",
        value: 36000,
      },
    ],
    sunday: [
      {
        type: "close",
        value: 3600,
      },
      {
        type: "open",
        value: 43200,
      },
      {
        type: "close",
        value: 75600,
      },
      {
        type: "open",
        value: 43200,
      },
    ],
  };
  
  const openingHours = (listOfWorkingHr) => {
    const daysOfTheWeek = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    for (let i = 0; i < 7; i++) {
      const dayOfWeek = daysOfTheWeek[i];
      let businessDayOpeningHours = listOfWorkingHr[dayOfWeek];
  
      if (
        businessDayOpeningHours.length > 1 &&
        businessDayOpeningHours.length % 2 == 0 &&
        businessDayOpeningHours[0].type == "open"
      ) {
        printBusinessHour(dayOfWeek, businessDayOpeningHours);
      }
  
      if (businessDayOpeningHours.length == 0 ) {
        printCloseBusinessDay(dayOfWeek);
      }
      
      if (businessDayOpeningHours.length == 1 && businessDayOpeningHours[0].type == "close" && dayOfWeek == "monday" ) {
        printCloseBusinessDay(dayOfWeek);
      }
      if (businessDayOpeningHours.length > 1 && businessDayOpeningHours[0].type == "close" && dayOfWeek == "monday" ) {
        printBusinessHour(dayOfWeek,businessDayOpeningHours.slice(1));
      }
  
      if (
        businessDayOpeningHours.length > 0 &&
        businessDayOpeningHours.length % 2 != 0 &&
        businessDayOpeningHours[0].type == "open" &&
        dayOfWeek != "sunday"
      ) {
        const nextWorkingDay = daysOfTheWeek[i + 1];
        const nextBusinessHour = listOfWorkingHr[nextWorkingDay];
        businessDayOpeningHours[businessDayOpeningHours.length] =
          nextBusinessHour[0];
        nextBusinessHour.splice(0, 1);
        printBusinessHour(dayOfWeek, businessDayOpeningHours);
      }
  
      if (
        businessDayOpeningHours.length > 0 &&
        businessDayOpeningHours.length % 2 != 0 &&
        businessDayOpeningHours[0].type == "open" &&
        dayOfWeek == "sunday"
      ) {
        const nextWorkingDay = daysOfTheWeek[0];
        const nextBusinessHour = listOfWorkingHr[nextWorkingDay];
        businessDayOpeningHours[businessDayOpeningHours.length] =
          nextBusinessHour[0];
        nextBusinessHour.splice(0, 1);
        printBusinessHour(dayOfWeek, businessDayOpeningHours);
      }
    }
  };
  
  const printBusinessHour = (dayOfWeek, listOfBusinessHour) => {
    process.stdout.write(dayOfWeek + ":");
    for (const hour of listOfBusinessHour) {
      process.stdout.write(hour.type + " ");
      process.stdout.write(new Date(hour.value).toLocaleTimeString() + ", ");
    }
    console.log(""); // Add a new Line
  };
  
  const printCloseBusinessDay = (dayOfWeek) => {
    console.log(dayOfWeek + ":", "Closed");
  };
  
  console.log(openingHours(listOfWorkingHr));
  