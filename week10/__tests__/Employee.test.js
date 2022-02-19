const Employee = require('./../src/employee/employee');

// section
describe('Employee class test', () => {



    // can instantiated
    it('can be instantiated', () => {

        const employee = new Employee("sam", 123, "sam@sam.com")
        expect(employee).toBeInstanceOf(Employee);        
        
    })

    // take in the name arg, and set as property
    it('can set a name property in the constructor', () => {
        const name = 'sam';
        const employee = new Employee(name, 12, "sam@sam.com");
        expect(employee.name).toBe(name);
    })

    // take in the id arg, and set as property
    it("can set a id property in the constructor", () => {
        const id = "123";
        const employee = new Employee('sam', id, "sam@sam.com");
        expect(employee.id).toBe(id);
    });
    // take in the email arg, and set as property
    it("can set a email property in the constructor", () => {
        const email = "123@123";
        const employee = new Employee("sam", '123', email);
        expect(employee.email).toBe(email);
    });

    it('can get the employee name by calling getName()', () => {        
        // source of truth
        const name = 'sam';

        // replicate
        const employee = new Employee(name, 12, 'sam@sam.com');

        const result = employee.getName();

        expect(result).toBe(name);
    });


    // test getEmail()
    it("can get the employee email by calling getEmail()", () => {
        // source of truth
        const truth = "sam@email.com";

        // replicate
        const employee = new Employee("sam", 12, truth);

        const result = employee.getEmail();

        expect(result).toBe(truth);
    });

    // test getId()
    it("can get the employee id by calling getId()", () => {
        // source of truth
        const truth = "123";

        // replicate
        const employee = new Employee("sam", truth, 'sam@email.com');

        const result = employee.getId();

        expect(result).toBe(truth);
    });

    // test getRole()
    it("can get the employee role by calling getRole()", () => {
        // source of truth
        const truth = "Employee";

        // replicate
        const employee = new Employee("sam", 12, 'aaa@aaa.com');

        const result = employee.getRole();

        expect(result).toBe(truth);
    });


})
