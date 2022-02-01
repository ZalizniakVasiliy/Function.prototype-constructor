function Student(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.attendanceRaiting = new Array(10);
  this.attendanceIndex = 0;
  this.assessmentRaiting = new Array(10);
  this.assessmentIndex = 0;

  this.getAge = function () {
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearOfBirth;
    console.log(`Student ${firstName + ` ` + lastName} is ${age} years old`);
  };

  this.present = function () {
    if (this.attendanceRaiting.length > this.attendanceIndex) {
      this.attendanceRaiting[this.attendanceIndex] = true;
      this.attendanceIndex++;
      console.log(this.attendanceRaiting);
      return this.attendanceRaiting;
    }
    alert(`Attendance has reached its limit!`);
    throw new Error(`Attendance array is full!!!`);
  };

  this.absent = function () {
    if (this.attendanceRaiting.length > this.attendanceIndex) {
      this.attendanceRaiting[this.attendanceIndex] = false;
      this.attendanceIndex++;
      console.log(this.attendanceRaiting);
      return this.attendanceRaiting;
    }
    alert(`Attendance has reached its limit!`);
    throw new Error(`Attendance array is full!!!`);
  };

  this.getAverageAttendance = function () {
    const averageAttendance =
      this.attendanceRaiting
        .slice(0, this.attendanceIndex)
        .filter((theMostIndex) => theMostIndex).length / this.attendanceIndex;
    // console.log(`Current average attendance is ${averageAttendance}`);
    return averageAttendance;
  };

  this.mark = function () {
    const assessment = +prompt(
      `Rate the skills of current student from 0 to 10, please:`,
      0
    );
    if (
      assessment < 0 ||
      assessment > 10 ||
      typeof assessment !== "number" ||
      isNaN(assessment)
    ) {
      alert(`Enter the number from a range!`);
      throw new Error(`The value you entered is not correct!!!`);
    }
    if (this.assessmentRaiting.length > this.assessmentIndex) {
      this.assessmentRaiting[this.assessmentIndex] = assessment;
      this.assessmentIndex++;
      console.log(this.assessmentRaiting);
      return this.assessmentRaiting;
    }
    alert(`Possibility of getting new assessments has reached its limit!`);
    throw new Error(`The array of assessments is full!!!`);
  };

  this.getAverageMark = function () {
    const averageMark =
      this.assessmentRaiting.reduce((acc, singleMark) => {
        return acc + singleMark;
      }, 0) / this.assessmentRaiting.length;
    // console.log(`Current average mark is ${averageMark}`);
    return averageMark;
  };

  this.summary = function () {
    if (this.getAverageMark() < 9 && this.getAverageAttendance() < 0.9) {
      console.log(`Редиска`);
    } else if (this.getAverageMark() < 9 || this.getAverageAttendance() < 0.9) {
      console.log(`Норм, но можно лучше`);
    } else {
      console.log(`Ути какой молодчинка!`);
    }
  };
}

let student1 = new Student(`Vasia`, `Kotlin`, 1990);

student1.getAge(); //Student Vasia Kotlin is 32 years old

student1.present(); //[true, empty × 9]
student1.present();
student1.present();
student1.present();
student1.present(); //[true, true, true, true, true, empty × 5]
student1.present();
student1.present();
student1.present();
student1.present();
// student1.present(); //[true, true, true, true, true, true, true, true, true, true]
// student1.present(); //Uncaught Error: Attendance array is full!!!

student1.absent(); //[false, empty × 9]
// student1.absent();
// student1.absent();
// student1.absent();
// student1.absent(); //[false, false, false, false, false, empty × 5]
// student1.absent();
// student1.absent();
// student1.absent();
// student1.absent();
// student1.absent(); //[false, false, false, false, false, false, false, false, false, false]
// student1.absent(); //Uncaught Error: Attendance array is full!!!

student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();
student1.mark();

student1.getAverageAttendance();

student1.getAverageMark();

student1.summary();
