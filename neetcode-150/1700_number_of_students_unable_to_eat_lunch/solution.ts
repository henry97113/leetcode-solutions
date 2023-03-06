function countStudents(students: number[], sandwiches: number[]): number {
  let circularCount = 0
  while (sandwiches.length > 0) {
    if (sandwiches[0] === students[0]) {
      sandwiches.shift()
      students.shift()
      circularCount = 0
    } else {
      const student = students.shift() ?? -1
      students.push(student)
      circularCount++
      if (circularCount === students.length) break
    }
  }
  return students.length
}
