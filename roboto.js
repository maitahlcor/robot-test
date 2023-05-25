function createRobot(coordinates, direction) {
    let [x, y] = coordinates
    let orientation = direction 
  
    return {
      getPosition: () => {
        return { coordinates: [x, y], orientation }
      },
      advance: ( ) => {
        if (coordinates[0]<0 || coordinates[0]>10 || coordinates[1]<0 || coordinates[1]>10){
          console.log ("Invalid coordinates")
          return 
        }
        console.log("advance" + coordinates + orientation)
       try {
        switch (orientation) {
          case "North":
              coordinates[1]= coordinates[1] + 1
            break
          case "South":
              coordinates[1]= coordinates[1] - 1
            break
          case "East":
              coordinates[0]= coordinates[0] + 1
            break
          case "West":
              coordinates[0]= coordinates[0] -1
            break
        }
        if (coordinates[0]<0 || coordinates[0]>10 || coordinates[1]<0 || coordinates[1]>10){
          console.log ("Invalid coordinates")
          return
        }
        console.log("advanzo a" + coordinates + orientation )
        return { coordinates: coordinates, orientation }
       }catch (e) {
          console.log ("error en advance "+ e) 
       }
        // función para avanzar
      },
      turnRight: () => {
        console.log("va a girar a la derecha desde " + coordinates + orientation)
        let moveTo = orientation
        switch(orientation) {
          case "North":
            moveTo = "East"
          break
          case "East":
            moveTo = "South"
          break
          case "South":
            moveTo = "West"
          break
          case "West":
            moveTo = "North"
          break
        }
        console.log("Giro a la derecha y esta en" + coordinates + moveTo)
        orientation = moveTo;
        return orientation
        // función para girar a la derecha
      },
      turnLeft: () => {
        console.log("va a girar a la izquierda desde " + coordinates + orientation)
        switch(orientation) {
          case "North":
            orientation = "West"
          break
          case "West":
            orientation = "South"
          break
          case "South":
            orientation = "East"
          break
          case "East":
              orientation = "North"
          break        
        }
        console.log("Giro a la izquierda y esta en" + coordinates + orientation)
        return  orientation 
        // función para girar a la izquierda
      },
      instructions: (stringInstructions) => {
        console.log(coordinates, orientation)
        // función para recibir una serie de instrucciones Ejm: "RAALAL"
        // En este metodo se va crear 
       // var instructionsArray = stringInstructions.split("")
       const instructionsArray = [...stringInstructions]
          instructionsArray.forEach(element => {
          console.log(element)
          switch(element){
            case "R":
              createRobot(coordinates, orientation).turnRight( ) 
            break
            case "L":
              createRobot(coordinates, orientation).turnLeft( ) 
            break
            case "A":
                createRobot(coordinates, orientation).advance( ) 
            break
          }
         
        });
        return  //console.log ({ coordinates: coordinates, orientation: orientation })
      }   
    }
  }
  
  module.exports = {createRobot}
  
  console.log(createRobot([2,3], "North").instructions( "RAALAL"));