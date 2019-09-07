import IParent from "./interface";
class Main implements IParent {
    public name: string;
    public class: string = "Class A";
    constructor(name) {
        this.name = name;
    }

    public printName = () => {
        return this.name;
    }

    public printClass = () => {
        return this.class;
    }
}

export default Main;
