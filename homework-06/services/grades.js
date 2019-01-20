class GradesService {
    constructor() {
        this.grades = [];
    }

    add(gradeObj) {
        const prevLength = this.grades.length;
        this.grades.push(gradeObj);
        if(this.grades.length > prevLength) {
           return true; 
        } else {
            return false
        }
    }

    get(id) {
        let gradeObj = {};
        this.grades.forEach((grade) => {
            if(grade.id == id) {
                gradeObj = grade;
            }
        });
        return gradeObj; //this.grades[0];
    }

    getAll() {
        return this.grades;
    }

    update(id, gradeObj) {
        let gradeUpdated = false;
        this.grades.forEach((grade, index) => {
            if(grade.id = id) {
                this.grades[index] = gradeObj;
                gradeUpdated = true;
            }
        });
        return gradeUpdated;
    }

    delete(id) {
        let gradeIndexToDelet = -1;
        this.grades.forEach((grade, index) => {
            if(grade.id == id) {
                gradeIndexToDelet = index;
            }
        });
        if(gradeIndexToDelet !== -1) {
            this.grades.splice(gradeIndexToDelet, 1);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = GradesService;