import main from "./index";
class Class1 extends main {
    private dept: string;
    constructor(dept) {
        super("Piyush");
        this.dept = dept;
    }

    public printDept = () => {
        return this.dept;
    }
}

export default Class1;
