

function generateCard(employee){
  // i need a template to

  // should put in name
  // id
  // email

  // special attr based on role


  let specialAttribute = "";

  if(employee.getRole() === 'Manager'){
      specialAttribute = `<li>Office No: ${employee.getOfficeNumber()}</li>`;
  }

  return `
<div class="card col-4">
    
    <div class="card-body">
    <h4 class="card-title">Marc </h4>
    <p class="card-text">
        
        <ul>

        <!-- id -->

        <!-- role -->

        <!-- email -->

        <!-- special attr -->
        <li>ID: ${ employee.getId() } </li>
        <li>Role: ${employee.getRole()} </li>
        <li>Email: ${employee.getEmail() } </li>

        ${ specialAttribute }

        </ul>


    </p>
    </div>
</div>    
    
`;
}



function generateHtml(employees){
    // employee --- array

    const cards = [];
    // loop thru emps
    for (let index = 0; index < employees.length; index++) {
        const employee = employees[index];
        
        // for each , generate a card
        const card = generateCard(employee)
        cards.push(card)
    }
    
    
    // combine all the cards into a big string
    const joined = cards.join("");

    // read template.html

    // replace {{ body }} with joined

    // return the whole html


}

module.exports = generateHtml;