export default function sortBySalary(employees) {
    return employees.sort((a, b) => {
      if (a.salary !== b.salary) {
        return a.salary - b.salary;
      } else {
        return a.id - b.id;
      }
    });
  }