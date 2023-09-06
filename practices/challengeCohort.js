const cohort = {
    name: 'May2022',
    id: 1234,
    students: ['Dan', 'Shannon', 'Ani', 'Janna'],

    cohortInfo: () => {
        return `<${cohort.id}> - <${cohort.name}> - <${cohort.students.length}> students in this cohort`
    }
    
};

console.log(cohort.cohortInfo());