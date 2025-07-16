export interface User {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic?: string;
  commenting: boolean;
  isTeacher: boolean;
  darkTheme: boolean;
}