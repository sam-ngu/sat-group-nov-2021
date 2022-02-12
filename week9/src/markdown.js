function generateReadme(response){

    return `
# ${response.name}

![License](https://img.shields.io/badge/License-${response.license.replace(/-/g, '--')}-blue)

${response.desc}

## Table of Contents

1.  [Usage](#usage)
2.  [Goal and Philosophy](#goal)
3.  [Licese](#license)


## Goal
I'm philosophical person.

This app is bloody good.



## License
THis project is created under the ${response.license} licence
    
`

}


module.exports = generateReadme;