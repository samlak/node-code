const users =[{
    id: 1,
    name: 'Samlak',
    schoolId: 999
}, {
    id: 2,
    name: 'Rid',
    schoolId: 920
}];

const grades = [{
    id: 1,
    schoolId: 999,
    grade: 76
}, {
    id: 2,
    schoolId: 920,
    grade: 45
}, {
    id: 3,
    schoolId: 999,
    grade: 100
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id); 

        if(user){
            resolve(user);
        } else{
            reject(`Unable to fetch user with id of ${id}.`);
        }
    });
};


const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grades) => grades.schoolId === schoolId));
    });
    
};

const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempUser) => {
        user = tempUser
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0;
        if(grades.length > 0) {
            average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
        }
        return `${user.name} has a ${average}% in the class`;
    });
};

const getStatusAlt = async (userId) => {
    const user = await getUser(userId);
    const grades = await getGrades(user.schoolId);
    let average = 0;
    if(grades.length > 0) {
        average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
    }
    return `${user.name} has a ${average}% in the class`;
};
// console.log(getStatusAlt());
getStatusAlt(2).then((status) =>
    console.log(status)
).catch((e) => {
    console.log(e);
});

// getStatusAlt(1).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });

// getUser(1).then((user) => {
//     console.log(user);
// }).catch((e) => {
//     console.log(e);
// });

// getGrades(999).then((grades) => {
//     console.log(grades);
// }).catch((e) => {
//     console.log(e);
// });

// getStatus(72).then((status) => {
//     console.log(status);
// }).catch((e) => {
//     console.log(e);
// });