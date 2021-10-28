import Clazz from "./Clazz";
import Student from "./Student";

export default interface StudentMove {
  fromClazz: Clazz;
  toClazz: Clazz;
  student: Student;
}
