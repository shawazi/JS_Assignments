const examResults = () => {
    const result = {};
    for (let i = 1; i <= 5; i++) {
        result[`Student-${i}`] = {};
        for (let j = 1; j <= 5; j++) {
            result[`Student-${i}`][`Lesson - ${j}`] = Math.ceil(Math.random() * 65 + 35);
        }
    }
    return result
}


console.log(examResults());