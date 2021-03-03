// Клас - пацієнт
class Patient {

    // Конструктор класу
    constructor (name, age) {
    
        this.name = name;
        this.age = age;
    
        if (typeof name === 'undefined') { this.name = "Невідомий пацієнт"; }
    
    }
    
}

// Клас - лікар
class Doctor {

    constructor (name, age) {
    
        this.name = name;
        this.age = age;
    
        if (typeof name === 'undefined') { this.name = "Невідомий лікар"; }
    
    }
    
}
    
// Клас - лікарня
class Hospital {

    constructor (name, address) {
    
        this.name = name;
        this.address = address;
        this.doctors_list = [];
        this.patients_list = [];
    
        if (typeof name === 'undefined')    { this.name = "Невідома лікарня"; }
        if (typeof address === 'undefined') { this.address = "Невідомий адрес"; }
    
    }
    
}

// Список усіх лікарень
let global_hospitals_list = new Array();

// Знайти лікарню в колекції
exports.find_Hospital = (name, address) => {

    for (let hospital of global_hospitals_list) {

        if (name === hospital.name &&
            address === hospital.address) { return hospital; }

    }

    return -1;

}

// Додавання нової лікарні
exports.add_Hospital = (name, address) => {

    let hospital = new Hospital(name, address);
    global_hospitals_list.push(hospital);

    return hospital;

}

// Видалити лікарню з колекції
exports.remove_Hospital = (name, address) => {

    for (let id = 0; id < global_hospitals_list.length; id++) {

        let hospital = global_hospitals_list[id];

        if (hospital.name === name &&
            hospital.address === address) { global_hospitals_list.splice(id, 1);
                                            return 1; }

    }

    return -1;

}

// Редагувати лікарню в колекції
exports.edit_Hospital = (name, address, new_name, new_address) => {

    for (let id = 0; id < global_hospitals_list.length; id++) {

        let hospital = global_hospitals_list[id];

        if (hospital.name === name &&
            hospital.address === address) { global_hospitals_list[id].name = new_name;
                                            global_hospitals_list[id].address = new_address;
                                            return 1; }

    }

    return -1;

}

// Отримати список лікарень
exports.get_Hospitals_List = () => {

    console.log("\n" + "Список усіх лікарень:");

    for (let id = 0; id < global_hospitals_list.length; id++) {

        let hosp = global_hospitals_list[id];
        console.log(`Назва лікарні: ${hosp.name}, адреса лікарні: ${hosp.address}`);

    }

    console.log();
    
    return global_hospitals_list;

}

// Знайти лікаря в лікарні
const find_Doctor = (name, age, hospital) => {

    for (let id = 0; id < hospital.doctors_list.length; id++) {

        let doctor = hospital.doctors_list[id];

        if (name === doctor.name &&
            age === doctor.age) { return doctor; }

    }

    return -1;

}

// Знайти лікаря в лікарні
exports.find_Doctor = find_Doctor;

// Додавання нового лікаря
exports.add_Doctor = (name, age, hospital) => {

    let doctor = new Doctor(name, age);
    hospital.doctors_list.push(doctor);

    return doctor;

}

// Видалення лікаря з лікарні
exports.remove_Doctor = (name, age, hospital) => {

    let doctor = find_Doctor(name, age, hospital);

    if (doctor === -1) { return -1; }

    let id = hospital.doctors_list.indexOf(doctor);
    hospital.doctors_list.splice(id, 1);

    return 1;

}

// Редагувати лікаря в лікарні
exports.edit_Doctor = (name, age, hospital, new_name, new_age) => {

    let doctor = find_Doctor(name, age, hospital);

    if (doctor === -1) { return -1; }

    let id = hospital.doctors_list.indexOf(doctor);
    
    hospital.doctors_list[id].name = new_name;
    hospital.doctors_list[id].age = new_age;

    return 1;

}

// Отримати список лікарів у конкретній лікарні
exports.get_Doctors_List = (hospital) => {

    console.log("\n" + `Список усіх лікарів у лікарні ${hospital.name}:`);

    for (let id = 0; id < hospital.doctors_list.length; id++) {

        let doctor = hospital.doctors_list[id];
        console.log(`\tІм'я лікаря: ${doctor.name}, вік: ${doctor.age}`);

    }

    console.log();
    
    return hospital.doctors_list;

}

// Знайти пацієнта в лікарні
const find_Patient = (name, age, hospital) => {

    for (let id = 0; id < hospital.patients_list.length; id++) {

        let patient = hospital.patients_list[id];

        if (name === patient.name &&
            age === patient.age) { return patient; }

    }

    return -1;

}

// Знайти пацієнта в лікарні
exports.find_Patient = find_Patient;

// Додавання нового пацієнта
exports.add_Patient = (name, age, hospital) => {

    let patient = new Patient(name, age);
    hospital.patients_list.push(patient);

    return patient;

}

// Виписування пацієнта з лікарні
exports.remove_Patient = (name, age, hospital) => {

    let patient = find_Patient(name, age, hospital);

    if (patient === -1) { return -1; }

    let id = hospital.patients_list.indexOf(patient);
    hospital.patients_list.splice(id, 1);

    return 1;

}

// Редагувати пацієнта в лікарні
exports.edit_Patient = (name, age, hospital, new_name, new_age) => {

    let patient = find_Patient(name, age, hospital);

    if (patient === -1) { return -1; }

    let id = hospital.patients_list.indexOf(patient);
    
    hospital.patients_list[id].name = new_name;
    hospital.patients_list[id].age = new_age;

    return 1;

}

// Отримати список пацієнтів у конкретній лікарні
exports.get_Patients_List = (hospital) => {

    console.log("\n" + `Список усіх пацієнтів у лікарні ${hospital.name}:`);

    for (let id = 0; id < hospital.patients_list.length; id++) {

        let patient = hospital.patients_list[id];
        console.log(`\tІм'я пацієнта: ${patient.name}, вік: ${patient.age}`);

    }

    console.log();
    
    return hospital.patients_list;

}