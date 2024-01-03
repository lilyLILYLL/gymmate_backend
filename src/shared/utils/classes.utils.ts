import { dateStrings, imgs, trainers, gymClassNames, scheduleArray } from "../constants";
import { ClassType } from "../types";

// Gennerate dummy data for classes
export const generateClassData = () => {
    const classes: ClassType[] = [];

    for (let i = 0; i < 30; i++) {
        const name = chooseRandomItem(gymClassNames);
        const img = chooseRandomItem(imgs);
        const trainer = chooseRandomItem(trainers);
        const level = chooseRandomItem(["Beginners", "Intermediate", "Advanced"]);
        const schedule = [
            chooseRandomItem(scheduleArray),
            chooseRandomItem(scheduleArray),
            chooseRandomItem(scheduleArray),
        ];
        const startDate = chooseRandomItem(dateStrings);
        let endDate = chooseRandomItem(dateStrings);
        while (new Date(startDate) > new Date(endDate)) {
            endDate = chooseRandomItem(dateStrings);
        }
        const newClass = { name, trainer, level, schedule, startDate, endDate, img };

        classes.push(newClass);
    }
    return classes;
};

// Choose a rundom item in an array
const chooseRandomItem = (items: any[]) => {
    return items[Math.floor(Math.random() * items.length)];
};
